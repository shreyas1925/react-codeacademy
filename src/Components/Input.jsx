import React from 'react'

const Input = ({data,handleChange,handleSubmit,isToggle}) => {
  return (
    <div className="app--todos">
        <input value={data} type="text" onChange={handleChange}/>
        {
           isToggle ? (
           <button onClick={handleSubmit}>Add Item</button>
           ) :
          (
            <button onClick={handleSubmit}>Update Item</button>
          )
        } 
    </div>
  )
}

export default Input