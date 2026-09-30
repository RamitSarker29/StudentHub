import React from 'react'
import Header from './Header'
import StudentOverViewCard from './StudentOverViewCard'
import StudentDetails from '../StudentDetailsPage/StudentDetails'
import { Routes, Route } from 'react-router-dom'
import { students } from '../../Data/StudentDetailsData'

const Student = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-wrap gap-2'>
        {students.map((student) => (
          <StudentOverViewCard
          key = {student.id}
          student = {student}
        />
        ))}

      </div>



    </div>
  )
}

export default Student
