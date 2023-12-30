
const Data1=({note,toggleImportance})=>{
    const label=note.important ? 'make not important': 'make important';
    
    return(
        
        <div>
            <h1>{note.title}</h1>
           <p>{note.body}</p>
           <h2>{note.component}</h2>
           <button onClick={()=>{toggleImportance(note.id)}}>{label}</button>
        </div>
        
    )
}
export default Data1