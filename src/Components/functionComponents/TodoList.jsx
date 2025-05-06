import React, { useEffect, useState } from 'react'

function TodoList() {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange  = (e) =>{
        // console.log(e.target.value)
        setTodo(e.target.value)
    }

    const handleAddTodo = (e) => {
        if (todo.trim() == '') {
            return;
        }
        setTodoList(oldTodo => {
            return [...oldTodo, todo];
        });
        setTodo('');
    };    

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleAddTodo();
        }
    }

    useEffect(()=>{
        console.log(todoList)
    },[todoList])

  return (
    <>
      <div>
        <h1>Enter Your Todo</h1>
        <input type="text" placeholder='enter your task' value={todo} onChange={handleChange} onKeyDown={handleKeyPress}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        {
            todoList.length > 0 ? <>
              {
                todoList.map((data,index) =>{
                    return <p key={index}>{data}</p>
                })
              }
            </> : <>
             <p>No Data is available</p>
            </>
        }
      </div>
    </>
  )
}

export default TodoList