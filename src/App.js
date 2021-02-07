import { AppBar, Avatar, Grid, Toolbar, Typography } from '@material-ui/core';
import React,{useState, useEffect, createContext,useContext} from 'react';
import './App.css';
import me from './me.jpg'
import Box from './Component/BoxShadowApp/Box';
// import Index from './Component/DarkMood/Index';
// import { BrowserRouter,Route  } from 'react-router-dom'
// import Home from './Component/Jokes/Home.jsx'
// import Contex from './Component/Context/Contex';
// import Reducer from './Component/Context/Reducer';
// import ContextRe from './Component/UseContex/ContextRe';
// import API from './Component/Jokes/Country';
// import Refs from './Component/Ref/Refs';


function App() {



  return (


      <div className="App">
        <AppBar position="static" >
        <Toolbar style={{justifyContent:"space-around",display:'flex'}}>
        <a  href="https://www.facebook.com/Exceptional.jim404"><img alt="Remy Sharp" width="65px" style={{borderRadius:"50px", alignItems:"center"}} src={me} /> </a>
          <Typography variant="h6" color="inherit">
            The Captaion shadow
          </Typography>
        </Toolbar>
            
        </AppBar>
          {/* <h1 style={{textAlign:"center", background:"#ddd", color:"tomato", width:"100%",}}></h1> */}
         
           <Box />
      
             <Typography>
            <a style={{bottom:"10",position:'absolute', right:'0'}} href="https://www.facebook.com/Exceptional.jim404">For More </a>

            </Typography>
         
         
      </div>      

      
  );
}

export default App;
