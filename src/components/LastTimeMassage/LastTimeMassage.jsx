import React from "react";

import styles from "./LastTimeMassage.module.css"

function LastTimeMassage ({time, author}) {
    if (author) {
        return (
            <span className={styles.time2}>{time}</span>
        )
    }
    return (
        <span className={styles.time}>{time}</span>
    )
}

export default LastTimeMassage