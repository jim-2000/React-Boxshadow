import React,{useRef,useEffect} from 'react';

const Refs = () => {
    const heading = useRef(null)
    const myInput = useRef(null)

    useEffect(() => {
        
        console.log(heading.current.innerText)
       myInput.current.focus()
    }, [])
 
    return (
        <>
           <h3 ref={heading}>JIm YOu Have a Big Dream</h3> 
           <input type="text" ref={myInput} />
        </>
    );
};

export default Refs;