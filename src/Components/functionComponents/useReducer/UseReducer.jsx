import React, { useReducer } from "react";

const UseReducer = () => {
  let reducerFun = (state, action) =>{
    switch(action.type){
      case 'increment':
        return state + 1
      default :
      return state  
    }
    
  }
  const [state, dispatch] = useReducer(reducerFun, 0);


  return <div>
    <h1>{state}</h1>
    <button onClick={() => dispatch({type : 'increment'})}>Inc</button>
  </div>;
};

export default UseReducer;
