import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
export default function Navbar(props) {
  
  return (
    <nav className=' text-base relative w-full'>
      <div className="flex">

        <div className="top-0 w-1/6 flex justify-center items-center border-r border-b">
          
        </div>

        {/* navbar: two component ---> left side and right sid */}
        <div className="flex items-center border-b px-5 py-2 grow justify-between "  >
          <LeftSide />
          <RightSide userInfo={props.userInfo}/>
        </div>
      </div>
    </nav>
  )
}
