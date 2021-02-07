import React,{useState, useEffect} from 'react';

const Hook = () => {
////////
    const [count, setcount] = useState(0)
    const [Name, setName] = useState("jim")
    const [age, setAge] = useState(20)
    
const Incremen=() => {
    setcount((prev)=> prev +1 )
}

useEffect(() => {
    return ()=>{
        console.log("Caled use Effect")
    }
},[])

    return (
        <div>
            <h1>React Hook</h1>
            <h4>{count}</h4>
            <h3>{Name}</h3>
            <h3>{age}</h3>

            <button onClick={()=>setName("Hossain"+ age)}>changeName</button>
            <button onClick={()=>setAge(age + 1)}>changeage</button>
            <button onClick={Incremen}>Count</button>
        </div>
    );
};

export default Hook;