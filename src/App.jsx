import "./App.css";
import Home from "./assets/Component/Home";
import Inputform from "./assets/Component/Inputform";
import DatenTime from "./assets/Component/DatenTime";
import React, { useState } from "react";
import Alltodotask from "./assets/Component/Alltodotask";
import Icons from "./assets/Component/Icons";
import { MdDelete } from "react-icons/md";

function App() {
  const TodoKey="ourTodo"
  const [task, setTask] = useState(()=>{
    const localstorages=localStorage.getItem(TodoKey);
    if(!localstorages)return[];
    return JSON.parse(localstorages)
  });
  const[changedone,setChangedone]=useState([])
  const [done, setdone] = useState(false);

  localStorage.setItem(TodoKey,JSON.stringify(task));

  const handledatafromInput = (data) => {
    if (data.trim() !== "") {
      setTask([...task, data]);
      setChangedone(task)
      
    }
  };
  

  

const handleDelete=(index)=>{
  setTask(pretask=>pretask.filter((_,i)=>i!==index))

}
const deleteall=()=>(setTask([]))
  
  const taskTodisplay = () =>
    task.map((items, index) => (
      <li
        key={index}
        className={`min-w-[760px] py-1 pl-2 pr-1 rounded-md font-medium text-lg odd:bg-red-100 even:bg-slate-400  flex justify-between items-center }`}
      >
        {items}
        <Icons
          handleDelete={()=>handleDelete(index)}
          
        />
      </li>
    ));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-[#394271] 0 font-extrabold ">TODO LIST</h1>
      <DatenTime />
      <Inputform sendInput={handledatafromInput} />
      <Alltodotask taskTodisplay={taskTodisplay()} />
      <MdDelete className={`cursor-pointer text-4xl border rounded-lg outline-dashed mt-5  ${(task.length>0)?'':'hidden'}`} onClick={()=>deleteall()}/>
    </div>
  );
}

export default App;
