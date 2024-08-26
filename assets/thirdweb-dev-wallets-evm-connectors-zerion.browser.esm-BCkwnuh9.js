import { InjectedConnector } from "./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-BeiYlISw.js";
import { j as assertWindowEthereum } from "./index-R4o_uq0C.js";
class ZerionConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Zerion",
      getProvider() {
        var _a;
        function getReady(ethereum) {
          const isZerion = !!(ethereum == null ? void 0 : ethereum.isZerion);
          if (!isZerion) {
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
  ZerionConnector
};
