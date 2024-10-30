/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { DollarSign } from 'lucide-react'  

const SmallCard = ({
    icon:IconComponent,
    label,
    amount
}) => {
  return (
    <>
      <div className="border border-black p-4 rounded-2xl min-w-[150px] flex-1">
        <div className="flex items-center gap-1">
            {IconComponent && <IconComponent size={14} />}
            <span className='text-xs'>{label}</span>
        </div>
        <div className="flex items-center">
            <DollarSign size={24} />
            <span className='font-semibold text-xl'>{amount}</span>
        </div>
      </div>
    </>
  )
}

export default SmallCard