import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context/index.jsx";

import { ThemeProvider } from "./components";
import App from "./App.jsx";
import "./index.css";

// const sdkOptions = {
//   readonlySettings: {
//     rpcUrl:
//       "https://eth-sepolia.g.alchemy.com/v2/Xf6P0sXGZi_u_mjCBgWcNgXaL5DmjmKn",
//     chainId: 11155111,
//   },
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ThirdwebProvider sdkOptions={sdkOptions}>
//     <ThemeProvider>
//       <Router>
//         <StateContextProvider>
//           <App />
//         </StateContextProvider>
//       </Router>
//     </ThemeProvider>
//   </ThirdwebProvider>
// );

const sdkOptions = {
  readonlySettings: {
    rpcUrl: "http://127.0.0.1:8545",
    chainId: 31337,
  },
};

const desiredChainId = 31337;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider desiredChainId={desiredChainId} sdkOptions={sdkOptions}>
    <ThemeProvider>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThemeProvider>
  </ThirdwebProvider>
);
