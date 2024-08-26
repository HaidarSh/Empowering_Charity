import { C as Connector, _ as _defineProperty, cw as isZkSyncChain, cx as ENTRYPOINT_ADDRESS, av as Signer, ax as utils, B as BigNumber, bS as arrayify, cy as serialize, a as getAddress, cz as splitSignature, b5 as stripZeros, bF as hexlify, cA as hexConcat, cB as encode } from "./index-R4o_uq0C.js";
import { H as HttpRpcClient } from "./http-rpc-client-0a079e80.browser.esm-4jX6TQ2E.js";
const DEFAULT_GAS_PER_PUBDATA_LIMIT = 5e4;
const EIP712_TX_TYPE = 113;
const EIP712_TYPES = {
  Transaction: [{
    name: "txType",
    type: "uint256"
  }, {
    name: "from",
    type: "uint256"
  }, {
    name: "to",
    type: "uint256"
  }, {
    name: "gasLimit",
    type: "uint256"
  }, {
    name: "gasPerPubdataByteLimit",
    type: "uint256"
  }, {
    name: "maxFeePerGas",
    type: "uint256"
  }, {
    name: "maxPriorityFeePerGas",
    type: "uint256"
  }, {
    name: "paymaster",
    type: "uint256"
  }, {
    name: "nonce",
    type: "uint256"
  }, {
    name: "value",
    type: "uint256"
  }, {
    name: "data",
    type: "bytes"
  }, {
    name: "factoryDeps",
    type: "bytes32[]"
  }, {
    name: "paymasterInput",
    type: "bytes"
  }]
};
class ZkWrappedSigner extends Signer {
  constructor(signer, httpRpcClient) {
    super();
    this.signer = signer;
    utils.defineReadOnly(this, "provider", signer.provider);
    this.httpRpcClient = httpRpcClient;
  }
  async getAddress() {
    return await this.signer.getAddress();
  }
  async signMessage(message) {
    return await this.signer.signMessage(message);
  }
  async signTransaction(transaction) {
    return await this.signer.signTransaction(transaction);
  }
  connect(provider) {
    return new ZkWrappedSigner(this.signer.connect(provider), this.httpRpcClient);
  }
  _signTypedData(domain, types, value) {
    return this.signer._signTypedData(domain, types, value);
  }
  async sendTransaction(transaction) {
    return await this.sendZkSyncTransaction(transaction);
  }
  async sendZkSyncTransaction(_transaction) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let transaction = await this.populateTransaction(_transaction);
    if (!transaction.chainId) {
      throw new Error("ChainId is required to send a ZkSync transaction");
    }
    if (!this.provider) {
      throw new Error("Provider is required to send a ZkSync transaction");
    }
    const address = await this.getAddress();
    const gasLimit = BigNumber.from(transaction.gasLimit || await this.provider.estimateGas(transaction)).mul(3);
    const gasPrice = BigNumber.from(transaction.gasPrice || await this.provider.getGasPrice()).mul(2);
    if (!transaction.maxFeePerGas) {
      transaction.maxFeePerGas = gasPrice;
    } else {
      transaction.maxFeePerGas = transaction.maxFeePerGas.mul(2);
    }
    if (!transaction.maxPriorityFeePerGas) {
      transaction.maxPriorityFeePerGas = gasPrice;
    } else {
      transaction.maxPriorityFeePerGas = transaction.maxPriorityFeePerGas.mul(2);
    }
    transaction = {
      ...transaction,
      from: address,
      gasLimit,
      gasPrice,
      chainId: (await this.provider.getNetwork()).chainId,
      nonce: await this.provider.getTransactionCount(address),
      type: 113,
      value: BigInt(0)
    };
    const pmDataResult = await ((_a = this.httpRpcClient) == null ? void 0 : _a.zkPaymasterData(transaction));
    transaction.customData = {
      gasPerPubdata: DEFAULT_GAS_PER_PUBDATA_LIMIT,
      factoryDeps: [],
      paymasterParams: {
        paymaster: pmDataResult.paymaster,
        paymasterInput: pmDataResult.paymasterInput
      }
    };
    const eip712tx = {
      txType: EIP712_TX_TYPE,
      from: BigInt(transaction.from || await this.getAddress()).toString(),
      to: BigInt(transaction.to || "0x0").toString(),
      gasLimit: transaction.gasLimit ? Number(transaction.gasLimit) : 0,
      gasPerPubdataByteLimit: DEFAULT_GAS_PER_PUBDATA_LIMIT,
      maxFeePerGas: BigNumber.from(transaction.maxFeePerGas).toNumber(),
      maxPriorityFeePerGas: BigNumber.from(transaction.maxPriorityFeePerGas).toNumber(),
      paymaster: BigInt(pmDataResult.paymaster).toString(),
      nonce: BigNumber.from(transaction.nonce).toNumber(),
      value: BigNumber.from(transaction.value).toNumber(),
      data: transaction.data || "0x",
      factoryDeps: [],
      paymasterInput: arrayify(pmDataResult.paymasterInput)
    };
    const signature = await this._signTypedData({
      name: "zkSync",
      version: "2",
      chainId: transaction.chainId
    }, EIP712_TYPES, eip712tx);
    const serializedTx = this.serialize(transaction, signature);
    const zkSignedTx = {
      from: ((_b = transaction.from) == null ? void 0 : _b.toString()) || await this.getAddress(),
      to: ((_c = transaction.to) == null ? void 0 : _c.toString()) || "",
      gas: ((_d = transaction.gasLimit) == null ? void 0 : _d.toString()) || "",
      maxFeePerGas: ((_e = transaction.maxFeePerGas) == null ? void 0 : _e.toString()) || "0",
      maxPriorityFeePerGas: ((_f = transaction.maxPriorityFeePerGas) == null ? void 0 : _f.toString()) || "0",
      signedTransaction: serializedTx,
      paymaster: pmDataResult.paymaster
    };
    const broadcastResult = await ((_g = this.httpRpcClient) == null ? void 0 : _g.zkBroadcastTransaction(zkSignedTx));
    const hash = broadcastResult.transactionHash;
    return await ((_h = this.provider) == null ? void 0 : _h.getTransaction(hash));
  }
  serialize(transaction, signature) {
    if (!transaction.customData && transaction.type !== EIP712_TX_TYPE) {
      return serialize(transaction, signature);
    }
    if (!transaction.chainId) {
      throw Error("Transaction chainId isn't set!");
    }
    function formatNumber(value, name) {
      const result = stripZeros(BigNumber.from(value).toHexString());
      if (result.length > 32) {
        throw new Error(`Invalid length for ${name}!`);
      }
      return result;
    }
    if (!transaction.from) {
      throw new Error("Explicitly providing `from` field is required for EIP712 transactions!");
    }
    const from = transaction.from;
    const meta = transaction.customData ?? {};
    const maxFeePerGas = transaction.maxFeePerGas || transaction.gasPrice || 0;
    const maxPriorityFeePerGas = transaction.maxPriorityFeePerGas || maxFeePerGas;
    const fields = [formatNumber(transaction.nonce || 0, "nonce"), formatNumber(maxPriorityFeePerGas, "maxPriorityFeePerGas"), formatNumber(maxFeePerGas, "maxFeePerGas"), formatNumber(transaction.gasLimit || 0, "gasLimit"), transaction.to ? getAddress(transaction.to) : "0x", formatNumber(transaction.value || 0, "value"), transaction.data || "0x"];
    if (signature) {
      const sig = splitSignature(signature);
      fields.push(formatNumber(sig.recoveryParam, "recoveryParam"));
      fields.push(stripZeros(sig.r));
      fields.push(stripZeros(sig.s));
    } else {
      fields.push(formatNumber(transaction.chainId, "chainId"));
      fields.push("0x");
      fields.push("0x");
    }
    fields.push(formatNumber(transaction.chainId, "chainId"));
    fields.push(getAddress(from));
    fields.push(formatNumber(meta.gasPerPubdata || DEFAULT_GAS_PER_PUBDATA_LIMIT, "gasPerPubdata"));
    fields.push((meta.factoryDeps ?? []).map((dep) => hexlify(dep)));
    if (meta.customSignature && arrayify(meta.customSignature).length === 0) {
      throw new Error("Empty signatures are not supported!");
    }
    fields.push(meta.customSignature || "0x");
    if (meta.paymasterParams) {
      fields.push([meta.paymasterParams.paymaster, hexlify(meta.paymasterParams.paymasterInput)]);
    } else {
      fields.push([]);
    }
    return hexConcat([[EIP712_TX_TYPE], encode(fields)]);
  }
}
class ZkSyncConnector extends Connector {
  constructor(config) {
    super();
    _defineProperty(this, "chainId", 1);
    this.config = config;
  }
  async connect(args) {
    this.personalWallet = args.personalWallet;
    this.chainId = await (await this.personalWallet.getSigner()).getChainId();
    if (!await isZkSyncChain(this.chainId)) {
      throw new Error("Invalid zksync chain id");
    }
    const bundlerUrl = this.config.bundlerUrl || `https://${this.chainId}.bundler.thirdweb.com`;
    const entryPointAddress = this.config.entryPointAddress || ENTRYPOINT_ADDRESS;
    this.httpRpcClient = new HttpRpcClient(bundlerUrl, entryPointAddress, this.chainId, this.config.clientId, this.config.secretKey);
    return this.getAddress();
  }
  disconnect() {
    throw new Error("Method not implemented.");
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }
  async getSigner() {
    if (!this.personalWallet) {
      throw new Error("Wallet not connected");
    }
    return new ZkWrappedSigner(await this.personalWallet.getSigner(), this.httpRpcClient);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  switchChain(chainId) {
    throw new Error("Method not implemented.");
  }
  isConnected() {
    return Promise.resolve(!!this.personalWallet);
  }
  setupListeners() {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateChains(chains) {
    throw new Error("Method not implemented.");
  }
  async getProvider() {
    if (!this.getSigner()) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    if (!signer.provider) {
      throw new Error("Provider not found");
    }
    return signer.provider;
  }
}
export {
  ZkSyncConnector
};
