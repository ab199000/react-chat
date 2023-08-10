import React from "react";
import { useState } from "react";
import Chat from "../Chat";
import styles from "./ListAllChats.module.css"

// let arr = [
//     {href: "/chat/c1", icon: "../24.svg", name: "Luy Robin", status: "writes", timeLastMessege: "1 minute ago", lastMessege: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ", indication: 1},
//     {href: "/chat/c2", icon: "../24 (1).svg", name: "Jared Sunn", status: "recods voice message", timeLastMessege: "1 minute ago", lastMessege: "Voice message (01:15) ", indication: 1},
//     {href: "/chat/c3", icon: "../24 (2).svg", name: "Nika Jerrardo", status: "last online 5 hours ago", timeLastMessege: "3 days ago", lastMessege: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",indication: 0},
//     {href: "/chat/c4", icon: "../24 (3).svg", name: "David Amrosa", status: "last online 5 hours ago", timeLastMessege: "3 days ago", lastMessege: "", indication: 0},

// ]

function ListAllChats ({value}) {
    // const [inp, setInp] = useState("")

    // const value = arr.filter((elem)=>{
    //     return elem.name.toLowerCase().includes(inp.toLowerCase())
    // })

    return (
        <ul className={styles.list}>
            {value.map(({href, icon, name, status, timeLastMessege, lastMessege, objects, indication})=>(
                <li key={href} className={styles.blockChat}>
                    <Chat href = {href} icon = {icon} name ={name} status = {status} timeLastMessege ={timeLastMessege} lastMessege = {lastMessege} objects = {objects} indication = {indication}/>
                </li>
            ))}

                {/* <li key="/c1" className={styles.blockChat}>
                    <Chat href = "/chat/c1" icon = "../24.svg" name ="Luy Robin" status = "writes" timeLastMessege ="1 minute ago" lastMessege = {arr[0].lastMessege} indication = {1}/>
                </li>
                <li key="/c2" className={styles.blockChat}>
                    <Chat href = "/chat/c2" icon = "../24 (1).svg" name ="Jared Sunn" status = "recods voice message" timeLastMessege ="1 minute ago" lastMessege = {arr[1].lastMessege} indication = {1}/>
                </li>
                <li key="/c3" className={styles.blockChat}>
                    <Chat href = "/chat/c3" icon = "../24 (2).svg" name ="Nika Jerrardo" status = "last online 5 hours ago" timeLastMessege ="3 days ago" lastMessege = {arr[2].lastMessege} indication = {0}/>
                </li>
                <li key="/c4" className={styles.blockChat}>
                    <Chat href = "/chat/c4" icon = "../24 (3).svg" name ="David Amrosa" status = "last online 5 hours ago" timeLastMessege ="3 days ago" lastMessege = {arr[3].lastMessege} indication = {0}/>
                </li> */}
        </ul>
    )
}

export default ListAllChats