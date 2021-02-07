import React from 'react';

const High = (Wcomponent) => {

    const NewComponent= () => {
        return (
            <div style={{background:"gray", color:"#fff"}}>
           
            </div>
        );
    }
    // return NewComponent


    const ColorComponent = () => {
        return (
            <div style={{ backgroundColor: 'black' , color: "white"}}>

            <Wcomponent name="jim" />

            </div>
        )
    }

    return ColorComponent
    

};

export default High;