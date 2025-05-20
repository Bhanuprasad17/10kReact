import React, { act, useReducer } from 'react'

const useReducer2 = () => {


    const reducerFun = (state,action) =>{
        switch(action.type){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return 0        
            default :
            state    
        }
    }

    const [state, dispatch] = useReducer(reducerFun,0)


  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type : 'increment'})}>+</button>
        <button onClick={() => dispatch({type : 'decrement'})}>-</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default useReducer2