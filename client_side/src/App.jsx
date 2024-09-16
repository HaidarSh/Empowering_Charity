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
import { DefaultSidebar, MobileSidebar } from "./components";
import "./index.css";

export default function App() {
  const [showActive, setShowActive] = useState(true);
  return (
    <div className="relative sm:-8 p-4 bg-[var(--background-color)] min-h-screen flex flex-row">
      <div className="default-navbar sm:flex mr-6 hidden sm:mr-5 relative">
        <DefaultSidebar showActive={showActive} setShowActive={setShowActive} />
      </div>
      <div className="mobile-navbar sm:flex sm:mr-5 relative sm:pb-[20px]">
        <MobileSidebar showActive={showActive} setShowActive={setShowActive} />
      </div>

      <div className="main-content flex-1 max-sm:w-full max-w-[1280px] mx-auto">
        <Routes>  
          <Route path="/Empowering_Charity/" element={<Home />} />
          <Route path="/Empowering_Charity/View_Active_Charity" element={<ViewActiveCharity />} />
          <Route
            path="/Empowering_Charity/Profile"
            element={
              <Profile showActive={showActive} setShowActive={setShowActive} />
            }
          />
          <Route path="/Empowering_Charity/Create_Charity" element={<CreateCharity />} />
          <Route
            path="/Empowering_Charity/View_InActive_Charity"
            element={<ViewInActiveCharity />}
          />
          <Route
            path="/Empowering_Charity/Active_Charity_Details/:pId"
            element={<ActiveCharityDetails />}
          />
          <Route
            path="/Empowering_Charity/InActive_Charity_Details/:pId"
            element={<InActiveCharityDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}
