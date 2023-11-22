import React from 'react'

export default function RightSide(props) {
    return (
        
        <div className='left flex items-center space-x-4'>
            <div className='notification max-w-sm '>
                <img className='h-4' src='img/notification.svg' alt="notification" />
            </div>

            <div className="balance flex items-center text-2xs border border-grey rounded py-1 pl-2 pr-8 ">
                <div><img className='h-3 pr-1' src='img/plus.svg' alt="plus" /></div>
                <div>$ {props.userInfo.balance}</div>
            </div>

            <div className="flex text-lightGrey items-center">
                |
            </div>
            
            <div className='avatar'>
                <img className='h-6' src='img/v-avatar.svg' alt="avatar" />
            </div>
        </div>
    )
}
