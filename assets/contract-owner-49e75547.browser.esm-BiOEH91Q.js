var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a5 as FEATURE_ROYALTY, aI as CommonRoyaltySchema, o as buildTransactionFunction, a2 as ContractEncoder, T as Transaction, a9 as FEATURE_OWNER, X as resolveAddress, t as toUtf8Bytes, aJ as keccak256, aK as defaultAbiCoder, aL as hexDataLength, B as BigNumber, c as __vitePreload, ai as Contract, aM as normalizePriceValue, aN as NATIVE_TOKEN_ADDRESS } from "./index-R4o_uq0C.js";
import { h as hasFunction } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as CommonNFTInput } from "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import { g as getBaseUriFromBatch, f as fetchTokenMetadataForContract } from "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import { a as approveErc20Allowance } from "./index-MMLm2ukI.js";
class ContractRoyalty {
  constructor(contractWrapper, metadata) {
    __publicField(this, "featureName", FEATURE_ROYALTY.name);
    /**
     * Set the royalty recipient and fee
     * @param royaltyData - the royalty recipient and fee
     *  @example
     * ```javascript
     * await contract.roles.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1% royalty fee
     *   fee_recipient: "0x...", // the fee recipient
     * });
     * ```
     * @public
     * @twfeature Royalty
     */
    __publicField(this, "setDefaultRoyaltyInfo", /* @__PURE__ */ buildTransactionFunction(async (royaltyData) => {
      const oldMetadata = await this.metadata.get();
      const mergedMetadata = await this.metadata.parseInputMetadata({
        ...oldMetadata,
        ...royaltyData
      });
      const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);
      if (hasFunction("setContractURI", this.contractWrapper)) {
        const contractEncoder = new ContractEncoder(this.contractWrapper);
        const encoded = [contractEncoder.encode("setDefaultRoyaltyInfo", [mergedMetadata.fee_recipient, mergedMetadata.seller_fee_basis_points]), contractEncoder.encode("setContractURI", [contractURI])];
        return Transaction.fromContractWrapper({
          contractWrapper: this.contractWrapper,
          method: "multicall",
          args: [encoded],
          parse: (receipt) => ({
            receipt,
            data: () => this.getDefaultRoyaltyInfo()
          })
        });
      } else {
        throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.");
      }
    }));
    /**
     * Set the royalty recipient and fee for a particular token
     * @param tokenId - the token id
     * @param royaltyData - the royalty recipient and fee
     * @example
     * ```javascript
     * const tokenId = 0;
     * await contract.roles.setTokenRoyaltyInfo(tokenId, {
     *   seller_fee_basis_points: 100, // 1% royalty fee
     *   fee_recipient: "0x...", // the fee recipient
     * });
     * ```
     * @public
     * @twfeature Royalty
     */
    __publicField(this, "setTokenRoyaltyInfo", /* @__PURE__ */ buildTransactionFunction(async (tokenId, royaltyData) => {
      const parsedRoyaltyData = CommonRoyaltySchema.parse(royaltyData);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setRoyaltyInfoForToken",
        args: [tokenId, parsedRoyaltyData.fee_recipient, parsedRoyaltyData.seller_fee_basis_points],
        parse: (receipt) => ({
          receipt,
          data: () => this.getDefaultRoyaltyInfo()
        })
      });
    }));
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }
  /**
   * Get the royalty recipient and fee
   * @returns  The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getDefaultRoyaltyInfo() {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getDefaultRoyaltyInfo", []);
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }
  /**
   * Get the royalty recipient and fee of a particular token
   * @returns  The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getTokenRoyaltyInfo(tokenId) {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getRoyaltyInfoForToken", [tokenId]);
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }
}
class DelayedReveal {
  constructor(contractWrapper, storage, featureName, nextTokenIdToMintFn) {
    /**
     * Create a batch of encrypted NFTs that can be revealed at a later time.
     * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
     * @example
     * ```javascript
     * // the real NFTs, these will be encrypted until your reveal them!
     * const realNFTs = [{
     *   name: "Common NFT #1",
     *   description: "Common NFT, one of many.",
     *   image: fs.readFileSync("path/to/image.png"),
     * }, {
     *   name: "Super Rare NFT #2",
     *   description: "You got a Super Rare NFT!",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     * // A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
     * const placeholderNFT = {
     *   name: "Hidden NFT",
     *   description: "Will be revealed next week!"
     * };
     * // Create and encrypt the NFTs
     * await contract.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * ```
     * @public
     * @param placeholder - the placeholder NFT to show before the reveal
     * @param metadatas - the final NFTs that will be hidden
     * @param password - the password that will be used to reveal these NFTs
     * @param options - additional options like upload progress
     */
    __publicField(this, "createDelayedRevealBatch", /* @__PURE__ */ buildTransactionFunction(async (placeholder, metadatas, password, options) => {
      if (!password) {
        throw new Error("Password is required");
      }
      const placeholderUris = await this.storage.uploadBatch([CommonNFTInput.parse(placeholder)], {
        rewriteFileNames: {
          fileStartNumber: 0
        }
      });
      const placeholderUri = getBaseUriFromBatch(placeholderUris);
      const startFileNumber = await this.nextTokenIdToMintFn();
      const uris = await this.storage.uploadBatch(metadatas.map((m) => CommonNFTInput.parse(m)), {
        onProgress: options == null ? void 0 : options.onProgress,
        rewriteFileNames: {
          fileStartNumber: startFileNumber.toNumber()
        }
      });
      const baseUri = getBaseUriFromBatch(uris);
      const baseUriId = await this.contractWrapper.read("getBaseURICount", []);
      const hashedPassword = await this.hashDelayRevealPassword(baseUriId, password);
      const encryptedBaseUri = await this.contractWrapper.read("encryptDecrypt", [toUtf8Bytes(baseUri), hashedPassword]);
      let data;
      const legacyContract = await this.isLegacyContract();
      if (legacyContract) {
        data = encryptedBaseUri;
      } else {
        const chainId = await this.contractWrapper.getChainID();
        const provenanceHash = keccak256(["bytes", "bytes", "uint256"], [toUtf8Bytes(baseUri), hashedPassword, chainId]);
        data = defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
      }
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "lazyMint",
        args: [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, data],
        parse: (receipt) => {
          const events = this.contractWrapper.parseLogs("TokensLazyMinted", receipt == null ? void 0 : receipt.logs);
          const startingIndex = events[0].args.startTokenId;
          const endingIndex = events[0].args.endTokenId;
          const results = [];
          for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
            results.push({
              id,
              receipt
            });
          }
          return results;
        }
      });
    }));
    /**
     * Reveal a batch of hidden NFTs
     * @remarks Reveal the NFTs of a batch using the password.
     * @example
     * ```javascript
     * // the batch to reveal
     * const batchId = 0;
     * // reveal the batch
     * await contract.revealer.reveal(batchId, "my secret password");
     * ```
     * @public
     * @param batchId - the id of the batch to reveal
     * @param password - the password
     */
    __publicField(this, "reveal", /* @__PURE__ */ buildTransactionFunction(async (batchId, password) => {
      if (!password) {
        throw new Error("Password is required");
      }
      const key = await this.hashDelayRevealPassword(batchId, password);
      try {
        const decryptedUri = await this.contractWrapper.callStatic().reveal(batchId, key);
        if (!decryptedUri.includes("://") || !decryptedUri.endsWith("/")) {
          throw new Error("invalid password");
        }
      } catch (e) {
        throw new Error("invalid password");
      }
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "reveal",
        args: [batchId, key]
      });
    }));
    this.featureName = featureName;
    this.nextTokenIdToMintFn = nextTokenIdToMintFn;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Gets the list of unrevealed NFT batches.
   * @remarks Gets the list of unrevealed NFT batches.
   * @example
   * ```javascript
   * const batches = await contract.revealer.getBatchesToReveal();
   * ```
   * @public
   */
  async getBatchesToReveal() {
    const count = await this.contractWrapper.read("getBaseURICount", []);
    if (count.isZero()) {
      return [];
    }
    const countRangeArray = Array.from(Array(count.toNumber()).keys());
    const uriIndices = await Promise.all(countRangeArray.map((i) => {
      if (hasFunction("getBatchIdAtIndex", this.contractWrapper)) {
        return this.contractWrapper.read("getBatchIdAtIndex", [i]);
      }
      if (hasFunction("baseURIIndices", this.contractWrapper)) {
        return this.contractWrapper.read("baseURIIndices", [i]);
      }
      throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.");
    }));
    const uriIndicesWithZeroStart = uriIndices.slice(0, uriIndices.length - 1);
    const tokenMetadatas = await Promise.all(Array.from([0, ...uriIndicesWithZeroStart]).map((i) => this.getNftMetadata(i.toString())));
    const legacyContract = await this.isLegacyContract();
    const encryptedUriData = await Promise.all(Array.from([...uriIndices]).map((i) => legacyContract ? this.getLegacyEncryptedData(i) : this.contractWrapper.read("encryptedData", [i])));
    const encryptedBaseUris = encryptedUriData.map((data) => {
      if (hexDataLength(data) > 0) {
        if (legacyContract) {
          return data;
        }
        const result = defaultAbiCoder.decode(["bytes", "bytes32"], data);
        return result[0];
      } else {
        return data;
      }
    });
    return tokenMetadatas.map((meta, index) => ({
      batchId: BigNumber.from(index),
      batchUri: meta.uri,
      placeholderMetadata: meta
    })).filter((_, index) => hexDataLength(encryptedBaseUris[index]) > 0);
  }
  /**
   * Algorithm to hash delay reveal password, so we don't broadcast the input password on-chain.
   *
   * @internal
   */
  async hashDelayRevealPassword(batchTokenIndex, password) {
    const chainId = await this.contractWrapper.getChainID();
    const contractAddress = this.contractWrapper.address;
    return keccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchTokenIndex, contractAddress]);
  }
  async getNftMetadata(tokenId) {
    return fetchTokenMetadataForContract(this.contractWrapper.address, this.contractWrapper.getProvider(), tokenId, this.storage);
  }
  async isLegacyContract() {
    if (hasFunction("contractVersion", this.contractWrapper)) {
      try {
        const version = await this.contractWrapper.read("contractVersion", []);
        return version <= 2;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  async getLegacyEncryptedData(index) {
    const DeprecatedAbi = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./IDelayedRevealDeprecated-Czh853Ft.js");
      return { default: __vite_default__ };
    }, true ? [] : void 0)).default;
    const legacy = new Contract(this.contractWrapper.address, DeprecatedAbi, this.contractWrapper.getProvider());
    const result = await legacy.functions["encryptedBaseURI"](index);
    if (result.length > 0) {
      return result[0];
    } else {
      return "0x";
    }
  }
}
async function calculateClaimCost(contractWrapper, pricePerToken, quantity, currencyAddress, checkERC20Allowance) {
  let overrides = {};
  const currency = currencyAddress || NATIVE_TOKEN_ADDRESS;
  const normalizedPrice = await normalizePriceValue(contractWrapper.getProvider(), pricePerToken, currency);
  const totalCost = normalizedPrice.mul(quantity);
  if (totalCost.gt(0)) {
    if (currency === NATIVE_TOKEN_ADDRESS) {
      overrides = {
        value: totalCost
      };
    } else if (currency !== NATIVE_TOKEN_ADDRESS && checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currency, totalCost, quantity, 0);
    }
  }
  return overrides;
}
class ContractOwner {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_OWNER.name);
    /**
     * Set the new owner of the contract
     * @remarks Can only be called by the current owner.
     *
     * @param address - the address of the new owner
     *
     * @example
     * ```javascript
     * const newOwnerAddress = "{{wallet_address}}";
     * await contract.owner.set(newOwnerAddress);
     * ```
     * @twfeature Ownable
     */
    __publicField(this, "set", /* @__PURE__ */ buildTransactionFunction(async (address) => {
      const resolvedAddress = await resolveAddress(address);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setOwner",
        args: [resolvedAddress]
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the current owner of the contract
   * @example
   * ```javascript
   * await contract.owner.get();
   * console.log("Owner address: ", ownerAddress);
   * ```
   * @returns The owner address
   * @twfeature Ownable
   */
  async get() {
    return this.contractWrapper.read("owner", []);
  }
}
export {
  ContractRoyalty as C,
  DelayedReveal as D,
  ContractOwner as a,
  calculateClaimCost as c
};
