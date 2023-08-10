import React from "react";
import ChatInfor from "../ChatInfor";
import LastMessage from "../LastMessage";
import Indication from "../Indication";
import { NavLink } from "react-router-dom";


import styles from "./Chat.module.css"



function Chat ({href, icon, name, status, timeLastMessege, lastMessege, objects, indication}) {
    return (
        <NavLink to = {href} 
        className = {({isActive}) => isActive ? styles.chatActive : styles.chatNotActive}
        >
            <ChatInfor icon = {icon} name ={name} status = {status} timeLastMessege ={timeLastMessege}/>
            <LastMessage lastMessege = {lastMessege} objects ={objects}/>
            <Indication indication = {indication}/>
            
        </NavLink>
            
        
        
    )
}

export default Chat