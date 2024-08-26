import { _ as _defineProperty, w as walletIds, f as ConnectorNotFoundError, U as UserRejectedRequestError, a as getAddress, R as ResourceUnavailableError, ao as getInjectedOneKeyProvider } from "./index-R4o_uq0C.js";
import { InjectedConnector } from "./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-BeiYlISw.js";
class OneKeyConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "OneKey Wallet",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedOneKeyProvider
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
    _defineProperty(this, "id", walletIds.oneKey);
  }
  /**
   * Connect to injected OneKeyWallet provider
   */
  async connect() {
    var _a, _b;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      let account = null;
      if (((_a = this.options) == null ? void 0 : _a.shimDisconnect) && !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))) {
        account = await this.getAccount().catch(() => null);
        const isConnected = !!account;
        if (isConnected) {
          try {
            await provider.request({
              method: "wallet_requestPermissions",
              params: [{
                eth_accounts: {}
              }]
            });
          } catch (error) {
            if (this.isUserRejectedRequestError(error)) {
              throw new UserRejectedRequestError(error);
            }
          }
        }
      }
      if (!account) {
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        account = getAddress(accounts[0]);
      }
      let connectedChainId = await this.getChainId();
      let isUnsupported = this.isChainUnsupported(connectedChainId);
      if (options.chainId && connectedChainId !== options.chainId) {
        try {
          await this.switchChain(options.chainId);
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id : ${options.chainId}`, e);
        }
      }
      if ((_b = this.options) == null ? void 0 : _b.shimDisconnect) {
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider,
        account
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
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
}
export {
  OneKeyConnector
};
