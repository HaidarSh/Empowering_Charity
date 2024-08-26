var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d7 as MULTIWRAP_CONTRACT_ROLES, a1 as ContractWrapper, v as AbiSchema, d8 as MultiwrapContractSchema, a2 as ContractEncoder, b9 as fetchCurrencyMetadata, aF as formatUnits, o as buildTransactionFunction, X as resolveAddress, T as Transaction, aM as normalizePriceValue } from "./index-R4o_uq0C.js";
import { h as hasERC20Allowance } from "./hasERC20Allowance-654a940b.browser.esm-BYJcbl4m.js";
import { i as isTokenApprovedForTransfer } from "./marketplace-e3129e2f.browser.esm-DnhYzV1W.js";
import { b as uploadOrExtractURI } from "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import { a as ContractMetadata, b as ContractAppURI, G as GasCostEstimator, C as ContractEvents } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { C as ContractRoyalty, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { S as StandardErc721 } from "./erc-721-standard-4c4125d2.browser.esm-CuALH24H.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./index-MMLm2ukI.js";
import "./treeify-BRWJLCWc.js";
import "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
import "./erc-721-27306550.browser.esm-CtYlarnS.js";
import "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
const _Multiwrap = class _Multiwrap extends StandardErc721 {
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
     * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
     * @example
     * ```javascript
     * const tx = await contract.wrap({
     *   erc20Tokens: [{
     *     contractAddress: "0x...",
     *     quantity: "0.8"
     *   }],
     *   erc721Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "0"
     *   }],
     *   erc1155Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "1",
     *     quantity: "2"
     *   }]
     * }, {
     *     name: "Wrapped bundle",
     *     description: "This is a wrapped bundle of tokens and NFTs",
     *     image: "ipfs://...",
     * });
     * const receipt = tx.receipt(); // the transaction receipt
     * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
     * ```
     * @param contents - the contents to wrap
     * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the wrapped token bundle to
     */
    __publicField(this, "wrap", /* @__PURE__ */ buildTransactionFunction(async (contents, wrappedTokenMetadata, recipientAddress) => {
      const [uri, tokens, recipient] = await Promise.all([uploadOrExtractURI(wrappedTokenMetadata, this.storage), this.toTokenStructList(contents), resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress())]);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "wrap",
        args: [tokens, uri, recipient],
        parse: (receipt) => {
          const event = this.contractWrapper.parseLogs("TokensWrapped", receipt == null ? void 0 : receipt.logs);
          if (event.length === 0) {
            throw new Error("TokensWrapped event not found");
          }
          const tokenId = event[0].args.tokenIdOfWrappedToken;
          return {
            id: tokenId,
            receipt,
            data: () => this.get(tokenId)
          };
        }
      });
    }));
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    __publicField(this, "unwrap", /* @__PURE__ */ buildTransactionFunction(async (wrappedTokenId, recipientAddress) => {
      const recipient = await resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "unwrap",
        args: [wrappedTokenId, recipient]
      });
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, MultiwrapContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, _Multiwrap.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.owner = new ContractOwner(this.contractWrapper);
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/
  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */
  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.read("getWrappedContents", [wrappedTokenId]);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];
    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0: {
          const tokenMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), token.assetContract);
          erc20Tokens.push({
            contractAddress: token.assetContract,
            quantity: formatUnits(token.totalAmount, tokenMetadata.decimals)
          });
          break;
        }
        case 1: {
          erc721Tokens.push({
            contractAddress: token.assetContract,
            tokenId: token.tokenId
          });
          break;
        }
        case 2: {
          erc1155Tokens.push({
            contractAddress: token.assetContract,
            tokenId: token.tokenId,
            quantity: token.totalAmount.toString()
          });
          break;
        }
      }
    }
    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await normalizePriceValue(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await hasERC20Allowance(this.contractWrapper, erc20.contractAddress, normalizedQuantity);
        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});

`);
        }
        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }
    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});

`);
        }
        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }
    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);
        }
        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }
    return tokens;
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
__publicField(_Multiwrap, "contractRoles", MULTIWRAP_CONTRACT_ROLES);
let Multiwrap = _Multiwrap;
export {
  Multiwrap
};
