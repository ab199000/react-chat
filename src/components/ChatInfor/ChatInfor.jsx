import React from "react";
import styles from "./ChatInfor.module.css"
import ChatTimeLastLetter from "../ChatTimeLastLetter/ChatTimeLastLetter"

function ChatInfor ({icon, name, status, timeLastMessege}) {
    return (
        <div className={styles.header}>
            <img className={styles.imgInterlocutor} src={icon} />
            <div className={styles.blokName}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.status}>{status}</span>
            </div> 
            <ChatTimeLastLetter timeLastMessege = {timeLastMessege}/>
        </div>
    )
}

export default ChatInfor