import { InjectedConnector } from "./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-BeiYlISw.js";
import { j as assertWindowEthereum } from "./index-R4o_uq0C.js";
class TrustConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Trust",
      getProvider() {
        var _a;
        function getReady(ethereum) {
          const isTrust = !!(ethereum == null ? void 0 : ethereum.isTrust);
          if (!isTrust) {
            return;
          }
          return ethereum;
        }
        if (assertWindowEthereum(globalThis.window)) {
          if ((_a = globalThis.window.ethereum) == null ? void 0 : _a.providers) {
            return globalThis.window.ethereum.providers.find(getReady);
          }
          return getReady(globalThis.window.ethereum);
        }
      }
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
  }
}
export {
  TrustConnector
};
