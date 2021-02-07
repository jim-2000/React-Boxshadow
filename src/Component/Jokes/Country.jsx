import React,{useState,useEffect} from 'react';




const API = () => {
    const [Country, setCountry] = useState("Name")
    
    useEffect( ()=> {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=> res.json())
        .then(res2 =>{
            console.log(res2)
            setCountry(res2.name)
        })
    },[])

    return (
        <div>
                 <h1>{Country}</h1>
            {/* <button onClick={Mycountry}>Change Country</button> */}
        </div>
    );
};

export default API;
