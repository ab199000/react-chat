import React from "react";
import styles from "./MessageItem.module.css"

function MessagItem ({text, author}) {
    if(author){
        return(
            <div className={styles.mes}>
                <button className={styles.btnHorizontal}>
                    <img src="./more-horizontal.svg" alt="" />
                </button>
                <p className={styles.textAuthor}>
                    {text}
                </p>
        </div>
        )
    }
    return(
        <div className={styles.mes}>
            <p className={styles.text}>
                {text}
            </p>
            <button className={styles.btnHorizontal}>
                <img src="./more-horizontal.svg" alt="" />
            </button>
        </div>
    )
    
}

export default MessagItem