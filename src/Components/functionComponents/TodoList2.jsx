import React, { useEffect, useState } from "react";

const TodoList2 = () => {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  let handleChange = (e) => {
    // console.log(e.target.value)
    setTodo(e.target.value);
  };

  let handleAddTodo = (e) => {
    if (todo.trim() === "") {
      return;
    }
    setTodoList((oldTodo) => {
      return [...oldTodo, todo];
    });
    setTodo("");
  };

  let handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
    // handleAddTodo()
  };

  let handleDelete = (deleteIndex) =>{
    // console.log(deleteIndex)
   let value =  todoList.filter((data,index)=>{
      return index !== deleteIndex
    })
    setTodoList(value)
  }

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <h1>Enter Your Task</h1>
      <input
        type="text"
        placeholder="enter your task"
        value={todo}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todoList.length > 0 ? (
        <>
          {todoList.map((data, index) => {
            return (
              <>
                <div>
                  <p key={index}>{data}</p>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <>
          <p>No Data Aviable</p>
        </>
      )}
    </div>
  );
};

export default TodoList2;
