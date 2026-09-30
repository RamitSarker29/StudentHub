import React from 'react'

const DetailsCard = ({student}) => {
  return (
    <div className='flex items-center justify-center'>
              <div className='w-fit p-6 ml-7 flex mt-5 object-left shadow-xl rounded-lg flex-wrap'>
            <img className='rounded-full h-20 w-20 object-cover object-[center_28%] -ml-3 ' src={student.image} alt="" />
        <div className=' ml-5'>
            <h1 className='font-bold text-xl'>{student.name}</h1>
            <h2 className='text-gray-400 font-medium'>{student.rollNumber}</h2>
            <h1 className='bg-violet-200 text-violet-600 font-bold w-full text-center px-2 py-1 mt-2 rounded-lg'>{student.departmentCode}</h1>
            <h1 className='mt-5 font-bold'><i className="ri-bank-card-fill w-fit bg-blue-200 text-blue-600 p-2 mr-3 rounded-lg"></i>Year: <span className='font-bold text-black ml-19'>{student.year}</span></h1>
            <h1 className='mt-5 font-bold'><i className="ri-clipboard-fill w-fit bg-green-200 text-green-600 p-2 mr-3 rounded-lg"></i>CGPA: <span className='font-bold text-black ml-18'>{student.cgpa}</span></h1>
            <h1 className='mt-5 font-bold'><i className="ri-bar-chart-box-fill w-fit bg-orange-200 text-orange-600 p-2 mr-3 rounded-lg"></i>Attendance: <span className='font-bold text-black ml-6'>{student.attendance}%</span></h1>
            <h1 className='mt-5 font-bold'><i className="ri-book-3-line w-fit bg-yellow-200 text-yellow-600 p-2 mr-3 rounded-lg"></i>Department: <span className='font-bold text-black ml-5'>{student.department}</span></h1>
            <h1 className='mt-5 font-bold'><i className="ri-hashtag w-fit bg-teal-200 text-teal-600 p-2 mr-3 rounded-lg"></i>Roll Number: <span className='font-bold text-black ml-4'>{student.rollNumber}</span></h1>
            <h1 className='mt-5 font-bold'><i className="ri-mail-line w-fit bg-pink-200 text-pink-600 p-2 mr-3 rounded-lg"></i>Email: <span className='font-bold text-black ml-18'>{student.email}</span></h1>





        </div>
            </div>
    </div>
  )
}

export default DetailsCard
