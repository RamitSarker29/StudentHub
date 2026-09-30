import React from 'react'

const OverallDashboard = () => {
  return (
    <div className='flex justify-between mt-3'>
      <div className='ml-5 bg-blue-100 w-1/3 flex p-5 rounded-2xl shadow-xl'>
        <div className='bg-blue-200 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-team-fill text-blue-600 text-3xl p-2"></i>
            </div>
            <div>
                <h1 className='font-bold ml-5'>Total Students</h1>
                <h3 className='text-3xl font-bold ml-5'>24</h3>
                <h5 className='ml-5 text-sm text-blue-600 font-sm mt-2'>+4 this semester</h5>
            </div>
        </div>


        <div className='ml-5 bg-green-100 w-1/3 flex p-5 rounded-2xl shadow-xl'>
        <div className='bg-green-500 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-bar-chart-fill text-white text-3xl p-2"></i>
            </div>
            <div>
                <h1 className='font-bold ml-5'>Average Marks</h1>
                <h3 className='text-3xl font-bold ml-5'>78.6</h3>
                <h5 className='ml-5 text-sm text-gray-600 font-sm mt-2'>+5.2 from last semester</h5>
            </div>
        </div>

        
        <div className='ml-5 bg-violet-100 w-1/3 flex p-5 rounded-2xl mr-5 shadow-xl'>
        <div className='bg-violet-500 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-calendar-2-line text-white text-3xl p-2"></i>
            </div>
            <div>
                <h1 className='font-bold  ml-5'>Average Attendance</h1>
                <h3 className='text-3xl font-bold ml-5'>86%</h3>
                <h5 className='ml-5 text-sm text-violet-500 font-sm mt-2'>+3% from last semester</h5>
            </div>
        </div>
    </div>
 
  )
}

export default OverallDashboard
