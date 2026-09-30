import FirstText from './FirstText'
import OverallDashboard from './OverallDashboard'
import TopPerformers from './TopPerformersCard'
import {students} from '../../Data/StudentDetailsData'

const Home = () => {
  return (
    <div>
      <FirstText />
      <OverallDashboard />
      <TopPerformers students = {students}/>
    </div>
  )
}

export default Home