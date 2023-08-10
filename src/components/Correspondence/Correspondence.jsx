import React from "react";
import CorrespondenceHeader from "../CorrespondenceHeader";
import CorrespondenceMessages from "../CorrespondenceMessage/CorrespondenceMessage";
import MassageBlock from "../MassageBlock";
import { Route,Routes } from "react-router-dom";

import styles from "./Correspondence.module.css"
import { useState, useEffect } from "react";

let arr = [[],[],
  [{
    massages: [
      "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
      "Can I send you files?",
    ],
    time: "4 days ago",
    author: 0,
  },
  { massages: ["Hey! Okay, send out."], time: "4 days ago", author: 1 },
  {
    massages: [
      "Hello! I tweaked everything you asked. I am sending the finished file.",
    ],
    time: "3 days ago",
    author: 1,
  },],[]
];

let arrHead = [
  {icon :"../24.svg", name : "Luy Robin", status : "writes", timeLastMessege : ""},
  {icon :"../24 (1).svg", name : "Jared Sunn", status : "recods voice message", timeLastMessege : ""},
  {icon :"../24 (2).svg", name : "Nika Jerrardo", status : "last online 5 hours ago", timeLastMessege : ""},
  {icon :"../24 (3).svg", name : "David Amrosa", status : "last online 5 hours ago", timeLastMessege : ""},
]

function Correspondence() {

  let [mass, setMass] = useState(arr);

  let [idChat, setIdChat] = useState()

  useEffect(() => {
    // setMass(arr);
    setIdChat(Number(window.location.href.slice(-1)-1))
  });
  
    return (
      <div className={styles.wind}>
        <CorrespondenceHeader mass = {arrHead} idChat = {idChat}/>
        {/* <Routes>
          <Route path="/c3" element={<CorrespondenceMessages />} />
        </Routes> */}
        <CorrespondenceMessages mass={mass} idChat = {idChat}/>
        <MassageBlock mass = {mass} setMass={setMass} idChat = {idChat}/> 
      </div>
    );
}

export default Correspondence