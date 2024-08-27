import React, { useState } from "react";

function CounterFun (){
let[count ,setcount] =useState(10)
let [name ,setname ]=useState("Asus")
let changename=() =>{
setcount(count+1)

}
let changecount=() =>{
    setcount(count-1)
}

    return(
        <>
        

        <h1>name={name}</h1>
        <h1>count={count}</h1>
        <button onClick={changename}>add</button>
        <button onClick={changecount}>sub</button>
        </>
    )
}
export default CounterFun

