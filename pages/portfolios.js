import Card from '../components/Card'
import { PlusCircleIcon } from "@heroicons/react/solid"

const Portfolios = () => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row py-4 justify-between">
                <h1 className="font-bold text-xl">Portfolios(20)</h1>

                <button className=" flex flex-row bg-primary text-white p-2 rounded-md items-center">
                <PlusCircleIcon className="h-4 pr-2" />
                <h3 className="text-sm font-bold">Create Portfolio</h3>
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )

}

export default Portfolios