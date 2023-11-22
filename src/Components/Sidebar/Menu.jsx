import React from 'react'
export default function Menu() {
    return (
        <menu className='pb-44 pt-9 px-3'  >
            <div className='flex p-1.5 pl-3 pr-12 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/Dashboard.svg' alt="Dashboard" />
                <span className='w-12'>Dashboard</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center  bg-blue text-white  box-border'>
                <img className='h-3 pr-2' src='img/Instances.svg' alt="Instances" />
                <span className='w-12'>Instances</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/Snapshots.svg' alt="Snapshots" />
                <span className='w-12'>Snapshots</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/SSH Keys.svg' alt="SSH_Keys" />
                <span className='w-12'>SSH_Keys</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center  border-b  '>
                <img className='h-3 pr-2 ' src='img/Volume.svg' alt="Volume" />
                <span className='text-grey' >Volume</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/Billing.svg' alt="Billing" />
                <span className='pr-10'>Billing</span>
                <img className='h-1.5' src='img/Arrow-down.svg' alt="arrow-down" />
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/Networking.svg' alt="Networking" />
                <span className='w-12'>Networking</span>
            </div>
            <div className='flex p-1.5 pl-3 rounded-sm items-center '>
                <img className='h-3 pr-2' src='img/Report.svg' alt="Report" />
                <span className='w-12'>Report</span>
            </div>
        </menu>
    )
}
