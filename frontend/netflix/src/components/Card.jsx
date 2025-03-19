import React from 'react'

const Card = ({title,desc}) => {
  return (
    <div>
      <div className='h-80 px-4 py-2 w-64 border-2 border-red rounded-3xl overflow-hidden text-white bg-gradient-to-r from-purple-900 '>
        <h1 className='py-4 text-[25px] font-semibold '>{title}</h1>
        <span className='text-[17px] font-sans font-semibold text-gray-500'>{desc}</span>
      </div>
    </div>
  )
}

export default Card