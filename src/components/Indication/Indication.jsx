import React from "react";
import styles from "./Indication.module.css"

function Indication ({indication}) {
    if(!indication){
        return
    }
    return (
        <p className={styles.indication}>{indication}</p>
    )
}

export default Indication