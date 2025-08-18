import React from 'react'

const PillLabels = ({ title, className }) => {
    return (
        <div>
            <h4 className={`text-sm font-semibold rounded-4xl bg-[#E7DEFF] text-[#5F2DED] text-center py-2 w-[100px]  my-5 ${className}`}>{title}</h4>
        </div>
    )
}

export default PillLabels