import React, { useEffect, useState } from 'react'

function DatenTime() {
    const [datentime,setDatentime]=useState()


    useEffect(()=>{
        const datetimeupdate=setInterval(()=>{
            const todaydate=new Date()
            const datenow=todaydate.toLocaleDateString();
            const timenow=todaydate.toLocaleTimeString();
            setDatentime(<div className='flex gap-5 text-[#394271] font-semibold text-xl'><div>{datenow}</div><div>{timenow}</div></div>)
    },1000)
    return()=>clearInterval(datetimeupdate)
    },[]
)
  return (

    
    <div>
      {datentime}
    </div>
  )
}

export default DatenTime
