import React from 'react'

const Blobs = () => {
    return (
        <>
            {/* Gradient Blobs */}
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 sm:-left-10 md:-left-20 bg-gradient-to-r from-[#F2277E] to-[#5F2DED] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 md:-right-0 lg:-right-0 bg-gradient-to-r from-[#5F2DED] to-[#F2277E] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </>
    )
}

export default Blobs