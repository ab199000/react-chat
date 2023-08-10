import React from "react";
import ChatList from "../ChatList";
import Correspondence from "../Correspondence";
import { Route,Routes } from "react-router-dom";

import styles from "./ChatWindow.module.css"

function ChatWindow () {
    return (
      <div className={styles.ChatWindow}>    
        <ChatList />     
            <Routes>
                <Route path="/c1" element={<Correspondence /> } />
                <Route path="/c2" element={<Correspondence /> } />
                <Route path="/c3" element={<Correspondence /> } />
                <Route path="/c4" element={<Correspondence /> } />
            </Routes>
      </div>
    );
}

export default ChatWindow;