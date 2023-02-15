import React, { useState } from 'react'
import "../styles/Todo.css"
import DisplayTodos from '../Components/DisplayTodos'
import Input from '../Components/Input'

const Todo = () => {
  const [data,setData] = useState("")
  const [items,setItems] = useState([])

  const handleInput = (e) => {
    e.preventDefault()
    setData(data)
    setItems([...items,data])
  }

  const handleDelete = (id) =>{
    const updatedItems = items.filter((ele,index)=>{
      return id !== index
    })
    setItems(updatedItems)
  }

  return (
    <div className="app--container">
        <Input data={data} setData={setData} handleInput={handleInput}/>
        <DisplayTodos items={items} handleDelete={handleDelete}/>
    </div>
  )
}

export default Todo