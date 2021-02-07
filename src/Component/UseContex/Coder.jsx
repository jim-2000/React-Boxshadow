import React,{ useContext } from "react";
import Coder2 from "./Coder2";
import { Mycontext } from "./ContextRe";

const Coder = () => {
   const MyName = useContext(Mycontext)
   
    return (
        <>
        <h1>Iam Coder </h1>
        <h3>{MyName.name} </h3>
       <button onClick={()=> MyName.ChangeName({type: "CHANGE_NAME",payload:"Hossain"})} > Change Name</button>
        <Coder2 />
        </>
    )
}

export default Coder;