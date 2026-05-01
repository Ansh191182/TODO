import React from "react";

const TodoList = ({ add, DispatchAdd }) => {
  return (
    <>
      {add.length === 0 ? (
        <h1 style={{ color: "black" }}>ADD Task</h1>
      ) : (
        add.map((item, index) => (
          <div className="todoContainer" key={index}>
            <div className="taskBox">{item.target}</div>
            <div className="dateBox">{item.date}</div>
            <button
              onClick={() => DispatchAdd({ type: "Delete", payload: index })}
              className="deleteBtn"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default TodoList;
