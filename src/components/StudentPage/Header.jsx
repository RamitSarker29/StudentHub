import React from 'react'
import StudentOverViewCard from './StudentOverViewCard'

const Header = () => {
  return (
    <div className='flex justify-between mt-5'>
        <div className='ml-7'>
            <h1 className='font-bold text-3xl'>Students</h1>
            <h2 className='text-gray-400 font-medium'>Manage and view all students</h2>
        </div>

      <button className='mr-17 bg-blue-600 text-white font-bold w-40 rounded-2xl h-12 active:scale-95'>
        <span className='font-black'><i className="ri-add-large-line mr-2"></i></span>
        Add Student</button>
    </div>
  )
}

export default Header
