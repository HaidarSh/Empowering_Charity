import { aA as ExtensionNotImplementedError, Z as z, B as BigNumber } from "./index-R4o_uq0C.js";
const RawDateSchema = /* @__PURE__ */ (() => z.union([z.date().transform((i) => {
  return BigNumber.from(Math.floor(i.getTime() / 1e3));
}), z.number().transform((i) => {
  return BigNumber.from(i);
})]))();
const StartDateSchema = /* @__PURE__ */ (() => RawDateSchema.default(/* @__PURE__ */ new Date(0)))();
const EndDateSchema = /* @__PURE__ */ (() => RawDateSchema.default(new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365 * 10)))();
function assertEnabled(namespace, feature) {
  if (!namespace) {
    throw new ExtensionNotImplementedError(feature);
  }
  return namespace;
}
export {
  EndDateSchema as E,
  RawDateSchema as R,
  StartDateSchema as S,
  assertEnabled as a
};
