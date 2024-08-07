import React, { useState} from "react";

function Inputform({ sendInput}) {
  const [inputTask, setInputTask] = useState("");

  const handelChange = (e) => {
    setInputTask(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim() !== '') {
      sendInput(inputTask);
      setInputTask('')
      
      
    }
  };

  return (
    <div>
      <form action="#" onSubmit={handelSubmit}>
        <input
          type="text"
          className="bg-violet-200 w-96 py-3 px-2 outline-none text-lg text-black rounded-l-md border-[#8473E6] ring-violet-200 "
          placeholder="Enter Your Task relative"
          value={inputTask}
          onChange={handelChange}
        />
        <button type="submit" className="bg-[#1A143D] py-3 px-2 text-lg font-bold outline-none text-white absolute rounded-r-md " >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Inputform;
