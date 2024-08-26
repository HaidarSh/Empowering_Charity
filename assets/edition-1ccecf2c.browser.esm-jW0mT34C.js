var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { cZ as NFT_BASE_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, d0 as TokenErc1155ContractSchema, a2 as ContractEncoder, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoyalty, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { a as Erc1155SignatureMintable } from "./erc-1155-7ce9bee1.browser.esm-y4q00_Zu.js";
import { S as StandardErc1155 } from "./erc-1155-standard-a5888d37.browser.esm-EFz-sc4y.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
const _Edition = class _Edition extends StandardErc1155 {
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
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
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
     * Mint NFT for the connected wallet
     *
     * @remarks See {@link Edition.mintTo}
     */
    __publicField(this, "mint", /* @__PURE__ */ buildTransactionFunction(async (metadataWithSupply) => {
      return this.erc1155.mint.prepare(metadataWithSupply);
    }));
    /**
     * Mint an NFT with a limited supply
     *
     * @remarks Mint an NFT with a limited supply to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }
     *
     * const metadataWithSupply = {
     *   metadata,
     *   supply: 1000, // The number of this NFT you want to mint
     * }
     *
     * const tx = await contract.mintTo(toAddress, metadataWithSupply);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    __publicField(this, "mintTo", /* @__PURE__ */ buildTransactionFunction(async (to, metadataWithSupply) => {
      return this.erc1155.mintTo.prepare(to, metadataWithSupply);
    }));
    /**
     * Increase the supply of an existing NFT and mint it to the connected wallet
     *
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    __publicField(this, "mintAdditionalSupply", /* @__PURE__ */ buildTransactionFunction(async (tokenId, additionalSupply) => {
      return this.erc1155.mintAdditionalSupply.prepare(tokenId, additionalSupply);
    }));
    /**
     * Increase the supply of an existing NFT and mint it to a given wallet address
     *
     * @param to - the address to mint to
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    __publicField(this, "mintAdditionalSupplyTo", /* @__PURE__ */ buildTransactionFunction(async (to, tokenId, additionalSupply) => {
      return this.erc1155.mintAdditionalSupplyTo.prepare(to, tokenId, additionalSupply);
    }));
    /**
     * Mint Many NFTs for the connected wallet
     *
     * @remarks See {@link Edition.mintBatchTo}
     */
    __publicField(this, "mintBatch", /* @__PURE__ */ buildTransactionFunction(async (metadatas) => {
      return this.erc1155.mintBatch.prepare(metadatas);
    }));
    /**
     * Mint Many NFTs with limited supplies
     *
     * @remarks Mint many different NFTs with limited supplies to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata and supplies of your NFTs
     * const metadataWithSupply = [{
     *   supply: 50, // The number of this NFT you want to mint
     *   metadata: {
     *     name: "Cool NFT #1",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }, {
     *   supply: 100,
     *   metadata: {
     *     name: "Cool NFT #2",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }];
     *
     * const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    __publicField(this, "mintBatchTo", /* @__PURE__ */ buildTransactionFunction(async (to, metadataWithSupply) => {
      return this.erc1155.mintBatchTo.prepare(to, metadataWithSupply);
    }));
    /**
     * Burn a specified amount of a NFT
     *
     * @param tokenId - the token Id to burn
     * @param amount - amount to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnTokens(tokenId, amount);
     * ```
     */
    __publicField(this, "burn", /* @__PURE__ */ buildTransactionFunction(async (tokenId, amount) => {
      return this.erc1155.burn.prepare(tokenId, amount);
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, TokenErc1155ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _Edition.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.signature = new Erc1155SignatureMintable(this.contractWrapper, this.storage, this.roles);
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
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }
  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async getOwned(walletAddress, queryParams) {
    return this.erc1155.getOwned(walletAddress, queryParams);
  }
  /**
   * Get the number of NFTs minted
   * @returns The total number of NFTs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }
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
   * @param metadataWithSupply - The metadata of the NFT you want to mint
   *
   * @deprecated `contract.mint.prepare(...args)`
   */
  async getMintTransaction(receiver, metadataWithSupply) {
    return this.erc1155.getMintTransaction(receiver, metadataWithSupply);
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
__publicField(_Edition, "contractRoles", NFT_BASE_CONTRACT_ROLES);
let Edition = _Edition;
export {
  Edition
};
