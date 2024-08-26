import { ac as reactExports, ad as jsxRuntimeExports, I as parseUnits, q as formatEther, Z as parseEther, aW as useNavigate, aX as useLocation, aY as StateManagedSelect$1, aZ as Link, a_ as React, a$ as Swal, b0 as Routes, b1 as Route, b2 as client, b3 as BrowserRouter } from "./vendor-D_lJG7G6.js";
import { u as useContract, b as useContractWrite, d as useAddress, e as useMetamask, f as useDisconnect, T as ThirdwebProvider } from "./thirdweb-vendor-BSlOb74X.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const contractAddress = "0x0BfaAD2F3C2C257e18fDA968Cbf0B3c443587991";
const ABI = [
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
    "name": "editCharity",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" },
      { "name": "_name", "type": "string", "internalType": "string" },
      { "name": "_title", "type": "string", "internalType": "string" },
      { "name": "_description", "type": "string", "internalType": "string" },
      { "name": "_target", "type": "uint256", "internalType": "uint256" },
      { "name": "_image", "type": "string", "internalType": "string" },
      { "name": "_category", "type": "string", "internalType": "string" },
      { "name": "_phoneNumber", "type": "string", "internalType": "string" },
      { "name": "_email", "type": "string", "internalType": "string" },
      { "name": "_country", "type": "string", "internalType": "string" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
];
const StateContext = reactExports.createContext();
const StateContextProvider = ({ children }) => {
  const {
    contract,
    isLoading: isContractLoading,
    error: contractError
  } = useContract(contractAddress, ABI);
  const {
    mutateAsync: createCharity,
    isLoading: isWriteLoading,
    error: writeError
  } = useContractWrite(contract, "createCharity");
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  console.log("Connect Function:", connect);
  console.log("Disconnect Function:", disconnect);
  async function publishCharity(form) {
    try {
      const targetValue = form.target.toString();
      let data = await createCharity({
        args: [
          address,
          form.name,
          form.title,
          form.description,
          parseUnits(targetValue, "ether"),
          new Date(form.deadline).getTime(),
          form.image,
          form.category,
          form.phoneNumber,
          form.email,
          form.country
        ]
      });
      console.log("Contract call success", data);
      return true;
    } catch (error) {
      console.error("Contract call failed", error);
      return false;
    }
  }
  async function editCharity(charityId, form) {
    try {
      const targetValue = form.target.toString();
      let data = await contract.call("editCharity", [
        charityId,
        form.name,
        form.title,
        form.description,
        parseUnits(targetValue, "ether"),
        form.image,
        form.category,
        form.phoneNumber,
        form.email,
        form.country
      ]);
      console.log("Charity edited successfully", data);
      return true;
    } catch (error) {
      console.error("Edit charity failed", error);
      return false;
    }
  }
  async function getActiveCharities() {
    const charities = await contract.call("getActiveCharities");
    const parsedCharities = charities.map((charity) => ({
      pId: charity.charityId,
      owner: charity.owner,
      name: charity.name,
      title: charity.title,
      description: charity.description,
      target: formatEther(charity.target.toString()) / 1e18,
      deadline: charity.deadline.toNumber(),
      amountCollected: formatEther(
        charity.amountCollected.toString()
      ),
      image: charity.image,
      category: charity.category,
      phoneNumber: charity.phoneNumber,
      email: charity.email,
      country: charity.country
    }));
    return parsedCharities;
  }
  async function getInActiveCharities() {
    const charities = await contract.call("getInActiveCharities");
    const parsedCharities = charities.map((charity) => ({
      pId: charity.charityId,
      owner: charity.owner,
      name: charity.name,
      title: charity.title,
      description: charity.description,
      target: formatEther(charity.target.toString()) / 1e18,
      deadline: charity.deadline.toNumber(),
      amountCollected: formatEther(
        charity.amountCollected.toString()
      ),
      image: charity.image,
      category: charity.category,
      phoneNumber: charity.phoneNumber,
      email: charity.email,
      country: charity.country
    }));
    return parsedCharities;
  }
  async function getUserActiveCharities(address2) {
    const allCharities = await getActiveCharities();
    const filteredCharities = allCharities.filter(
      (charity) => charity.owner === address2
    );
    return filteredCharities;
  }
  async function getUserInActiveCharities(address2) {
    const allCharities = await getInActiveCharities();
    const filteredCharities = allCharities.filter(
      (charity) => charity.owner === address2 && !charity.active
    );
    return filteredCharities;
  }
  async function donate(pId, amount) {
    try {
      const data = await contract.call("donateToCharity", [pId], {
        value: parseEther(amount)
      });
      return true;
    } catch (error) {
      console.error("Delete charity failed", error);
      return false;
    }
  }
  async function getDonations(pId) {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;
    const parsedDonations = [];
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: formatEther(donations[1][i].toString())
      });
    }
    return parsedDonations;
  }
  async function removeCharity(charityId) {
    try {
      const data = await contract.call("deleteCharity", [charityId]);
      console.log("Charity deleted", data);
      return true;
    } catch (error) {
      console.error("Delete charity failed", error);
      return false;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateContext.Provider,
    {
      value: {
        address,
        contract,
        createCharity: publishCharity,
        getActiveCharities,
        getInActiveCharities,
        getUserActiveCharities,
        getUserInActiveCharities,
        donate,
        getDonations,
        removeCharity,
        editCharity,
        connect,
        disconnect,
        isContractLoading,
        isWriteLoading,
        writeError
      },
      children
    }
  );
};
const useStateContext = () => reactExports.useContext(StateContext);
const project_logo = "/Empowering_Charity/assets/project_logo-BQRC_z1N.svg";
const profile_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nO1UsUrDUBSNLk4uCi7qVh0cbPtuI+IHuLn5K7rWqfTetIPgT5TQyQoi/YkuLuLWzdR7k251iNwkaJEmRBJxyYEDj5vzzsm79yWWVaEMnHS9PUPiGpJACSTDBvoH5Zkjz4AkXKbW6n1vt3CAIXFjU75XQyUgj6Ia8qCMgEDNlt+21ZvtJyeR4gEovpppq/4kAEiGSTtGGhIPnB+iOZC4hQPsnn9oiL1VQ252pGaVgXo82IG2KyKJW5p5hXS0w/WWIzYg3wDJGIifgWQeM1qPDUlbNaq18qJ2G24A8TWgTH/enFSiTA3yle7NND925juAMvm6iiSvgHzXdN4vGk5wdIZvm0pda02fRZrvoIl6pAYY4qfkv6MtOM915DBcgy5fAvFLsvcxK+BDRad92bJ+Cbvjbydf/CJVlLvnlM3/C6hgrcAnsqFvzYgg98cAAAAASUVORK5CYII=";
const profile_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTUlEQVR4nO1UPUsDQRBdbaxsFNKonVrYB5LMRLsQmUk04F/RNv6I/IlwpDKCSP6ETQrFJp4zqAn40WlxMneniORCwp3Y5MGDZZl57/bN7To3Rxa4q+6tK4MnhK9GZew80u5WhuI4UsbgF0cDKqylNlAGzwSF4MwEjcLQjfawndpAokiCn1/rH5Q3QgOG5/QGjC8mZlH9iYEydmKxrpnEMzmP5gBeagN/H7eVcDhuyA+1wqbLAgMbLGHb4ooiAy8z8TkSETTdonAxrwSnQtBThr4QvBnjdU8Ym1ZjtW5aXFerS0p4ooz+mD8nib5y+dh6J4pro5gTgquvRmG8FcKWMtSkjjtP9dKy0dbhHmHLar7rrbdRzCUaCOFlfIH691yqTHPiwLkFITwSwpu49yLZgOEjfHcqhRU3I/zD/Gp86vfEohkyDybx/wzmcGPwCdzZSipQTkvlAAAAAElFTkSuQmCC";
const sun = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23dee203'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M12%203V4M12%2020V21M4%2012H3M6.31412%206.31412L5.5%205.5M17.6859%206.31412L18.5%205.5M6.31412%2017.69L5.5%2018.5001M17.6859%2017.69L18.5%2018.5001M21%2012H20M16%2012C16%2014.2091%2014.2091%2016%2012%2016C9.79086%2016%208%2014.2091%208%2012C8%209.79086%209.79086%208%2012%208C14.2091%208%2016%209.79086%2016%2012Z'%20stroke='%23dee203'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const moon = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M3.32031%2011.6835C3.32031%2016.6541%207.34975%2020.6835%2012.3203%2020.6835C16.1075%2020.6835%2019.3483%2018.3443%2020.6768%2015.032C19.6402%2015.4486%2018.5059%2015.6834%2017.3203%2015.6834C12.3497%2015.6834%208.32031%2011.654%208.32031%206.68342C8.32031%205.50338%208.55165%204.36259%208.96453%203.32996C5.65605%204.66028%203.32031%207.89912%203.32031%2011.6835Z'%20stroke='%236b6b6b'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const category_icon_active = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='24px'%20height='24px'%3e%3cg%20fill='%23338af0'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M20,6h-8l-2,-2h-6c-1.1,0%20-2,0.9%20-2,2v12c0,1.1%200.9,2%202,2h16c1.1,0%202,-0.9%202,-2v-10c0,-1.1%20-0.9,-2%20-2,-2zM20,18h-16v-10h16z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const search_dark = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16.6725%2016.6412L21%2021M19%2011C19%2015.4183%2015.4183%2019%2011%2019C6.58172%2019%203%2015.4183%203%2011C3%206.58172%206.58172%203%2011%203C15.4183%203%2019%206.58172%2019%2011Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const search_light = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6725%2016.6412L21%2021M19%2011C19%2015.4183%2015.4183%2019%2011%2019C6.58172%2019%203%2015.4183%203%2011C3%206.58172%206.58172%203%2011%203C15.4183%203%2019%206.58172%2019%2011Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const money = "data:image/svg+xml,%3csvg%20width='32'%20height='40'%20viewBox='0%200%2032%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4997%209.979H9.16634C8.66634%209.979%208.33301%2010.3123%208.33301%2010.8123C8.33301%2011.3123%208.66634%2011.6457%209.16634%2011.6457H22.4997C22.9997%2011.6457%2023.333%2011.3123%2023.333%2010.8123C23.333%2010.3123%2022.9997%209.979%2022.4997%209.979Z'%20fill='white'/%3e%3cpath%20d='M8.4999%207.81266C8.4999%208.146%208.83324%208.31266%209.16657%208.31266H22.4999C22.8332%208.31266%2023.1666%208.146%2023.1666%207.81266L26.4999%201.146C26.6666%200.812663%2026.6666%200.479329%2026.3332%200.145996C26.1666%20-0.0206706%2025.8332%20-0.0206706%2025.4999%200.145996L19.3332%203.146L16.4999%200.312663C16.1666%20-0.0206706%2015.6666%20-0.0206706%2015.3332%200.312663L12.3332%203.146L6.16657%200.145996C5.83324%20-0.0206706%205.4999%20-0.0206706%205.16657%200.145996C4.83324%200.312663%204.9999%200.812663%205.16657%201.146L8.4999%207.81266Z'%20fill='white'/%3e%3cpath%20d='M23.1667%2013.6456C23%2013.4789%2022.6667%2013.3123%2022.5%2013.3123H9.16667C9%2013.3123%208.66667%2013.4789%208.5%2013.6456C8.16667%2013.9789%200%2022.6456%200%2027.4789C0%2034.3123%207.16667%2039.9789%2015.8333%2039.9789C24.5%2039.9789%2031.6667%2034.3123%2031.6667%2027.4789C31.6667%2022.6456%2023.5%2013.9789%2023.1667%2013.6456ZM16.6667%2033.3123V34.1456C16.6667%2034.6456%2016.3333%2034.9789%2015.8333%2034.9789C15.3333%2034.9789%2015%2034.6456%2015%2034.1456V33.3123C13.1667%2032.9789%2011.8333%2031.8123%2011.6667%2030.3123C11.6667%2029.8123%2012%2029.4789%2012.5%2029.4789C13%2029.4789%2013.3333%2029.8123%2013.3333%2030.3123C13.3333%2030.9789%2014.1667%2031.6456%2015%2031.8123V28.4789C12.8333%2027.9789%2011.6667%2026.8123%2011.6667%2025.3123C11.6667%2023.6456%2013.1667%2022.3123%2015%2021.9789V21.1456C15%2020.6456%2015.3333%2020.3123%2015.8333%2020.3123C16.3333%2020.3123%2016.6667%2020.6456%2016.6667%2021.1456V21.6456C18.5%2021.9789%2019.8333%2023.1456%2020%2024.6456C20%2025.1456%2019.6667%2025.4789%2019.1667%2025.4789C18.6667%2025.4789%2018.3333%2025.1456%2018.3333%2024.6456C18.3333%2023.9789%2017.5%2023.3123%2016.6667%2023.1456V26.4789C18.8333%2026.9789%2020%2028.1456%2020%2029.6456C20%2031.6456%2018.5%2032.9789%2016.6667%2033.3123Z'%20fill='white'/%3e%3cpath%20d='M16.667%2028.4785V31.4785C17.667%2031.3119%2018.3337%2030.6452%2018.3337%2029.9785C18.3337%2029.3119%2017.8337%2028.8118%2016.667%2028.4785Z'%20fill='white'/%3e%3cpath%20d='M13.333%2024.9788C13.333%2025.6454%2013.833%2026.1454%2014.9997%2026.4788V23.4788C13.9997%2023.6454%2013.333%2024.3121%2013.333%2024.9788Z'%20fill='white'/%3e%3c/svg%3e";
const BlueLoader = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:auto;background:transparent;display:block;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3cg%20transform='rotate(0%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.9166666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(30%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.8333333333333334s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(60%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.75s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(90%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.6666666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(120%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.5833333333333334s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(150%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.5s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(180%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.4166666666666667s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(210%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.3333333333333333s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(240%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.25s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(270%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.16666666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(300%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.08333333333333333s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(330%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%233498db'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='0s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3c/svg%3e";
const RedLoader = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:auto;background:transparent;display:block;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3cg%20transform='rotate(0%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.9166666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(30%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.8333333333333334s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(60%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.75s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(90%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.6666666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(120%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.5833333333333334s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(150%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.5s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(180%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.4166666666666667s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(210%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.3333333333333333s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(240%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.25s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(270%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.16666666666666666s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(300%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='-0.08333333333333333s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(330%2050%2050)'%3e%3crect%20x='47'%20y='24'%20rx='2.52'%20ry='2.52'%20width='6'%20height='12'%20fill='%23e74c3c'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1s'%20begin='0s'%20repeatCount='indefinite'%3e%3c/animate%3e%3c/rect%3e%3c/g%3e%3c/svg%3e";
const thirdweb = "/Empowering_Charity/assets/thirdweb-B5ZT6TZm.png";
const home_buttom = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='24px'%20height='24px'%3e%3cg%20fill='%23338af0'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M12,2.09961l-11,9.90039h3v9h7v-6h2v6h7v-9h3zM12,4.79102l6,5.40039v0.80859v8h-3v-6h-6v6h-3v-8.80859z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const add_charity = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABw0lEQVR4nN1VuU4DMRCNwtFwfEhAiNiBggYJqIEg4CMQNx+wJTveipKWU+J3CBCuGiFIZkJooMBoHG8CYp3dbIOUkUZaecbvjefaTKarJefpfhHQqlB4JhSWJdA7K3+bs4BW2ScVeN7HJaHoUSrSbRXwQSgsJkf2dFYqUiGAALoUUN2a8CsjY8HTACt/8xnbfvgB343Fb4HjhwBaa3dp5UL3SJ/W2bdJEpeWJniAM0kfnQecDUkk4KK7oDbnJvIORSrasMHdy0Pd98eBOyLMOT/dAaJZo2x8RygqGR8fl/8SAJ4bY1DbbBOldhEYO+COfcVJFMEtG8eDt1xagkJQGTVZUFiOulxnY857HowClQ796TsFL0P2vO4kYKe0BJMHr8O2jrV/SBHgqTVupyWQgHsW48jdpopKadtUAl4525QHjRdXw4HWMx2KgOqWbdG7yEEzTgqL4arg8U8KXlA0JwE/JeBXAarzMZEQhCQ8/q50sUx7utdEzuCNPbQfH46nsy0SMjXhCeUO4RlhbXQL7jZzDvglFPmJ1nUovBXN4or74XDOVXUhMfAvkkPdxx3Bu0UC3thhrEuF1xLw2NhcBe0a+QYkkOjhEuLiWgAAAABJRU5ErkJggg==";
const phone_icon_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR4nO1Uy2oUURDtgDsfqwgqCCLowoWmb3VEgg+CuFP8AB+48Qd0MS6UgBIyVdMKWSpIPsCFUVwrbgQRFYWQhR8gcbSretILFbSlblcnPU1mnIlml4IL3fdW1anHqQqCTRlGHMoLIMlXD/8IW8m5qg6gZIC8CCgPoClnhgJQh90Aoifu1qm9o7wcj9ODgwEgt73RvWy3I75qDuaqOodbn7dGMYeAchOQlwwoCVvJyUEyeOMNmslxQJ4047e99Cewvd2RPCpBxjA98JcMZM5qfy2akf32/evQ1NK2ik6mvVrpTZ6PlCB63xfAEV8pysKvAHnBjN6dmsq3rGbZRYJpvTs6+3UHEH/RuxD5dE+AsenOTkD+WXHyUe+qOiG29wBKoySEw/SsAd8ym/v9s0CZt+g+1Z3Xytkwh8/13ze+yH6xP0AzPWbsyY7M8L5eeuOU7fIZkHTKhhvgcl+AIjp+ZvWfDzZCjEHLlkljQ0BCSi9aTX9HmF5aS0fZpQxaN4gjvlOCAMmN6hvEnVGH8l7nRIdRZ8ih3AVKzg+OkOcjgHy7pK0jeRLF3/YWdJYPa+wtDeb78JmgXFC2lKxRCpuzBd8v5MmV3UWSB+uRyDuSp7VodeKvO0xO+AH8F4BSomY6ASSPaxPfdYL/IRB3RoGSy47koSN+Xewivz78ZG9KMKj8AcRZtyko8jWpAAAAAElFTkSuQmCC";
const phone_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR4nO1Uv0scQRTegJ3RSiERBBG0twlh39tbRA7NvrdelSo/SJN/ICm00Eax0z9AQfwDLNSQOpLmIEgiCYhF2tuZvTOkSK6IAT15u7Pn7umdd/7ofDCwO/Nmvve9+b6xrPvoJBTjrmas1QfhsWbwszlQ1YSHmmEt9CHfEUB8YAqAo7GcybmwDp9Lz3C0TQA4kk2VSedxQPhWvhXBRiYnn+8uTefGFMOcIiwboN/Kc3LtMNiTDQEDas8ej9sEX5vlH03bPZphMwGpUG6kJYBUG1XN+C4kHI4Z4En5ufuwnsNQje8qvpuaZT1IQGS+NQPfeWMOLWqCA8PgW811u+o5qf4rhiWZ+zX1pFczVGQuZJxozmAK+xXj/9QBP2SuoS0DmnCmLggf2bCfN/tWr2rTtmHxs/HwDFsBidvySf7l4o20D1sChD48NdVXdcEdapZX9txHppA/hlmPUd3flgARC4aPJnnbuosQBUklhvLMnYAoD1+aHp8qxleX5Yi6REHXBtGEiwmIZphNrwXs9mnGffGJmDHyEMFK6DuFtgFiE+HCuWxxp1RwBiM5E3y/5N2St+lfx0wCsl+IWhLViISNCQ8ix3v2ePJ2ybCuf/H4IeNkwqIieB+Q7UQGvAlAEmXPsTXBVtrxjcO6jQjY7VMErxXjumL4Er1FhMeJs+/DajfOAEGaiMt2pYDMAAAAAElFTkSuQmCC";
const inactive_state = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR4nN1VzW4aQQxGrdJLm96KyiuQ3pAqgY1oDwiEDQpV4BUiUH+SvkBvVdXHaJvmeQpRkhJyZAaSXiJySC6h8uzOsGJ3WZqol1gaaWV/459vbG8qda/loJV9pOvQVgQ/NeGxYriUY74J98QmmFs5VzV4oxhPNeNs2VGMwxFBc2XHs0+pB4rgq3NA8EszvlcNzOpy+bE5ddgYE3xQDL1AoC9yNzlz5xyuFMP2skteMtgRrA2SSMvcOZZWrVoTvLJBRoybkSB5LMu5ZD6vCDu6mU+HnDbzabE5HGPXoxRPZrncWjiLOrQt55YWd4mxHwxinIvOs3UNXa3WQ6cj3ArTw7Bv6KnhO6er4jP3kIRHZ5ViZlE3qZWeW/yIYMd/9B/hChh+m+gNzIaoYJdtP/i9SJ10lx/4OFwBwVSMk1bpSchWDWQdkbmV80Zh3ad5eucAZ5ViZhH3p/ryqV/dxf+hiPIvllCEe2KUCY3MnDxaoh7e4Rk/enr4Ft+mDL1btynhQWyb+oM29AGdfx00TfDWT3AQOWgishXtqpDxjwRFiK4VXmvCa8V4M6ZCYylYFlZgH3Wl9Dis2EzmhNc+XZ8TszEb0gVBw7+Z0DpsSAvLkW5RjLuOc8Ybcb7SurYiW1EWV/IPBwaJtMRWk8utSUfIbpGWlGH0BhIONcN3scU+6L2RvzWnAnD2JPLYAAAAAElFTkSuQmCC";
const active_state = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='24px'%20height='24px'%3e%3cg%20fill='%23338af0'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M12,2c-5.514,0%20-10,4.486%20-10,10c0,5.514%204.486,10%2010,10c5.514,0%2010,-4.486%2010,-10c0,-1.126%20-0.19602,-2.2058%20-0.54102,-3.2168l-1.61914,1.61914c0.105,0.516%200.16016,1.05066%200.16016,1.59766c0,4.411%20-3.589,8%20-8,8c-4.411,0%20-8,-3.589%20-8,-8c0,-4.411%203.589,-8%208,-8c1.633,0%203.15192,0.49389%204.41992,1.33789l1.43164,-1.43164c-1.648,-1.194%20-3.66656,-1.90625%20-5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const profile_picture_active = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M12.12%2012.78C12.05%2012.77%2011.96%2012.77%2011.88%2012.78C10.12%2012.72%208.71997%2011.28%208.71997%209.50998C8.71997%207.69998%2010.18%206.22998%2012%206.22998C13.81%206.22998%2015.28%207.69998%2015.28%209.50998C15.27%2011.28%2013.88%2012.72%2012.12%2012.78Z'%20stroke='%233498db'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.74%2019.3801C16.96%2021.0101%2014.6%2022.0001%2012%2022.0001C9.40001%2022.0001%207.04001%2021.0101%205.26001%2019.3801C5.36001%2018.4401%205.96001%2017.5201%207.03001%2016.8001C9.77001%2014.9801%2014.25%2014.9801%2016.97%2016.8001C18.04%2017.5201%2018.64%2018.4401%2018.74%2019.3801Z'%20stroke='%233498db'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%233498db'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const profile_picture_inactive = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23E74C3C'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M12.12%2012.78C12.05%2012.77%2011.96%2012.77%2011.88%2012.78C10.12%2012.72%208.71997%2011.28%208.71997%209.50998C8.71997%207.69998%2010.18%206.22998%2012%206.22998C13.81%206.22998%2015.28%207.69998%2015.28%209.50998C15.27%2011.28%2013.88%2012.72%2012.12%2012.78Z'%20stroke='%23E74C3C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.74%2019.3801C16.96%2021.0101%2014.6%2022.0001%2012%2022.0001C9.40001%2022.0001%207.04001%2021.0101%205.26001%2019.3801C5.36001%2018.4401%205.96001%2017.5201%207.03001%2016.8001C9.77001%2014.9801%2014.25%2014.9801%2016.97%2016.8001C18.04%2017.5201%2018.64%2018.4401%2018.74%2019.3801Z'%20stroke='%23E74C3C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23E74C3C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const name_icon_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nOWUOwoCMRCGtxK9iu2MIG5h6+qZbH0U1jOp7L2CeAcLGzMBQV09gL1KlpXVVVwf8YUDA+En+b/wD4nnfUMVB5McsnSRZIUkIZK0reYMgCQdZNkdN7BuuQSEkbGSCpDxozVJ6AwArNfRrcn4B4DVbjcgUweSRTqGRzvyUiY4Argzx2RG8yTjWHQVKab9PgYANW0Ay/IsU2cASmZzkmnqXPr89wBQmcBCrHmJpfY7Qy735gVQugksY2TZ2LZrq1X7s3xmRKS3VwHIenTllQ6fB8QbLjbpbWZEWYBnC98+ZHj5Z6dMYAWX5qU73o3337UHYHspMVPRY3gAAAAASUVORK5CYII=";
const name_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nOWUTQrCMBCFuxK9iicQZ0q32hmXPU63/pxJvIML90K1L7h2XyWtlBKpokZUHBgIQ+Z94U2SIPiG2CT9DpQWUAKEcwjPbM0bAMpzo3xqJpSn/gDCuRU9xOEwnzCVAOHcH0DJWFErXgOUzAMnHMZGaefa8HzSDkrjGuBXnKsUyhqAqujLUuPqfQxg4lCM8v7KU28Abcym6anT5/Z/DwBK4xIilCHm0e8MOUsGPQilUF5D6FhmtU63UdR1+9x+KBc3ARBatT0gKC9fB1w2tACKexbdBbwa5gNDpvd+drD3XSjzKY4H3k3w33EGq7z5Y2cN+5EAAAAASUVORK5CYII=";
const location_icon_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nMVVO2tUURDeVCI+iWITRAMiIrohmXPXZYkiVsagoMFCrbT1AfoDtNLKFMHkztyND7DRQqtYCCqIEYyVKRazd+ZeH9EyiC9MIWZlzj0bwz4wdyM4MLDnzOOb+ebc2Uzmf8uWIV4GQXjOoEwYlO9OJ4DkrNqWlDyPYQeQTBqSSiMFlFfq03rllCQH4mnj80Dh+tQqVQ+jw0BSroK01ImlhZLk+dFSe113o6V2QPngQM6kBjAkLy0VPg84wH4g+WiTBlFfcidHHV0vWgH4psFKiU3mqq12pXe5IV7tOviaGgBIZmxwEK9pBtB16+3a5Cwz6TtAHk8Awn57DqI+BdHkHsn+pEs+aEGRx1vp4EISLA+aFkH8MKGIz6cGyPrRBiD+YZDnjB/tqLXnMOxSm/qob2oAWyHyoBvi00yl0lZT/RNHz9VMqwJBef38sDE8Vr33kE9Uh6s+LQPYSn0+lbwe/mRGZKNbHxbUEJ/MLFkqlTYgGXNUPQLkx676sVraFi3Z25MrAKMDEPBxPXvXXq+z+2jBd6B3alMf9dWYvybuHn6zyaD4gDzrKPjV40f7kkRxL5D8tBrEvXqnNvVxT3VWYzVHw+QehXsszy6xIXlmkC+aQApVH0NyWnX+HEjBEF+yvg5Ic/T44e46AIP83rV/J1csd6alNVcsdwLyXQfyrs4BSGI3vHteMd6aFgCC8jZAue8ApM5B+QSSL+7jmdP9AsiXdd9AEO/U55kfnF5uFcOO7pE4a3w5BMRXDPFzG5PEfgaUvQ2r2IVTmwHl5p8hy6JVVwaQ3Gg65IWyfbi0Uv9odFXYt0/MOrzqK7K/kUO1JeskPKIxaWn9J/IbEm8Z5sZ8TR0AAAAASUVORK5CYII=";
const email_icon_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO2UQUoDUQyGh3Yn1AMUSq9gTdqFJ7CI0E2v4BVcduu2aE2eeIJuuvAUhYLLMslQZLQHUOhOGZlxHhbr9LUdFRfzQ+BBwv+9JI/neYX+jcD4J8D6hKxRngDSRzRBexUQJ3Kao4WwhCsAm8w7Cczy+aTrXeNqVt/WuHE5rSLp0AlIgmQBLOfdYVR2OveiEnJwBqQvyx5rAHKKLA/pwu6B/FaWd/PGP0DW8celdA5Gu05AfAYz30PSCyB5RZY3IDGtvuzb2u/yR7fTylefTIDV4XUAyDKxLwOMdpJgCdNuJ3GNy2d9opfOmPV5kx1tD0iFA60hySiJgda8DO0M2FQFYPcR/f5nZ4L2T0CAJWyyHrt7LfRXegcr+Mvby5QyUgAAAABJRU5ErkJggg==";
const email_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVR4nO2UQUrDUBCGg+4EPYAgvYJQKJj5s28z0+omV/AKLt16hV7BjQtPIRS8QmmTmUW7UXCnRB7pA9GmrzUqLvLDwDxm+D9m3uNFUat/I0sTNkFugrJZ0FyFBl8BQvPm5qiCabYGUBUbb0JqfHxBme41PevsarwYxccmuA0CqhHxYoyrMsv2Q8bldbSnjEtlPH/02ACgoQmmq/OjcdKrM8/T+FSFHqrJURgjCwJcXkj3QAU3yvSqjDcTjJf93pHvXVdfjOLDzz61AC9ldE0w8S+jEFy4cPmqf+J6Qj4bC6XfseBpmzvaGeCVnycnxnTnwuVRjb4N2FYtoMmKfvmzU6HBj0CYZpqiH5611V/pHZN1o7KwdGOUAAAAAElFTkSuQmCC";
const address_icon_active = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2UIUsEURSFBzSa/BUiJs8dEA0bLAarQcFgEPwBRsFqsyxz76BgFZOgXatRneDeM5ZVtGgR+8hbcFgmyfBEWPfAg8sN53vvwDtJMtb/UGpcgfJJjFWMA/N+8KwBYRHLXIYgNeB7GSsRafqNFkBy79SzsYLyA8bnVLndNOrsX01CeSjKF8nKuVYAybkoGTdhfBPzrTBL/piK8kCUu1AvoL31haNiuh3A/Bzm96K8RO4bon43uLXxGMYLMb+F8lqMN+0ist4etFxaO6smZrvFlCg/w59JrVyG8STA5jNfhfK9dUTJkKB+CvPXAET+MDN4gXkf5js/AsSQjB4Av91FaWjTiBA023SsP9UXTxHm2hMI5IoAAAAASUVORK5CYII=";
const address_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2UPUoEQRCFBzTcyFMYmArOVskEgsjWm3ACBQMDwQMYeoDNvMDCpoaCHmBTQ39OMDqvZkETMR9pWV2ZSIYWYd0HTRcVvK+roF+SLPU/xIHuOeTRoU2UY1IGzy9AaEQzxxwyB8yasTbibb/FAhCafdbhpumrQ58q0+O2UZNlqw49J4Ru6UYnwHSw3Sf00E2fHXoUaiLdJHRIyClNH+pc98vdrbWOE8glofeEXNeQA0LuPl5tOqLJFU1u3WRCyE03AOSsylWaoliZFlmPkLfwZ2roDk3GAea5wqEvnVeUfBNNLwjxAKyQrs8mKIn+yY8AMeQLCLBfziKGNI0JsVaaLvWnegeMYrwrk1oh6gAAAABJRU5ErkJggg==";
const category_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nGNgGAWDBjzztvJ67mP9+LmPzX+s2Nu6gSIL8BruQwVLCBruQyy2fvzMx9qThhbYgHz6CKcFZAcBIXNGLYCB0SAiCEaDiJIgIqKw86GgqAAVUCAJahj+zMvGg7BfRwG9AABcNUz1JUK1DQAAAABJRU5ErkJggg==";
const location_icon_inactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nMVVvYsTQRTfq0T85BSbQ/QasfCjUpJ9by4S7o5k39uLp6RQK239AP0DtNJK2+u01UKrsxBUECN4VlrqiagxO5NgCH5xFqKRNzsbwuUW3ZzgwIOdeb/3fu9rZj3vf6/FUmmNYTynGRY0wzcnCybAs6JblfM65cY04wvD2E2R54IZOvKec4K6ZnX044y/QSQimDWELxOSoTKRsiTO69O50YHspnOjhuGDw5zJTKAZnomxRG4JA0WGsSFONUPZnhFWLYbwaXYCgq9iLCWJM3LRuqzkrF06uNERfMlMYAjbYtyZnNyURvC2Utgc77E9DEHNGgeKbEYMZUsiDQ+w5EhDR1DLTKAZL8Q9gLupQTDcizF4PnsGs/lthnBJM/4ylN+zXN8i2B/rcEmwmQksCcE1V/NHXc8b6ddpgoeuJ1e9YVfEha1Js5shHuudk38iaa5ghiZwWZxykXYaFbVdnoaE1DCe9Fa7up43ognmXTPva4IH8ezD/PKy/X3UU1PrNPlBk+G47BuHD2yR8ey/B3ImOsEIVmz+6FgH+R2GYc4wfHc39KcJVVF0EQNqhh8i8m0DCVXRYiyx2MCc+Ehxriakzj3HjI8148VWoPxeZgynRZK96DTjJYvtEWEnIl8NloXwvbtYN02oxjOXNVTjmvCWI3k3mAHjG1ff240y7spKEHF+t2G84yrweqUIiprxs5sWuaE1zXBZ3ptmeWKvjGe9mltrhXJjzRD3Ncmf0YxXDMETaxNX4JMhOLRympXCTk1wI2lyJomfleupTe5frWphvfxo5Kmws8+wKM1LpigeBnglOosJ4IjYZC3rP1m/AXYt5I124HLeAAAAAElFTkSuQmCC";
const first_one = "/Empowering_Charity/assets/first_one-BcXDxX6Y.jpeg";
const first_two = "/Empowering_Charity/assets/first_two-DJd_kcUM.jpeg";
const first_three = "/Empowering_Charity/assets/first_three-DT1z4KEv.jpeg";
const second_one = "/Empowering_Charity/assets/second_one-BegYeiee.jpeg";
const second_two = "/Empowering_Charity/assets/second_two-BWL8RT00.jpeg";
const second_three = "/Empowering_Charity/assets/second_three-DsGF71_4.jpeg";
const second_four = "/Empowering_Charity/assets/second_four-DR2SyuAf.jpeg";
const second_five = "/Empowering_Charity/assets/second_five-CGhIys28.jpeg";
const second_six = "/Empowering_Charity/assets/second_six-DFqE3bJg.jpeg";
const third_one = "/Empowering_Charity/assets/third_one-DDYiKOl-.jpeg";
const third_two = "/Empowering_Charity/assets/third_two-K9Aq_tTh.jpeg";
const third_three = "/Empowering_Charity/assets/third_three-BuLXYnJM.jpeg";
const image_big_one = "/Empowering_Charity/assets/image_big_one-CLdM4uzA.png";
const image_big_two = "/Empowering_Charity/assets/image_big_two-aChY8AVr.png";
const navlinks = [
  {
    name: "home",
    imgUrl: home_buttom,
    link: "/Empowering_Charity/"
  },
  {
    name: "create-charity",
    imgUrl: add_charity,
    link: "/Empowering_Charity/Create_Charity"
  },
  {
    name: "active-state",
    imgUrl: active_state,
    link: "/Empowering_Charity/View_Active_Charity"
  },
  {
    name: "inactive-state",
    imgUrl: inactive_state,
    link: "/Empowering_Charity/View_InActive_Charity"
  },
  {
    name: "profile",
    imgUrl: "",
    link: "/Empowering_Charity/Profile"
  }
];
const getUpdatedNavLinks$1 = (showActive) => {
  return navlinks.map((link) => {
    if (link.name === "profile") {
      return {
        ...link,
        imgUrl: showActive ? profile_active : profile_inactive
      };
    }
    return link;
  });
};
const Icon$1 = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: `links w-[48px] h-[48px] rounded-[10px] ${isActive === name ? "bg-[var(--active-icon-bg-color)]" : ""} flex justify-center items-center ${!disabled && "cursor-pointer"} ${styles}`,
    onClick: handleClick,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imgUrl,
        className: `w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`,
        alt: `${name}-icon`
      }
    )
  }
);
function DefaultSidebar({ showActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = reactExports.useState(location.pathname);
  reactExports.useEffect(() => {
    const activeLink = getUpdatedNavLinks$1(showActive).find(
      (link) => link.link === location.pathname
    );
    if (activeLink) {
      setIsActive(activeLink.name);
    }
  }, [location.pathname, showActive]);
  const updatedNavlinks = getUpdatedNavLinks$1(showActive);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center flex-col sticky top-5 h-[30px] gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon$1,
      {
        styles: "logo w-[52px] h-[52px] bg-[var(--icon-bg-color)] rounded-full",
        imgUrl: project_logo
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sidebar flex-1 flex flex-col justify-between object-contain items-center bg-[var(--sidebar-bg-color)] rounded-[20px] w-[76px] py-4 mt-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center items-center gap-6", children: updatedNavlinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon$1,
        {
          ...link,
          isActive,
          handleClick: () => {
            if (!link.disabled) {
              setIsActive(link.name);
              navigate(link.link);
            }
          }
        },
        link.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggleIcon, {})
    ] })
  ] });
}
const getUpdatedNavLinks = (showActive) => {
  return navlinks.map((link) => {
    if (link.name === "profile") {
      return {
        ...link,
        imgUrl: showActive ? profile_active : profile_inactive
      };
    }
    return link;
  });
};
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: `links w-[48px] h-[48px] rounded-[10px] ${isActive === name ? "bg-[var(--active-icon-bg-color)]" : ""} flex justify-center items-center ${!disabled && "cursor-pointer"} ${styles}`,
    onClick: handleClick,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imgUrl,
        className: `w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`,
        alt: `${name}-icon`
      }
    )
  }
);
function MobileSidebar({ showActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = reactExports.useState(location.pathname);
  reactExports.useEffect(() => {
    const activeLink = getUpdatedNavLinks(showActive).find(
      (link) => link.link === location.pathname
    );
    if (activeLink) {
      setIsActive(activeLink.name);
    }
  }, [location.pathname, showActive]);
  const updatedNavlinks = getUpdatedNavLinks(showActive);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed top-0 w-full bg-[var(--sidebar-bg-color)] rounded-b-lg flex flex-row justify-between items-center shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        styles: "logo w-[40px] h-[40px] bg-[var(--icon-bg-color)] rounded-full",
        imgUrl: project_logo
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-center items-center", children: updatedNavlinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          ...link,
          isActive,
          handleClick: () => {
            if (!link.disabled) {
              setIsActive(link.name);
              navigate(link.link);
            }
          }
        },
        link.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggleIcon, {})
  ] });
}
function CustomButtom(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: props.btnType,
      className: `custom-buttom custom-buttom-responsive-text font-epilogue font-semibold text-[16px] leading-[26px] text-[var(--custombuttom-text-color)] min-h-[52px] px-4 rounded-[10px] ${props.styles}`,
      onClick: props.handleClick,
      children: props.title
    }
  );
}
const ThemeContext = reactExports.createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = reactExports.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "light";
  });
  reactExports.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme
      },
      children
    }
  );
};
const useTheme = () => reactExports.useContext(ThemeContext);
function FormField(props) {
  const { theme } = useTheme();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      borderColor: "#3a3a43",
      color: theme === "dark" ? "#ffffff" : "#000000",
      minHeight: "56px",
      borderRadius: "10px",
      paddingLeft: "10px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#3a3a43"
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      borderRadius: "10px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000"
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#4b6264",
      paddingLeft: "10px"
    }),
    input: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
      paddingLeft: "10px"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#4b5264" : "#888888"
    }),
    indicatorSeparator: (provided) => ({
      display: "none"
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme === "dark" ? "#3498db" : "#cccccc" : state.isFocused ? theme === "dark" ? "#1a1a2e" : "#afafaf" : theme === "dark" ? "#1a1a2e" : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: theme === "dark" ? "#3498db" : "#cccccc",
        color: theme === "dark" ? "#ffffff" : "#000000"
      }
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex-1 w-full flex flex-col ", children: [
    props.labelName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)] mb-[10px]", children: props.labelName }),
    props.isTextArea ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        required: true,
        value: props.value,
        onChange: props.handleChange,
        rows: 10,
        placeholder: props.placeholder,
        className: "py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
      }
    ) : props.isSelect ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      StateManagedSelect$1,
      {
        required: true,
        options: props.options,
        value: props.options.find((option) => option.value === props.value),
        onChange: (selectedOption) => props.handleChange({ target: { value: selectedOption.value } }),
        styles: customStyles,
        placeholder: props.placeholder
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        required: true,
        value: props.value,
        onChange: props.handleChange,
        type: props.inputType,
        step: "0.1",
        min: props.min,
        placeholder: props.placeholder,
        className: "py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
      }
    )
  ] });
}
function DisplayActiveCharities({
  title,
  isLoading,
  charities
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isSmallScreen, setIsSmallScreen] = reactExports.useState(window.innerWidth < 640);
  const { address, connect, disconnect } = useStateContext();
  reactExports.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    navigate(`./?query=${searchQuery}`);
  }, [searchQuery, navigate]);
  function handleNavigate(charity) {
    navigate(`/Empowering_Charity/Active_Charity_Details/${charity.pId}`, { state: charity });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px] ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search for charities",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[72px] h-full rounded-[20px] bg-[#3498db] flex justify-center items-center cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: theme === "dark" ? search_dark : search_light,
            alt: "search",
            className: "w-[15px] h-[15px] object-contain"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row ml-auto sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomButtom,
        {
          btnType: "button",
          title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
          styles: address ? "bg-[#e74c3c] p-1" : "bg-[#3498db] p-1",
          handleClick: () => {
            if (address) disconnect();
            else connect();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "charitydetails-text-3 font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]", children: [
      title,
      " (",
      charities.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap mt-[20px] gap-[26px]", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader$1, {}),
      !isLoading && charities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[14px] leading-[30px]  text-[var(--text-color)]", children: "No result found." }),
      !isLoading && charities.length > 0 && charities.map((charity) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActiveFundCard,
        {
          ...charity,
          handleClick: () => handleNavigate(charity)
        },
        charity.pId
      ))
    ] })
  ] });
}
function DisplayInActiveCharities({
  title,
  isLoading,
  charities
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isSmallScreen, setIsSmallScreen] = reactExports.useState(window.innerWidth < 640);
  const { address, connect, disconnect } = useStateContext();
  reactExports.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    navigate(`./?query=${searchQuery}`);
  }, [searchQuery, navigate]);
  function handleNavigate(charity) {
    navigate(`/Empowering_Charity/InActive_Charity_Details/${charity.pId}`, { state: charity });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search for charities",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[72px] h-full rounded-[20px] bg-[#e74c3c] flex justify-center items-center cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: theme === "dark" ? search_dark : search_light,
            alt: "search",
            className: "w-[15px] h-[15px] object-contain"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row ml-auto sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomButtom,
        {
          btnType: "button",
          title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
          styles: address ? "bg-[#e74c3c] p-1" : "bg-[#3498db] p-1",
          handleClick: () => {
            if (address) disconnect();
            else connect();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "charitydetails-text-3 font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]", children: [
      title,
      " (",
      charities.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap mt-[20px] gap-[26px]", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
      !isLoading && charities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[14px] leading-[30px]  text-[var(--text-color)]", children: "No result found." }),
      !isLoading && charities.length > 0 && charities.map((charity) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        InActiveFundCard,
        {
          ...charity,
          handleClick: () => handleNavigate(charity)
        },
        charity.pId
      ))
    ] })
  ] });
}
function DisplayActiveUserCharities({
  title,
  isLoading,
  charities
}) {
  const navigate = useNavigate();
  function handleNavigate(charity) {
    navigate(`/Empowering_Charity/Active_Charity_Details/${charity.pId}`, { state: charity });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]", children: [
      title,
      " (",
      charities.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex flex-wrap mt-[20px] gap-[26px]", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader$1, {}),
      !isLoading && charities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-epilogue font-semibold text-[14px] leading-[30px] text-[var(--text-color)] ", children: "No result found." }),
      !isLoading && charities.length > 0 && charities.map((charity) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActiveFundCard,
        {
          ...charity,
          handleClick: () => handleNavigate(charity)
        },
        charity.pId
      ))
    ] })
  ] });
}
function DisplayInActiveUserCharities({
  title,
  isLoading,
  charities
}) {
  const navigate = useNavigate();
  function handleNavigate(charity) {
    navigate(`/Empowering_Charity/InActive_Charity_Details/${charity.pId}`, { state: charity });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]", children: [
      title,
      " (",
      charities.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex flex-wrap mt-[20px] gap-[26px]", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
      !isLoading && charities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-epilogue font-semibold text-[14px] leading-[30px] text-[var(--text-color)]", children: "No result found." }),
      !isLoading && charities.length > 0 && charities.map((charity) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        InActiveFundCard,
        {
          ...charity,
          handleClick: () => handleNavigate(charity)
        },
        charity.pId
      ))
    ] })
  ] });
}
function daysLeft(deadline) {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1e3 * 3600 * 24);
  return Math.floor(remainingDays);
}
function calculateBarPercentage(goal, raisedAmount) {
  const percentage = Math.round(raisedAmount * 100 / goal);
  return percentage;
}
function checkIfImage(url, callback) {
  const img = new Image();
  img.src = url;
  if (img.complete) callback(true);
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
}
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,9}$/;
  return phoneRegex.test(phoneNumber);
}
const categoryOptions = [
  { value: "Education", label: "Education" },
  { value: "Health", label: "Health" },
  { value: "Environment", label: "Environment" },
  { value: "Animal Welfare", label: "Animal Welfare" },
  { value: "Poverty Relief", label: "Poverty Relief" },
  { value: "Children", label: "Children" },
  { value: "Disaster Relief", label: "Disaster Relief" },
  { value: "Arts Culture", label: "Arts & Culture" },
  { value: "Community Development", label: "Community Development" },
  { value: "Humanity", label: "Humanity" },
  { value: "Housing", label: "Housing" },
  { value: "Elderly Care", label: "Elderly Care" },
  { value: "Water Sanitation", label: "Water & Sanitation" },
  { value: "Research", label: "Research" },
  { value: "Disabilities", label: "Disabilities" },
  { value: "Religion", label: "Religion" },
  { value: "Refugee Support", label: "Refugee Support" },
  { value: "Food Security", label: "Food Security" },
  { value: "Wildlife Conservation", label: "Wildlife Conservation" },
  { value: "Education Infrastructure", label: "Education Infrastructure" },
  { value: "Veteran Support", label: "Veteran Support" }
];
const countryOptions = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "Brunei Darussalam", label: "Brunei Darussalam" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cabo Verde", label: "Cabo Verde" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo", label: "Congo" },
  {
    value: "Congo, Democratic Republic of the",
    label: "Congo, Democratic Republic of the"
  },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Côte d'Ivoire", label: "Côte d'Ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Greece", label: "Greece" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Holy See", label: "Holy See" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  {
    value: "Korea, Democratic People's Republic of",
    label: "Korea, Democratic People's Republic of"
  },
  { value: "Korea, Republic of", label: "Korea, Republic of" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  {
    value: "Lao People's Democratic Republic",
    label: "Lao People's Democratic Republic"
  },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macao", label: "Macao" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mexico", label: "Mexico" },
  {
    value: "Micronesia (Federated States of)",
    label: "Micronesia (Federated States of)"
  },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "North Macedonia", label: "North Macedonia" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Palestine", label: "Palestine" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Romania", label: "Romania" },
  { value: "Russian Federation", label: "Russian Federation" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  {
    value: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines"
  },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-Leste", label: "Timor-Leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States of America", label: "United States of America" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Viet Nam", label: "Viet Nam" },
  { value: "Western Sahara", label: "Western Sahara" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" }
];
function ActiveFundCard({
  pId,
  owner,
  title,
  name,
  target,
  deadline,
  amountCollected,
  image,
  category,
  country,
  phoneNumber,
  handleClick
}) {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const remainingDays = daysLeft(deadline);
  const [donators, setDonators] = reactExports.useState([]);
  const { getDonations } = useStateContext();
  reactExports.useEffect(() => {
    if (!isLoading) {
      fetchDonators();
    }
  }, [isLoading]);
  async function fetchDonators() {
    const data = await getDonations(pId);
    setDonators(data);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "box sm:w-[370px] w-full rounded-[20px] bg-[var(--activefundcard-bg-color)] cursor-pointer ",
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: "fund",
            className: "w-full h-[230px] object-cover rounded-[20px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[5px] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px] ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: name_icon_active,
                  alt: "name",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#338AF0]", children: name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: location_icon_active,
                  alt: "country",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#338AF0]", children: country })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[5px] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: category_icon_active,
                  alt: "category",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#338AF0]", children: category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px] ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: phone_icon_active,
                  alt: "phone_number",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#338AF0]", children: phoneNumber })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex mt-[15px] gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "fundcard-text font-epilogue font-semibold text-[16px] text-[var(--text-color)] text-left leading-[26px] hover:text-[#338AF0]", children: title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#338AF0]", children: donators.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#338AF0]", children: [
                donators.length == 1 ? "Donator" : "Donators",
                " "
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-wrap mt-[15px] gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#338AF0]", children: amountCollected }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#338AF0]", children: [
                "Raised of ",
                target,
                " ETH"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#338AF0]", children: remainingDays + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#338AF0]", children: "Days left" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-[20px] gap-[12px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: thirdweb,
                alt: "user",
                className: "icons w-1/2 h-1/2 object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text-exception flex-1 font-epilogue font-normal text-[11px] text-[var(--text-color)] truncate hover:text-[#338AF0]", children: [
              "by",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fundcard-text-exception text-[var(--text-color)] font-semibold hover:text-[#338AF0]", children: owner })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function InActiveFundCard({
  Id,
  owner,
  title,
  name,
  phoneNumber,
  target,
  amountCollected,
  image,
  category,
  country,
  handleClick
}) {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [donators, setDonators] = reactExports.useState([]);
  const { getDonations } = useStateContext();
  reactExports.useEffect(() => {
    if (!isLoading) {
      fetchDonators();
    }
  }, [isLoading]);
  async function fetchDonators() {
    const data = await getDonations(Id);
    setDonators(data);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "box sm:w-[370px] w-full rounded-[20px] bg-[var(--inactivefundcard-bg-color)] cursor-pointer",
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: "fund",
            className: "w-full h-[230px] object-cover rounded-[20px] opacity-60 brightness-110 "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[5px] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px] ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: name_icon_inactive,
                  alt: "name",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#e74c3c]", children: name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: location_icon_inactive,
                  alt: "country",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-medium text-[14px] text-[var(--text-color)] hover:text-[#e74c3c]", children: country })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[5px] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px] ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: category_icon_inactive,
                  alt: "category",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-medium text-[14px] text-[var(--text-color)] hover:text-[#e74c3c]", children: category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center mb-[18px] ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: phone_icon_inactive,
                  alt: "phone_number",
                  className: "icons w-[20px] h-[20px] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#e74c3c]", children: phoneNumber })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-wrap mt-[15px] gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "fundcard-text font-epilogue font-semibold text-[16px] text-[var(--text-color)] text-left leading-[26px] truncate hover:text-[#e74c3c]", children: title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#e74c3c]", children: donators.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#e74c3c]", children: [
                donators.length == 1 ? "Donator" : "Donators",
                " "
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-wrap mt-[15px] gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#e74c3c]", children: amountCollected }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#e74c3c]", children: [
                "Raised of ",
                target,
                " ETH"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "fundcard-text font-epilogue font-semibold  text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#e74c3c]", children: "0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fundcard-text mt-[3px] font-epilogue font-normal text-[13px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#e74c3c]", children: "Days left" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-[20px] gap-[12px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: thirdweb,
                alt: "user",
                className: "icons w-1/2 h-1/2 object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fundcard-text-exception flex-1 font-epilogue font-normal text-[11px] text-[var(--text-color)] truncate hover:text-[#e74c3c]", children: [
              "by",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fundcard-text-exception text-[var(--text-color)] font-semibold hover:text-[#e74c3c]", children: owner })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CountBoxActive({ title, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countbox-custom flex flex-col items-center w-[150px] ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "custom-buttom charitydetails-text-3 font-epilogue font-bold text-[30px] text-[var(--custombuttom-text-color)] p-3 bg-darkBlue rounded-t-[10px] w-full text-center truncate cursor-pointer", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "custom-buttom charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--custombuttom-text-color)] bg-[var(--countbox-active-color)] px-3 py-2 w-full rounded-b-[10px] text-center cursor-pointer", children: title })
  ] });
}
function CountBoxActiveInActive({ title, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countbox-custom flex flex-col items-center w-[150px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "custom-buttom font-epilogue charitydetails-text-3 font-bold text-[30px] text-[var(--custombuttom-text-color)] p-3 bg-[#e74c3c] rounded-t-[10px] w-full text-center truncate cursor-pointer", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "custom-buttom font-epilogue charitydetails-text-3 font-normal text-[16px] text-[var(--custombuttom-text-color)] bg-[var(--countbox-active-color)] px-3 py-2 w-full rounded-b-[10px] text-center cursor-pointer", children: title })
  ] });
}
function Loader$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: BlueLoader,
        alt: "loader",
        className: "w-[100px] h-[100px] object-contain"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-[20px] font-epilogue font-bold text-[20px] text-white text-center", children: [
      "Loading",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Please wait ",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "loading-dots", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" })
      ] })
    ] })
  ] });
}
function Loader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: RedLoader,
        alt: "loader",
        className: "w-[100px] h-[100px] object-contain"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-[20px] font-epilogue font-bold text-[20px] text-white text-center", children: [
      "Loading",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Please wait ",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "loading-dots", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" })
      ] })
    ] })
  ] });
}
function CharityPhotosStyle({ imageSRC }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box sm:w-[370px] w-full rounded-[20px] bg-[#34495e] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: imageSRC,
      alt: "Charity",
      className: "w-full h-full rounded-[20px]"
    }
  ) });
}
function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick: toggleTheme,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: "themetoggleicon cursor-pointer",
      children: isHovered ? theme === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: moon, className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sun, className: "w-6 h-6" }) : theme === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sun, className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: moon, className: "w-6 h-6" })
    }
  );
}
function Home() {
  const { address, connect, disconnect } = useStateContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-bar sticky flex flex-row w-full bg-[var(--home-bg-color)] h-[80px] rounded-[10px] justify-between items-center pr-[5px] pl-[15px] ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[var(--text-color)] flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 sm:mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text-title mb-10 sm:mb-6 font-epilogue", children: "Empowering Charity" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row ml-auto sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomButtom,
        {
          btnType: "button",
          title: address ? "Disconnect wallet" : "Connect wallet",
          styles: address ? "bg-[#e74c3c]" : "bg-[#3498db]",
          handleClick: () => {
            if (address) disconnect();
            else connect();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue", children: "Join us on a journey to build a brighter future for communities around the world. Empowering Charity leverages cutting-edge blockchain technology to ensure transparency and trust in every donation, empowering donors to see the real impact of their generosity." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex cursor-pointer justify-center mt-10 sm:mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image_big_one,
        className: "home-bigimage object-contain sm:w-1/2 sm:h-1/2 rounded-[20px]",
        alt: "Charity"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mt-[20px] gap-[26px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] font-epilogue", children: "Your generosity brings hope, lighting the path to a brighter future for those in need." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: first_one }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: first_two }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: first_three })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-t-2 border-[#3498db]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text-title-inner text-[var(--text-color)] mb-10 font-epilogue font-semibold", children: "Empower Gaza's Young Hearts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue", children: "With your generous donation, we can empower the children of Gaza, providing them with the education, healthcare, and opportunities they need to thrive." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_one }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_two }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_three }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_four }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_five }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: second_six })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-t-2 border-[#3498db]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col cursor-pointer items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue", children: "At Empowering Charity, we believe that every act of kindness has the potential to transform lives. Our mission is to connect generous hearts with meaningful causes, creating a network of support that brings hope, dignity, and opportunities to those who need it most." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl bg-[var(--text-color)] mb-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image_big_two,
            className: "home-bigimage object-contain w-[80%] h-[80%] sm:w-1/2 sm:h-1/2 rounded-[20px]",
            alt: "Charity"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue", children: "Your donation helps protect our planet and ensure a healthier, sustainable future for generations to come." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl text-[var(--text-color)] mb-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: third_one }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: third_two }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CharityPhotosStyle, { imageSRC: third_three })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-t-2 border-[#3498db]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "responsive-text text-xl text-[var(--text-color)] mb-10 font-epilogue", children: "Join us in making a lasting impact on our environment. Donate today!" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/Empowering_Charity/View_Active_Charity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-buttom bg-[#3498db] px-4 py-3 rounded-[10px] text-2xl flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "custom-buttom-responsive-text font-epilogue font-semibold text-[25px] text-[var(--custombuttom-text-color)]", children: "Donate Now!" }) }) })
      ] })
    ] })
  ] });
}
function ViewActiveCharity() {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [charities, setCharities] = reactExports.useState([]);
  const [filteredCharities, setFilteredCharities] = reactExports.useState([]);
  const { address, contract, getActiveCharities } = useStateContext();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  async function fetchCharities() {
    setIsLoading(true);
    const data = await getActiveCharities();
    setCharities(data);
    setIsLoading(false);
  }
  reactExports.useEffect(() => {
    if (contract) fetchCharities();
  }, [address, contract]);
  reactExports.useEffect(() => {
    if (searchQuery) {
      const filtered = charities.filter(
        (charity) => charity.title.toLowerCase().includes(searchQuery.toLowerCase()) || charity.description.toLowerCase().includes(searchQuery.toLowerCase()) || charity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCharities(filtered);
    } else {
      setFilteredCharities(charities);
    }
  }, [searchQuery, charities]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplayActiveCharities,
    {
      title: "All Active Charities",
      isLoading,
      charities: filteredCharities
    }
  );
}
function ViewInActiveCharity() {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [charities, setCharities] = reactExports.useState([]);
  const [filteredCharities, setFilteredCharities] = reactExports.useState([]);
  const { address, contract, getInActiveCharities } = useStateContext();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  async function fetchCharities() {
    setIsLoading(true);
    const data = await getInActiveCharities();
    setCharities(data);
    setIsLoading(false);
  }
  reactExports.useEffect(() => {
    if (contract) fetchCharities();
  }, [address, contract]);
  reactExports.useEffect(() => {
    if (searchQuery) {
      const filtered = charities.filter(
        (charity) => charity.title.toLowerCase().includes(searchQuery.toLowerCase()) || charity.description.toLowerCase().includes(searchQuery.toLowerCase()) || charity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCharities(filtered);
    } else {
      setFilteredCharities(charities);
    }
  }, [searchQuery, charities]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplayInActiveCharities,
    {
      title: "All In-Active Charities",
      isLoading,
      charities: filteredCharities
    }
  );
}
function ToggleButton({ active, onClick, label, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick,
      className: `profile-button responsive-text px-6 py-2 rounded-[10px] text-[var(--custombuttom-text-color)] ${color} text-[20px] ${active ? "border-4 shadow-md" : "border border-transparent shadow-none"}`,
      style: {
        borderColor: active ? "var(--profile-bg-color)" : "transparent"
      },
      children: label
    }
  );
}
function Profile({ showActive, setShowActive }) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [activeCharities, setActiveCharities] = reactExports.useState([]);
  const [inActiveCharities, setInActiveCharities] = reactExports.useState([]);
  const [filteredCharities, setFilteredCharities] = reactExports.useState([]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isSmallScreen, setIsSmallScreen] = reactExports.useState(window.innerWidth < 640);
  const [userActiveProfile, setUserActiveProfile] = reactExports.useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    country: ""
  });
  const [userInActiveProfile, setUserInActiveProfile] = reactExports.useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    country: ""
  });
  const {
    address,
    contract,
    connect,
    disconnect,
    getUserActiveCharities,
    getUserInActiveCharities
  } = useStateContext();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  reactExports.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    if (contract) {
      fetchActiveCharities();
      fetchInActiveCharities();
    }
  }, [address, contract]);
  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(address);
    setActiveCharities(data);
    setUserActiveProfile((prev) => ({
      ...prev,
      name: Array.from(
        new Set(data.map((item) => item.name).filter(Boolean))
      ).join(" | "),
      address: Array.from(
        new Set(data.map((item) => item.owner).filter(Boolean))
      ).join(" | "),
      phoneNumber: Array.from(
        new Set(data.map((item) => item.phoneNumber).filter(Boolean))
      ).join(" | "),
      email: Array.from(
        new Set(data.map((item) => item.email).filter(Boolean))
      ).join(" | "),
      country: Array.from(
        new Set(data.map((item) => item.country).filter(Boolean))
      ).join(" | ")
    }));
    setIsLoading(false);
  }
  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(address);
    setInActiveCharities(data);
    setUserInActiveProfile((prev) => ({
      ...prev,
      name: Array.from(
        new Set(data.map((item) => item.name).filter(Boolean))
      ).join(" | "),
      address: Array.from(
        new Set(data.map((item) => item.owner).filter(Boolean))
      ).join(" | "),
      phoneNumber: Array.from(
        new Set(data.map((item) => item.phoneNumber).filter(Boolean))
      ).join(" | "),
      email: Array.from(
        new Set(data.map((item) => item.email).filter(Boolean))
      ).join(" | "),
      country: Array.from(
        new Set(data.map((item) => item.country).filter(Boolean))
      ).join(" | ")
    }));
    setIsLoading(false);
  }
  const activeName = userActiveProfile.name;
  const inactiveName = userInActiveProfile.name;
  const uniqueActiveNames = Array.from(new Set([activeName].filter(Boolean)));
  const uniqueInactiveNames = Array.from(
    new Set([inactiveName].filter(Boolean))
  );
  const activeNamesList = uniqueActiveNames.length > 0 ? uniqueActiveNames.map((name, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    name,
    index < uniqueActiveNames.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `active-${index}`)) : "N/A";
  const inactiveNamesList = uniqueInactiveNames.length > 0 ? uniqueInactiveNames.map((name, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    name,
    index < uniqueInactiveNames.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `inactive-${index}`)) : "N/A";
  const activeCountry = userActiveProfile.country;
  const inactiveCountry = userInActiveProfile.country;
  const uniqueActiveCountries = Array.from(
    new Set([activeCountry].filter(Boolean))
  );
  const uniqueInactiveCountries = Array.from(
    new Set([inactiveCountry].filter(Boolean))
  );
  const activeCountriesList = uniqueActiveCountries.length > 0 ? uniqueActiveCountries.map((country, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    country,
    index < uniqueActiveCountries.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `active-${index}`)) : "N/A";
  const inactiveCountriesList = uniqueInactiveCountries.length > 0 ? uniqueInactiveCountries.map((country, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    country,
    index < uniqueInactiveCountries.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `inactive-${index}`)) : "N/A";
  const activePhoneNumber = userActiveProfile.phoneNumber;
  const inactivePhoneNumber = userInActiveProfile.phoneNumber;
  const uniqueActivePhoneNumbers = Array.from(
    new Set([activePhoneNumber].filter(Boolean))
  );
  const uniqueInactivePhoneNumbers = Array.from(
    new Set([inactivePhoneNumber].filter(Boolean))
  );
  const activePhoneNumbersList = uniqueActivePhoneNumbers.length > 0 ? uniqueActivePhoneNumbers.map((phoneNumber, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    phoneNumber,
    index < uniqueActivePhoneNumbers.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `active-${index}`)) : "N/A";
  const inactivePhoneNumbersList = uniqueInactivePhoneNumbers.length > 0 ? uniqueInactivePhoneNumbers.map((phoneNumber, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    phoneNumber,
    index < uniqueInactivePhoneNumbers.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `inactive-${index}`)) : "N/A";
  const activeEmail = userActiveProfile.email;
  const inactiveEmail = userInActiveProfile.email;
  const uniqueActiveEmails = Array.from(new Set([activeEmail].filter(Boolean)));
  const uniqueInactiveEmails = Array.from(
    new Set([inactiveEmail].filter(Boolean))
  );
  const activeEmailsList = uniqueActiveEmails.length > 0 ? uniqueActiveEmails.map((email, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    email,
    index < uniqueActiveEmails.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `active-${index}`)) : "N/A";
  const inactiveEmailsList = uniqueInactiveEmails.length > 0 ? uniqueInactiveEmails.map((email, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    email,
    index < uniqueInactiveEmails.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, `inactive-${index}`)) : "N/A";
  reactExports.useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);
  reactExports.useEffect(() => {
    filterCharities();
  }, [searchQuery, activeCharities, inActiveCharities, showActive]);
  function filterCharities() {
    const charities = showActive ? activeCharities : inActiveCharities;
    const filtered = charities.filter(
      (charity) => charity.title.toLowerCase().includes(searchQuery.toLowerCase()) || charity.description.toLowerCase().includes(searchQuery.toLowerCase()) || charity.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharities(filtered);
  }
  return address ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    isLoading && (showActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader$1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {})),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search for charities",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-[72px] h-full rounded-[20px] ${showActive ? "bg-[#3498db]" : "bg-[#e74c3c]"} flex justify-center items-center cursor-pointer`,
            onClick: filterCharities,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: theme === "dark" ? search_dark : search_light,
                alt: "search",
                className: "w-[15px] h-[15px] object-contain "
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row ml-auto sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomButtom,
        {
          btnType: "button",
          title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
          styles: address ? "bg-[#e74c3c]" : "bg-[#3498db]",
          handleClick: () => {
            if (address) disconnect();
            else connect();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-bar mt-[60px] bg-[var(--profile-bg-color)] rounded-[20px] shadow-lg p-8  mx-auto flex flex-col gap-6 mb-10", children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-responsive flex items-center mb-6 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box w-[100px] h-[100px] rounded-[20px] bg-[var(--background-color)] flex items-center justify-center mr-6 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: showActive ? profile_picture_active : profile_picture_inactive,
            alt: "Profile Photo",
            className: "w-full h-full object-cover cursor-pointer"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--text-color)] w-full mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap text-lg mb-4 justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showActive ? name_icon_active : name_icon_inactive,
                  alt: "name_icon",
                  className: "icons cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: `profile-button responsive-text mb-1 cursor-pointer ${showActive ? "hover:text-[#338AF0]" : "hover:text-[#e74c3c]"} `,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: activeNamesList }),
                    !showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inactiveNamesList })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showActive ? address_icon_active : address_icon_inactive,
                  alt: "address_icon",
                  className: "icons cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `profile-button charitydetails-text-2 mb-1 cursor-pointer ${showActive ? "hover:text-[#338AF0]" : "hover:text-[#e74c3c]"}`,
                  children: userActiveProfile.address || userInActiveProfile.address || "N/A"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showActive ? location_icon_active : location_icon_inactive,
                  alt: "location_icon",
                  className: "icons cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `profile-button responsive-text mb-1 cursor-pointer ${showActive ? "hover:text-[#338AF0]" : "hover:text-[#e74c3c]"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: activeCountriesList }),
                    !showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inactiveCountriesList })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1 mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showActive ? phone_icon_active : phone_icon_inactive,
                  alt: "phone_icon",
                  className: "icons cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `profile-button responsive-text mb-1 cursor-pointer ${showActive ? "hover:text-[#338AF0]" : "hover:text-[#e74c3c]"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: activePhoneNumbersList }),
                    !showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inactivePhoneNumbersList })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: showActive ? email_icon_active : email_icon_inactive,
                  alt: "email_icon",
                  className: "icons cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `profile-button responsive-text underline mb-1 cursor-pointer ${showActive ? "hover:text-[#338AF0]" : "hover:text-[#e74c3c]"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: activeEmailsList }),
                    !showActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inactiveEmailsList })
                  ] })
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-center gap-[30px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setShowActive(true),
            className: "box bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-button flex flex-col ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "profile-button responsive-text font-bold text-[#338AF0] cursor-pointer", children: "Active:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "profile-button responsive-text flex justify-center items-center cursor-pointer text-[#338AF0]", children: activeCharities.length })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setShowActive(false),
            className: "box bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-button flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "profile-button responsive-text font-bold cursor-pointer text-[#e74c3c]", children: "InActive:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "profile-button responsive-text flex justify-center items-center cursor-pointer text-[#e74c3c]", children: inActiveCharities.length })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4 mb-4 justify-center font-epilogue", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToggleButton,
        {
          active: showActive,
          onClick: () => setShowActive(true),
          label: "Active",
          color: "bg-[#3498db]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToggleButton,
        {
          active: !showActive,
          onClick: () => setShowActive(false),
          label: "InActive",
          color: "bg-[#e74c3c]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: showActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      DisplayActiveUserCharities,
      {
        title: "All active charities",
        isLoading,
        charities: filteredCharities
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      DisplayInActiveUserCharities,
      {
        title: "All inactive charities",
        isLoading,
        charities: filteredCharities
      }
    ) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-bar bg-[var(--profile-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-[10px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomButtom,
      {
        btnType: "button",
        title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
        styles: address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3",
        handleClick: () => {
          if (address) disconnect();
          else connect();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center flex-col items-center h-full mt-[5px] text-[var(--text-color)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "responsive-text text-[20px] text-bold", children: "Please connect the wallet to view your profile." }) })
  ] });
}
function CreateCharity() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const { createCharity, address, connect, disconnect } = useStateContext();
  const [isSmallScreen, setIsSmallScreen] = reactExports.useState(window.innerWidth < 640);
  const [form, setForm] = reactExports.useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
    category: "",
    phoneNumber: "",
    email: "",
    country: ""
  });
  const [minDate, setMinDate] = reactExports.useState("");
  reactExports.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    setMinDate(today);
  }, []);
  function handleFormFieldChange(fieldName, event) {
    setForm({
      ...form,
      [fieldName]: event.target ? event.target.value : event.value
    });
  }
  function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(
      /^(\+?[1-9]\d{0,2})\s?(\d{1,2})\s?(\d{3})\s?(\d{3})$/,
      "$1 $2 $3 $4"
    );
  }
  function handlePhoneNumberChange(event) {
    const formattedNumber = formatPhoneNumber(event.target.value);
    handleFormFieldChange("phoneNumber", {
      target: { value: formattedNumber }
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (form.target <= 0) {
        Swal.fire({
          title: "Wrong target value",
          text: "Provide a positive Number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setForm({ ...form, target: "" });
        return;
      }
      if (!validatePhoneNumber(form.phoneNumber)) {
        Swal.fire({
          title: "Wrong phone number",
          text: "Provide a valid phone number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setForm({ ...form, phoneNumber: "" });
        return;
      }
      const imageExists = await new Promise((resolve) => {
        checkIfImage(form.image, resolve);
      });
      if (!imageExists) {
        Swal.fire({
          title: "Wrong image url",
          text: "Provide a correct image url!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setForm({ ...form, image: "" });
        return;
      }
      const response = await createCharity({
        ...form,
        target: parseUnits(form.target, 18)
      });
      if (response) {
        Swal.fire({
          title: "Charity successfully created!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success"
          }
        });
        navigate("/Empowering_Charity/View_Active_Charity");
      } else {
        Swal.fire({
          title: "Charity creation rejected",
          text: "",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
      }
    } catch (error) {
      console.error("Error during submission:", error);
      Swal.fire({
        title: "Submission failed",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
    } finally {
      setIsLoading(false);
    }
  }
  return address ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "create-charity-bar bg-[var(--createcharity-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-[10px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomButtom,
      {
        btnType: "button",
        title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
        styles: address ? "bg-[#e74c3c]" : "bg-[#3498db]",
        handleClick: () => {
          if (address) disconnect();
          else connect();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-buttom flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3498db] rounded-[10px] mt-[5px] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-[var(--createCharity2-text-color)]", children: "Create a Charity" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "w-full mt-[65px] flex flex-col gap-[30px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-[40px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Name *",
                placeholder: "Write Your Name",
                inputType: "text",
                value: form.name,
                handleChange: (event) => {
                  handleFormFieldChange("name", event);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Phone number *",
                placeholder: "Write your phone number",
                inputType: "text",
                value: form.phoneNumber,
                handleChange: handlePhoneNumberChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-[40px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Email *",
                placeholder: "Write your Email",
                inputType: "email",
                value: form.email,
                handleChange: (event) => {
                  handleFormFieldChange("email", event);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Country *",
                placeholder: "Select your country",
                isSelect: true,
                options: countryOptions,
                value: form.country,
                handleChange: (event) => {
                  handleFormFieldChange("country", event);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-[40px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Charity title *",
                placeholder: "Write a title",
                inputType: "text",
                value: form.title,
                handleChange: (event) => {
                  handleFormFieldChange("title", event);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Category *",
                placeholder: "Select a category",
                isSelect: true,
                options: categoryOptions,
                value: form.category,
                handleChange: (event) => {
                  handleFormFieldChange("category", event);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              labelName: "Story *",
              placeholder: "Write your story",
              isTextArea: true,
              value: form.description,
              handleChange: (event) => {
                handleFormFieldChange("description", event);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-buttom w-full flex justify-start items-center p-4 bg-[#3498db] h-[120px] rounded-[10px] cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: money,
                alt: "money",
                className: "w-[40px] h-[40px] object-contain "
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-bold responsive-text-title text-[25px] text-[var(--createCharity2-text-color)] ml-[20px] ", children: "You will get 100% of the donated amount." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-[40px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "Goal *",
                placeholder: "ETH 0.5",
                inputType: "number",
                value: form.target,
                handleChange: (event) => {
                  handleFormFieldChange("target", event);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                labelName: "End Date *",
                placeholder: "End Date",
                inputType: "date",
                value: form.deadline,
                handleChange: (event) => {
                  handleFormFieldChange("deadline", event);
                },
                min: minDate
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              labelName: "Charity Image *",
              placeholder: "Place a picture for your charity",
              inputType: "url",
              value: form.image,
              handleChange: (event) => {
                handleFormFieldChange("image", event);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center mt-[40px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomButtom,
            {
              btnType: "submit",
              title: "Submit New Charity",
              styles: "bg-[#3498db]"
            }
          ) })
        ]
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "create-charity-bar bg-[var(--createcharity-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-[10px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomButtom,
      {
        btnType: "button",
        title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
        styles: address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3",
        handleClick: () => {
          if (address) disconnect();
          else connect();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center flex-col items-center h-full mt-[5px] text-[var(--text-color)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] responsive-text text-bold ", children: "Please connect wallet in order to add charity." }) })
  ] });
}
function ActiveCharityDetails() {
  const {
    donate,
    getDonations,
    contract,
    address,
    connect,
    disconnect,
    removeCharity,
    editCharity,
    getUserActiveCharities,
    getUserInActiveCharities
  } = useStateContext();
  const { theme } = useTheme();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      borderColor: "#3a3a43",
      color: theme === "dark" ? "#ffffff" : "#000000",
      minHeight: "56px",
      borderRadius: "10px",
      paddingLeft: "10px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#3a3a43"
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      borderRadius: "10px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000"
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#4b6264",
      paddingLeft: "10px"
    }),
    input: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
      paddingLeft: "10px"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#4b5264" : "#888888"
    }),
    indicatorSeparator: (provided) => ({
      display: "none"
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000"
    }),
    option: (provided, state2) => ({
      ...provided,
      backgroundColor: state2.isSelected ? theme === "dark" ? "#3498db" : "#cccccc" : state2.isFocused ? theme === "dark" ? "#1a1a2e" : "#afafaf" : theme === "dark" ? "#1a1a2e" : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: theme === "dark" ? "#3498db" : "#cccccc",
        color: theme === "dark" ? "#ffffff" : "#000000"
      }
    })
  };
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [amount, setAmount] = reactExports.useState("");
  const [donators, setDonators] = reactExports.useState([]);
  const [collectedAmount, setCollectedAmount] = reactExports.useState(state.amountCollected);
  const [activeCharities, setActiveCharities] = reactExports.useState([]);
  const [inActiveCharities, setInActiveCharities] = reactExports.useState([]);
  const [minDate, setMinDate] = reactExports.useState("");
  const [isSmallScreen, setIsSmallScreen] = reactExports.useState(window.innerWidth < 640);
  const [isEditMode, setIsEditMode] = reactExports.useState(false);
  const [charityDetails, setCharityDetails] = reactExports.useState({
    ...state
  });
  const [editedCharity, setEditedCharity] = reactExports.useState({
    name: state.name,
    title: state.title,
    description: state.description,
    target: state.target,
    image: state.image,
    category: state.category,
    phoneNumber: state.phoneNumber,
    email: state.email,
    country: state.country
  });
  const [charityUpdated, setCharityUpdated] = reactExports.useState(false);
  const remainingDays = daysLeft(state.deadline);
  async function fetchDonators() {
    const data = await getDonations(state.pId);
    setDonators(data);
  }
  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(state.owner);
    setActiveCharities(data);
    setIsLoading(false);
  }
  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(state.owner);
    setInActiveCharities(data);
    setIsLoading(false);
  }
  reactExports.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    if (contract) {
      fetchDonators();
      fetchActiveCharities();
      fetchInActiveCharities();
    }
  }, [address, contract]);
  reactExports.useEffect(() => {
    if (charityUpdated) {
      setCharityDetails((prevDetails) => ({
        ...prevDetails,
        ...editedCharity
      }));
      setCharityUpdated(false);
    }
  }, [charityUpdated, editedCharity]);
  reactExports.useEffect(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    setMinDate(today);
  }, []);
  async function handleDonate() {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0) {
      Swal.fire({
        title: "Incorrect donation amount",
        text: "Please enter a positive number",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
      return;
    }
    if (isNaN(parsedAmount)) {
      Swal.fire({
        title: "No value entered",
        text: "Please enter a number to donate",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
      return;
    }
    try {
      setIsLoading(true);
      const response = await donate(state.pId, amount);
      if (response) {
        Swal.fire({
          title: "Donated successfully!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success"
          }
        }).then(async () => {
          const newCollectedAmount = parseFloat(collectedAmount) + parsedAmount;
          setCollectedAmount(newCollectedAmount);
          try {
            await fetchDonators();
            if (newCollectedAmount >= editedCharity.target) {
              Swal.fire({
                title: "Charity is now inactive as the target amount has been reached.",
                text: "Charity Removed to the inactive page",
                icon: "warning",
                confirmButtonText: "OK",
                customClass: {
                  popup: "custom-swal-popup-warning",
                  title: "custom-swal-title-warning",
                  confirmButton: "custom-swal-confirm-button-warning"
                }
              }).then(() => {
                navigate("/Empowering_Charity/View_Active_Charity");
              });
            }
          } catch (error) {
            console.error("Error during donation:", error);
            Swal.fire({
              title: "An error occurred during donation",
              text: "",
              icon: "error",
              confirmButtonText: "OK",
              customClass: {
                popup: "custom-swal-popup-error",
                title: "custom-swal-title-error",
                confirmButton: "custom-swal-confirm-button-error"
              }
            });
          } finally {
            setIsLoading(false);
          }
          setAmount("");
        });
      }
    } catch (error) {
      console.error("Error during donation:", error);
      Swal.fire({
        title: "An error occurred during donation",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
    } finally {
      setIsLoading(false);
    }
  }
  async function handleDelete() {
    try {
      setIsLoading(true);
      const response = await removeCharity(state.pId);
      if (response) {
        console.log("Deletion successful");
        navigate("/Empowering_Charity/View_Active_Charity");
        Swal.fire({
          title: "Charity successfully deleted!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success"
          }
        });
      } else {
        console.log("Deletion failed, response.success is false");
        throw new Error("Deletion failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      Swal.fire({
        title: "Charity deletion rejected.",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
    } finally {
      setIsLoading(false);
    }
  }
  function handleInputChange(event) {
    const value = event.target.value;
    if (parseFloat(value) > 0 || value === "") {
      setAmount(value);
    } else {
      setAmount(value);
    }
  }
  function handleEdit() {
    setIsEditMode(true);
  }
  async function handleSaveEdit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (editedCharity.target <= 0) {
        Swal.fire({
          title: "Wrong target value",
          text: "Provide a positive Number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setEditedCharity({ ...editedCharity, target: "" });
        return;
      }
      if (!validatePhoneNumber(editedCharity.phoneNumber)) {
        Swal.fire({
          title: "Wrong phone number",
          text: "Provide a valid phone number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setEditedCharity({ ...editedCharity, phoneNumber: "" });
        return;
      }
      const imageExists = await new Promise((resolve) => {
        checkIfImage(editedCharity.image, resolve);
      });
      if (!imageExists) {
        Swal.fire({
          title: "Wrong image url",
          text: "Provide a correct image url!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
        setEditedCharity({ ...editedCharity, image: "" });
        return;
      }
      const response = await editCharity(state.pId, {
        ...editedCharity,
        target: parseUnits(editedCharity.target, 18)
      });
      if (response) {
        Swal.fire({
          title: "Charity updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success"
          }
        }).then(() => {
          if (editedCharity.target <= collectedAmount) {
            Swal.fire({
              title: "Charity is now inactive as the target amount has been reached.",
              text: "Charity Removed to the inactive page",
              icon: "warning",
              confirmButtonText: "OK",
              customClass: {
                popup: "custom-swal-popup-warning",
                title: "custom-swal-title-warning",
                confirmButton: "custom-swal-confirm-button-warning"
              }
            }).then(() => {
              navigate("/Empowering_Charity/View_Active_Charity");
            });
          }
        });
        setIsEditMode(false);
        setCharityUpdated(true);
      } else {
        Swal.fire({
          title: "Failed to update charity",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error"
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: "You didn't change any field",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error"
        }
      });
    } finally {
      setIsLoading(false);
    }
  }
  function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(
      /^(\+?[1-9]\d{0,2})\s?(\d{1,2})\s?(\d{3})\s?(\d{3})$/,
      "$1 $2 $3 $4"
    );
  }
  function handlePhoneNumberChange(event) {
    const formattedNumber = formatPhoneNumber(event.target.value);
    handleEditInputChange("phoneNumber", formattedNumber);
  }
  function handleEditInputChange(fieldName, value) {
    setEditedCharity((prevState) => ({
      ...prevState,
      [fieldName]: value
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader$1, {}),
    address && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center items-center px-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomButtom,
      {
        btnType: "button",
        title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : "",
        styles: address ? "bg-[#e74c3c] px-6 py-2 h-[40px] flex justify-center items-center" : "",
        handleClick: () => {
          if (address) disconnect();
          else connect();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full image-custom-2 flex md:flex-row  flex-col mt-10 gap-[30px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: charityDetails.image,
            alt: "charity",
            className: "custom-buttom image-custom w-full h-[410px] object-cover rounded-xl cursor-pointer"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-pointer custom-buttom relative w-full h-[7px] bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-full bg-[#338AF0] rounded-[20px]",
            style: {
              width: `${calculateBarPercentage(
                charityDetails.target,
                collectedAmount
              )}%`,
              maxWidth: "100%"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountBoxActive, { title: "Days Left", value: remainingDays + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CountBoxActive,
          {
            title: `Raised of ${charityDetails.target} ETH`,
            value: collectedAmount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountBoxActive, { title: "Total Donators", value: donators.length })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[60px] flex lg:flex-row flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-[1.5] flex flex-col gap-[40px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Creator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[20px] flex flex-row items-center flex-wrap gap-[14px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons-charitydetails w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: thirdweb,
                alt: "user",
                className: "icons w-[60%] h-[60%] object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "charitydetails-text-nb charitydetails-text-2 font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]", children: charityDetails.owner }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#338AF0] ", children: [
                  activeCharities.length,
                  " Active",
                  " ",
                  activeCharities.length === 1 ? "Charity" : "Charities"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]", children: [
                  inActiveCharities.length,
                  " InActive",
                  " ",
                  inActiveCharities.length === 1 ? "Charity" : "Charities"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons-charitydetails w-[55px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profile_picture_active,
              alt: "profile_picture_active",
              className: "icons w-3/4 h-3/4 object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--text-color)] w-full mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap text-lg mb-4 justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: name_icon_active,
                    alt: "name_icon_active",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]", children: charityDetails.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: location_icon_active,
                    alt: "location_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]", children: charityDetails.country })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: phone_icon_active,
                    alt: "phone_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]", children: charityDetails.phoneNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: email_icon_active,
                    alt: "email_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#338AF0]", children: charityDetails.email })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: " font-epilogue text-[var(--text-color)] leading-[26px] text-justify", children: charityDetails.title }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify", children: charityDetails.description }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Donators" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px] flex flex-col gap-4", children: donators.length > 0 ? donators.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-3 font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all", children: [
                  index + 1,
                  ". ",
                  item.donator
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-3 font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all", children: [
                  item.donation,
                  " ETH"
                ] })
              ]
            },
            `${item.donators}-${index}`
          )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify", children: "No donators yet. Be the first one!" }) })
        ] })
      ] }),
      address ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        address && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px]", children: "Donate charity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-buttom  flex flex-col p-4 bg-[var(--donatetocharity1-bg-color)] rounded-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-semibold text-[20px] leading-[30px] text-center text-[var(--text-color)]", children: "Pledge without reward" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[30px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  placeholder: "ETH 0.5",
                  step: "0.1",
                  className: "w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--text-color)] text-[18px] leading-[30px] placeholder:text-[var(--placeholder-color)] rounded-[10px]",
                  value: amount,
                  onChange: handleInputChange
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-buttom custom-buttom my-[20px] p-4 bg-[var(--donatetocharity2-bg-color)] rounded-[10px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "charitydetails-text-3 font-epilogue font-bold text-[14px] leading-[22px] text-[var(--text-color)]", children: "Back it because you believe in it." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 mt-[20px] font-epilogue font-normal leading-[22px] text-[var(--text-color)]", children: "Support the project for no reward, just because it speaks to you." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CustomButtom,
                {
                  btnType: "button",
                  title: "Fund",
                  styles: "w-full bg-[#3498db]",
                  handleClick: handleDonate
                }
              )
            ] })
          ] })
        ] }),
        address === charityDetails.owner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px]", children: "Deactivate Charity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomButtom,
            {
              btnType: "button",
              title: "Deactivate",
              styles: "w-full bg-[#FF8C00]",
              handleClick: handleDelete
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px] pt-4", children: "Edit Charity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomButtom,
            {
              btnType: "button",
              title: "Edit",
              styles: "w-full bg-[#3498db]",
              handleClick: handleEdit
            }
          ) })
        ] }),
        isEditMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--profile-bg-color)] p-8 rounded-[20px] ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSaveEdit,
            className: "w-full  flex flex-col gap-[30px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Name *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      required: true,
                      placeholder: "Update your name",
                      value: editedCharity.name,
                      onChange: (event) => {
                        handleEditInputChange("name", event.target.value);
                      },
                      className: "w-full py-[15px] px-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Phone number *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "phoneNumber",
                      name: "phoneNumber",
                      required: true,
                      placeholder: "Update your phone number",
                      value: editedCharity.phoneNumber,
                      onChange: handlePhoneNumberChange,
                      className: "w-full py-[15px] px-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Email *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      required: true,
                      placeholder: "Update your Email",
                      value: editedCharity.email,
                      onChange: (event) => handleEditInputChange("email", event.target.value),
                      className: "w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Country *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StateManagedSelect$1,
                    {
                      id: "country",
                      options: countryOptions,
                      required: true,
                      value: countryOptions.find(
                        (option) => option.value === editedCharity.country
                      ),
                      onChange: (selectedOption) => handleEditInputChange(
                        "country",
                        selectedOption.value
                      ),
                      placeholder: "Update your Country",
                      styles: customStyles,
                      className: "w-full outline-none border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Category *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StateManagedSelect$1,
                    {
                      id: "category",
                      options: categoryOptions,
                      required: true,
                      value: categoryOptions.find(
                        (option) => option.value === editedCharity.category
                      ),
                      onChange: (selectedOption) => handleEditInputChange(
                        "category",
                        selectedOption.value
                      ),
                      placeholder: "Update your Category",
                      styles: customStyles,
                      className: "w-full outline-none border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Title *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "title",
                      required: true,
                      name: "title",
                      placeholder: "Update your title",
                      value: editedCharity.title,
                      onChange: (event) => handleEditInputChange("title", event.target.value),
                      className: "w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Story *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "description",
                      name: "description",
                      required: true,
                      placeholder: "Update Your Story",
                      value: editedCharity.description,
                      rows: 10,
                      onChange: (event) => handleEditInputChange(
                        "description",
                        event.target.value
                      ),
                      className: "w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Target *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "goal-input",
                      type: "number",
                      placeholder: "ETH 0.5",
                      required: true,
                      value: editedCharity.target,
                      onChange: (event) => handleEditInputChange("target", event.target.value),
                      step: 0.1,
                      className: "w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]", children: [
                  "Image *",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "image",
                      name: "Image *",
                      placeholder: "Update charity image",
                      required: true,
                      value: editedCharity.image,
                      onChange: (event) => handleEditInputChange("image", event.target.value),
                      className: "w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CustomButtom,
                  {
                    btnType: "submit",
                    title: "Save",
                    styles: "bg-[#3498db]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CustomButtom,
                  {
                    btnType: "button",
                    title: "Cancel",
                    handleClick: () => setIsEditMode(false),
                    styles: "bg-[#e74c3c]"
                  }
                )
              ] })
            ]
          }
        ) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-buttom bg-[var(--profile-bg-color)] flex-1 justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 max-h-300px", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "responsive-text font-epilogue font-semibold text-[18px] text-[var(--text-color)] my-10", children: "Please connect your wallet to delete or donate to this charity." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomButtom,
          {
            btnType: "button",
            title: address ? isSmallScreen ? "Disconnect" : "Disconnect wallet" : isSmallScreen ? "Connect" : "Connect wallet",
            styles: address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db]",
            handleClick: () => {
              if (address) disconnect();
              else connect();
            }
          }
        ) })
      ] })
    ] })
  ] });
}
function InActiveCharityDetails() {
  const { state } = useLocation();
  const {
    getDonations,
    contract,
    address,
    connect,
    disconnect,
    getUserActiveCharities,
    getUserInActiveCharities
  } = useStateContext();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [donators, setDonators] = reactExports.useState([]);
  const [activeCharities, setActiveCharities] = reactExports.useState([]);
  const [inActiveCharities, setInActiveCharities] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (contract) fetchDonators();
    fetchActiveCharities();
    fetchInActiveCharities();
  }, [contract, address]);
  async function fetchDonators() {
    const data = await getDonations(state.pId);
    setDonators(data);
  }
  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(state.owner);
    setActiveCharities(data);
    setIsLoading(false);
  }
  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(state.owner);
    setInActiveCharities(data);
    setIsLoading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center items-center px-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomButtom,
      {
        btnType: "button",
        title: address ? "Disconnect wallet" : "Connect wallet",
        styles: address ? "bg-[#e74c3c] h-[40px] flex justify-center items-center" : "bg-[#3498db] h-[40px] flex justify-center items-center",
        handleClick: () => {
          if (address) disconnect();
          else connect();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full image-custom-2 flex md:flex-row flex-col mt-10 gap-[30px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: state.image,
            alt: "charity",
            className: "custom-buttom image-custom w-full h-[410px] object-cover rounded-xl cursor-pointer opacity-60 brightness-110"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-pointer custom-buttom relative w-full h-[7px] bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-full bg-[#e74c3c] rounded-[20px]",
            style: {
              width: `${calculateBarPercentage(
                state.target,
                state.amountCollected
              )}%`,
              maxWidth: "100%"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountBoxActiveInActive, { title: "Days Left", value: "0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CountBoxActiveInActive,
          {
            title: `Raised of ${state.target} ETH`,
            value: state.amountCollected
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountBoxActiveInActive, { title: "Total Donators", value: donators.length })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[60px] flex lg:flex-row flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-[1.5] flex flex-col gap-[40px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Creator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[20px] flex flex-row items-center flex-wrap gap-[14px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons-charitydetails w-[52px] h-[52px]  flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: thirdweb,
                alt: "user",
                className: "icons w-[60%] h-[60%] object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "charitydetails-text-nb charitydetails-text-2 font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]", children: state.owner }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[11px] text-[var(--text-color)] cursor-pointer hover:text-[#338AF0] ", children: [
                  activeCharities.length,
                  " Active",
                  " ",
                  activeCharities.length === 1 ? "Charity" : "Charities"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[11px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]", children: [
                  inActiveCharities.length,
                  " InActive",
                  " ",
                  inActiveCharities.length === 1 ? "Charity" : "Charities"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icons-charitydetails w-[55px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profile_picture_inactive,
              alt: "profile_picture_active",
              className: "icons w-3/4 h-3/4 object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--text-color)] w-full mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap text-lg mb-4 justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: name_icon_inactive,
                    alt: "name_icon_active",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]", children: state.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: location_icon_inactive,
                    alt: "location_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]", children: state.country })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: phone_icon_inactive,
                    alt: "phone_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]", children: state.phoneNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: email_icon_inactive,
                    alt: "email_icon",
                    className: "icons cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#e74c3c]", children: state.email })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: " font-epilogue text-[var(--text-color)] leading-[26px] text-justify", children: state.title }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify", children: state.description }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase", children: "Donators" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[20px] flex flex-col gap-4", children: donators.length > 0 ? donators.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all", children: [
                  index + 1,
                  ". ",
                  item.donator
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all", children: [
                  item.donation,
                  " ETH"
                ] })
              ]
            },
            `${item.donators}-${index}`
          )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify", children: "No donators for this charity." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-buttom bg-[var(--profile-bg-color)] flex-1 justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 max-h-300px", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-epilogue responsive-text font-semibold text-[18px]  my-10 text-[#e74c3c]", children: "⚠️ This charity is now inactive. Donations, deletions and edits are no longer permitted." }) })
    ] })
  ] });
}
function App() {
  const [showActive, setShowActive] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:-8 p-4 bg-[var(--background-color)] min-h-screen flex flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "default-navbar sm:flex mr-6 hidden sm:mr-5 relative ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultSidebar, { showActive, setShowActive }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-navbar sm:flex sm:mr-5 relative sm:pb-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSidebar, { showActive, setShowActive }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-content flex-1 max-sm:w-full max-w-[1280px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/Empowering_Charity/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/Empowering_Charity/View_Active_Charity", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ViewActiveCharity, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/Empowering_Charity/Profile",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, { showActive, setShowActive })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/Empowering_Charity/Create_Charity", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateCharity, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/Empowering_Charity/View_InActive_Charity",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ViewInActiveCharity, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/Empowering_Charity/Active_Charity_Details/:pId",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveCharityDetails, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/Empowering_Charity/InActive_Charity_Details/:pId",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(InActiveCharityDetails, {})
        }
      )
    ] }) })
  ] });
}
const sdkOptions = {
  readonlySettings: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/Xf6P0sXGZi_u_mjCBgWcNgXaL5DmjmKn",
    chainId: 11155111
  }
};
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(ThirdwebProvider, { sdkOptions, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StateContextProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) }) })
);
