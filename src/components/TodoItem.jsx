import "./TodoItem.css"
const TodoItem=({todo , handlestatus})=>{
    return <div className="list"> {todo.title} - {todo.status ? "Done":"Not Done"} <button className="btnclass" onClick={()=>handlestatus(todo.id)}>toggle</button> 
     </div>
}
export{TodoItem}