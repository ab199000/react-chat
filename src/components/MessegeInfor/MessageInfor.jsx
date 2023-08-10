import React from "react";
import LastMessage from "../LastMessage";
import Indication from "../Indication";

import styles from "./MessageInfor.module.css"

function MessageInfor () {
    return (
        <div className={styles.chatMes}>
            <LastMessage/>
            <Indication/>
        </div>
    )
}

export default MessageInfor