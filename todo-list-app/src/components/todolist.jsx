import React from "react";
import "./todolist.css";

const Todolist = () => {
    const todos = [
        {id: 1, task: 'Learn React'}, 
        {id: 2, task: 'Learn NEXT.js'},
        {id: 3, task: 'Go to gym'},
        {id: 4, task: 'Learn Video Editing'},
        {id: 5, task: 'Learn Machine Learning'}
    ];
  return (
    <>
      <ul className="todo">
        {todos.map((todo) => (
            <li className="todoli" key = {todo.id} >{todo.task}</li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
