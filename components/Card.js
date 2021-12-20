import React from 'react'

function Card() {
    return (
        <div className="max-w-sm max-h-56 rounded overflow-hidden shadow-lg border">
            {/* Title */}
            <div className="w-full flex justify-between p3">
                <span className="pt-1 ml-2 font-bold text-sm h-8">Portfolio</span>
            </div>
            {/* Image */}
            <img src="https://source.unsplash.com/random" alt="" className="w-full" />
            
            {/* Description */}
        </div>
    )
}

export default Card
