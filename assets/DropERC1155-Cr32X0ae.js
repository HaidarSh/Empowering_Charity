const e=[{type:"constructor",inputs:[],stateMutability:"nonpayable"},{type:"function",name:"DEFAULT_ADMIN_ROLE",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"balanceOf",inputs:[{name:"account",type:"address",internalType:"address"},{name:"id",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"balanceOfBatch",inputs:[{name:"accounts",type:"address[]",internalType:"address[]"},{name:"ids",type:"uint256[]",internalType:"uint256[]"}],outputs:[{name:"",type:"uint256[]",internalType:"uint256[]"}],stateMutability:"view"},{type:"function",name:"batchFrozen",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"burnBatch",inputs:[{name:"account",type:"address",internalType:"address"},{name:"ids",type:"uint256[]",internalType:"uint256[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"claim",inputs:[{name:"_receiver",type:"address",internalType:"address"},{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_quantity",type:"uint256",internalType:"uint256"},{name:"_currency",type:"address",internalType:"address"},{name:"_pricePerToken",type:"uint256",internalType:"uint256"},{name:"_allowlistProof",type:"tuple",internalType:"struct IDrop1155.AllowlistProof",components:[{name:"proof",type:"bytes32[]",internalType:"bytes32[]"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"}]},{name:"_data",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"payable"},{type:"function",name:"claimCondition",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"currentStartId",type:"uint256",internalType:"uint256"},{name:"count",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"contractType",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"pure"},{type:"function",name:"contractURI",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"contractVersion",inputs:[],outputs:[{name:"",type:"uint8",internalType:"uint8"}],stateMutability:"pure"},{type:"function",name:"freezeBatchBaseURI",inputs:[{name:"_index",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"getActiveClaimConditionId",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getBaseURICount",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getBatchIdAtIndex",inputs:[{name:"_index",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getClaimConditionById",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_conditionId",type:"uint256",internalType:"uint256"}],outputs:[{name:"condition",type:"tuple",internalType:"struct IClaimCondition.ClaimCondition",components:[{name:"startTimestamp",type:"uint256",internalType:"uint256"},{name:"maxClaimableSupply",type:"uint256",internalType:"uint256"},{name:"supplyClaimed",type:"uint256",internalType:"uint256"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"merkleRoot",type:"bytes32",internalType:"bytes32"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"metadata",type:"string",internalType:"string"}]}],stateMutability:"view"},{type:"function",name:"getDefaultRoyaltyInfo",inputs:[],outputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"uint16",internalType:"uint16"}],stateMutability:"view"},{type:"function",name:"getFlatPlatformFeeInfo",inputs:[],outputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getPlatformFeeInfo",inputs:[],outputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"uint16",internalType:"uint16"}],stateMutability:"view"},{type:"function",name:"getPlatformFeeType",inputs:[],outputs:[{name:"",type:"uint8",internalType:"enum IPlatformFee.PlatformFeeType"}],stateMutability:"view"},{type:"function",name:"getRoleAdmin",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"getRoleMember",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"index",type:"uint256",internalType:"uint256"}],outputs:[{name:"member",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"getRoleMemberCount",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"count",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getRoyaltyInfoForToken",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"uint16",internalType:"uint16"}],stateMutability:"view"},{type:"function",name:"getSupplyClaimedByWallet",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_conditionId",type:"uint256",internalType:"uint256"},{name:"_claimer",type:"address",internalType:"address"}],outputs:[{name:"supplyClaimedByWallet",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"grantRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"hasRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"hasRoleWithSwitch",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"initialize",inputs:[{name:"_defaultAdmin",type:"address",internalType:"address"},{name:"_name",type:"string",internalType:"string"},{name:"_symbol",type:"string",internalType:"string"},{name:"_contractURI",type:"string",internalType:"string"},{name:"_trustedForwarders",type:"address[]",internalType:"address[]"},{name:"_saleRecipient",type:"address",internalType:"address"},{name:"_royaltyRecipient",type:"address",internalType:"address"},{name:"_royaltyBps",type:"uint128",internalType:"uint128"},{name:"_platformFeeBps",type:"uint128",internalType:"uint128"},{name:"_platformFeeRecipient",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"isApprovedForAll",inputs:[{name:"account",type:"address",internalType:"address"},{name:"operator",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"isTrustedForwarder",inputs:[{name:"forwarder",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"lazyMint",inputs:[{name:"_amount",type:"uint256",internalType:"uint256"},{name:"_baseURIForTokens",type:"string",internalType:"string"},{name:"_data",type:"bytes",internalType:"bytes"}],outputs:[{name:"batchId",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"maxTotalSupply",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"multicall",inputs:[{name:"data",type:"bytes[]",internalType:"bytes[]"}],outputs:[{name:"results",type:"bytes[]",internalType:"bytes[]"}],stateMutability:"nonpayable"},{type:"function",name:"name",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"nextTokenIdToMint",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"owner",inputs:[],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"primarySaleRecipient",inputs:[],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"renounceRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"revokeRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"royaltyInfo",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"},{name:"salePrice",type:"uint256",internalType:"uint256"}],outputs:[{name:"receiver",type:"address",internalType:"address"},{name:"royaltyAmount",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"safeBatchTransferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"ids",type:"uint256[]",internalType:"uint256[]"},{name:"amounts",type:"uint256[]",internalType:"uint256[]"},{name:"data",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"safeTransferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"id",type:"uint256",internalType:"uint256"},{name:"amount",type:"uint256",internalType:"uint256"},{name:"data",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"saleRecipient",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"setApprovalForAll",inputs:[{name:"operator",type:"address",internalType:"address"},{name:"approved",type:"bool",internalType:"bool"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setClaimConditions",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_conditions",type:"tuple[]",internalType:"struct IClaimCondition.ClaimCondition[]",components:[{name:"startTimestamp",type:"uint256",internalType:"uint256"},{name:"maxClaimableSupply",type:"uint256",internalType:"uint256"},{name:"supplyClaimed",type:"uint256",internalType:"uint256"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"merkleRoot",type:"bytes32",internalType:"bytes32"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"metadata",type:"string",internalType:"string"}]},{name:"_resetClaimEligibility",type:"bool",internalType:"bool"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setContractURI",inputs:[{name:"_uri",type:"string",internalType:"string"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setDefaultRoyaltyInfo",inputs:[{name:"_royaltyRecipient",type:"address",internalType:"address"},{name:"_royaltyBps",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setFlatPlatformFeeInfo",inputs:[{name:"_platformFeeRecipient",type:"address",internalType:"address"},{name:"_flatFee",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setMaxTotalSupply",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_maxTotalSupply",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setOwner",inputs:[{name:"_newOwner",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setPlatformFeeInfo",inputs:[{name:"_platformFeeRecipient",type:"address",internalType:"address"},{name:"_platformFeeBps",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setPlatformFeeType",inputs:[{name:"_feeType",type:"uint8",internalType:"enum IPlatformFee.PlatformFeeType"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setPrimarySaleRecipient",inputs:[{name:"_saleRecipient",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setRoyaltyInfoForToken",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_recipient",type:"address",internalType:"address"},{name:"_bps",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setSaleRecipientForToken",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_saleRecipient",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"supportsInterface",inputs:[{name:"interfaceId",type:"bytes4",internalType:"bytes4"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"symbol",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"totalSupply",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"updateBatchBaseURI",inputs:[{name:"_index",type:"uint256",internalType:"uint256"},{name:"_uri",type:"string",internalType:"string"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"uri",inputs:[{name:"_tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"verifyClaim",inputs:[{name:"_conditionId",type:"uint256",internalType:"uint256"},{name:"_claimer",type:"address",internalType:"address"},{name:"_tokenId",type:"uint256",internalType:"uint256"},{name:"_quantity",type:"uint256",internalType:"uint256"},{name:"_currency",type:"address",internalType:"address"},{name:"_pricePerToken",type:"uint256",internalType:"uint256"},{name:"_allowlistProof",type:"tuple",internalType:"struct IDrop1155.AllowlistProof",components:[{name:"proof",type:"bytes32[]",internalType:"bytes32[]"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"}]}],outputs:[{name:"isOverride",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"event",name:"ApprovalForAll",inputs:[{name:"account",type:"address",indexed:!0,internalType:"address"},{name:"operator",type:"address",indexed:!0,internalType:"address"},{name:"approved",type:"bool",indexed:!1,internalType:"bool"}],anonymous:!1},{type:"event",name:"BatchMetadataUpdate",inputs:[{name:"_fromTokenId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"_toTokenId",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"ClaimConditionsUpdated",inputs:[{name:"tokenId",type:"uint256",indexed:!0,internalType:"uint256"},{name:"claimConditions",type:"tuple[]",indexed:!1,internalType:"struct IClaimCondition.ClaimCondition[]",components:[{name:"startTimestamp",type:"uint256",internalType:"uint256"},{name:"maxClaimableSupply",type:"uint256",internalType:"uint256"},{name:"supplyClaimed",type:"uint256",internalType:"uint256"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"merkleRoot",type:"bytes32",internalType:"bytes32"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"metadata",type:"string",internalType:"string"}]},{name:"resetEligibility",type:"bool",indexed:!1,internalType:"bool"}],anonymous:!1},{type:"event",name:"ContractURIUpdated",inputs:[{name:"prevURI",type:"string",indexed:!1,internalType:"string"},{name:"newURI",type:"string",indexed:!1,internalType:"string"}],anonymous:!1},{type:"event",name:"DefaultRoyalty",inputs:[{name:"newRoyaltyRecipient",type:"address",indexed:!0,internalType:"address"},{name:"newRoyaltyBps",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"FlatPlatformFeeUpdated",inputs:[{name:"platformFeeRecipient",type:"address",indexed:!1,internalType:"address"},{name:"flatFee",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"Initialized",inputs:[{name:"version",type:"uint8",indexed:!1,internalType:"uint8"}],anonymous:!1},{type:"event",name:"MaxTotalSupplyUpdated",inputs:[{name:"tokenId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"maxTotalSupply",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"MetadataFrozen",inputs:[],anonymous:!1},{type:"event",name:"OwnerUpdated",inputs:[{name:"prevOwner",type:"address",indexed:!0,internalType:"address"},{name:"newOwner",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"PlatformFeeInfoUpdated",inputs:[{name:"platformFeeRecipient",type:"address",indexed:!0,internalType:"address"},{name:"platformFeeBps",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"PlatformFeeTypeUpdated",inputs:[{name:"feeType",type:"uint8",indexed:!1,internalType:"enum IPlatformFee.PlatformFeeType"}],anonymous:!1},{type:"event",name:"PrimarySaleRecipientUpdated",inputs:[{name:"recipient",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"RoleAdminChanged",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"previousAdminRole",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"newAdminRole",type:"bytes32",indexed:!0,internalType:"bytes32"}],anonymous:!1},{type:"event",name:"RoleGranted",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"account",type:"address",indexed:!0,internalType:"address"},{name:"sender",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"RoleRevoked",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"account",type:"address",indexed:!0,internalType:"address"},{name:"sender",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"RoyaltyForToken",inputs:[{name:"tokenId",type:"uint256",indexed:!0,internalType:"uint256"},{name:"royaltyRecipient",type:"address",indexed:!0,internalType:"address"},{name:"royaltyBps",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"SaleRecipientForTokenUpdated",inputs:[{name:"tokenId",type:"uint256",indexed:!0,internalType:"uint256"},{name:"saleRecipient",type:"address",indexed:!1,internalType:"address"}],anonymous:!1},{type:"event",name:"TokensClaimed",inputs:[{name:"claimConditionIndex",type:"uint256",indexed:!0,internalType:"uint256"},{name:"claimer",type:"address",indexed:!0,internalType:"address"},{name:"receiver",type:"address",indexed:!0,internalType:"address"},{name:"tokenId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"quantityClaimed",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"TokensLazyMinted",inputs:[{name:"startTokenId",type:"uint256",indexed:!0,internalType:"uint256"},{name:"endTokenId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"baseURI",type:"string",indexed:!1,internalType:"string"},{name:"encryptedBaseURI",type:"bytes",indexed:!1,internalType:"bytes"}],anonymous:!1},{type:"event",name:"TransferBatch",inputs:[{name:"operator",type:"address",indexed:!0,internalType:"address"},{name:"from",type:"address",indexed:!0,internalType:"address"},{name:"to",type:"address",indexed:!0,internalType:"address"},{name:"ids",type:"uint256[]",indexed:!1,internalType:"uint256[]"},{name:"values",type:"uint256[]",indexed:!1,internalType:"uint256[]"}],anonymous:!1},{type:"event",name:"TransferSingle",inputs:[{name:"operator",type:"address",indexed:!0,internalType:"address"},{name:"from",type:"address",indexed:!0,internalType:"address"},{name:"to",type:"address",indexed:!0,internalType:"address"},{name:"id",type:"uint256",indexed:!1,internalType:"uint256"},{name:"value",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"URI",inputs:[{name:"value",type:"string",indexed:!1,internalType:"string"},{name:"id",type:"uint256",indexed:!0,internalType:"uint256"}],anonymous:!1},{type:"error",name:"BatchMintInvalidBatchId",inputs:[{name:"index",type:"uint256",internalType:"uint256"}]},{type:"error",name:"BatchMintInvalidTokenId",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"}]},{type:"error",name:"BatchMintMetadataFrozen",inputs:[{name:"batchId",type:"uint256",internalType:"uint256"}]},{type:"error",name:"ContractMetadataUnauthorized",inputs:[]},{type:"error",name:"CurrencyTransferLibFailedNativeTransfer",inputs:[{name:"recipient",type:"address",internalType:"address"},{name:"value",type:"uint256",internalType:"uint256"}]},{type:"error",name:"DropClaimExceedLimit",inputs:[{name:"expected",type:"uint256",internalType:"uint256"},{name:"actual",type:"uint256",internalType:"uint256"}]},{type:"error",name:"DropClaimExceedMaxSupply",inputs:[{name:"expected",type:"uint256",internalType:"uint256"},{name:"actual",type:"uint256",internalType:"uint256"}]},{type:"error",name:"DropClaimInvalidTokenPrice",inputs:[{name:"expectedCurrency",type:"address",internalType:"address"},{name:"expectedPricePerToken",type:"uint256",internalType:"uint256"},{name:"actualCurrency",type:"address",internalType:"address"},{name:"actualExpectedPricePerToken",type:"uint256",internalType:"uint256"}]},{type:"error",name:"DropClaimNotStarted",inputs:[{name:"expected",type:"uint256",internalType:"uint256"},{name:"actual",type:"uint256",internalType:"uint256"}]},{type:"error",name:"DropExceedMaxSupply",inputs:[]},{type:"error",name:"DropNoActiveCondition",inputs:[]},{type:"error",name:"DropUnauthorized",inputs:[]},{type:"error",name:"LazyMintInvalidAmount",inputs:[]},{type:"error",name:"LazyMintUnauthorized",inputs:[]},{type:"error",name:"OwnableUnauthorized",inputs:[]},{type:"error",name:"PermissionsAlreadyGranted",inputs:[{name:"account",type:"address",internalType:"address"},{name:"role",type:"bytes32",internalType:"bytes32"}]},{type:"error",name:"PermissionsInvalidPermission",inputs:[{name:"expected",type:"address",internalType:"address"},{name:"actual",type:"address",internalType:"address"}]},{type:"error",name:"PermissionsUnauthorizedAccount",inputs:[{name:"account",type:"address",internalType:"address"},{name:"neededRole",type:"bytes32",internalType:"bytes32"}]},{type:"error",name:"PlatformFeeExceededMaxFeeBps",inputs:[{name:"max",type:"uint256",internalType:"uint256"},{name:"actual",type:"uint256",internalType:"uint256"}]},{type:"error",name:"PlatformFeeInvalidRecipient",inputs:[{name:"recipient",type:"address",internalType:"address"}]},{type:"error",name:"PlatformFeeUnauthorized",inputs:[]},{type:"error",name:"PrimarySaleInvalidRecipient",inputs:[{name:"recipient",type:"address",internalType:"address"}]},{type:"error",name:"PrimarySaleUnauthorized",inputs:[]},{type:"error",name:"RoyaltyExceededMaxFeeBps",inputs:[{name:"max",type:"uint256",internalType:"uint256"},{name:"actual",type:"uint256",internalType:"uint256"}]},{type:"error",name:"RoyaltyInvalidRecipient",inputs:[{name:"recipient",type:"address",internalType:"address"}]},{type:"error",name:"RoyaltyUnauthorized",inputs:[]}];export{e as default};
