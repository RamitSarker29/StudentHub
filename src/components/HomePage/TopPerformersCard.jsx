import StudentCard from "./StudentCard"
const TopPerformers = ({students}) => {
      console.log(students)

  return (
    <div className='w-full mt-5'>
        <div className='flex justify-between'>
            <h1 className='ml-5 font-bold text-xl'>Top Performers</h1>
            <button className='mr-15 text-blue-600 font-bold active:scale-95'>View all</button>
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
