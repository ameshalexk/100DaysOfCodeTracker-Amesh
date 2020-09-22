import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Portfolio from "./components/Portfolio/portfolio.js";

import axios from "axios";

function App() {


    return (
        <>
            <div className="App">
            <Portfolio />
                    
            </div>
        </>
    );
}

export default App;
