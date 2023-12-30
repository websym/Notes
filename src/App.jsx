import { useEffect, useState } from "react"
import axios from "axios"
import Data1 from "./component";

const App=()=>{

  const[notes,setNotes] =useState([]);
 const[newNotes,setNewNotes] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:3001/notes").then(res=>{
    setNotes(res.data)
  })
});
const handlechange = (event)=>{
  setNewNotes(event.target.value)
 }
 const addNew=(event)=>{
  event.preventDefault();

  const addNewObj={
    
    id:notes.length+ 1,
    title: newNotes,
    body: '' , 
    important: Math.random()>0.5
    
   }
   
   axios.post("http://localhost:3001/notes",addNewObj).then(res=>{
    setNewNotes(notes.concat(res));
    setNewNotes('');
   })
   
  }
  const toggleImportanceOf=id=>{
    //console.log('toggleImportance',id);
    
    const url='http://localhost:3001/notes/${id}'
    const note=notes.find(note=>id === note.id)
    const changedNote={...notes,important: !note.important}
    //console.log(changedNote)
    axios.put(url,changedNote).then(res=>{
      setNotes(notes.map(note => note.id !== id ? res.data : note))
    })      
   }
  return(
    <div>
      <form onSubmit={addNew} >
        <input value={newNotes} onChange={handlechange} />
        <button>Add</button>
      </form>
     {
      notes.map((note)=>{
        return <Data1 note={note} key={note.id} toggleImportance={()=>{ toggleImportanceOf(note.id)}}/>
      })
     }
   
    </div>
  )
}
export default App