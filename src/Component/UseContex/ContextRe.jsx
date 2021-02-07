import React, { createContext, useContext,useReducer } from 'react';
import Coder from './Coder';

export const Mycontext = createContext()
const Istate = {
    name: " Hossain Al JIM"

}

const reducer =(state,action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name :action.payload
            }
        default :
        return state
    }
}





const ContextRe = () => {
    const [data, dispatch] = useReducer(reducer,Istate);
    return (
        <>
            <h1>Context + Use Reducer + Use Context </h1>
            <Mycontext.Provider value={{name: data.name, ChangeName: dispatch}}>
                    <Coder  />
            </Mycontext.Provider>
                
        </>
    );
};

export default ContextRe;