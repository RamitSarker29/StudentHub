import React from 'react'

const AboutLastDiv = () => {
  return (
    <div className='flex mt-9'>
         <div className='ml-5 w-1/3 flex p-5 rounded-2xl shadow-xl mt-5'>
        <div className='bg-green-500 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-shake-hands-fill text-white text-3xl p-2"></i>
            </div>
            <div>
                <h3 className='text-xl font-bold ml-5'>Easy to Use</h3>
                <h5 className='ml-5 text-gray-500 font-medium mt-2'>Clean and intuitive interface</h5>
            </div>
        </div>

               <div className='ml-5 w-1/3 flex p-5 rounded-2xl shadow-xl mt-5'>
        <div className='bg-blue-500 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-draft-line text-white text-3xl p-2"></i>
            </div>
            <div>
                <h3 className='text-xl font-bold ml-5'>Easy to Use</h3>
                <h5 className='ml-5 text-gray-500 font-medium mt-2'>Clean and intuitive interface</h5>
            </div>
        </div>

               <div className='ml-5 w-1/3 flex p-5 rounded-2xl shadow-xl mt-5 mr-5'>
        <div className='bg-violet-500 w-fit px-1 py-1 rounded-2xl h-13 flex items-center mt-3'>
            <i className="ri-folder-fill text-white text-3xl p-2"></i>
            </div>
            <div>
                <h3 className='text-xl font-bold ml-5'>Easy to Use</h3>
                <h5 className='ml-5 text-gray-500 font-medium mt-2'>Clean and intuitive interface</h5>
            </div>
        </div>
    </div>
  )
}

export default AboutLastDiv
