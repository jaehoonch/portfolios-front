import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid'

const dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row py-4 justify-between">
                <h1 className="font-bold text-xl">Dashboard</h1>

                {/* <button className=" flex flex-row bg-primary text-white p-2 rounded-md items-center">
                <PlusCircleIcon className="h-4 pr-2" />
                <h3 className="text-sm font-bold">Create Portfolio</h3>
                </button> */}
            </div>
        </div>
    )
}

export default dashboard
