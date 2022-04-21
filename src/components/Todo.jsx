import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { TodoItem } from "./TodoItem"
import {nanoid} from "nanoid"

function Todo()
{

    const [todolist, setTodolist]= useState([])
    const getData=(value)=>{
        const forstatus={
            title:value,
            status:false,
            id:nanoid(3)
        }
       setTodolist([...todolist, forstatus])
    }

    const handlestatus=(id)=>{
        console.log("id",id)
        setTodolist(
            todolist.map((e)=>(e.id==id ? {...e,status:!e.status}: e))
        )
    }
    return (
        <div>
        
        {todolist.map((e)=>(
              <TodoItem handlestatus={handlestatus} todo={e}/>)
        )}
        <Todoinput data={getData} />
        </div>
    )
}

export{Todo}