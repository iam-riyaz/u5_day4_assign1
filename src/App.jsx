import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Todo} from "./components/Todo"


function App() {

  // const [msg, setMsg]=useState("") //state

  // const getData=(data)=>{
  //   console.log("got data form child:", data)
  //   setMsg(data)
  // }

  return (
    <div className="App">
      <Todo/>
     {/* <First dataFn={getData}/>
     <Second msgState={msg}/> */}
     
    </div>
  );
}

// function First({dataFn}){
//   const data="  hello riyaz "
//   dataFn(data)
//   return <div> first child </div>
// }

// function Second({msgState}){
  
//     return <div>second child is getting data from sibling:{msgState} </div>
  
// }






export default App;
