import { C as Connector, _ as _defineProperty, g as getChainProvider, n as normalizeChainId } from "./index-R4o_uq0C.js";
class SignerConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "onChainChanged", (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = !this.options.chains.find((c) => c.chainId === id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    this.options = options;
  }
  async connect(args) {
    if (args.chainId) {
      this.switchChain(args.chainId);
    }
    const signer = await this.getSigner();
    const address = await signer.getAddress();
    return address;
  }
  async disconnect() {
    this._provider = void 0;
    this._signer = void 0;
  }
  async getAddress() {
    const signer = await this.getSigner();
    if (!signer) {
      throw new Error("No signer found");
    }
    return await signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch {
      return false;
    }
  }
  async getProvider() {
    if (!this._provider) {
      this._provider = getChainProvider(this.options.chain, {
        clientId: this.options.clientId,
        secretKey: this.options.secretKey
      });
    }
    return this._provider;
  }
  async getSigner() {
    if (!this._signer) {
      const provider = await this.getProvider();
      this._signer = getUpdatedSigner(this.options.signer, provider);
    }
    return this._signer;
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find((c) => c.chainId === chainId);
    if (!chain) {
      throw new Error(`Chain not found for chainId ${chainId}, please add it to the chains property when creating this wallet`);
    }
    this._provider = getChainProvider(chain, {
      clientId: this.options.clientId,
      secretKey: this.options.secretKey
    });
    this._signer = getUpdatedSigner(this.options.signer, this._provider);
    this.onChainChanged(chainId);
  }
  async setupListeners() {
  }
  updateChains(chains) {
    this.options.chains = chains;
  }
}
function getUpdatedSigner(signer, provider) {
  if (provider) {
    return signer.connect(provider);
  }
  return signer;
}
export {
  SignerConnector
};
