import React from "react";
import styles from "./ChatHeader.module.css"

function ChatHeader () {
    return (
        <div className={styles.header}>
            <h1 className={styles.heading}>Chats</h1>
            <button className={styles.btnCreatChat}>
                <img src="./plus.svg" alt="" />
                Create New Chat
            </button>
        </div>
    )
}

export default ChatHeader;