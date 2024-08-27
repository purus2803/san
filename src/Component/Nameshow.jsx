import React, {unstate, useState} from "react";

function Nameshow (){
    const [name,setname]=useState("sanlithu");

    const[age,setage]=useState(23)


    const handlename= () =>{
        if(name=="sanlithu"){
            setname("san")
            setage(23)
        }
        else{
            setname("sanlithu")
            setage(24);

        }
    }
    return(
<>
            <h1>name : {name}</h1>

             <h1>age : {age}</h1>
             
             <button onClick={handlename}>change</button>
             </>
             
    );
}
export default Nameshow

             


             
