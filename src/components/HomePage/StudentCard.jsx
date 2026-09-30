import React from 'react'

const StudentCard = ({student , rank}) => {
  return (
    <div>
          <div className='flex w-full justify-between mt-5 mb-9'>
      <h1 className="ml-7 font-bold text-xl">{rank}</h1>
      <img className="rounded-full h-20 w-20 object-cover object-[center_28%] -ml-70" src={student.image} alt="" />
      <h2 className='font-bold text-xl mt-5'>{student.name}</h2>
      <h3 className='font-bold text-xl mt-5 bg-green-100 p-2 rounded-2xl w-10 h-12 pr-0.5 text-green-600'>{student.cgpa}</h3>
      <h4 className="mr-20 font-bold text-xl mt-5">CGPA</h4>
    </div>
    </div>
  )
}

export default StudentCard
