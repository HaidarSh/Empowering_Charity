import { b7 as isNativeToken, aN as NATIVE_TOKEN_ADDRESS } from "./index-R4o_uq0C.js";
function cleanCurrencyAddress(currencyAddress) {
  if (isNativeToken(currencyAddress)) {
    return NATIVE_TOKEN_ADDRESS;
  }
  return currencyAddress;
}
export {
  cleanCurrencyAddress as c
};
