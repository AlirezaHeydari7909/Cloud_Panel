import React, { useEffect, useState } from 'react'
import operatingsystemMockDatat from '../../../mockData/operatingsystem'
export default function OperatingSystem(props) {


  const [OperatingSystem, setOperatingSystem] = useState()
  // setOperatingSystem()
  useEffect(() => {
    // fetch('https://assignment.abrnoc.com/operating_systems')
    //   .then(response => response.json())
    //   .then(response => setOperatingSystem(response))
    setOperatingSystem(operatingsystemMockDatat)
  }, [])


  // for handle selected system and version
  function handlerSelect(version, title) {
    if (!!version && !!title){
      props.setOperSys({
        version, title
      })
    }
  }

  function handle(){
    Object.values(document.querySelectorAll('select')).forEach((e)=>{
      e.value = 'Select version'
    })
  }

  // make api renderable

  let operatingSystemDataList = null;
  let dataListSystem = {
  }
  if (OperatingSystem) {
    OperatingSystem.map((currSystem) => {
      let currfamily = currSystem.family
      if (dataListSystem[currfamily]) {
        dataListSystem[currfamily].push(currSystem.version)
      } else {
        dataListSystem[currfamily] = []
        dataListSystem[currfamily].push(currSystem.version)
      }
      return true
    })

    let operSys = document.getElementsByClassName('operSys')
    Object.values(operSys).forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector('.border-blue')?.classList.remove('border-blue')
        element.classList.add('border-blue')
      })
    });
    

    operatingSystemDataList = Object.entries(dataListSystem).map((currSystem) => {
      const title = currSystem[0]

      return (
        <div className='operSys border  rounded hover:shadow' key={title}>
          <div className="flex items-center p-3 ">
            <img className='h-7 pr-5' src={`img/${title}.svg`} alt={title} />
            <span className='system text-sm' id={title}>{title}</span>
          </div>

          <div className="flex border rounded m-3 text-2xs p-2 hover:shadow">

            <select onClick={handle} onChange={(e) => handlerSelect(e.target.value, title)} className='mx-auto w-full' id="data">
              <option >Select version</option>
              {currSystem[1][0].map(element => {
                return <option className='version' id={element} key={element} value={element}>{element}</option>
              })}

            </select>
          </div>
        </div>
      )
    })

  }
  return (
    <div className="p-5">
      <h2 className='mb-3'>OperatingSystem</h2>
      <div className="grid grid-cols-3 gap-3">
        {operatingSystemDataList}
      </div>
    </div>
  )
}
