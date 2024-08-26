var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a8 as FEATURE_PLATFORM_FEE, aO as CommonPlatformFeeSchema, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
class ContractPlatformFee {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_PLATFORM_FEE.name);
    /**
     * Set the platform fee recipient and basis points
     *
     * @example
     * ```javascript
     * await contract.platformFees.set({
     *   platform_fee_basis_points: 100, // 1% fee
     *   platform_fee_recipient: "0x..." // the fee recipient
     * })
     * ```
     *
     * @param platformFeeInfo - the platform fee information
     * @twfeature PlatformFee
     */
    __publicField(this, "set", /* @__PURE__ */ buildTransactionFunction(async (platformFeeInfo) => {
      const parsed = await CommonPlatformFeeSchema.parseAsync(platformFeeInfo);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setPlatformFeeInfo",
        args: [parsed.platform_fee_recipient, parsed.platform_fee_basis_points]
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the platform fee recipient and basis points
   *
   * @example
   * ```javascript
   * const feeInfo = await contract.platformFees.get();
   * console.log(feeInfo.platform_fee_recipient);
   * console.log(feeInfo.platform_fee_basis_points);
   * ```
   * @twfeature PlatformFee
   */
  async get() {
    const [platformFeeRecipient, platformFeeBps] = await this.contractWrapper.read("getPlatformFeeInfo", []);
    return CommonPlatformFeeSchema.parseAsync({
      platform_fee_recipient: platformFeeRecipient,
      platform_fee_basis_points: platformFeeBps
    });
  }
}
export {
  ContractPlatformFee as C
};
