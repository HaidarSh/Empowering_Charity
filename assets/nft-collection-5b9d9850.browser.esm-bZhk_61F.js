var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { cZ as NFT_BASE_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, d9 as TokenErc721ContractSchema, a2 as ContractEncoder, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoyalty, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { S as StandardErc721 } from "./erc-721-standard-4c4125d2.browser.esm-CuALH24H.js";
import { a as Erc721WithQuantitySignatureMintable } from "./erc-721-27306550.browser.esm-CtYlarnS.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
import "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
const _NFTCollection = class _NFTCollection extends StandardErc721 {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */
  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   */
  /**
   * @internal
   */
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : void 0;
    let chainId = arguments.length > 5 ? arguments[5] : void 0;
    let contractWrapper = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a  specified wallet.
     *
     * @example
     * ```typescript
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.mint(metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    __publicField(this, "mint", /* @__PURE__ */ buildTransactionFunction(async (metadata) => {
      return this.erc721.mint.prepare(metadata);
    }));
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.mintTo(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    __publicField(this, "mintTo", /* @__PURE__ */ buildTransactionFunction(async (walletAddress, metadata) => {
      return this.erc721.mintTo.prepare(walletAddress, metadata);
    }));
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to the connected wallet
     *
     * @example
     * ```typescript
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.mintBatch(metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    __publicField(this, "mintBatch", /* @__PURE__ */ buildTransactionFunction(async (metadata) => {
      return this.erc721.mintBatch.prepare(metadata);
    }));
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to a specified wallet.
     *
     * @example
     * ```typescript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.mintBatchTo(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    __publicField(this, "mintBatchTo", /* @__PURE__ */ buildTransactionFunction(async (walletAddress, metadata) => {
      return this.erc721.mintBatchTo.prepare(walletAddress, metadata);
    }));
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    __publicField(this, "burn", /* @__PURE__ */ buildTransactionFunction((tokenId) => {
      return this.erc721.burn.prepare(tokenId);
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, TokenErc721ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _NFTCollection.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.signature = new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.owner = new ContractOwner(this.contractWrapper);
  }
  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/
  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), AddressZero]);
    return !anyoneCanTransfer;
  }
  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(receiver, metadata) {
    return this.erc721.getMintTransaction(receiver, metadata);
  }
  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }
  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
};
__publicField(_NFTCollection, "contractRoles", NFT_BASE_CONTRACT_ROLES);
let NFTCollection = _NFTCollection;
export {
  NFTCollection
};
