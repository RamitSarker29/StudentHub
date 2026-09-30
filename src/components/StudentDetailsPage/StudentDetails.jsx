import React from 'react'
import DetailsHeader from './DetailsHeader'
import DetailsCard from './DetailsCard'
import { students } from '../../Data/StudentDetailsData'
import { useParams } from 'react-router-dom'
const StudentDetails = () => {
  const { id } = useParams()

  const student = students.find(
    (student) => student.id === Number(id)
  )


  return (
    <div>
      <DetailsHeader/>
      <DetailsCard student = {student}/>
      
    </div>
  )
}

export default StudentDetails
