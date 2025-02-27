import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

const Header = () => {
    return (
        // <div className="shadow-sm border-b top-0 z-50 bg-white">
        <div className="top-0 z-50">
            <div className="flex justify-between mx-5 lg:mx-auto px-16">
                {/* <div className="relative hidden lg:inline-grid w-24 cursor-pointer items-center">
                    <h1 className="text-xl font-bold text-gray-600">Portfolios</h1>
                </div> */}
                <div className="flex items-center">
                    <MenuIcon className="h-6 cursor-pointer" />
                </div>

                {/* Middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center
                                        pointer-event-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <HomeIcon className="navBtn" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 
                        bg-red-500 rounded-full flex items-center justify-center
                        animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img src="https://randomuser.me/portraits/men/1.jpg"
                    alt="profile pic" className="h-10 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Header
