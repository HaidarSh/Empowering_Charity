const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { dg as ADMIN_ROLE, a1 as ContractWrapper, v as AbiSchema, dh as SplitsContractSchema, a2 as ContractEncoder, B as BigNumber, X as resolveAddress, c as __vitePreload, ai as Contract, bf as fetchCurrencyValue, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
const _Split = class _Split {
  constructor(network, address, storage) {
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Withdraw Funds
     * @remarks Triggers a transfer to account of the amount of native currency they are owed.
     *
     * @example
     * ```javascript
     * // the wallet address that wants to withdraw their funds
     * const walletAddress = "{{wallet_address}}"
     * await contract.withdraw(walletAddress);
     * ```
     *
     * @param walletAddress - The address to distributes the amount to
     */
    __publicField(this, "withdraw", /* @__PURE__ */ buildTransactionFunction(async (walletAddress) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "release(address)",
        args: [await resolveAddress(walletAddress)]
      });
    }));
    /**
     * Triggers a transfer to account of the amount of a given currency they are owed.
     *
     * @param walletAddress - The address to distributes the amount to
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    __publicField(this, "withdrawToken", /* @__PURE__ */ buildTransactionFunction(async (walletAddress, tokenAddress) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "release(address,address)",
        args: await Promise.all([resolveAddress(tokenAddress), resolveAddress(walletAddress)])
      });
    }));
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * await contract.distribute();
     * ```
     */
    __publicField(this, "distribute", /* @__PURE__ */ buildTransactionFunction(async () => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "distribute()",
        args: []
      });
    }));
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * // The address of the currency to distribute funds
     * const tokenAddress = "0x..."
     * await contract.distributeToken(tokenAddress);
     * ```
     *
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    __publicField(this, "distributeToken", /* @__PURE__ */ buildTransactionFunction(async (tokenAddress) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "distribute(address)",
        args: [await resolveAddress(tokenAddress)]
      });
    }));
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : void 0;
    let chainId = arguments.length > 5 ? arguments[5] : void 0;
    let contractWrapper = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, SplitsContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _Split.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
  }
  /**
   * @internal
   */
  get chainId() {
    return this._chainId;
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/
  /**
   * Get Recipients of this splits contract
   *
   * @remarks Get the data about the shares of every split recipient on the contract
   *
   * @example
   * ```javascript
   * const recipients = await contract.getAllRecipients();
   * console.log(recipients);
   * ```
   */
  async getAllRecipients() {
    const recipients = [];
    let index = BigNumber.from(0);
    const totalRecipients = await this.contractWrapper.read("payeeCount", []);
    while (index.lt(totalRecipients)) {
      try {
        const recipientAddress = await this.contractWrapper.read("payee", [index]);
        recipients.push(await this.getRecipientSplitPercentage(recipientAddress));
        index = index.add(1);
      } catch (err) {
        if ("method" in err && err["method"].toLowerCase().includes("payee(uint256)")) {
          break;
        } else {
          throw err;
        }
      }
    }
    return recipients;
  }
  /**
   * Returns all the recipients and their balances in the native currency.
   *
   * @returns A map of recipient addresses to their balances in the native currency.
   */
  async balanceOfAllRecipients() {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOf(recipient.address);
    }
    return balances;
  }
  /**
   * Returns all the recipients and their balances in a non-native currency.
   *
   * @param tokenAddress - The address of the currency to check the balances in.
   * @returns A map of recipient addresses to their balances in the specified currency.
   */
  async balanceOfTokenAllRecipients(tokenAddress) {
    const [resolvedToken, recipients] = await Promise.all([resolveAddress(tokenAddress), this.getAllRecipients()]);
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOfToken(recipient.address, resolvedToken);
    }
    return balances;
  }
  /**
   * Get Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * const funds = await contract.balanceOf(address);
   * console.log(funds);
   * ```
   */
  async balanceOf(address) {
    const [resolvedAddress, walletBalance, totalReleased] = await Promise.all([resolveAddress(address), this.contractWrapper.getProvider().getBalance(this.getAddress()), this.contractWrapper.read("totalReleased", [])]);
    const totalReceived = walletBalance.add(totalReleased);
    return this._pendingPayment(resolvedAddress, totalReceived, await this.contractWrapper.read("released", [resolvedAddress]));
  }
  /**
   * Get non-native Token Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * // The address of the currency to check the contracts funds of
   * const tokenAddress = "0x..."
   * const funds = await contract.balanceOfToken(address, tokenAddress);
   * console.log(funds);
   * ```
   */
  async balanceOfToken(walletAddress, tokenAddress) {
    const [resolvedToken, resolvedWallet] = await Promise.all([resolveAddress(tokenAddress), resolveAddress(walletAddress)]);
    const ERC20Abi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ec);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const erc20 = new Contract(resolvedToken, ERC20Abi, this.contractWrapper.getProvider());
    const [walletBalance, totalReleased, alreadyReleased] = await Promise.all([erc20.balanceOf(this.getAddress()), this.contractWrapper.read("totalReleased", [resolvedToken]), this.contractWrapper.read("released", [resolvedToken, resolvedWallet])]);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(resolvedWallet, totalReceived, alreadyReleased);
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedToken, value);
  }
  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const [resolvedAddress, totalShares, walletsShares] = await Promise.all([resolveAddress(address), this.contractWrapper.read("totalShares", []), this.contractWrapper.read("shares", [address])]);
    return {
      address: resolvedAddress,
      splitPercentage: walletsShares.mul(BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const [resolvedAddress, totalShares] = await Promise.all([resolveAddress(address), this.contractWrapper.read("totalShares", [])]);
    const addressReceived = totalReceived.mul(await this.contractWrapper.read("shares", [resolvedAddress]));
    const totalRoyaltyAvailable = addressReceived.div(totalShares);
    return totalRoyaltyAvailable.sub(alreadyReleased);
  }
  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }
  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
};
__publicField(_Split, "contractRoles", ADMIN_ROLE);
let Split = _Split;
export {
  Split
};
