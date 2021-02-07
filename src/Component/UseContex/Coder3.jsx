import { useContext } from "react"
import { Mycontext } from "./ContextRe"

const Coder3 = () => {
    const Name3 = useContext(Mycontext)
    return (
        <>
        <h1>Iam Coder 3 </h1>
        <h2>{Name3.name}</h2>
        <button onClick={()=>Name3.ChangeName({type:"CHANGE_NAME", payload:'Coder3'})}>Coder 3</button>
        </>
    )
}

export default Coder3