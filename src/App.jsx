import React from 'react'
import './App.css'
import { useState } from 'react'
import deleteIcon from '../src/assets/delete.png'
import editIcon from '../src/assets/edit.png'

const App = () => {
  const[input,setInput]=useState('')
  const[list,setList]=useState([])
  const[uid,setUid]=useState()
  const[update,setUpdate]=useState(false)
  const[del,setDel]=useState(true)


  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  const handleTask=()=>{
    setList([...list,input])
    setInput("")
  } 
  const handleUpdate=()=>{
    list.splice(uid,1,input)
    setInput("")
    setUpdate(false)
  }
  
  const handleDelete=(i)=>{
    const filterlist = list.filter((_,elm)=> elm !== i)
    console.log("filter list",filterlist)
    setList(filterlist)
    setDel(true)
  }

  
  
  const handleEdit=(i)=>{
    // const filterlist = list.filter((elm,index)=>index === i)
    const filterlist = list.filter((elm)=> elm === list[i])
    setInput(filterlist[0])
    setUid(i)
    setUpdate(true)
  }
  return (
    <div className='App'>
      <h2>Todo App</h2>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e)=>handleInput(e)} /> {' '}
           {update?(<button onClick={handleUpdate}>Update</button>) :(<button type='button' onClick={handleTask}>Add Task</button>)}
        </div>
        <div className="list">
          <ul>
            {list.map((item,i)=> <li key={i} >{item} <img src={deleteIcon} alt="" className='dlt-icon' onClick={()=>handleDelete(i)} />
           
            <img src={editIcon} alt="" className='edit-icon' onClick={()=>handleEdit(i)} style={{height:'30px'}} /></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
