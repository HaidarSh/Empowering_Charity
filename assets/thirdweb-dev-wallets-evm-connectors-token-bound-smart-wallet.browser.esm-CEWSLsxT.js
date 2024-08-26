import { SmartWalletConnector } from "./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm-BRzLs5_K.js";
import { cX as ERC6551_REGISTRY, t as toUtf8Bytes } from "./index-R4o_uq0C.js";
import "./http-rpc-client-0a079e80.browser.esm-4jX6TQ2E.js";
class TokenBoundSmartWalletConnector extends SmartWalletConnector {
  constructor(input) {
    super({
      ...input,
      factoryAddress: input.registryAddress || ERC6551_REGISTRY
    });
    this.tbaConfig = input;
  }
  defaultFactoryInfo() {
    return {
      createAccount: async (factory) => {
        return factory.prepare("createAccount", [this.tbaConfig.accountImplementation, this.chainId, this.tbaConfig.tokenContract, this.tbaConfig.tokenId, this.tbaConfig.salt, toUtf8Bytes("")]);
      },
      getAccountAddress: async (factory) => {
        return await factory.call("account", [this.tbaConfig.accountImplementation, this.chainId, this.tbaConfig.tokenContract, this.tbaConfig.tokenId, this.tbaConfig.salt]);
      }
    };
  }
}
export {
  TokenBoundSmartWalletConnector
};
