import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Icons({handleEdit,handleDone,handleDelete,index}) {
  return (
    <div className="flex gap-2 font-bold text-2xl">
      
      <MdDelete className="cursor-pointer" onClick={()=>handleDelete(index)}/>
        
    </div>
  );
}

export default Icons;
