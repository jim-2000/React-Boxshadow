import React,{useState,useEffect} from 'react';
import './Index.css'
// >>>>>>>>>>>>





const Index = () => {
    const GetMode = () => {
        const iniTialMode = localStorage.getItem("mode")
        if(iniTialMode === null){
            if(window.matchMedia("(prefers-color-scheme:dark)").matches){
                return true
            }else{
                return false
            }
        }else{
            return JSON.parse(localStorage.getItem("mode"))
        }
     }
    const [Dark, setDark] = useState(GetMode)

    // useEffect (()=> {
    //     localStorage.setItem("mode",JSON.stringify(Dark))
    // },[Dark])

    return (
<div className={Dark ? "Dark" : "Light"}>
        <div className="main">
            <label className="switch">
            <input type="checkbox"
            checked={Dark}
            onChange={()=>setDark(!Dark)}
            />
            <span className="slider round"></span>
            </label>
        </div>
        <div className="content">
            <h1>Light Mood</h1>
            <p style={{fontSize:'20px'}}>Of in little with way control the bliss. In uses friend to smile pomp olden who this be. Ive of that from who, he pride in suffice loathed apart had men flaunting heartless. And not him hope land saw though climes ah to. For none one haply sing, uncouth florid.</p>
        </div>
</div>
    );
};

export default Index;
