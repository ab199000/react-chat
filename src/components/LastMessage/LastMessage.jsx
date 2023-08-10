import React from "react";
import Files from "../Files/Files"

import styles from "./LastMessage.module.css"

function LastMessage ({lastMessege, objects}) {
    return(
        <div>
            <p className={styles.messageBlock}>{lastMessege}</p>
            <div className={styles.dan}>
            </div>
                
        </div>
        

    )
}

export default LastMessage


