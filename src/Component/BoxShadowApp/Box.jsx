import React,{useState} from 'react';

import { colors, Grid, makeStyles, Paper, Slider, Switch, Typography, withStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=> (
    {
        Paper: {
           padding: theme.spacing(2),
           paddingRight:theme.spacing(2),
          color:"black",
          marginLeft: theme.spacing(3)
           
        },
        Heammer:{
            minHeight:"40vh",
            margin: theme.spacing(4),
            color:'ffffff',
            boxShadow:`$({})`,
            backgroundColor: `$({})`
        }
    }
))

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);



const Box = () => {
    const classes = useStyles()
    //>>>>>
    const [div, setdiv] = useState('red')
    const [Hori, setHori] = useState(10)
    const [Ver, setVer] = useState(20)
    const [Blur, setBlur] = useState(5) 
    const [Check, setCheck] = useState(false) 
    const [Color, setColor] = useState("black") 

const handaleHori = (event, newValue)=> {
  setHori(newValue)
}
const handaleVer = (event, newValue)=> {
  setVer(newValue)
}
const handaleBlur = (event, newValue)=> {
  setBlur(newValue)
}

  
    return (

        <div style={{marginTop: "20px"}}>
            <Grid container >
         

                <Grid items xs={6} >
                    <Grid items xs={12}>
                    <Paper className={classes.Paper} >

                    <Typography style={{textAlign:"center",fontSize:"16px", }}>Box-shadow: <span style={{color:"tomato"}}> {Hori}px {Ver}px {Blur}px shadow color {Color} </span>  </Typography>
                    <Typography style={{textAlign:"center",fontSize:"16px",color:"black" }}>  Background color <span style={{color:"#FF0000"}}>  {div} </span> </Typography>

                      {/* //====Horigantal value=======>>>>>>>> */}
                    <Typography gutterBottom>Horigentel Value</Typography>
                    <PrettoSlider valueLabelDisplay="auto" max={100} min={-100} aria-label="pretto slider" value={Hori} onChange={handaleHori}  />
                    <div className={classes.margin} />
                    </Paper>
                    </Grid>

                                         {/* //====Vertical value=======>>>>>>>> */}

                    <Grid items xs={12} style={{marginTop:"10px"}}>
                    <Paper className={classes.Paper}>
                    <Typography gutterBottom>Vartical Value</Typography>
                    <PrettoSlider valueLabelDisplay="auto"  max={100} min={-100} aria-label="pretto slider" value={Ver} onChange={handaleVer}  />
                  <div className={classes.margin} />
                    </Paper>
                    </Grid>
                           {/* //====Blur value=======>>>>>>>> */}
                    <Grid items xs={12} style={{marginTop:"10px"}}>
                    <Paper className={classes.Paper}>
                    <Typography gutterBottom>Blur Value</Typography>
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={Blur} onChange={handaleBlur}  />
                    

                  <div className={classes.margin} />
                           {/* //====Color value=======>>>>>>>> */}

                    <Typography gutterBottom>Color</Typography>
                    <input type="color" id="test5" min="0" value={Color} 
                    onChange={(event)=>setColor(event.target.value)}  max="100" />
 <div className={classes.margin} />
                   {/* back ground color of div  */}
                   <Typography gutterBottom="true">Background  Color</Typography>
                    <input type="color" id="test5"  value={div} 
                    onChange={(event)=>setdiv(event.target.value)}  />
                   


                  {/* <!-- Inside or Out side --> */}
              <div className="switch">
                <p>Inside or Out side</p>
                <label>
                  Off
                  <input type="checkbox" checked={Check} onChange={()=>setCheck(!Check) } />
                  <span className="lever"></span>
                  On
                </label>
              </div>

                    </Paper>
                    </Grid>
                </Grid>



                {/* Showing The Box Shadow  */}
                <Grid items xs={6} spacing={2}>
                    <Paper className={classes.Heammer} 
                    
                    style={{

                    backgroundColor: `${div} `,
                    boxShadow:`${Hori}px
                     ${Ver}px ${Blur}px 
                     ${Color} 
                     ${Check ? "inset":""
                    }
                    ` ,
                  
                    }} >
                     
                    </Paper>
                 

                </Grid>

            </Grid>
          
        </div>
    );
};

export default Box;