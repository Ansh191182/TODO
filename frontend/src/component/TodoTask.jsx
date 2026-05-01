import React, { useReducer, useRef } from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const AddFunction = (state, action) => {
  if (action.type === "ADD") {
    return (state = [action.payload, ...state]);
  }
  if (action.type === "Delete") {
    return (state = state.filter((item, index) => index !== action.payload));
  }
};
const TodoTask = () => {
  const name = useSelector((state) => state.user[0].name);

  const [add, DispatchAdd] = useReducer(AddFunction, []);

  const targetRef = useRef();
  const dateRef = useRef();

  const handleClick = () => {
    const target = targetRef.current.value;
    const date = dateRef.current.value;

    DispatchAdd({ type: "ADD", payload: { target, date } });
  };

  return (
    <div className="ToDo">
      {/* right top */}
      <p className="profileIcon">{name[0]}</p>

      <h1>TODO Task</h1>

      <div className="taskRow">
        <input type="text" placeholder="Enter your task" ref={targetRef} />
        <input type="date" ref={dateRef} />

        <button className="editBtn">Edit</button>
        <button className="addBtn" onClick={handleClick}>
          Add
        </button>
      </div>

      <TodoList add={add} DispatchAdd={DispatchAdd} />
    </div>
  );
};

export default TodoTask;
