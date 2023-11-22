import React from 'react'

export default function SSHKey(props) {
  // function for selecte blue border just for selected box
  let SSH = document.getElementsByClassName('flex border rounded p-3 justify-between items-center')
  Object.values(SSH).forEach(element => {
    element.addEventListener('click', () =>{
      document.querySelector('.border-blue').classList.remove('border-blue')
      element.classList.add('border-blue')
    })
  });

  // function for checkedbox just for selected checkbox
  let checkbox = document.getElementsByClassName('checkbox')
  Object.values(checkbox).forEach(element =>{
    element.addEventListener('click', () =>{
      Object.values(checkbox).forEach(e=>{
        e.checked = false
      })
      element.checked = true
    })
  })

  function handlerSelect(e){
    if (!! e){
      props.setSSH_Key(e)
    }
  }

  return (

    <div className='p-5'>
      <h2 className='mb-3'>
        <span className='pr-1.5'>SSH Key</span>
        <span className='text-grey text-sm'>(optional)</span>
      </h2>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex items-center border rounded p-3">
          <img className='pr-3 h-4' src='img/add.svg' alt="add-icon" />
          <span className='text-sm'>Add New</span>
        </div>

        <div className='flex border rounded p-3 justify-between items-center border-blue hover:shadow'>
          <div className='flex items-center'>
            <input onClick={(e) => handlerSelect(e.currentTarget.id)}  className='checkbox' type="checkbox" name='keyName' id='1'/>
            <span className='pl-3 text-sm'>key name 1</span>
          </div>
          <div className='group'>
            <img className='h-4' src='img/Info-Outline.svg' alt="info" />
            <div className="hidden absolute bg-darkBlue text-white py-1 px-3 rounded group-hover:block">
              <span className='flex items-center text-3xs'>{props.userInfo.email}</span>
            </div>
          </div>
        </div>

        <div className='flex border rounded p-3 justify-between items-center hover:shadow'>
          <div className='flex items-center'>
            <input onClick={(e) => handlerSelect(e.currentTarget.id)} className='checkbox' type="checkbox" name='keyName' id='2' />
            <span className='pl-3 text-sm'>key name 2</span>
          </div>
          <div className='group'>
            <img className='h-4' src='img/Info-Outline.svg' alt="info" />
            <div className="hidden absolute bg-darkBlue text-white py-1 px-3 rounded group-hover:block">
              <span className='flex items-center text-3xs'>{props.userInfo.email}</span>
            </div>
          </div>
        </div>

        <div className='flex border rounded p-3 justify-between items-center hover:shadow'>
          <div className='flex items-center'>
            <input onClick={(e) => handlerSelect(e.currentTarget.id)} className='checkbox' type="checkbox" name='keyName' id='3' />
            <span className='pl-3 text-sm'>key name 3</span>
          </div>
          <div className='group'>
            <img className='h-4' src='img/Info-Outline.svg' alt="info" />
            <div className="hidden absolute bg-darkBlue text-white py-1 px-3 rounded group-hover:block">
              <span className='flex items-center text-3xs'>{props.userInfo.email}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
