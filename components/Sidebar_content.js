import React from 'react'

const Sidebar_content = ({Icon , value}) => {
  return (
    <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <Icon className='h-6 w-6 text-blue-500'/>
            <p className='hidden sm:inline-flex font-medium'>{value}</p>
        </div>
  )
}

export default Sidebar_content