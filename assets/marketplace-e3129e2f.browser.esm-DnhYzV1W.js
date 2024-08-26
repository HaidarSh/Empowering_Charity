const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { c as __vitePreload, ai as Contract, a1 as ContractWrapper, bf as fetchCurrencyValue, y as invariant, B as BigNumber, bT as MAX_BPS } from "./index-R4o_uq0C.js";
import { I as InterfaceId_IERC721, c as InterfaceId_IERC1155, D as DEFAULT_QUERY_ALL_COUNT } from "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
async function isTokenApprovedForTransfer(provider, transferrerContractAddress, assetContract, tokenId, owner) {
  try {
    const ERC165Abi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./IERC165-CM0EWfRz.js");
      return { default: __vite_default__ };
    }, true ? [] : void 0)).default;
    const erc165 = new Contract(assetContract, ERC165Abi, provider);
    const [isERC721, isERC1155] = await Promise.all([erc165.supportsInterface(InterfaceId_IERC721), erc165.supportsInterface(InterfaceId_IERC1155)]);
    if (isERC721) {
      const ERC721Abi = (await __vitePreload(async () => {
        const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ed);
        return { default: __vite_default__ };
      }, true ? __vite__mapDeps([0,1]) : void 0)).default;
      const asset = new Contract(assetContract, ERC721Abi, provider);
      const approved = await asset.isApprovedForAll(owner, transferrerContractAddress);
      if (approved) {
        return true;
      }
      let approvedAddress;
      try {
        approvedAddress = await asset.getApproved(tokenId);
      } catch (e) {
      }
      return (approvedAddress == null ? void 0 : approvedAddress.toLowerCase()) === transferrerContractAddress.toLowerCase();
    } else if (isERC1155) {
      const ERC1155Abi = (await __vitePreload(async () => {
        const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ef);
        return { default: __vite_default__ };
      }, true ? __vite__mapDeps([0,1]) : void 0)).default;
      const asset = new Contract(assetContract, ERC1155Abi, provider);
      return await asset.isApprovedForAll(owner, transferrerContractAddress);
    } else {
      console.error("Contract does not implement ERC 1155 or ERC 721.");
      return false;
    }
  } catch (err) {
    console.error("Failed to check if token is approved", err);
    return false;
  }
}
async function handleTokenApproval(contractWrapper, marketplaceAddress, assetContract, tokenId, from) {
  const ERC165Abi = (await __vitePreload(async () => {
    const { default: __vite_default__ } = await import("./IERC165-CM0EWfRz.js");
    return { default: __vite_default__ };
  }, true ? [] : void 0)).default;
  const erc165 = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC165Abi, contractWrapper.options, contractWrapper.storage);
  const [isERC721, isERC1155] = await Promise.all([erc165.read("supportsInterface", [InterfaceId_IERC721]), erc165.read("supportsInterface", [InterfaceId_IERC1155])]);
  if (isERC721) {
    const ERC721Abi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ed);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC721Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      const isTokenApproved = (await asset.read("getApproved", [tokenId])).toLowerCase() === marketplaceAddress.toLowerCase();
      if (!isTokenApproved) {
        await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
      }
    }
  } else if (isERC1155) {
    const ERC1155Abi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ef);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC1155Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
    }
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
}
function validateNewListingParam(param) {
  invariant(param.assetContractAddress !== void 0 && param.assetContractAddress !== null);
  invariant(param.buyoutPricePerToken !== void 0 && param.buyoutPricePerToken !== null);
  invariant(param.listingDurationInSeconds !== void 0 && param.listingDurationInSeconds !== null);
  invariant(param.startTimestamp !== void 0 && param.startTimestamp !== null);
  invariant(param.tokenId !== void 0 && param.tokenId !== null);
  invariant(param.quantity !== void 0 && param.quantity !== null);
  switch (param.type) {
    case "NewAuctionListing": {
      invariant(param.reservePricePerToken !== void 0 && param.reservePricePerToken !== null);
    }
  }
}
async function mapOffer(provider, listingId, offer) {
  return {
    quantity: offer.quantityDesired,
    pricePerToken: offer.pricePerToken,
    currencyContractAddress: offer.currency,
    buyerAddress: offer.offeror,
    quantityDesired: offer.quantityWanted,
    currencyValue: await fetchCurrencyValue(provider, offer.currency, offer.quantityWanted.mul(offer.pricePerToken)),
    listingId
  };
}
function isWinningBid(winningPrice, newBidPrice, bidBuffer) {
  bidBuffer = BigNumber.from(bidBuffer);
  winningPrice = BigNumber.from(winningPrice);
  newBidPrice = BigNumber.from(newBidPrice);
  if (winningPrice.eq(BigNumber.from(0))) {
    return false;
  }
  const buffer = newBidPrice.sub(winningPrice).mul(MAX_BPS).div(winningPrice);
  return buffer.gte(bidBuffer);
}
async function getAllInBatches(start, end, fn) {
  const batches = [];
  while (end - start > DEFAULT_QUERY_ALL_COUNT) {
    batches.push(fn(start, start + DEFAULT_QUERY_ALL_COUNT - 1));
    start += DEFAULT_QUERY_ALL_COUNT;
  }
  batches.push(fn(start, end - 1));
  return await Promise.all(batches);
}
export {
  isWinningBid as a,
  getAllInBatches as g,
  handleTokenApproval as h,
  isTokenApprovedForTransfer as i,
  mapOffer as m,
  validateNewListingParam as v
};
