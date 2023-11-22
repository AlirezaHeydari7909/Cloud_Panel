import React, { useState, useEffect } from 'react'
import Deploy from './Deploy/Deploy'
import Plan from './CenterComponent/Plan'
import OperatingSystem from './CenterComponent/OperatingSystem'
import SSHKey from './CenterComponent/SSHKey'
import HostName from './CenterComponent/HostName'
import RegionsBox from './CenterComponent/RegionsBox'
import regionsMockData from '../../mockData/regions'
import palnsMockData from '../../mockData/plans'

export default function MainComonent(props) {

  // handle toast 
  const [toastIsVisible, setToastIsVisible] = useState(false)
  const [toastText, setToastText] = useState()

  // function for handle show status
  function showToast(text) {
    setToastIsVisible(true)
    setToastText(text)
    setInterval(
      function () {
        setToastIsVisible(false)
      }, 3000
    )
  }

  // state for handle toast if request status equal 422
  const [toastIsVisibleValidationError, setToastIsVisibleValidationError] = useState(false)
  const [requsetCode, setRequsetCode] = useState()

  // function fro handle toast if request status equal 422
  function showToastValidation(text) {
    setToastIsVisibleValidationError(true)
    setToastText(text)
    setInterval(
      function () {
        setToastIsVisible(false)
      }, 3000
    )
  }
  if (requsetCode === '422') {
    showToastValidation('Plan is not available for selected region.')
  }


  // state for collect inputs and selected values by user
  const [selectedPlan, setSelectedPlan] = useState()
  const [hostName, setHostName] = useState()
  const [SSH_Key, setSSH_Key] = useState()
  const [operSys, setOperSys] = useState()


  // get all region from api
  const [region, setRigion] = useState(regionsMockData)

  // selected region by user
  const [currentRegion, setCurrentRegion] = useState('Us')

  // console.log(regionsMockData);

  // list Rendering for region box
  const regions = region.map(currRegion => {
    return (
      <div key={currRegion.id}>
        <div
          className={`${currRegion.name} text-xs`}
          id={currRegion.name}
          onClick={(e) => setCurrentRegion(e.currentTarget.id)}>
          <RegionsBox name={currRegion.name} />
        </div>
      </div>
    )
  })


  // set plan by current region
  const [plan, setPlan] = useState()
  useEffect(() => {
    setPlan(palnsMockData[currentRegion])

  }, [currentRegion])


  return (
    <main className='bg-lightBlue p-3 flex grow' >
      <div className="main-box flex-col justify-center bg-white rounded-lg m-2 text-darkBlue grow">
        {/* toast: Validation Error */}
        {
          toastIsVisibleValidationError &&
          <div className='flex fixed top-4 top-4 mx-auto w-1/4 border items-center rounded border-orange bg-yellow p-2 px-3'>
            <img className='h-4' src="/img/Warning.svg" alt="Warning" />
            <div className="text-2xs ml-2 pr-6">{toastText}</div>
          </div>
        }

        {/* {toast} */}

        {
          toastIsVisible &&
          <div className='flex fixed top-4 right-96 mx-auto w-1/4 border items-center rounded border-red bg-lightRed p-2 px-3'>
            <img className='h-4' src="/img/Cancel.svg" alt="Cancel" />
            <div className="text-2xs ml-2">{toastText}</div>
          </div>
        }

        {/* finish toast */}

        {/* Region */}
        <div className='p-5'>
          <h2 className='mb-3'>Region</h2>
          <div className="grid grid-cols-3 gap-3">
            {regions}
          </div>
        </div>
        {/* finished Region */}

        {/* Plan */}
        <div>
          <h2 className='mb-3 p-5'>Plan</h2>
          <div className="grid grid-cols-5 text-2xs pl-16 pr-6 pb-2">
            <span>CPU</span>
            <span>Memory</span>
            <span>Storage</span>
            <span>Connection speed</span>
            <span>Monthly price</span>
          </div>
          <Plan plan={plan} setSelectedPlan={setSelectedPlan} />
        </div>
        {/* Finished Plan */}

        {/*  */}
        <OperatingSystem setOperSys={setOperSys} />

        <SSHKey userInfo={props.userInfo} setSSH_Key={setSSH_Key} />

        <HostName setHostName={setHostName} />
      </div>
      <div className="deploy bg-white m-2 ml-0.5 rounded h-fit">
        <Deploy
          currentRegion={currentRegion}
          plan={plan}
          operSys={operSys}
          showToast={showToast}
          SSH_Key={SSH_Key}
          hostName={hostName}
          selectedPlan={selectedPlan} />
      </div>
    </main>
  )
}
