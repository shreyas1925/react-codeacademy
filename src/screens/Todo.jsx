import React, {useEffect, useState } from 'react'
import "../styles/Todo.css"
import DisplayTodos from '../Components/DisplayTodos'
import Input from '../Components/Input'

const Todo = () => {

  const savedNotes = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : [];

  const [data,setData] = useState("")
  const [items,setItems] = useState(savedNotes)
  const [isToggle,setIsToggle] = useState(true)
  const [edit,setEdit] = useState(null)

  const handleSubmit = (e) => {
    if(!data) { alert("Error: No task assigned")}
    else if(data && !isToggle){
      // update go here
      setItems(
        items.map((elem) => {
          if (elem.id === edit) {
            return { ...elem, name: data };
          }
          return elem;
        }))
        setIsToggle(true)
        setEdit(null)
        setData("")  
       
    }else{
      // normal add here
      const allDatas = {id:new Date().getTime().toString(),name:data}
      setItems([...items,allDatas])  
      setData("")  
    }    
  }

  const handleChange = (e) =>{
    setData(e.target.value)
  }
  
  const handleDelete = (index) =>{
    const updatedItems = items.filter((ele)=>{
      return index !== ele.id
    })
    setItems(updatedItems)
  }
 
  const handleEdit = (index) => {
      const editItem = items.find((ele)=>{
        return ele.id === index
      })
      console.log(editItem);
      setData(editItem)
      setIsToggle(false)
      setEdit(index)
  }

  const DeleteAll = () => {
    setItems([])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="app--container">
          <Input data={data.name} handleChange={handleChange} handleSubmit={handleSubmit} isToggle={isToggle}/>
          <DisplayTodos items={items} handleDelete={handleDelete} handleEdit={handleEdit}/>
          <button className ="app--delete-btn" onClick={DeleteAll}>Clear All</button>
      </div>
     </>
  )
}
export default Todo