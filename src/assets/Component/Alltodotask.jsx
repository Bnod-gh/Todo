import React, { useEffect, useState } from "react";



function Alltodotask({ taskTodisplay,index }) {
  return (
    <div >
      <ol className="list-decimal pl-2 space-y-2 mt-3 ">{taskTodisplay}</ol>
    </div>

  );
}

export default Alltodotask;
