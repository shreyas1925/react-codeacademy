import React from 'react'

const Input = ({data,setData,handleInput}) => {
  return (
    <div className="app--todos">
        <input type="text" value={data} onChange={(e) => setData(e.target.value)}/>
        <button onClick={handleInput}>Add Item</button>
    </div>
  )
}

export default Input