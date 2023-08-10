import React from "react";
import Navigation from "../Navigation";
import User from "../User";
import Button from "../Button";

import styles from "./asidebar.modul.css"

function Asidebar () {
    return (
        <aside>
            <User photo = "../user.svg" name = "Henry Jabbawockiez"/>
            <Navigation />
            <Button label= "LOG OUT" icon="../log out.svg"/>
        </aside>
    )
    
}

export default Asidebar;