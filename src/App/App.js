import React from "react";
import Asidebar from "../components/Asidebar/Asidebar";
import ChatWindow from "../components/ChatWindow";
import { Route, Routes } from "react-router-dom";

import "./App.maodule.css"

function App() {
    return (
        <div className="App" >
            <Asidebar/>
            <Routes>
              <Route path="chat/*" element ={<ChatWindow/>}/>
            </Routes>
          
        </div>
);
}

export default App;
