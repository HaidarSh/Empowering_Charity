const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-D1Oeeq5r.js","assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { W as WagmiConnector, _ as _defineProperty, a as getAddress, n as normalizeChainId, f as ConnectorNotFoundError, U as UserRejectedRequestError, R as ResourceUnavailableError, b as Web3Provider, h as hexValue, d as ChainNotConfiguredError, e as getValidPublicRPCUrl, A as AddChainError, S as SwitchChainError, c as __vitePreload } from "./index-R4o_uq0C.js";
class FrameConnector extends WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options: suppliedOptions,
      connectorStorage
    } = _ref;
    const options = {
      shimDisconnect: true,
      ...suppliedOptions
    };
    super({
      chains,
      options
    });
    _defineProperty(this, "id", "frame");
    _defineProperty(this, "name", "Frame");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "shimDisconnectKey", `${this.id}.shimDisconnect`);
    _defineProperty(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", () => {
      this.emit("disconnect");
      if (this.options.shimDisconnect) {
        this.connectorStorage.removeItem(this.shimDisconnectKey);
      }
    });
    this.connectorStorage = connectorStorage;
  }
  async connect(config) {
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if ((config == null ? void 0 : config.chainId) && id !== (config == null ? void 0 : config.chainId)) {
        const chain = await this.switchChain(config == null ? void 0 : config.chainId);
        id = chain.chainId;
        unsupported = this.isChainUnsupported(id);
      }
      if (this.options.shimDisconnect) {
        this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      return {
        account,
        provider,
        chain: {
          id,
          unsupported
        }
      };
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new ResourceUnavailableError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    if (!(provider == null ? void 0 : provider.removeListener)) {
      return;
    }
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    if (!this.isInjected()) {
      provider.close();
    }
    if (this.options.shimDisconnect) {
      this.connectorStorage.removeItem(this.shimDisconnectKey);
    }
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId(chainId);
  }
  async getProvider() {
    this._provider = this.isInjected() ? this.injectedProvider() : await this.createProvider();
    return this._provider;
  }
  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      if (this.options.shimDisconnect && // If shim does not exist in storage, wallet is disconnected
      !this.connectorStorage.getItem(this.shimDisconnectKey)) {
        return false;
      }
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const chainIdHex = hexValue(chainId);
    try {
      await Promise.all([provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      }), new Promise((res) => this.on("change", (_ref2) => {
        let {
          chain
        } = _ref2;
        if ((chain == null ? void 0 : chain.id) === chainId) {
          res();
        }
      }))]);
      return this.chains.find((x) => x.chainId === chainId) ?? {
        chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true
      };
    } catch (switchChainError) {
      const chain = this.chains.find((x) => x.chainId === chainId);
      if (!chain) {
        throw new ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }
      if (switchChainError.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: chainIdHex,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: getValidPublicRPCUrl(chain),
              // no client id on purpose here
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          const currentChainId = await this.getChainId();
          if (currentChainId !== chainId) {
            throw new UserRejectedRequestError(new Error("User rejected switch after adding network."));
          }
          return chain;
        } catch (addChainError) {
          if (this.isUserRejectedRequestError(addChainError)) {
            throw new UserRejectedRequestError(addChainError);
          }
          throw new AddChainError(addChainError.message);
        }
      }
      if (this.isUserRejectedRequestError(switchChainError)) {
        throw new UserRejectedRequestError(switchChainError);
      }
      throw new SwitchChainError(switchChainError);
    }
  }
  async watchAsset(_ref3) {
    let {
      address,
      decimals = 18,
      image,
      symbol
    } = _ref3;
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
  injectedProvider() {
    return window == null ? void 0 : window.ethereum;
  }
  isInjected() {
    var _a;
    return !!((_a = this.injectedProvider()) == null ? void 0 : _a.isFrame);
  }
  async createProvider() {
    const ethProvider = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./browser-D1Oeeq5r.js").then((n) => n.b);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1,2]) : void 0)).default;
    return ethProvider("frame");
  }
}
export {
  FrameConnector
};
