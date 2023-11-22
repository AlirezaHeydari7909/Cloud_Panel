import React, { useEffect, useState } from 'react'

export default function Deploy(props) {
  // set Instance Quantity
  const [InstanceQuantity, setInstanceQuantity] = useState(1)
  const [Total, setTotal] = useState(0)

  // handler function for minus button
  function handleMinus() {
    const current = InstanceQuantity - 1 > 1 ? InstanceQuantity - 1 : 1
    setInstanceQuantity(current)
    setTotal(props.selectedPlan?.monthly_price? current * props.selectedPlan.monthly_price: 0)
  }

  useEffect(()=> {
    if (props.selectedPlan){
    setTotal(InstanceQuantity * props.selectedPlan.monthly_price)
    }
  }, [props.selectedPlan])

  // handler function for plus button
  function handlePlus() {
    const current = InstanceQuantity + 1
    setInstanceQuantity(current)
    setTotal(props.selectedPlan?.monthly_price? current * props.selectedPlan.monthly_price: 0)
  }

  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }
  //  handler function for log data after click deploy button

  function logData() {
    // required host name
    if (document.getElementById('hostName').value === ''){
      props.showToast('Please enter hostname.')
      return 
    }
    if (!onlyLettersAndNumbers(props.hostName)) {
      props.showToast('This field contains invalid characters.')
      return
    } 
    

    // log for currnet region
    console.log(`Selected Region: ${props.currentRegion}`);


    // required select Plan
    if (props.selectedPlan === undefined){
      props.showToast('Please select Plan!')
      return
    }
    // log for plan
    console.log(`CPU: ${props.selectedPlan.cpu}`);
    console.log(`Memory: ${props.selectedPlan.memory}`);
    console.log(`Storage: ${props.selectedPlan.storage}`);
    console.log(`connection speed: ${props.selectedPlan.connection_speed}`);
    console.log(`monthly price: ${props.selectedPlan.monthly_price}`);
    console.log(`hourly price: ${props.selectedPlan.hourly_price}`);


    // invaild SSH key
    if (props.SSH_Key === undefined) {
      props.showToast('Invalid SSH key.')
    }
    // log for ssh key
    console.log(`Selected SSH Key: key Name ${props.SSH_Key}`);

    // log for host name
    console.log(`Host Name: ${props.hostName}`)

    // required select opreating system
    if (props.operSys === undefined){
      props.showToast('Please select Operating System!')
      return
    }
    // log for operating System
    console.log(`Operating System ${props.operSys.title} Version ${props.operSys.version}`);

    // log for instance quantitiy and IPv4
    console.log(`Instance Quantity: ${InstanceQuantity}`);
    console.log(`Enable IPv4: ${document.getElementById('IPv4').checked === true ? document.getElementById('IPv4').value : 'unchecked'}`);  }
  return (
    <div className='p-3 text-darkBlue'>
      <div className='py-1 pr-24 text-2xs'>
        Instance quantity:
      </div>

      <div className="flex border rounded items-center">
        <img className="px-2 h-4" src='img/minus.svg' alt="minus" onClick={handleMinus} />
        <div className='flex justify-center mx-auto w-3/5 py-1 px-10 border-x text-xs'>{InstanceQuantity}</div>
        <img className="px-2 h-4" src='img/plus.svg' alt="plus" onClick={handlePlus} />
      </div>

      <div className="flex items-centepy-5 border-b py-3 text-xs">
        <input className='mr-3' type="checkbox" id='IPv4' value='checked' />
        <label htmlFor="check">Enable IPv4</label>
      </div>

      <div className="flex items-center justify-between py-5">
        <div className='text-sm pr-3'>Total</div>
        <div className='flex items-center'>
          <div className="text-lg pr-1">{Total}</div>
          <div className="text-grey text-xs">/month</div>
        </div>
      </div>

      <button className='bg-green text-white text-2xs w-full py-2 rounded' onClick={logData}>
        DEPLOY NOW
      </button>


    </div>
  )
}
