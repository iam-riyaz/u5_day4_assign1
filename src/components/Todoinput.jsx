import { useState } from "react"
import "./Todoinput.css"

const Todoinput=({data})=>{

const [text, setText]=useState("") //state

    return(
        <div className="main">
            <input 
            onChange={(e)=>{
                setText(e.target.value)
                console.log(text)
            }} type="text"  placeholder="Write something" className="inputclass"/>
            <button className="addbtn" onClick={()=>{
                data(text)
            }}>+</button>
             
        </div>
    )


}

export {Todoinput}