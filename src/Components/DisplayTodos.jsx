import React from "react";

const DisplayTodos = ({ items,handleDelete }) => {
  return (
    <>
      {items.map((ele, index) => {
        return (
          <div className="app--todos-task" key={index}>
            <h4>{ele}</h4>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default DisplayTodos;
