var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as assertEnabled, S as StartDateSchema, E as EndDateSchema } from "./assertEnabled-d1700f0b.browser.esm-DFK6vCrZ.js";
import { d as detectContractFeature, C as ContractEvents, G as GasCostEstimator, a as ContractMetadata, b as ContractAppURI } from "./contract-appuri-5c40af52.browser.esm-FEDBCqrq.js";
import { B as BigNumber, F as FEATURE_ACCOUNT, m as FEATURE_ACCOUNT_PERMISSIONS, o as buildTransactionFunction, p as FEATURE_ACCOUNT_FACTORY, t as toUtf8Bytes, q as isContractDeployed, T as Transaction, r as fetchContractMetadataFromAddress, s as fetchSourceFilesFromMetadata, u as extractFunctionsFromAbi, v as AbiSchema, x as FEATURE_DYNAMIC_CONTRACT, y as invariant, z as id, D as joinABIs, E as CommonContractSchema, G as generateExtensionFunctions, H as THIRDWEB_DEPLOYER, I as Interface, J as fetchPublishedContractFromPolygon, K as getDeploymentInfo, L as deployWithThrowawayDeployer, M as deployContractDeterministic, N as FEATURE_AIRDROP_ERC20, O as FEATURE_AIRDROP_ERC721, P as FEATURE_AIRDROP_ERC1155, Q as AddressZero, V as parseEther, X as resolveAddress, a as getAddress, Y as extractCommentFromMetadata, Z as z, $ as AmountSchema, a0 as AddressOrEnsSchema, a1 as ContractWrapper, a2 as ContractEncoder, a3 as CustomContractSchema, a4 as ALL_ROLES, a5 as FEATURE_ROYALTY, a6 as FEATURE_PERMISSIONS, a7 as FEATURE_PRIMARY_SALE, a8 as FEATURE_PLATFORM_FEE, a9 as FEATURE_OWNER, aa as FEATURE_TOKEN, ab as FEATURE_NFT, ac as FEATURE_EDITION, ad as FEATURE_APPURI, ae as FEATURE_DIRECT_LISTINGS, af as FEATURE_ENGLISH_AUCTIONS, ag as FEATURE_OFFERS } from "./index-R4o_uq0C.js";
import { r as resolveOrGenerateId } from "./index-MMLm2ukI.js";
import { C as ContractInterceptor } from "./contract-interceptor-d7b164a7.browser.esm-C7AYuB02.js";
import { C as ContractRoyalty, a as ContractOwner } from "./contract-owner-49e75547.browser.esm-BiOEH91Q.js";
import { C as ContractPlatformFee } from "./contract-platform-fee-e756e68f.browser.esm-CHW2NcbT.js";
import { C as ContractRoles } from "./contract-roles-71988d2e.browser.esm-CigKJRnq.js";
import { C as ContractPrimarySale } from "./contract-sales-918c7cb8.browser.esm-Ca571EE1.js";
import { E as Erc1155 } from "./erc-1155-7ce9bee1.browser.esm-y4q00_Zu.js";
import { E as Erc20 } from "./erc-20-9a18a51c.browser.esm-D7dpHEcn.js";
import { E as Erc721 } from "./erc-721-27306550.browser.esm-CtYlarnS.js";
import { M as MarketplaceV3DirectListings, a as MarketplaceV3EnglishAuctions, b as MarketplaceV3Offers } from "./marketplacev3-offers-ce1f096b.browser.esm-Dbh6aYJh.js";
import "./treeify-BRWJLCWc.js";
import "./setErc20Allowance-7f76f677.browser.esm-LDt0ehVI.js";
import "./QueryParams-32a56510.browser.esm-BJnH1Vvy.js";
import "./drop-claim-conditions-e6f2abbf.browser.esm-BIgweN5t.js";
import "./cleanCurrencyAddress-ded19cfe.browser.esm-BOEJqYJE.js";
import "./marketplace-e3129e2f.browser.esm-DnhYzV1W.js";
let AdminFlag = /* @__PURE__ */ function(AdminFlag2) {
  AdminFlag2[AdminFlag2["None"] = 0] = "None";
  AdminFlag2[AdminFlag2["AddAdmin"] = 1] = "AddAdmin";
  AdminFlag2[AdminFlag2["RemoveAdmin"] = 2] = "RemoveAdmin";
  return AdminFlag2;
}({});
const DEFAULT_PERMISSIONS = {
  // eslint-disable-next-line better-tree-shaking/no-top-level-side-effects
  startDate: BigNumber.from(0),
  // eslint-disable-next-line better-tree-shaking/no-top-level-side-effects
  expirationDate: BigNumber.from(0),
  approvedCallTargets: [],
  nativeTokenLimitPerTransaction: "0"
};
const SignerPermissionsSchema = /* @__PURE__ */ (() => z.object({
  startDate: StartDateSchema,
  expirationDate: EndDateSchema,
  nativeTokenLimitPerTransaction: AmountSchema.default(0),
  approvedCallTargets: z.union([z.array(AddressOrEnsSchema), z.literal("*")])
}))();
const PermissionSnapshotSchema = /* @__PURE__ */ (() => z.array(z.object({
  signer: AddressOrEnsSchema,
  makeAdmin: z.boolean(),
  permissions: SignerPermissionsSchema
})))();
const SignerPermissionRequestV1 = [{
  name: "signer",
  type: "address"
}, {
  name: "approvedTargets",
  type: "address[]"
}, {
  name: "nativeTokenLimitPerTransaction",
  type: "uint256"
}, {
  name: "permissionStartTimestamp",
  type: "uint128"
}, {
  name: "permissionEndTimestamp",
  type: "uint128"
}, {
  name: "reqValidityStartTimestamp",
  type: "uint128"
}, {
  name: "reqValidityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const SignerPermissionRequest = [{
  name: "signer",
  type: "address"
}, {
  name: "isAdmin",
  type: "uint8"
}, {
  name: "approvedTargets",
  type: "address[]"
}, {
  name: "nativeTokenLimitPerTransaction",
  type: "uint256"
}, {
  name: "permissionStartTimestamp",
  type: "uint128"
}, {
  name: "permissionEndTimestamp",
  type: "uint128"
}, {
  name: "reqValidityStartTimestamp",
  type: "uint128"
}, {
  name: "reqValidityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
class AccountPermissions {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_ACCOUNT_PERMISSIONS.name);
    /*********************************
     * WRITE FUNCTIONS
     ********************************/
    /**
     * Grant an address admin access to the account.
     *
     * @remarks Grants an address admin access to the account. The admin will have complete authority over the account.
     *
     * @param signer - The address to be granted admin access to the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "grantAdminPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, DEFAULT_PERMISSIONS, AdminFlag.AddAdmin);
    }));
    /**
     * Revoke an address' admin access to the account.
     *
     * @remarks Revokes an address' admin access to the account.
     *
     * @param signer - The address of an admin of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "revokeAdminPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, DEFAULT_PERMISSIONS, AdminFlag.RemoveAdmin);
    }));
    /**
     * Grant a signer permissions to use the account.
     *
     * @remarks Grants a signer permissions to use the account.
     *
     * @param signer - The signer to be granted permissions to use the account.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantPermissions(signer, permissions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "grantPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, permissions) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      const resolvedPermissions = await SignerPermissionsSchema.parseAsync(permissions);
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, resolvedPermissions, AdminFlag.None);
    }));
    /**
     * Update the permissions of a signer for using the account.
     *
     * @remarks Updates the permissions of a signer for using the account.
     *
     * @param signer - The signer whose permissions to use the account are to be updated.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.updatePermissions(signer, permissions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "updatePermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, permissions) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      const resolvedPermissions = await SignerPermissionsSchema.parseAsync(permissions);
      if (await this.isAdmin(resolvedSignerAddress)) {
        throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");
      }
      if (!await this.isSigner(resolvedSignerAddress)) {
        throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
      }
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, resolvedPermissions, AdminFlag.None);
    }));
    /**
     * Revoke a scoped access address to the account
     *
     * @remarks Revokes an address' access to the account.
     *
     * @param signer - The address whose access to the account is to be revoked.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "revokeAccess", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
        startDate: BigNumber.from(0),
        expirationDate: BigNumber.from(0),
        approvedCallTargets: [],
        nativeTokenLimitPerTransaction: "0"
      }, AdminFlag.None);
    }));
    /**
     * Approve an address as a call target for a given signer on the account
     *
     * @remarks Approves an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to approve as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.approveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "approveTargetForSigner", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, target) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      const resolvedTarget = await resolveAddress(target);
      if (await this.isAdmin(resolvedSignerAddress)) {
        throw new Error("Signer is already an admin. Cannot approve targets for an admin.");
      }
      if (!await this.isSigner(resolvedSignerAddress)) {
        throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
      }
      const permissions = await this.contractWrapper.read("getPermissionsForSigner", [resolvedSignerAddress]);
      if (permissions.approvedTargets.includes(target)) {
        throw new Error("Target is already approved");
      }
      const newTargets = [...permissions.approvedTargets, resolvedTarget];
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
        startDate: BigNumber.from(permissions.startTimestamp),
        expirationDate: BigNumber.from(permissions.endTimestamp),
        approvedCallTargets: newTargets,
        nativeTokenLimitPerTransaction: permissions.nativeTokenLimitPerTransaction.toString()
      }, AdminFlag.None);
    }));
    /**
     * Disapprove an address as a call target for a given signer on the account
     *
     * @remarks Disapprove an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to disapprove as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.disapproveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "disapproveTargetForSigner", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, target) => {
      const resolvedSignerAddress = await resolveAddress(signerAddress);
      const resolvedTarget = await resolveAddress(target);
      if (await this.isAdmin(resolvedSignerAddress)) {
        throw new Error("Signer is already an admin. Cannot approve targets for an admin.");
      }
      if (!await this.isSigner(resolvedSignerAddress)) {
        throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
      }
      const permissions = await this.contractWrapper.read("getPermissionsForSigner", [resolvedSignerAddress]);
      if (!permissions.approvedTargets.includes(resolvedTarget)) {
        throw new Error("Target is currently not approved");
      }
      const newTargets = permissions.approvedTargets.filter((approvedTarget) => getAddress(approvedTarget) !== getAddress(resolvedTarget));
      return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
        startDate: BigNumber.from(permissions.startTimestamp),
        expirationDate: BigNumber.from(permissions.endTimestamp),
        approvedCallTargets: newTargets,
        nativeTokenLimitPerTransaction: permissions.nativeTokenLimitPerTransaction.toString()
      }, AdminFlag.None);
    }));
    /**
     * Set the account's entire snapshot of permissions.
     *
     * @remarks Sets the account's entire snapshot of permissions.
     *
     * @param permissionSnapshot - the snapshot to set as the account's entire permission snapshot.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.setAccess(permissionSnapshot);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "resetAllPermissions", /* @__PURE__ */ buildTransactionFunction(async (permissionSnapshot) => {
      const resolvedSnapshot = await PermissionSnapshotSchema.parseAsync(permissionSnapshot);
      if (this.hasDuplicateSigners(resolvedSnapshot)) {
        throw new Error("Duplicate signers found in input.");
      }
      const removeAdminData = [];
      const addOrUpdateSignerData = [];
      const removeSignerData = [];
      const allAdmins = await this.getAllAdmins();
      const allToMakeAdmin = resolvedSnapshot.filter((item) => item.makeAdmin).map((item) => item.signer);
      allAdmins.forEach(async (admin) => {
        if (!allToMakeAdmin.includes(admin)) {
          const data2 = (await this.sendSignerPermissionRequest(admin, DEFAULT_PERMISSIONS, AdminFlag.RemoveAdmin)).encode();
          removeAdminData.push(data2);
        }
      });
      const allSigners = await this.getAllSigners();
      const allToMakeSigners = resolvedSnapshot.filter((item) => {
        return !item.makeAdmin;
      }).map((item) => item.signer);
      await Promise.all(allSigners.map(async (item) => {
        if (!allToMakeSigners.includes(item.signer)) {
          const data2 = (await this.sendSignerPermissionRequest(item.signer, DEFAULT_PERMISSIONS, AdminFlag.None)).encode();
          removeSignerData.push(data2);
        }
      }));
      for (const member of resolvedSnapshot) {
        if (member.makeAdmin) {
          (await this.sendSignerPermissionRequest(member.signer, DEFAULT_PERMISSIONS, AdminFlag.AddAdmin)).encode();
        } else {
          const data2 = (await this.sendSignerPermissionRequest(member.signer, member.permissions, AdminFlag.None)).encode();
          addOrUpdateSignerData.push(data2);
        }
      }
      const data = [];
      removeAdminData.forEach((item) => {
        data.push(item);
      });
      removeSignerData.forEach((item) => {
        data.push(item);
      });
      addOrUpdateSignerData.forEach((item) => {
        data.push(item);
      });
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [data]
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /*********************************
   * HELPER FUNCTIONS
   ********************************/
  hasDuplicateSigners(snapshot) {
    const checkedSigner = {};
    const signers = snapshot.map((item) => item.signer);
    for (const signer of signers) {
      if (!checkedSigner[signer]) {
        checkedSigner[signer] = true;
      } else {
        return true;
      }
    }
    return false;
  }
  /**
   * Format the access restrictions for a given role
   *
   * @param restrictions - The access restrictions for a given role
   * @returns formatted role restrictions
   *
   */
  parseSignerPermissionsStruct(permissions) {
    return {
      startDate: new Date(parseInt(permissions.startTimestamp.toString()) * 1e3),
      expirationDate: new Date(parseInt(permissions.endTimestamp.toString()) * 1e3),
      nativeTokenLimitPerTransaction: BigNumber.from(permissions.nativeTokenLimitPerTransaction),
      approvedCallTargets: permissions.approvedTargets
    };
  }
  async sendSignerPermissionRequest(signerAddress, permissions, adminFlag) {
    const {
      payload,
      signature
    } = await this.generatePayload(signerAddress, permissions, adminFlag);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPermissionsForSigner",
      args: [payload, signature]
    });
  }
  /**
   * Generate and sign a payload to grant or revoke a signer's access to the account.
   *
   * @param signer - The address of the signer
   * @param roleAction - The address of the signer
   * @returns The generated payload and signature produced on signing that payload.
   *
   */
  async generatePayload(signerAddress, permissions, isAdmin) {
    const payload = {
      signer: signerAddress,
      isAdmin: isAdmin.valueOf(),
      approvedTargets: permissions.approvedCallTargets === "*" ? [AddressZero] : permissions.approvedCallTargets,
      nativeTokenLimitPerTransaction: parseEther(permissions.nativeTokenLimitPerTransaction),
      permissionStartTimestamp: permissions.startDate,
      permissionEndTimestamp: permissions.expirationDate,
      reqValidityStartTimestamp: 0,
      // Req validity ends 10 years from now.
      reqValidityEndTimestamp: BigNumber.from(Math.floor(new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365 * 10).getTime() / 1e3)),
      uid: resolveOrGenerateId(void 0)
    };
    const chainId = await this.contractWrapper.getChainID();
    const connectedSigner = this.contractWrapper.getSigner();
    invariant(connectedSigner);
    const signature = await this.contractWrapper.signTypedData(connectedSigner, {
      name: "Account",
      version: "1",
      chainId,
      verifyingContract: this.getAddress()
    }, {
      SignerPermissionRequest
    }, payload);
    return {
      payload,
      signature
    };
  }
  async generateLegacyPayload(signerAddress, permissions) {
    if (permissions.approvedCallTargets === "*") {
      throw new Error("Wildcard call targets are not supported on legacy account permissions contract, please deploy an updated contract factory.");
    }
    const payload = {
      signer: signerAddress,
      approvedTargets: permissions.approvedCallTargets,
      nativeTokenLimitPerTransaction: parseEther(permissions.nativeTokenLimitPerTransaction),
      permissionStartTimestamp: permissions.startDate,
      permissionEndTimestamp: permissions.expirationDate,
      reqValidityStartTimestamp: 0,
      // Req validity ends 10 years from now.
      reqValidityEndTimestamp: BigNumber.from(Math.floor(new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365 * 10).getTime() / 1e3)),
      uid: resolveOrGenerateId(void 0)
    };
    const chainId = await this.contractWrapper.getChainID();
    const connectedSigner = this.contractWrapper.getSigner();
    invariant(connectedSigner);
    const signature = await this.contractWrapper.signTypedData(connectedSigner, {
      name: "Account",
      version: "1",
      chainId,
      verifyingContract: this.getAddress()
    }, {
      SignerPermissionRequest: SignerPermissionRequestV1
    }, payload);
    return {
      payload,
      signature
    };
  }
  /*********************************
   * READ FUNCTIONS
   ********************************/
  /**
   * Get whether a signer is an admin on the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isAdmin(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer is an admin on the account.
   *
   * @twfeature AccountPermissions
   */
  async isAdmin(signerAddress) {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return await this.contractWrapper.read("isAdmin", [resolvedSignerAddress]);
  }
  /**
   * Get whether a signer has permissions to use the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isSigner(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer has permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async isSigner(signerAddress) {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return await this.contractWrapper.read("isActiveSigner", [resolvedSignerAddress]);
  }
  /**
   * Get all admins of the account.
   *
   * @example
   * ```javascript
   * const allAdmins = await contract.account.getAllAdmins();
   * ```
   *
   * @returns All admins of the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdmins() {
    return await this.contractWrapper.read("getAllAdmins", []);
  }
  /**
   * Get all (non-admin) signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allSigners = await contract.account.getAllSigners();
   * ```
   *
   * @returns All (non-admin) signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllSigners() {
    const activeSignersWithPerms = await this.contractWrapper.read("getAllActiveSigners", []);
    return await Promise.all(activeSignersWithPerms.map(async (signerWithPermissions) => {
      const signer = signerWithPermissions.signer;
      const permissions = this.parseSignerPermissionsStruct(signerWithPermissions);
      return {
        signer,
        permissions
      };
    }));
  }
  /**
   * Get all admins and non-admin signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allAdminsAndSigners = await contract.account.getAllAdminsAndSigners();
   * ```
   *
   * @returns All admins and non-admin signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdminsAndSigners() {
    const allAdmins = await this.getAllAdmins();
    const transformedAdmins = allAdmins.map((admin) => {
      return {
        isAdmin: true,
        signer: admin,
        permissions: {
          startDate: /* @__PURE__ */ new Date(0),
          expirationDate: /* @__PURE__ */ new Date(0),
          nativeTokenLimitPerTransaction: BigNumber.from(0),
          approvedCallTargets: []
        }
      };
    });
    const allSigners = await this.getAllSigners();
    return [...transformedAdmins, ...allSigners];
  }
}
class Account {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_ACCOUNT.name);
    /*********************************
     * WRITE FUNCTIONS
     ********************************/
    /**
     * Grant an address admin access to the account.
     *
     * @remarks Grants an address admin access to the account. The admin will have complete authority over the account.
     *
     * @param signer - The address to be granted admin access to the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "grantAdminPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).grantAdminPermissions.prepare(signerAddress);
    }));
    /**
     * Revoke an address' admin access to the account.
     *
     * @remarks Revokes an address' admin access to the account.
     *
     * @param signer - The address of an admin of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "revokeAdminPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).revokeAdminPermissions.prepare(signerAddress);
    }));
    /**
     * Grant a signer permissions to use the account.
     *
     * @remarks Grants a signer permissions to use the account.
     *
     * @param signer - The signer to be granted permissions to use the account.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantPermissions(signer, permissions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "grantPermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, permissions) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).grantPermissions.prepare(signerAddress, permissions);
    }));
    /**
     * Update the permissions of a signer for using the account.
     *
     * @remarks Updates the permissions of a signer for using the account.
     *
     * @param signer - The signer whose permissions to use the account are to be updated.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.updateAccess(signer, restrictions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "updatePermissions", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, permissions) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).updatePermissions.prepare(signerAddress, permissions);
    }));
    /**
     * Revoke a scoped access address to the account
     *
     * @remarks Revokes an address' access to the account.
     *
     * @param signer - The address whose access to the account is to be revoked.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "revokeAccess", /* @__PURE__ */ buildTransactionFunction(async (signerAddress) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).revokeAccess.prepare(signerAddress);
    }));
    /**
     * Approve an address as a call target for a given signer on the account
     *
     * @remarks Approves an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to approve as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.approveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "approveTargetForSigner", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, target) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).approveTargetForSigner.prepare(signerAddress, target);
    }));
    /**
     * Disapprove an address as a call target for a given signer on the account
     *
     * @remarks Disapprove an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to disapprove as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.disapproveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "disapproveTargetForSigner", /* @__PURE__ */ buildTransactionFunction(async (signerAddress, target) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).disapproveTargetForSigner.prepare(signerAddress, target);
    }));
    /**
     * Set the account's entire snapshot of permissions.
     *
     * @remarks Sets the account's entire snapshot of permissions.
     *
     * @param permissionSnapshot - the snapshot to set as the account's entire permission snapshot.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.setAccess(permissionSnapshot);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    __publicField(this, "resetAllPermissions", /* @__PURE__ */ buildTransactionFunction(async (permissionSnapshot) => {
      return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).resetAllPermissions.prepare(permissionSnapshot);
    }));
    this.contractWrapper = contractWrapper;
    this.accountPermissions = this.detectAccountPermissions();
  }
  detectAccountPermissions() {
    if (detectContractFeature(this.contractWrapper, "AccountPermissions") || detectContractFeature(this.contractWrapper, "AccountPermissionsV1")) {
      return new AccountPermissions(this.contractWrapper);
    }
    return void 0;
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /*********************************
   * READ FUNCTIONS
   ********************************/
  /**
   * Get whether a signer is an admin on the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isAdmin(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer is an admin on the account.
   *
   * @twfeature AccountPermissions
   */
  async isAdmin(signerAddress) {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).isAdmin(signerAddress);
  }
  /**
   * Get whether a signer has permissions to use the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isSigner(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer has permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async isSigner(signerAddress) {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).isSigner(signerAddress);
  }
  /**
   * Get all admins of the account.
   *
   * @example
   * ```javascript
   * const allAdmins = await contract.account.getAllAdmins();
   * ```
   *
   * @returns All admins of the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdmins() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllAdmins();
  }
  /**
   * Get all (non-admin) signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allSigners = await contract.account.getAllSigners();
   * ```
   *
   * @returns All (non-admin) signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllSigners() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllSigners();
  }
  /**
   * Get all admins and non-admin signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allAdminsAndSigners = await contract.account.getAllAdminsAndSigners();
   * ```
   *
   * @returns All admins and non-admin signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdminsAndSigners() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllAdminsAndSigners();
  }
}
class AccountFactory {
  // utilities
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_ACCOUNT_FACTORY.name);
    /*********************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a account
     *
     * @remarks Create a account for an admin. The admin will have complete authority over the account.
     *
     * @param admin - The admin of the account.
     * @param extraData - (Optional) Extra data to be passed to the account on creation.
     *
     * @example
     * ```javascript
     * const tx = await contract.accountFactory.createAccount(admin, extraData);
     * const receipt = tx.receipt();
     * const accountAddress = tx.address;
     * ```
     *
     * @twfeature AccountFactory
     */
    __publicField(this, "createAccount", /* @__PURE__ */ buildTransactionFunction(async (accountAdmin, extraData) => {
      if (await this.isAccountDeployed(accountAdmin, extraData)) {
        throw new Error(`Account already deployed for admin: ${accountAdmin}`);
      }
      let data = toUtf8Bytes("");
      if (extraData) {
        data = extraData;
      }
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "createAccount",
        args: [accountAdmin, data],
        parse: (receipt) => {
          const event = this.contractWrapper.parseLogs("AccountCreated", receipt == null ? void 0 : receipt.logs);
          return {
            address: event[0].args.account,
            receipt
          };
        }
      });
    }));
    this.contractWrapper = contractWrapper;
    this.events = new ContractEvents(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /*********************************
   * READ FUNCTIONS
   *******************************/
  /**
   * Get the deterministic address of the account that will be created
   *
   * @example
   * ```javascript
   * const accountAddress = await contract.accountFactory.predictAccountAddress(admin);
   * ```
   * @param admin - The admin of the account.
   * @param extraData - (Optional) Extra data to be passed to the account on creation.
   * @returns The deterministic address of the account that will be created for the given admin.
   *
   * @twfeature AccountFactory
   */
  async predictAccountAddress(admin, extraData) {
    let data = toUtf8Bytes("");
    if (extraData) {
      data = extraData;
    }
    return this.contractWrapper.read("getAddress", [admin, data]);
  }
  /**
   * Get all accounts on which the given signer has authority
   *
   * @example
   * ```javascript
   * const allAccounts = await contract.accountFactory.getAssociatedAccounts(admin);
   * ```
   * @param signer - The account address.
   * @returns All accounts on which the given signer has authority.
   *
   * @twfeature AccountFactory
   */
  async getAssociatedAccounts(signer) {
    return this.contractWrapper.read("getAccountsOfSigner", [signer]);
  }
  /**
   * Get all accounts
   *
   * @example
   * ```javascript
   * const allAccounts = await contract.accountFactory.getAllAccounts();
   * ```
   *
   * @returns All accounts created via the account factory.
   *
   * @twfeature AccountFactory
   */
  async getAllAccounts() {
    return await this.contractWrapper.read("getAllAccounts", []);
  }
  /**
   * Check if a account has been deployed for the given admin
   *
   * @param admin - The admin of the account.
   * @param extraData - (Optional) Extra data to be passed to the account on creation.
   * @returns whether the account has been deployed for the given admin.
   */
  async isAccountDeployed(admin, extraData) {
    const addr = await this.predictAccountAddress(admin, extraData);
    return isContractDeployed(addr, this.contractWrapper.getProvider());
  }
}
function extractEventsFromAbi(abi, metadata) {
  const parsedAbi = AbiSchema.parse(abi || []);
  const events = parsedAbi.filter((el) => el.type === "event");
  const parsed = [];
  for (const e of events) {
    const doc = extractCommentFromMetadata(e.name, metadata, "events");
    parsed.push({
      inputs: e.inputs || [],
      outputs: e.outputs || [],
      name: e.name || "unknown",
      comment: doc
    });
  }
  return parsed;
}
class ContractPublishedMetadata {
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Get the published metadata for this contract
   * @public
   */
  async get() {
    if (this._cachedMetadata) {
      return this._cachedMetadata;
    }
    this._cachedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.address, this.contractWrapper.getProvider(), this.storage, this.contractWrapper.options);
    return this._cachedMetadata;
  }
  /**
   * @public
   */
  async extractSources() {
    const publishedMetadata = await this.get();
    return fetchSourceFilesFromMetadata(publishedMetadata, this.storage);
  }
  /**
   * @public
   */
  async extractFunctions() {
    let publishedMetadata;
    try {
      publishedMetadata = await this.get();
    } catch (e) {
    }
    return extractFunctionsFromAbi(AbiSchema.parse(this.contractWrapper.abi), publishedMetadata == null ? void 0 : publishedMetadata.metadata);
  }
  /**
   * @public
   */
  async extractEvents() {
    let publishedMetadata;
    try {
      publishedMetadata = await this.get();
    } catch (e) {
    }
    return extractEventsFromAbi(AbiSchema.parse(this.contractWrapper.abi), publishedMetadata == null ? void 0 : publishedMetadata.metadata);
  }
}
class ExtensionManager {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_DYNAMIC_CONTRACT.name);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Adds an extension to the contract
     */
    __publicField(this, "add", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "addExtension",
        args: [inputArgs.extension],
        parse: async (receipt) => {
          const events = this.contractWrapper.parseLogs("ExtensionAdded", receipt.logs);
          if (events.length < 1) {
            throw new Error("No ExtensionAdded event found");
          }
          const extensionAbi = inputArgs.extensionAbi ? AbiSchema.parse(inputArgs.extensionAbi) : (await fetchContractMetadataFromAddress(inputArgs.extension.metadata.implementation, this.contractWrapper.getProvider(), this.contractWrapper.storage)).abi;
          const abiToAdd = this.filterAbiForAdd(extensionAbi, inputArgs.extension);
          const updatedAbi = joinABIs([AbiSchema.parse(this.contractWrapper.abi), abiToAdd]);
          this.contractWrapper.updateAbi(updatedAbi);
          return receipt;
        }
      });
    }));
    /**
     * Adds a deployed extension to the contract
     */
    __publicField(this, "addDeployed", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      let extensionAbi = inputArgs.extensionAbi;
      if (!extensionAbi) {
        const metadata = await fetchContractMetadataFromAddress(inputArgs.extensionAddress, this.contractWrapper.getProvider(), this.contractWrapper.storage, this.contractWrapper.options);
        extensionAbi = metadata.abi;
      }
      invariant(extensionAbi);
      let extensionMetadataUri = "";
      if (inputArgs.extensionMetadata) {
        if (typeof inputArgs.extensionMetadata === "string") {
          extensionMetadataUri = inputArgs.extensionMetadata;
        } else {
          const parsedMetadata = await CommonContractSchema.parseAsync(inputArgs.extensionMetadata);
          extensionMetadataUri = await this.contractWrapper.storage.upload(parsedMetadata);
        }
      }
      const extensionFunctions = generateExtensionFunctions(AbiSchema.parse(extensionAbi));
      const extension = {
        metadata: {
          name: inputArgs.extensionName,
          metadataURI: extensionMetadataUri,
          implementation: inputArgs.extensionAddress
        },
        functions: extensionFunctions
      };
      return this.add.prepare({
        extension,
        extensionAbi
      });
    }));
    /**
     * Adds a published extension to the contract, and deploys it deterministically if necessary
     */
    __publicField(this, "addPublished", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      const version = inputArgs.version || "latest";
      const {
        deployedExtensionAddress,
        extensionMetadata
      } = await this.deployExtension(inputArgs.extensionName, inputArgs.publisherAddress || THIRDWEB_DEPLOYER, version);
      return this.addDeployed.prepare({
        extensionName: inputArgs.extensionName,
        extensionAddress: deployedExtensionAddress,
        extensionMetadata: inputArgs.extensionMetadataOverride || extensionMetadata
      });
    }));
    __publicField(this, "replace", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "replaceExtension",
        args: [inputArgs.extension],
        parse: async (receipt) => {
          const events = this.contractWrapper.parseLogs("ExtensionReplaced", receipt.logs);
          if (events.length < 1) {
            throw new Error("No ExtensionReplaced event found");
          }
          const extensionAbi = inputArgs.extensionAbi ? AbiSchema.parse(inputArgs.extensionAbi) : (await fetchContractMetadataFromAddress(inputArgs.extension.metadata.implementation, this.contractWrapper.getProvider(), this.contractWrapper.storage)).abi;
          const contractAbi = this.filterAbiForRemove(AbiSchema.parse(this.contractWrapper.abi), extensionAbi);
          const abiToAdd = this.filterAbiForAdd(extensionAbi, inputArgs.extension);
          const updatedAbi = joinABIs([contractAbi, abiToAdd]);
          this.contractWrapper.updateAbi(updatedAbi);
          return receipt;
        }
      });
    }));
    __publicField(this, "replaceDeployed", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      let extensionAbi = inputArgs.extensionAbi;
      if (!extensionAbi) {
        const metadata = await fetchContractMetadataFromAddress(inputArgs.extensionAddress, this.contractWrapper.getProvider(), this.contractWrapper.storage, this.contractWrapper.options);
        extensionAbi = metadata.abi;
      }
      invariant(extensionAbi);
      let extensionMetadataUri = "";
      if (inputArgs.extensionMetadata) {
        if (typeof inputArgs.extensionMetadata === "string") {
          extensionMetadataUri = inputArgs.extensionMetadata;
        } else {
          const parsedMetadata = await CommonContractSchema.parseAsync(inputArgs.extensionMetadata);
          extensionMetadataUri = await this.contractWrapper.storage.upload(parsedMetadata);
        }
      }
      const extensionFunctions = generateExtensionFunctions(AbiSchema.parse(extensionAbi));
      const extension = {
        metadata: {
          name: inputArgs.extensionName,
          metadataURI: extensionMetadataUri,
          implementation: inputArgs.extensionAddress
        },
        functions: extensionFunctions
      };
      return this.replace.prepare({
        extension,
        extensionAbi
      });
    }));
    __publicField(this, "replacePublished", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      const version = inputArgs.version || "latest";
      const {
        deployedExtensionAddress,
        extensionMetadata
      } = await this.deployExtension(inputArgs.extensionName, inputArgs.publisherAddress || THIRDWEB_DEPLOYER, version);
      return this.replaceDeployed.prepare({
        extensionName: inputArgs.extensionName,
        extensionAddress: deployedExtensionAddress,
        extensionMetadata: inputArgs.extensionMetadataOverride || extensionMetadata
      });
    }));
    __publicField(this, "remove", /* @__PURE__ */ buildTransactionFunction(async (inputArgs) => {
      const extensionAddress = await this.getExtensionAddress(inputArgs.extensionName);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "removeExtension",
        args: [inputArgs.extensionName],
        parse: async (receipt) => {
          const events = this.contractWrapper.parseLogs("ExtensionRemoved", receipt.logs);
          if (events.length < 1) {
            throw new Error("No ExtensionRemoved event found");
          }
          const extensionAbi = (await fetchContractMetadataFromAddress(extensionAddress, this.contractWrapper.getProvider(), this.contractWrapper.storage)).abi;
          const updatedAbi = this.filterAbiForRemove(AbiSchema.parse(this.contractWrapper.abi), extensionAbi);
          this.contractWrapper.updateAbi(updatedAbi);
          return receipt;
        }
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/
  async getAll() {
    const extensions = await this.contractWrapper.readContract.getAllExtensions();
    return extensions;
  }
  async get(extensionName) {
    const extension = await this.contractWrapper.readContract.getExtension(extensionName);
    return extension;
  }
  async getExtensionAddress(extensionName) {
    const extension = await this.get(extensionName);
    return extension.metadata.implementation;
  }
  async getAllFunctions(extensionName) {
    const extension = await this.get(extensionName);
    return extension.functions;
  }
  async getExtensionForFunction(functionInput) {
    let selector = functionInput.functionSelector;
    if (!selector) {
      invariant(functionInput.functionSignature);
      selector = id(functionInput.functionSignature).substring(0, 10);
    }
    const extensionMetadata = await this.contractWrapper.readContract.getMetadataForFunction(selector);
    return extensionMetadata;
  }
  async getExtensionAddressForFunction(functionInput) {
    const extensionMetadata = await this.getExtensionForFunction(functionInput);
    return extensionMetadata.implementation;
  }
  /** ******************************
   * Internal / private
   *******************************/
  filterAbiForAdd(extensionAbi, extension) {
    const extensionAbiInterface = new Interface(extensionAbi);
    const extensionFunctionSelectors = extension.functions.map((fn) => fn.functionSelector);
    const filtered = extensionAbi.filter((item) => {
      const fnFragment = Object.values(new Interface([item]).functions);
      if (fnFragment.length === 0) {
        return false;
      }
      const fnSigHash = extensionAbiInterface.getSighash(fnFragment[0]);
      return extensionFunctionSelectors.includes(fnSigHash);
    });
    return filtered;
  }
  filterAbiForRemove(fullAbi, abiToRemove) {
    const fullAbiInterface = new Interface(fullAbi);
    const interfaceToRemove = new Interface(abiToRemove);
    const functionsToRemove = Object.values(interfaceToRemove.functions).map((fn) => interfaceToRemove.getSighash(fn));
    const filtered = fullAbi.filter((item) => {
      const fnFragment = Object.values(new Interface([item]).functions);
      if (fnFragment.length === 0) {
        return false;
      }
      const fnSigHash = fullAbiInterface.getSighash(fnFragment[0]);
      return !functionsToRemove.includes(fnSigHash);
    });
    return filtered;
  }
  async deployExtension(extensionName, publisherAddress) {
    var _a;
    let version = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "latest";
    const published = await fetchPublishedContractFromPolygon(publisherAddress, extensionName, version, this.contractWrapper.storage, this.contractWrapper.options.clientId, this.contractWrapper.options.secretKey);
    const deploymentInfo = await getDeploymentInfo(published.metadataUri, this.contractWrapper.storage, this.contractWrapper.getProvider(), "", this.contractWrapper.options.clientId, this.contractWrapper.options.secretKey);
    const implementationAddress = (_a = deploymentInfo.find((i) => i.type === "implementation")) == null ? void 0 : _a.transaction.predictedAddress;
    const transactionsToSend = deploymentInfo.filter((i) => i.transaction.data && i.transaction.data.length > 0);
    const transactionsforDirectDeploy = transactionsToSend.filter((i) => {
      return i.type !== "infra";
    }).map((i) => i.transaction);
    const transactionsForThrowawayDeployer = transactionsToSend.filter((i) => {
      return i.type === "infra";
    }).map((i) => i.transaction);
    const signer = this.contractWrapper.getSigner();
    invariant(signer);
    await deployWithThrowawayDeployer(signer, transactionsForThrowawayDeployer, {});
    for (const tx of transactionsforDirectDeploy) {
      try {
        await deployContractDeterministic(signer, tx);
      } catch (e) {
        console.debug(`Error deploying contract at ${tx.predictedAddress}`, e == null ? void 0 : e.message);
      }
    }
    return {
      deployedExtensionAddress: implementationAddress,
      extensionMetadata: published.metadataUri
    };
  }
}
class Airdrop20 {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_AIRDROP_ERC20.name);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Perform airdrop of ERC20 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and token amounts
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        amount: "10" // number of tokens in wei units
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        amount: "20" // number of tokens in wei units
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC20 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop20.drop(tokenAddress, tokenOwner, contents);
     *
     * // the `output` return value above contains:
     * //     - count of successful and failed drops
     * //     - array containing failed drops, if any
     *
     * ```
     * @param tokenAddress - Address of the ERC20 token being airdropped
     * @param tokenOwner - Address of the owner of the tokens being airdropped
     * @param contents - Array of airdrop contents
     *
     * @returns An array of recipients for who the airdrop failed (empty means all transfers were successful)
     * @twfeature AirdropERC20
     */
    __publicField(this, "drop", /* @__PURE__ */ buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "airdropERC20",
        args: [tokenAddress, tokenOwner, contents],
        parse: (receipt) => {
          const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
          const failedDrops = events.map((e) => {
            return {
              recipient: e.args.recipient,
              amount: e.args.amount.toString()
            };
          });
          return {
            successfulDropCount: contents.length - failedDrops.length,
            failedDropCount: failedDrops.length,
            failedDrops
          };
        }
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }
}
class Airdrop721 {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_AIRDROP_ERC721.name);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Perform airdrop of ERC721 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and tokenIds
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        tokenId: 0
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        tokenId: 2
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC721 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop721.drop(tokenAddress, tokenOwner, contents);
     *
     * // the `output` return value above contains:
     * //     - count of successful and failed drops
     * //     - array containing failed drops, if any
     *
     * ```
     * @param tokenAddress - Address of the ERC721 token being airdropped
     * @param tokenOwner - Address of the owner of the tokens being airdropped
     * @param contents - Array of recipients and tokenIds to airdrop
     *
     * @returns An array of recipients for who the airdrop failed (empty means all transfers were successful)
     * @twfeature AirdropERC721
     */
    __publicField(this, "drop", /* @__PURE__ */ buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "airdropERC721",
        args: [tokenAddress, tokenOwner, contents],
        parse: (receipt) => {
          const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
          const failedDrops = events.map((e) => {
            return {
              recipient: e.args.recipient,
              tokenId: e.args.tokenId.toNumber()
            };
          });
          return {
            successfulDropCount: contents.length - failedDrops.length,
            failedDropCount: failedDrops.length,
            failedDrops
          };
        }
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }
}
class Airdrop1155 {
  constructor(contractWrapper) {
    __publicField(this, "featureName", FEATURE_AIRDROP_ERC1155.name);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Perform airdrop of ERC1155 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and tokenIds
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        tokenId: 0,
     *        amount: "10" // number of tokens
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        tokenId: 0
     *        amount: "20" // number of tokens
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC1155 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop1155.drop(tokenAddress, tokenOwner, contents);
     *
     * // the `output` return value above contains:
     * //     - count of successful and failed drops
     * //     - array containing failed drops, if any
     *
     * ```
     * @param tokenAddress - Address of the ERC1155 token being airdropped
     * @param tokenOwner - Address of the owner of the tokens being airdropped
     * @param contents - Array of recipients and tokenIds to airdrop
     *
     * @returns An array of recipients for who the airdrop failed (empty means all transfers were successful)
     * @twfeature AirdropERC1155
     */
    __publicField(this, "drop", /* @__PURE__ */ buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "airdropERC1155",
        args: [tokenAddress, tokenOwner, contents],
        parse: (receipt) => {
          const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
          const failedDrops = events.map((e) => {
            return {
              recipient: e.args.recipient,
              tokenId: e.args.tokenId.toNumber(),
              amount: e.args.amount.toString()
            };
          });
          return {
            successfulDropCount: contents.length - failedDrops.length,
            failedDropCount: failedDrops.length,
            failedDrops
          };
        }
      });
    }));
    this.contractWrapper = contractWrapper;
  }
  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }
}
class SmartContract {
  // utilities
  get abi() {
    return AbiSchema.parse(this.contractWrapper.abi || []);
  }
  /**
   * Handle royalties
   */
  get royalties() {
    return assertEnabled(this.detectRoyalties(), FEATURE_ROYALTY);
  }
  /**
   * Handle permissions
   */
  get roles() {
    return assertEnabled(this.detectRoles(), FEATURE_PERMISSIONS);
  }
  /**
   * Handle primary sales
   */
  get sales() {
    return assertEnabled(this.detectPrimarySales(), FEATURE_PRIMARY_SALE);
  }
  /**
   * Handle platform fees
   */
  get platformFees() {
    return assertEnabled(this.detectPlatformFees(), FEATURE_PLATFORM_FEE);
  }
  /**
   * Set and get the owner of the contract
   */
  get owner() {
    return assertEnabled(this.detectOwnable(), FEATURE_OWNER);
  }
  /**
   * Auto-detects ERC20 standard functions.
   */
  get erc20() {
    return assertEnabled(this.detectErc20(), FEATURE_TOKEN);
  }
  /**
   * Auto-detects ERC721 standard functions.
   */
  get erc721() {
    return assertEnabled(this.detectErc721(), FEATURE_NFT);
  }
  /**
   * Auto-detects ERC1155 standard functions.
   */
  get erc1155() {
    return assertEnabled(this.detectErc1155(), FEATURE_EDITION);
  }
  /**
   * Auto-detects AppURI standard functions.
   */
  get app() {
    return assertEnabled(this.detectApp(), FEATURE_APPURI);
  }
  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired);
   * ```
   */
  get directListings() {
    return assertEnabled(this.detectDirectListings(), FEATURE_DIRECT_LISTINGS);
  }
  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "1000",
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "100", // 100 bps stands for 1%
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   *
   * // And on the buyers side:
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   */
  get englishAuctions() {
    return assertEnabled(this.detectEnglishAuctions(), FEATURE_ENGLISH_AUCTIONS);
  }
  /**
   * Offers
   * @remarks Make and manage offers.
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   *
   * // And on the seller's side:
   * // The ID of the offer you want to accept
   * const offerId = 0;
   * await contract.offers.acceptOffer(offerId);
   * ```
   */
  get offers() {
    return assertEnabled(this.detectOffers(), FEATURE_OFFERS);
  }
  get airdrop20() {
    return assertEnabled(this.detectAirdrop20(), FEATURE_AIRDROP_ERC20);
  }
  get airdrop721() {
    return assertEnabled(this.detectAirdrop721(), FEATURE_AIRDROP_ERC721);
  }
  get airdrop1155() {
    return assertEnabled(this.detectAirdrop1155(), FEATURE_AIRDROP_ERC1155);
  }
  /**
   * Account Factory
   *
   * @remarks Create accounts and fetch data about them.
   * @example
   * ```javascript
   *
   * // Predict the address of the account that will be created for an admin.
   * const deterministicAddress = await contract.accountFactory.predictAccountAddress(admin, extraData);
   *
   * // Create accounts
   * const tx = await contract.accountFactory.createAccount(admin, extraData);
   * // the same as `deterministicAddress`
   * const accountAddress = tx.address;
   *
   * // Get all accounts created by the factory
   * const allAccounts = await contract.accountFactory.getAllAccounts();
   *
   * // Get all accounts on which a signer has been given authority.
   * const associatedAccounts = await contract.accountFactory.getAssociatedAccounts(signer);
   *
   * // Get all signers who have been given authority on a account.
   * const associatedSigners = await contract.accountFactory.getAssociatedSigners(accountAddress);
   *
   * // Check whether a account has already been created for a given admin.
   * const isAccountDeployed = await contract.accountFactory.isAccountDeployed(admin, extraData);
   * ```
   */
  get accountFactory() {
    return assertEnabled(this.detectAccountFactory(), FEATURE_ACCOUNT_FACTORY);
  }
  // TODO documentation
  get account() {
    return assertEnabled(this.detectAccount(), FEATURE_ACCOUNT);
  }
  get extensions() {
    return assertEnabled(this.detectBaseRouter(), FEATURE_DYNAMIC_CONTRACT);
  }
  get chainId() {
    return this._chainId;
  }
  constructor(network, address, abi, storage) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    let chainId = arguments.length > 5 ? arguments[5] : void 0;
    let contractWrapper = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.publishedMetadata = new ContractPublishedMetadata(this.contractWrapper, this.storage);
    this.metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }
  /**
   * Prepare a transaction for sending
   */
  prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }
  /**
   * Call any function on this contract
   * @example
   * ```javascript
   * // read functions will return the data from the contract
   * const myValue = await contract.call("myReadFunction");
   * console.log(myValue);
   *
   * // write functions will return the transaction receipt
   * const tx = await contract.call("myWriteFunction", [arg1, arg2]);
   * const receipt = tx.receipt;
   *
   * // Optionally override transaction options
   * await contract.call("myWriteFunction", [arg1, arg2], {
   *  gasLimit: 1000000, // override default gas limit
   *  value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
   * };
   * ```
   * @param functionName - the name of the function to call
   * @param args - the arguments of the function
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
  /** ********************
   * FEATURE DETECTION
   * ********************/
  detectRoyalties() {
    if (detectContractFeature(this.contractWrapper, "Royalty")) {
      const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
      return new ContractRoyalty(this.contractWrapper, metadata);
    }
    return void 0;
  }
  detectRoles() {
    if (detectContractFeature(this.contractWrapper, "Permissions")) {
      return new ContractRoles(this.contractWrapper, ALL_ROLES);
    }
    return void 0;
  }
  detectPrimarySales() {
    if (detectContractFeature(this.contractWrapper, "PrimarySale")) {
      return new ContractPrimarySale(this.contractWrapper);
    }
    return void 0;
  }
  detectPlatformFees() {
    if (detectContractFeature(this.contractWrapper, "PlatformFee")) {
      return new ContractPlatformFee(this.contractWrapper);
    }
    return void 0;
  }
  detectErc20() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20(this.contractWrapper, this.storage, this.chainId);
    }
    return void 0;
  }
  detectErc721() {
    if (detectContractFeature(this.contractWrapper, "ERC721")) {
      return new Erc721(this.contractWrapper, this.storage, this.chainId);
    }
    return void 0;
  }
  detectErc1155() {
    if (detectContractFeature(this.contractWrapper, "ERC1155")) {
      return new Erc1155(this.contractWrapper, this.storage, this.chainId);
    }
    return void 0;
  }
  detectOwnable() {
    if (detectContractFeature(this.contractWrapper, "Ownable")) {
      return new ContractOwner(this.contractWrapper);
    }
    return void 0;
  }
  detectApp() {
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return new ContractAppURI(this.contractWrapper, metadata, this.storage);
    } else if (detectContractFeature(this.contractWrapper, "ContractMetadata")) {
      return new ContractAppURI(this.contractWrapper, metadata, this.storage);
    }
    return void 0;
  }
  detectDirectListings() {
    if (detectContractFeature(this.contractWrapper, "DirectListings")) {
      return new MarketplaceV3DirectListings(this.contractWrapper, this.storage);
    }
    return void 0;
  }
  detectEnglishAuctions() {
    if (detectContractFeature(this.contractWrapper, "EnglishAuctions")) {
      return new MarketplaceV3EnglishAuctions(this.contractWrapper, this.storage);
    }
    return void 0;
  }
  detectOffers() {
    if (detectContractFeature(this.contractWrapper, "Offers")) {
      return new MarketplaceV3Offers(this.contractWrapper, this.storage);
    }
    return void 0;
  }
  detectBaseRouter() {
    if (detectContractFeature(this.contractWrapper, FEATURE_DYNAMIC_CONTRACT.name)) {
      return new ExtensionManager(this.contractWrapper);
    }
    return void 0;
  }
  detectAirdrop20() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC20")) {
      return new Airdrop20(this.contractWrapper);
    }
    return void 0;
  }
  detectAirdrop721() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC721")) {
      return new Airdrop721(this.contractWrapper);
    }
    return void 0;
  }
  detectAirdrop1155() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC1155")) {
      return new Airdrop1155(this.contractWrapper);
    }
    return void 0;
  }
  // ========== Account features ==========
  detectAccountFactory() {
    if (detectContractFeature(this.contractWrapper, FEATURE_ACCOUNT_FACTORY.name)) {
      return new AccountFactory(this.contractWrapper);
    }
    return void 0;
  }
  detectAccount() {
    if (detectContractFeature(this.contractWrapper, FEATURE_ACCOUNT.name)) {
      return new Account(this.contractWrapper);
    }
    return void 0;
  }
}
export {
  SmartContract
};
