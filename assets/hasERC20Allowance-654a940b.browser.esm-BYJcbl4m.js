const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { c as __vitePreload, a1 as ContractWrapper } from "./index-R4o_uq0C.js";
async function hasERC20Allowance(contractToApprove, currencyAddress, value) {
  const provider = contractToApprove.getProvider();
  const ERC20Abi = (await __vitePreload(async () => {
    const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ec);
    return { default: __vite_default__ };
  }, true ? __vite__mapDeps([0,1]) : void 0)).default;
  const erc20 = new ContractWrapper(provider, currencyAddress, ERC20Abi, {}, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  return allowance.gte(value);
}
export {
  hasERC20Allowance as h
};
