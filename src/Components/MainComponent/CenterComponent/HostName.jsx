import React from 'react'
export default function HostName(props) {
  function handlerSelect(e){
    props.setHostName(e)
  }
  return (
    <div className='p-5'>
      <h2 className='mb-3'>HostName</h2>
      <div className="grid grid-cols-2 gap-3 text-2xs">
        <input onChange={e => handlerSelect(e.target.value)} className='hostName border rounded px-3 py-2' id='hostName'  type='text' placeholder='Name 1' required/>
      </div>
    </div>
  )
}
