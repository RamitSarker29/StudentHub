import {Link} from 'react-router-dom'
const StudentOverViewCard = ({student}) => {
  return (
    <div>
        <div className='w-fit p-6 ml-7 flex mt-5 object-left shadow-xl rounded-lg flex-wrap'>
            <img className='rounded-full h-20 w-20 object-cover object-[center_28%] -ml-3 ' src={student.image} alt="" />
        <div className=' ml-5'>
            <h1 className='font-bold text-xl'>{student.name}</h1>
            <h2 className='text-gray-400 font-medium'>{student.rollNumber}</h2>
            <h1 className='bg-blue-200 text-blue-600 font-bold w-fit px-2 py-1 mt-2 rounded-lg'>{student.departmentCode}</h1>
            <h1 className='mt-3 font-medium text-gray-600'>CGPA: <span className='font-bold text-black'>{student.cgpa}</span></h1>
            <h1 className='mt-1.5 font-medium text-gray-600 mb-5'>Attendance: <span className='font-bold text-black'>{student.attendance}%</span></h1>
            <Link to ={`/students/details/${student.id}`} className='text-blue-600 font-bold mt-5 active:scale-95'>View Details<i className="ri-arrow-right-line ml-1"></i></Link>
        </div>
            
 
   
            
        </div>

    </div>
  )
}

export default StudentOverViewCard
