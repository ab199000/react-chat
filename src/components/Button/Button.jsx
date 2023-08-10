import React from "react";

import styles from "./Button.module.css"

function Button ({label, icon}) {
    return (
        <div className={styles.contaner}>
            <button>
                <img src={icon} /><p>{label} </p>
            </button>
            
        </div>
        

    )
}

export default Button