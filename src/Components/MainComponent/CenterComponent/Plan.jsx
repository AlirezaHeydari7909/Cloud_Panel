import React from 'react'

export default function Plan(props) {

  function handlerSelect(cpu, memory, storage, connection_speed, monthly_price, hourly_price) {
    if (!!cpu && !!memory && !!storage && !!connection_speed && !!monthly_price && !!hourly_price){
      props.setSelectedPlan({
        cpu, memory, storage, connection_speed, monthly_price, hourly_price
      })
    } 
  }
  // list rendering for plans
  let plans = null;
  if (props.plan) {
    plans = props.plan.map((currPlan, index) => {
      const storage = parseInt(currPlan.memory_size_in_GB) * 15
      return (
        // rendering plans
        <div className="flex py-2  border-t" key={currPlan.id}>
          <input
            onChange={() => handlerSelect(
              currPlan.cpu_cores, currPlan.memory_size_in_GB,
              storage,
              currPlan.connection_up_bound_speed,
              currPlan.monthly_price,
              currPlan.hourly_price
            )}
            className="ml-5 mr-8" type="radio" name="Plan" id={index} />

          <div className="grid grid-cols-5 grow text-2xs pr-6">

            <div className='cpu'> {currPlan.cpu_cores} GB </div>
            <div className='memory'> {currPlan.memory_size_in_GB} GB </div>
            <div className='storage'>{storage}</div>
            <div className='connection_speed'> up to {currPlan.connection_up_bound_speed} Gbps </div>

            <div className='flex justify-between'>

              <div className='monthly_price'> $ {currPlan.monthly_price} </div>

              <div className='group info'>
                <img className='h-4' src='img/Info-Outline.svg' alt="info" />
                <div className="hidden absolute bg-darkBlue text-white py-1 px-3 rounded group-hover:block">
                  <span className=''>{currPlan.hourly_price}</span>
                  <span className='text-3xs'>/hour</span></div>
              </div>

            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {plans}
    </div>
  )
}
