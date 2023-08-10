import React from "react";
import ChatInfor from "../ChatInfor";

import styles from "./Correspondence.module.css"

function CorrespondenceHeader ({mass, idChat}) {
    if(mass != undefined && idChat != undefined){
        console.log(mass[idChat])
        return(
            <div className={styles.header}>
                <ChatInfor icon = {mass[idChat].icon} name = {mass[idChat].name} status = {mass[idChat].status} timeLastMessege = {""}/>
                <div className={styles.buttons}>
                    <button className={styles.btn}>
                        <img src="../attach-2.svg"/>
                    </button>
                    <button className={styles.btn}>
                        <img src="../more-vertical.svg"/>
                    </button>
                </div>
            </div>
        )
    }
    

}

export default CorrespondenceHeader

