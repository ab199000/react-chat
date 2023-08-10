import React from "react";
import NavigationItem from "../NavigationItem"

import styles from "./Navigation.madule.css"

let arr = [
    {href: "/home", label: "home", icon: "../home.svg" },
    {href: "/chat", label: "chat", icon: "../chat.svg" },
    {href: "/contact", label: "contact", icon: "../contact.svg" },
    {href: "/notifications",label: "notifications",icon: "../notification.svg",},
    {href: "/calendar", label: "calendar", icon: "../calendar.svg" },
    {href: "/settings", label: "settings", icon: "../settings.svg" },
];

function Navigation () {
    return (
        <nav>
            <ul>
                {arr.map(({href, label, icon})=>(
                    <li key ={href} className={styles.li}>
                        <NavigationItem href = {href} label = {label} icon = {icon}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;