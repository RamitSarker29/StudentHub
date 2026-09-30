import React from 'react'

const AboutMain = () => {
  return (
    <div className='p-4 ml-5 mr-5 rounded-xl'>
      <div className='flex justify-center items-center'>
        <i className="ri-graduation-cap-fill text-9xl text-blue-600 ml-5 bg-blue-100 rounded-full p-6"></i>
      </div>
      <div className='flex justify-center items-center'>
            <h1 className='font-bold text-4xl ml-6 tracking-wide mt-1'>StudentHub</h1>
        </div>
      <div className='max-w-xl mx-auto text-center mt-2 text-gray-500 font-medium'>        
        <p>
        A simple and modern student management system built with React.
        Manage students, track performance, and keep everything organized
        in one place.
        </p>
    </div>
    </div>
  )
}

export default AboutMain
