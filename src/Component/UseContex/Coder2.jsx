import { useContext } from "react";
import Coder3 from "./Coder3";
import { Mycontext } from "./ContextRe";

const Coder2 = () => {
    const Name2= useContext(Mycontext)
    return (
        <>
        <h1>Iam Coder 2 </h1>
        <h2>{Name2.name}</h2>
        <button onClick={()=>Name2.ChangeName({type: "CHANGE_NAME", payload: "JIM2"})}>Coder 2</button>
        <Coder3 />
        </>
    )
}

export default Coder2;