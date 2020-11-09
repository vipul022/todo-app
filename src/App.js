import React, {useState, useEffect} from "react"

const App = () => {
 const [todo, setTodo] = useState([])
 const [textDecoration, setTextDecoration] = useState("none")

  const onFormSubmit = (event) => {
    event.preventDefault()
  console.log("todo =>",  todo)
console.log("event.target.name.value=>", event.target.name.value)
  // ! this is the syntax for setting a state in case we nee to update arrays ot objects
   setTodo(todo => [...todo, event.target.name.value]);
  
   console.log("todo =>",  todo)
  // setTodo(todo => [...todo, inputVal])
  }
   
  console.log("todo =>",  todo)
 



const removeTodo = (index)=> {
  const newToDos = [...todo]
  console.log("newTodos=>", newToDos)
//   console.log("index=> " , index)
     newToDos.splice(index,1)
  //  const newToDosArr = newToDos.slice(0, index)
  //   .concat(newToDos.slice(index + 1, newToDos.length))
   console.log("index=>",  index)
  console.log("newToTosArr=>", newToDos)

  // setTodo(newToDos.splice(index,1))
//   // setTodo([newToDos.splice(index,1)])
setTodo(newToDos)
}

const FinishedTodo = (index,t) => {
  console.log("T", t)
  const cloneToDos = [...todo]
  textDecoration === 'none' ? setTextDecoration("line-through") : setTextDecoration('none')
}

let toDos = todo.map((t, index) =>
<div key = {index }>
  
  <h2  style = {
    {textDecoration: textDecoration}
  }>{t}</h2>
  
  <button onClick={() => removeTodo(index)}  >Remove</button>
  <button onClick={() => FinishedTodo(index,t)}  >Finished</button>
  </div>
)



  return(
    
    <div>
       
      <form onSubmit={onFormSubmit}>
  
      <input  type="text" name="name" >
      </input>
      
       <button type="submit" >Add</button> 
       
       <button>Finished</button>
       </form>
       
        {toDos}
    </div>
  )


  }

export default App

// Create a  todo list.

// Requirements:

// 1. Use React hooks to create the  app.

// 2. Add a delete button to remove a list item. ( refer to dynamic form challenge, refactor the code  to use hooks )

// 3. Add a completed/finished button. When a user clicks the completed/finish button it must strike through the list item.

// 4. Style up the app  with pretty colors.