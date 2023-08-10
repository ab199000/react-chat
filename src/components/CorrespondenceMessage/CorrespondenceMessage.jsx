import React, { useState } from "react";
import BlockMsessageInterlocutor from "../BlockMsessageInterlocutor";
import LastTimeMassage from "../LastTimeMassage";
import DateSeparator from "../DateSeparator";

import styles from "./CorrespondenceMassage.module.css"
import { useEffect } from "react";

// let arr = [
//     {massages:["Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.","Can I send you files?"],
//     time:"4 days ago",
//     author: 0},
//     {massages:["Hey! Okay, send out."],
//     time:"4 days ago",
//     author: 1},
//     {massages:["Hello! I tweaked everything you asked. I am sending the finished file."],
//     time:"3 days ago",
//     author: 1},
// ]

function CorrespondenceMessages({mass, idChat}) {
    if(mass[idChat] != undefined){
      return (
        <div>
          {mass[idChat].map(({ massages, time, author }) => (
            <div className={styles.block}>
              <BlockMsessageInterlocutor massages={massages} author={author} />
              <LastTimeMassage time={time} author={author} />
            </div>
          ))}
          <DateSeparator />
        </div>
      );
    }

}

export default CorrespondenceMessages