var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { di as TOKEN_DROP_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, dj as DropErc20ContractSchema, a2 as ContractEncoder, X as resolveAddress, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { D as DropClaimConditions } from "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
import { S as StandardErc20 } from "./erc-20-standard-1e9d9631.browser.esm-CseSlrpB.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./erc-20-9a18a51c.browser.esm-D7dpHEcn.js";
const _TokenDrop = class _TokenDrop extends StandardErc20 {
  /**
   * Configure claim conditions
   * @remarks Define who can claim Tokens, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
   *     price: 0.001, // presale price per token
   *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.008, // public sale price per token
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
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
     * Claim a certain amount of tokens
     * @remarks See {@link TokenDrop.claimTo}
     * @param amount - the amount of tokens to mint
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     */
    __publicField(this, "claim", /* @__PURE__ */ buildTransactionFunction(/* @__PURE__ */ (() => {
      var _this = this;
      return async function(amount) {
        let checkERC20Allowance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        return _this.claimTo.prepare(await _this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance);
      };
    })()));
    /**
     * Claim a certain amount of tokens to a specific Wallet
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns  The transaction receipt
     */
    __publicField(this, "claimTo", /* @__PURE__ */ buildTransactionFunction(/* @__PURE__ */ (() => {
      var _this2 = this;
      return async function(destinationAddress, amount) {
        let checkERC20Allowance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        return _this2.erc20.claimTo.prepare(destinationAddress, amount, {
          checkERC20Allowance
        });
      };
    })()));
    /**
     * Lets you delegate your voting power to the delegateeAddress
     *
     * @param delegateeAddress - delegatee wallet address
     * @alpha
     */
    __publicField(this, "delegateTo", /* @__PURE__ */ buildTransactionFunction(async (delegateeAddress) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "delegate",
        args: [await resolveAddress(delegateeAddress)]
      });
    }));
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnTokens(amount);
     * ```
     */
    __publicField(this, "burnTokens", /* @__PURE__ */ buildTransactionFunction(async (amount) => {
      return this.erc20.burn.prepare(amount);
    }));
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the specified wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const holderAddress = "{{wallet_address}}";
     *
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnFrom(holderAddress, amount);
     * ```
     */
    __publicField(this, "burnFrom", /* @__PURE__ */ buildTransactionFunction(async (holder, amount) => {
      return this.erc20.burnFrom.prepare(holder, amount);
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc20ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _TokenDrop.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.claimConditions = new DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/
  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns The amount of voting power in tokens
   */
  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }
  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.read("getVotes", [await resolveAddress(account)]));
  }
  /**
   * Get your voting delegatee address
   *
   * @returns The address of your vote delegatee
   */
  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }
  /**
   * Get a specific address voting delegatee address
   *
   * @returns The address of your vote delegatee
   */
  async getDelegationOf(account) {
    return await this.contractWrapper.read("delegates", [await resolveAddress(account)]);
  }
  /**
   * Get whether users can transfer tokens from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), AddressZero]);
    return !anyoneCanTransfer;
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
__publicField(_TokenDrop, "contractRoles", TOKEN_DROP_CONTRACT_ROLES);
let TokenDrop = _TokenDrop;
export {
  TokenDrop
};
