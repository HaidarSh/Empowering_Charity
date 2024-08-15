import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  ViewActiveCharity,
  Profile,
  CreateCampaign,
  ActiveCampaignDetails,
  InActiveCampaignDetails,
  ViewInActiveCharity,
} from "./pages";
import { Sidebar } from "./components";

import "./index.css";

export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[var(--background-color)] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ViewActiveCharity" element={<ViewActiveCharity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Create_Campaign" element={<CreateCampaign />} />
          <Route
            path="/ViewInActiveCharity"
            element={<ViewInActiveCharity />}
          />
          <Route
            path="/active-campaign-details/:pId"
            element={<ActiveCampaignDetails />}
          />
          <Route
            path="/inactive-campaign-details/:pId"
            element={<InActiveCampaignDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}
