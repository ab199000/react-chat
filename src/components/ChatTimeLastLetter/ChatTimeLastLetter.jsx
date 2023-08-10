import React from "react";

import styles from "./ChatListLetter.module.css"

function ChatTimelastLetter ({timeLastMessege}) {
    if(!timeLastMessege){
        return
    }
    return (
        <p className={styles.time}>{timeLastMessege}</p>
    )
}

export default ChatTimelastLetter