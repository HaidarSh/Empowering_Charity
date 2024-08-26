const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { b7 as isNativeToken, c as __vitePreload, a1 as ContractWrapper, Z as z, bP as FileOrBufferOrStringSchema, bQ as HexColor, bR as BigNumberTransformSchema$1 } from "./index-R4o_uq0C.js";
const PropertiesInput = /* @__PURE__ */ (() => z.object({}).catchall(z.union([BigNumberTransformSchema$1, z.unknown()])))();
const OptionalPropertiesInput = /* @__PURE__ */ (() => z.union([z.array(z.array(PropertiesInput)).transform((i) => i.flat()), z.array(PropertiesInput), PropertiesInput]).optional().nullable())();
const BasicNFTInput = /* @__PURE__ */ (() => z.object({
  name: z.union([z.string(), z.number()]).optional().nullable(),
  description: z.string().nullable().optional().nullable(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional().nullable()
}))();
const CommonNFTInput = /* @__PURE__ */ (() => BasicNFTInput.extend({
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  background_color: HexColor.optional().nullable(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(z.union([BigNumberTransformSchema$1, z.unknown()])))();
const NFTInputOrUriSchema = /* @__PURE__ */ (() => z.union([CommonNFTInput, z.string()]))();
const CommonNFTOutput = /* @__PURE__ */ (() => CommonNFTInput.extend({
  id: z.string(),
  uri: z.string(),
  image: z.string().nullable().optional(),
  external_url: z.string().nullable().optional(),
  animation_url: z.string().nullable().optional()
}))();
async function setErc20Allowance(contractToApprove, value, currencyAddress, overrides) {
  if (isNativeToken(currencyAddress)) {
    overrides["value"] = value;
  } else {
    const ERC20Abi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ec);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const signer = contractToApprove.getSigner();
    const provider = contractToApprove.getProvider();
    const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi, contractToApprove.options, contractToApprove.storage);
    const owner = await contractToApprove.getSignerAddress();
    const spender = contractToApprove.address;
    const allowance = await erc20.read("allowance", [owner, spender]);
    if (allowance.lt(value)) {
      await erc20.sendTransaction("approve", [spender, value]);
    }
    return overrides;
  }
}
export {
  BasicNFTInput as B,
  CommonNFTInput as C,
  NFTInputOrUriSchema as N,
  CommonNFTOutput as a,
  setErc20Allowance as s
};
