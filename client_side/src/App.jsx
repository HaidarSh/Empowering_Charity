import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  ViewActiveCharity,
  Profile,
  CreateCharity,
  ActiveCharityDetails,
  InActiveCharityDetails,
  ViewInActiveCharity,
} from "./pages";
import { Sidebar } from "./components";
import "./index.css";

export default function App() {
  const [showActive, setShowActive] = useState(true);
  return (
    <div className="relative sm:-8 p-4 bg-[var(--background-color)] min-h-screen flex flex-row">
      <div className="sm:flex mr-6 sm:mr-5 relative">
        <Sidebar showActive={showActive} setShowActive={setShowActive} />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/View_Active_Charity" element={<ViewActiveCharity />} />
          <Route
            path="/Profile"
            element={
              <Profile showActive={showActive} setShowActive={setShowActive} />
            }
          />
          <Route path="/Create_Charity" element={<CreateCharity />} />
          <Route
            path="/View_InActive_Charity"
            element={<ViewInActiveCharity />}
          />
          <Route
            path="/Active_Charity_Details/:pId"
            element={<ActiveCharityDetails />}
          />
          <Route
            path="/InActive_Charity_Details/:pId"
            element={<InActiveCharityDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}