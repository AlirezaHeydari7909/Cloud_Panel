import React from 'react'
export default function SidebarSupport() {
  return (
    <div className='px-3'>
        <div className='flex p-1.5 pr-7 mb-0.5 rounded border items-center'>
            <img className='h-3 pr-2' src='img/Support.svg' alt="support" />
            <span>Support</span>
        </div>
        <div className='flex p-1.5 pr-7 rounded border  items-center'>
            <img className='h-3 pr-2' src='img/Help.svg' alt="help" />
            <span>Help</span>
        </div>
    </div>
  )
}
