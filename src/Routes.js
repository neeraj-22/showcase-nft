import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import NFTPage from "./Pages/NFTPage.js";
import UploadToCloudinary from "./Pages/UploadToCloudinary.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path="/" exact element={<Homepage />} />

        <Route path="/:walletAddress/nfts" exact element={<NFTPage/>} />
        
        <Route path="/:walletAddress/upload" exact element={<UploadToCloudinary/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
