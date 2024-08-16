export const contractAddress = "0xA15BB66138824a1c7167f5E85b957d04Dd34E468";

export const ABI = [
  {
    "type": "function",
    "name": "charities",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [
      { "name": "charityId", "type": "uint256", "internalType": "uint256" },
      { "name": "owner", "type": "address", "internalType": "address" },
      { "name": "name", "type": "string", "internalType": "string" },
      { "name": "title", "type": "string", "internalType": "string" },
      { "name": "description", "type": "string", "internalType": "string" },
      { "name": "category", "type": "string", "internalType": "string" },
      { "name": "phoneNumber", "type": "string", "internalType": "string" },
      { "name": "target", "type": "uint256", "internalType": "uint256" },
      { "name": "deadline", "type": "uint256", "internalType": "uint256" },
      {
        "name": "amountCollected",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "image", "type": "string", "internalType": "string" },
      { "name": "email", "type": "string", "internalType": "string" },
      { "name": "country", "type": "string", "internalType": "string" },
      { "name": "active", "type": "bool", "internalType": "bool" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createCharity",
    "inputs": [
      { "name": "_owner", "type": "address", "internalType": "address" },
      { "name": "_name", "type": "string", "internalType": "string" },
      { "name": "_title", "type": "string", "internalType": "string" },
      { "name": "_description", "type": "string", "internalType": "string" },
      { "name": "_target", "type": "uint256", "internalType": "uint256" },
      { "name": "_deadline", "type": "uint256", "internalType": "uint256" },
      { "name": "_image", "type": "string", "internalType": "string" },
      { "name": "_category", "type": "string", "internalType": "string" },
      { "name": "_phoneNumber", "type": "string", "internalType": "string" },
      { "name": "_email", "type": "string", "internalType": "string" },
      { "name": "_country", "type": "string", "internalType": "string" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deleteCharity",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "donateToCharity",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getActiveCharities",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct Empowering_Charity.Charity[]",
        "components": [
          {
            "name": "charityId",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "title", "type": "string", "internalType": "string" },
          {
            "name": "description",
            "type": "string",
            "internalType": "string"
          },
          { "name": "category", "type": "string", "internalType": "string" },
          {
            "name": "phoneNumber",
            "type": "string",
            "internalType": "string"
          },
          { "name": "target", "type": "uint256", "internalType": "uint256" },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountCollected",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "image", "type": "string", "internalType": "string" },
          { "name": "email", "type": "string", "internalType": "string" },
          { "name": "country", "type": "string", "internalType": "string" },
          {
            "name": "donators",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "donations",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          { "name": "active", "type": "bool", "internalType": "bool" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDonators",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "address[]", "internalType": "address[]" },
      { "name": "", "type": "uint256[]", "internalType": "uint256[]" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInActiveCharities",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct Empowering_Charity.Charity[]",
        "components": [
          {
            "name": "charityId",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "title", "type": "string", "internalType": "string" },
          {
            "name": "description",
            "type": "string",
            "internalType": "string"
          },
          { "name": "category", "type": "string", "internalType": "string" },
          {
            "name": "phoneNumber",
            "type": "string",
            "internalType": "string"
          },
          { "name": "target", "type": "uint256", "internalType": "uint256" },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountCollected",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "image", "type": "string", "internalType": "string" },
          { "name": "email", "type": "string", "internalType": "string" },
          { "name": "country", "type": "string", "internalType": "string" },
          {
            "name": "donators",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "donations",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          { "name": "active", "type": "bool", "internalType": "bool" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "numberOfCharities",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  }
]