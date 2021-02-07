import React,{useState, useEffect} from 'react';

const Home = () => {
    const [joke, setjoke] = useState("loading")
    const Newjoke= () => {
        fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe")
        .then(res=> res.json())
        .then(res2 => {
            // console.log(res2)
            setjoke(res2.value.joke)
        })
    }
    useEffect( ()=> {
        Newjoke()
    },[] )
    
    return (
        <>
          <div style={{background:"#ddd", color:"tomato", minWidth:"500px"}}>
              <h1>Jokes Game</h1>
                 <h4>{joke}</h4>
            <button onClick={Newjoke}>get New joke</button>
          </div>
        </>
    );
};

export default Home;


// http://api.icndb.com/jokes/random?firstName=John&lastName=Doe