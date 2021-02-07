import React,{useReducer} from 'react';

//>>>>>>>
const iState = {
    name: "Hossain",
    wish: ["Reding", "datting", "Flating"],
    love: ["Nayma", "Sadia", "Halima"],

};
    
const reducer = (state, action) => {
        switch(action.type){
            case 'CHANGE_NAME':
             return {
                ...state,
                name: action.payload
             }
             case 'CHANGE_LOVE':
                return {
                   ...state,
                   love: action.payload
                }
            default :
            return state
        }
}



const Reducer = () => {

    const [data, setName] = useReducer(reducer, iState);
    const [data2, setData] = useReducer(reducer, iState);

    const GetJsonName = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(res2 => {
            setName({type:"CHANGE_NAME",payload: res2[2].name })
        })
    }

    return (
        <div>
            <h3>My Name is {data.name}</h3>
            <h3>My Wish is  {data.wish[0]}</h3>
            <button onClick={GetJsonName}>change Name </button>
            <h2>my Love is  {data2.love[0]}</h2>
            <button onClick={()=> setData({type: "CHANGE_LOVE",payload: "Sadia"})}>Change Love</button>
        </div>
    );
};

export default Reducer;