import React from "react";

//Replacement of ReactDOM for React v18
import {createRoot} from "react-dom/client"

import Routes from "./Routes";

//Getting root file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Interfacing with customised routes
root.render(
    <Routes />
);
