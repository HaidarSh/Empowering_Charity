const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-R4o_uq0C.js","assets/index-CMa6kN8T.css"])))=>i.map(i=>d[i]);
import { bS as arrayify, B as BigNumber, b8 as hexZeroPad, c as __vitePreload, ai as Contract } from "./index-R4o_uq0C.js";
import { a as CommonNFTOutput, C as CommonNFTInput } from "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
const InterfaceId_IERC721 = /* @__PURE__ */ (() => arrayify("0x80ac58cd"))();
const InterfaceId_IERC1155 = /* @__PURE__ */ (() => arrayify("0xd9b67a26"))();
const FALLBACK_METADATA = {
  name: "Failed to load NFT metadata"
};
async function fetchTokenMetadata(tokenId, tokenUri, storage) {
  if (tokenUri.startsWith("data:application/json;base64") && typeof Buffer !== "undefined") {
    const base64 = tokenUri.split(",")[1];
    const jsonMetadata2 = JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
    return CommonNFTOutput.parse({
      ...jsonMetadata2,
      id: BigNumber.from(tokenId).toString(),
      uri: tokenUri
    });
  }
  const parsedUri = tokenUri.replace("{id}", hexZeroPad(BigNumber.from(tokenId).toHexString(), 32).slice(2));
  let jsonMetadata;
  try {
    jsonMetadata = await storage.downloadJSON(parsedUri);
  } catch (err) {
    const unparsedTokenIdUri = tokenUri.replace("{id}", BigNumber.from(tokenId).toString());
    try {
      jsonMetadata = await storage.downloadJSON(unparsedTokenIdUri);
    } catch (e) {
      console.warn(`failed to get token metadata: ${JSON.stringify({
        tokenId: tokenId.toString(),
        tokenUri
      })} -- falling back to default metadata`);
      jsonMetadata = FALLBACK_METADATA;
    }
  }
  return CommonNFTOutput.parse({
    ...jsonMetadata,
    id: BigNumber.from(tokenId).toString(),
    uri: tokenUri
  });
}
async function fetchTokenMetadataForContract(contractAddress, provider, tokenId, storage) {
  let uri;
  const ERC165MetadataAbi = (await __vitePreload(async () => {
    const { default: __vite_default__ } = await import("./IERC165-CM0EWfRz.js");
    return { default: __vite_default__ };
  }, true ? [] : void 0)).default;
  const erc165 = new Contract(contractAddress, ERC165MetadataAbi, provider);
  const [isERC721, isERC1155] = await Promise.all([erc165.supportsInterface(InterfaceId_IERC721), erc165.supportsInterface(InterfaceId_IERC1155)]);
  if (isERC721) {
    const ERC721MetadataAbi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.ee);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const erc721 = new Contract(contractAddress, ERC721MetadataAbi, provider);
    uri = await erc721.tokenURI(tokenId);
  } else if (isERC1155) {
    const ERC1155MetadataAbi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./index-R4o_uq0C.js").then((n) => n.eg);
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1]) : void 0)).default;
    const erc1155 = new Contract(contractAddress, ERC1155MetadataAbi, provider);
    uri = await erc1155.uri(tokenId);
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
  if (!uri) {
    return CommonNFTOutput.parse({
      ...FALLBACK_METADATA,
      id: BigNumber.from(tokenId).toString(),
      uri: ""
    });
  }
  return fetchTokenMetadata(tokenId, uri, storage);
}
async function uploadOrExtractURI(metadata, storage) {
  if (typeof metadata === "string") {
    return metadata;
  } else {
    return await storage.upload(CommonNFTInput.parse(metadata));
  }
}
async function uploadOrExtractURIs(metadatas, storage, startNumber, options) {
  if (isUriList(metadatas)) {
    return metadatas;
  } else if (isMetadataList(metadatas)) {
    const uris = await storage.uploadBatch(metadatas.map((m) => CommonNFTInput.parse(m)), {
      rewriteFileNames: {
        fileStartNumber: startNumber || 0
      },
      onProgress: options == null ? void 0 : options.onProgress
    });
    return uris;
  } else {
    throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)");
  }
}
function getBaseUriFromBatch(uris) {
  const baseUri = uris[0].substring(0, uris[0].lastIndexOf("/"));
  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i].substring(0, uris[i].lastIndexOf("/"));
    if (baseUri !== uri) {
      throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
    }
  }
  return baseUri.replace(/\/$/, "") + "/";
}
function isUriList(metadatas) {
  return metadatas.find((m) => typeof m !== "string") === void 0;
}
function isMetadataList(metadatas) {
  return metadatas.find((m) => typeof m !== "object") === void 0;
}
const DEFAULT_QUERY_ALL_COUNT = 100;
export {
  DEFAULT_QUERY_ALL_COUNT as D,
  FALLBACK_METADATA as F,
  InterfaceId_IERC721 as I,
  fetchTokenMetadata as a,
  uploadOrExtractURI as b,
  InterfaceId_IERC1155 as c,
  fetchTokenMetadataForContract as f,
  getBaseUriFromBatch as g,
  uploadOrExtractURIs as u
};
