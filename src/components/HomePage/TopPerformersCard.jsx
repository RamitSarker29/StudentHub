import StudentCard from "./StudentCard"
import {Link} from 'react-router-dom'
const TopPerformers = ({students}) => {

  return (
    <div className='w-full mt-5'>
        <div className='flex justify-between'>
            <h1 className='ml-5 font-bold text-xl'>Top Performers</h1>
            <Link to="/students" className="mr-15 text-blue-600 font-bold active:scale-95">
            View all</Link>        
            </div>
        {[...students].sort((a , b) => b.cgpa - a.cgpa).slice(0 , 3).map((student , index) => (
          <StudentCard
          key = {student.id}
          student = {student}
          rank = {index + 1}/>
        ))}




      
    </div>
  )
}

export default TopPerformers
