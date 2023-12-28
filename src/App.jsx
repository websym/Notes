import axios from "axios"
import { useEffect, useState } from "react"
import Note from "./component"

const App=()=>{
const[notes,setNotes] =useState([

])
useEffect(()=>{
  axios.get("http://localhost:3001/notes")
  .then(res=>{
    setNotes(res.data);
  })
})

  return(
    <div>
      {notes.map(note=><Note key={note.id}note={note}/>)}
    </div>
    
  )
}
export default App