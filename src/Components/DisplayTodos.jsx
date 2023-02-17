import React from "react";

const DisplayTodos = ({ items,handleDelete,handleEdit }) => {
  return (
    <>
      {items.map((ele) => {
        return (
          <div className="app--todos-task" key={ele.id}>
            <h4>{ele.name}</h4>
            <div>
              <button onClick={() => handleDelete(ele.id)}>Delete</button>
              <button onClick={() => handleEdit(ele.id)}>Edit</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayTodos;
