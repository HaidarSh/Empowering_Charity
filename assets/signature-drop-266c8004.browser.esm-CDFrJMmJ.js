var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { D as DEFAULT_QUERY_ALL_COUNT } from "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import { cZ as NFT_BASE_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, da as DropErc721ContractSchema, a2 as ContractEncoder, bs as FEATURE_NFT_REVEALABLE, B as BigNumber, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoyalty, D as DelayedReveal, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { D as DropClaimConditions } from "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
import { S as StandardErc721 } from "./erc-721-standard-4c4125d2.browser.esm-CuALH24H.js";
import { a as Erc721WithQuantitySignatureMintable } from "./erc-721-27306550.browser.esm-CtYlarnS.js";
import { P as PaperCheckout } from "./thirdweb-checkout-f6974aaf.browser.esm-BxHN_j3J.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
const _SignatureDrop = class _SignatureDrop extends StandardErc721 {
  /**
   * @internal
   */
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
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const claimCondition = {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   * };
   * await contract.claimConditions.set([claimCondition]);
   * ```
   */
  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
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
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
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
  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
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
     * Create a batch of unique NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFTs to create
     * const metadatas = [{
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     *
     * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     */
    __publicField(this, "createBatch", /* @__PURE__ */ buildTransactionFunction(async (metadatas, options) => {
      return this.erc721.lazyMint.prepare(metadatas, options);
    }));
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    __publicField(this, "claimTo", /* @__PURE__ */ buildTransactionFunction(async (destinationAddress, quantity, options) => {
      return this.erc721.claimTo.prepare(destinationAddress, quantity, options);
    }));
    /**
     * Claim NFTs to the connected wallet.
     *
     * @remarks See {@link NFTDrop.claimTo}
     *
     * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    __publicField(this, "claim", /* @__PURE__ */ buildTransactionFunction(async (quantity, options) => {
      return this.erc721.claim.prepare(quantity, options);
    }));
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    __publicField(this, "burn", /* @__PURE__ */ buildTransactionFunction(async (tokenId) => {
      return this.erc721.burn.prepare(tokenId);
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc721ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _SignatureDrop.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.claimConditions = new DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.signature = new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.revealer = new DelayedReveal(this.contractWrapper, this.storage, FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    this.signature = new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.owner = new ContractOwner(this.contractWrapper);
    this.checkout = new PaperCheckout(this.contractWrapper);
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
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */
  async totalSupply() {
    const [claimed, unclaimed] = await Promise.all([this.totalClaimedSupply(), this.totalUnclaimedSupply()]);
    return claimed.add(unclaimed);
  }
  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */
  async getAllClaimed(queryParams) {
    const start = BigNumber.from((queryParams == null ? void 0 : queryParams.start) || 0).toNumber();
    const count = BigNumber.from((queryParams == null ? void 0 : queryParams.count) || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.totalClaimedSupply()).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map((i) => this.get(i.toString())));
  }
  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAllUnclaimed(queryParams) {
    const start = BigNumber.from((queryParams == null ? void 0 : queryParams.start) || 0).toNumber();
    const count = BigNumber.from((queryParams == null ? void 0 : queryParams.count) || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const firstTokenId = BigNumber.from(Math.max((await this.totalClaimedSupply()).toNumber(), start));
    const maxId = BigNumber.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint", [])).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map((i) => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }
  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns The claimed supply
   */
  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }
  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns The unclaimed supply
   */
  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
  }
  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), AddressZero]);
    return !anyoneCanTransfer;
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    return this.erc721.getClaimTransaction(destinationAddress, quantity, options);
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
__publicField(_SignatureDrop, "contractRoles", NFT_BASE_CONTRACT_ROLES);
let SignatureDrop = _SignatureDrop;
export {
  SignatureDrop
};
