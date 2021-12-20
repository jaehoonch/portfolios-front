import React from 'react'
import { DesktopComputerIcon,
        UserGroupIcon,
        LightBulbIcon,
        BookOpenIcon,
        PlayIcon}
from '@heroicons/react/solid'
import Link from 'next/link'

const Sidebar = () => {
    return (
        // <div className="min-h-screen flex flex-row bg-gray-100">
        <aside className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <Link href="/">
                <a>
                    <SideBarLogo icon={<div className="h-6" >P</div>} />
                </a>
            </Link>
            <ul className="py-2">
                <li>
                    <Link href="/dashboard">
                        <a>
                            <SideBarIcon icon={<DesktopComputerIcon className="h-6" />} text="Dashboard" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolios">
                        <a>
                            <SideBarIcon icon={<BookOpenIcon className="h-6" />} text="Portfolios" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/ideas">
                        <a>
                            <SideBarIcon icon={<LightBulbIcon className="h-6" />} text="Ideas" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/playground">
                        <a>
                            <SideBarIcon icon={<PlayIcon className="h-6" />} text="Playground" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        <a>
                            <SideBarIcon icon={<UserGroupIcon className="h-6" />} text="Users" />
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

const SideBarLogo = ({ icon }) => (
    <div className="sidebar-logo group">
        {icon}

        <span className="sidebar-tooltip">
        </span>
    </div>
)

export default Sidebar
