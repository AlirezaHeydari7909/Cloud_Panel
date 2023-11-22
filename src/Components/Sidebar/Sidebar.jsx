import React from 'react'
import Menu from './Menu'
import SidebarSupport from './SidebarSupport'

export default function Sidebar() {
    return (
        <aside className="w-1/6 h-screen sticky top-0 border-r">
            <div className="text-2xs text-darkBlue">
                <Menu />
                <SidebarSupport />
            </div>
        </aside>
    )
}
