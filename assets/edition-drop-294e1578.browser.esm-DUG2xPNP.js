var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { cZ as NFT_BASE_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, c_ as DropErc1155ContractSchema, a2 as ContractEncoder, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction, B as BigNumber } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, C as ContractEvents, G as GasCostEstimator } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoyalty, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { D as DropErc1155ClaimConditions } from "./erc-1155-7ce9bee1.browser.esm-y4q00_Zu.js";
import { S as StandardErc1155 } from "./erc-1155-standard-a5888d37.browser.esm-EFz-sc4y.js";
import { P as PaperCheckout } from "./thirdweb-checkout-f6974aaf.browser.esm-BxHN_j3J.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
class DropErc1155History {
  constructor(events) {
    this.events = events;
  }
  /**
   * Get all claimer addresses
   *
   * @remarks Get a list of all the addresses that have claimed a token
   * @param tokenId - the tokenId of the NFT to get the addresses of*
   * @returns  A unique list of addresses that claimed the token
   * @example
   * ```javascript
   * const tokenId = "0";
   * const allClaimerAddresses = await contract.history.getAllClaimerAddresses(tokenId);
   * ```
   */
  async getAllClaimerAddresses(tokenId) {
    const a = (await this.events.getEvents("TokensClaimed")).filter((e) => e.data && BigNumber.isBigNumber(e.data.tokenId) ? e.data.tokenId.eq(tokenId) : false);
    return Array.from(new Set(a.filter((b) => {
      var _a;
      return typeof ((_a = b.data) == null ? void 0 : _a.claimer) === "string";
    }).map((b) => b.data.claimer)));
  }
}
const _EditionDrop = class _EditionDrop extends StandardErc1155 {
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
   * Configure claim conditions for each NFT
   * @remarks Define who can claim each NFT in the edition, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await contract.claimConditions.set(tokenId, claimConditions);
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
     * Create a batch of NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
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
      return this.erc1155.lazyMint.prepare(metadatas, options);
    }));
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const tokenId = 0; // the id of the NFT you want to claim
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, tokenId, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param proofs - Array of proofs
     *
     * @returns  Receipt for the transaction
     */
    __publicField(this, "claimTo", /* @__PURE__ */ buildTransactionFunction(/* @__PURE__ */ (() => {
      var _this = this;
      return async function(destinationAddress, tokenId, quantity) {
        let checkERC20Allowance = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        return _this.erc1155.claimTo.prepare(destinationAddress, tokenId, quantity, {
          checkERC20Allowance
        });
      };
    })()));
    /**
     * Claim a token to the connected wallet
     *
     * @remarks See {@link EditionDrop.claimTo}
     *
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param proofs - Array of proofs
     *
     * @returns  Receipt for the transaction
     */
    __publicField(this, "claim", /* @__PURE__ */ buildTransactionFunction(/* @__PURE__ */ (() => {
      var _this2 = this;
      return async function(tokenId, quantity) {
        let checkERC20Allowance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        const address = await _this2.contractWrapper.getSignerAddress();
        return _this2.claimTo.prepare(address, tokenId, quantity, checkERC20Allowance);
      };
    })()));
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
    __publicField(this, "burnTokens", /* @__PURE__ */ buildTransactionFunction(async (tokenId, amount) => {
      return this.erc1155.burn.prepare(tokenId, amount);
    }));
    this.abi = AbiSchema.parse(abi);
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc1155ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _EditionDrop.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.claimConditions = new DropErc1155ClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.events = new ContractEvents(this.contractWrapper);
    this.history = new DropErc1155History(this.events);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.checkout = new PaperCheckout(this.contractWrapper);
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
  // TODO getAllClaimerAddresses() - should be done via an indexer
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
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional claim verification data (e.g. price, allowlist proof, etc...)
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    return this.erc1155.getClaimTransaction(destinationAddress, tokenId, quantity, {
      checkERC20Allowance
    });
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
__publicField(_EditionDrop, "contractRoles", NFT_BASE_CONTRACT_ROLES);
let EditionDrop = _EditionDrop;
export {
  EditionDrop
};
