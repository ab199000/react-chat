import EmojiPicker from "emoji-picker-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styles from "./MassageBlock.module.css"

function MassageBlock({mass, setMass,idChat }) {

    let [inp, setInp] = useState("")  

    let [click, setClick] = useState(false)
  
  function createMassage() {
    setMass((mass) => {
      let mass1 = [...mass]
      mass1[idChat] = [...mass1[idChat],{
        massages: [
          inp,
        ],
        time: "3 days ago",
        author: 1,
      }]
      return mass1
    });
    }
  if(click){
    return (
      <div className={styles.MassageBlock}>
        <button className={styles.btnBlock}>
          <img src="../plus.svg" />
        </button>
        <input id="inp"
          type="text"
          placeholder="Type a message here"
          className={styles.inp}
          onChange={(event) => {
            setInp(event.target.value);
            }}
        />
        <div className={styles.emoj} onClick={(event)=>{
          if(event.target.classList[1] == "epr-emoji-img"){
            console.log(1)
            let inp = document.getElementById("inp")
          }
        }}>
          <EmojiPicker/>
        </div>
        <button className={styles.smile} onClick={()=>{setClick(0)}}>
          <img src="../Smile icon.svg" />
          
        </button>
        <button className={styles.btnBlock} onClick={createMassage}>
          <img src="../navigation-2.svg" />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.MassageBlock}>
      
      
      <button className={styles.btnBlock}>
        <img src="../plus.svg" />
      </button>
      <input id="inp"
        type="text"
        placeholder="Type a message here"
        className={styles.inp}
        onChange={(event) => {
          setInp(event.target.value);
          }}
      />
      <button className={styles.smile} onClick={()=>{setClick(1)}}>
        <img src="../Smile icon.svg" />
      </button>
      <button className={styles.btnBlock} onClick={createMassage}>
        <img src="../navigation-2.svg" />
      </button>
    </div>
  );
}

export default MassageBlock