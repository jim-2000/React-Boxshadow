import React from 'react';
import High from '../HigherOrderComponen/High';

const About = (props) => {
    return (
        <>
            <h2>Hello {props.name}</h2>
        </>
    );
};

export default High(About) ;