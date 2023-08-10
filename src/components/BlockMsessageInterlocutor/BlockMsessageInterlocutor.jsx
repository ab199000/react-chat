import React from "react";
import MessagItem from "../MessageItem/MessageItem";

import styles from "./BlockMsessageInterlocutor.module.css"

function MsessageInterlocutor ({massages, author}) {
    if (author){
        return (
            <div className={styles.block2}>
            <div className={styles.blockMes}>
                {massages.map((text)=>(
                    <MessagItem text = {text} author = {author}/>
                ))}
            </div>
            <img src="../all-done.svg"/>
        </div>
        )
    }
    return (
        <div className={styles.block}>
            <img src="../24 (2).svg" className={styles.photo}/>
            <div className={styles.blockMes}>
                {massages.map((text)=>(
                    <MessagItem text = {text} author = {author}/>
                ))}
            </div>
        </div>
    )
    
}

export default MsessageInterlocutor