import React,{createContext,useContext} from 'react';

const myContext = createContext()
const ageContext = createContext()


const Code3 = () => {
  const Name = useContext(myContext)
  const age = useContext(ageContext)

  return (
   
   <>
    <h1>My name is {Name}</h1>
    <h1>My name is {age}</h1>
   </>
  )
}

// const Coder2 = () => {
//   return(
//   <myContext.Consumer>
//     {
//       (data)=> {
//       return  (
//         <ageContext.Consumer>
//           {
//             (age)=> {
//               return (
//                 <>
//                 <h1>my name is {data} and I am {age}</h1>
//                 </>
//               )
//             }
//           }
//         </ageContext.Consumer>
//       )
//       }
//     }
//   </myContext.Consumer>
//   )
// }


const Coder = () => {
  return(
  <>

  <Code3 />
  </>
  )
}

const Contex = () => {
    return (
        <>
            <myContext.Provider value="JIM">
                <ageContext.Provider value="20">
                    <Coder />
                </ageContext.Provider>
            </myContext.Provider>
        </>
    );
};

export default Contex;