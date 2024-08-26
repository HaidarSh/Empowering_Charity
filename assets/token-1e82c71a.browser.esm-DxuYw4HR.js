var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { cZ as NFT_BASE_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, dk as TokenErc20ContractSchema, a2 as ContractEncoder, X as resolveAddress, aP as getRoleHash, aR as AddressZero, o as buildTransactionFunction, T as Transaction, B as BigNumber, bf as fetchCurrencyValue } from "./index-R4o_uq0C.js";
import { a as ContractMetadata, b as ContractAppURI, C as ContractEvents, G as GasCostEstimator } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { a as Erc20SignatureMintable } from "./erc-20-9a18a51c.browser.esm-D7dpHEcn.js";
import { S as StandardErc20 } from "./erc-20-standard-1e9d9631.browser.esm-CseSlrpB.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
import "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
class TokenERC20History {
  constructor(contractWrapper, events) {
    this.contractWrapper = contractWrapper;
    this.events = events;
  }
  /**
   * Get all holder balances
   *
   * @remarks Lets you get all token holders and their corresponding balances
   * @returns  A JSON object of all token holders and their corresponding balances
   * @example
   * ```javascript
   * const allHolderBalances = await contract.history.getAllHolderBalances();
   * ```
   */
  async getAllHolderBalances() {
    const a = await this.events.getEvents("Transfer");
    const txns = a.map((b) => b.data);
    const balances = {};
    txns.forEach((item) => {
      const from = item == null ? void 0 : item.from;
      const to = item == null ? void 0 : item.to;
      const amount = item == null ? void 0 : item.value;
      if (!(from === AddressZero)) {
        if (!(from in balances)) {
          balances[from] = BigNumber.from(0);
        }
        balances[from] = balances[from].sub(amount);
      }
      if (!(to === AddressZero)) {
        if (!(to in balances)) {
          balances[to] = BigNumber.from(0);
        }
        balances[to] = balances[to].add(amount);
      }
    });
    const entries = Object.entries(balances);
    const results = await Promise.all(entries.map((_ref) => {
      let [, value] = _ref;
      return fetchCurrencyValue(this.contractWrapper.getProvider(), this.contractWrapper.address, value);
    }));
    return entries.map((_ref2, index) => {
      let [addr] = _ref2;
      return {
        holder: addr,
        balance: results[index]
      };
    });
  }
}
const _Token = class _Token extends StandardErc20 {
  /**
   * Signature Minting
   * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the tokens
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
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
     * Mint Tokens for the connected wallet
     *
     * @remarks See {@link Token.mintTo}
     */
    __publicField(this, "mint", /* @__PURE__ */ buildTransactionFunction(async (amount) => {
      return this.erc20.mint.prepare(amount);
    }));
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     *
     * await contract.mintTo(toAddress, amount);
     * ```
     */
    __publicField(this, "mintTo", /* @__PURE__ */ buildTransactionFunction(async (to, amount) => {
      return this.erc20.mintTo.prepare(to, amount);
    }));
    /**
     * Mint Tokens To Many Wallets
     *
     * @remarks Mint tokens to many wallets in one transaction.
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 0.2, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 1.4,
     *  }
     * ]
     *
     * await contract.mintBatchTo(data);
     * ```
     */
    __publicField(this, "mintBatchTo", /* @__PURE__ */ buildTransactionFunction(async (args) => {
      return this.erc20.mintBatchTo.prepare(args);
    }));
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
    __publicField(this, "burn", /* @__PURE__ */ buildTransactionFunction((amount) => {
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
    this.metadata = new ContractMetadata(this.contractWrapper, TokenErc20ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _Token.contractRoles);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.history = new TokenERC20History(this.contractWrapper, this.events);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.signature = new Erc20SignatureMintable(this.contractWrapper, this.roles);
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
    return await this.erc20.getValue(await this.contractWrapper.read("getVotes", [account]));
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
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return this.erc20.getMintTransaction(to, amount);
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
__publicField(_Token, "contractRoles", NFT_BASE_CONTRACT_ROLES);
let Token = _Token;
export {
  Token
};
