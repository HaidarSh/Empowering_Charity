var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a7 as FEATURE_PRIMARY_SALE, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
class ContractPrimarySale {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_PRIMARY_SALE.name);
    /**
     * Set the primary sale recipient
     * @param recipient - the wallet address
     * @example
     * ```javascript
     * await contract.sales.setRecipient(recipientWalletAddress);
     * ```
     * @public
     * @twfeature PrimarySale
     */
    __publicField(this, "setRecipient", /* @__PURE__ */ buildTransactionFunction(async (recipient) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setPrimarySaleRecipient",
        args: [recipient]
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the primary sale recipient
   * @returns The wallet address.
   * @example
   * ```javascript
   * const salesRecipient = await contract.sales.getRecipient();
   * ```
   * @public
   * @twfeature PrimarySale
   */
  async getRecipient() {
    const result = await this.contractWrapper.read("primarySaleRecipient", []);
    return result;
  }
}
export {
  ContractPrimarySale as C
};
