import Navbar from './components/HomePage/Navbar'
import FirstText from './components/HomePage/FirstText'
import OverallDashboard from './components/HomePage/OverallDashboard'
import TopPerformers from './components/HomePage/TopPerformersCard'
import { Routes, Route } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Student from './components/StudentPage/Student'
import StudentDetails from './components/StudentDetailsPage/StudentDetails'
import AddStudentPage from './components/AddStudentPage/AddStudentPage'
import AboutPage from './components/AboutPage/AboutPage'
const App = () => {
  return (
    <div className='cursor-pointer'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path="/students/details/:id" element={<StudentDetails />} />
        <Route path="/students/add" element= {<AddStudentPage/>}/>



      </Routes>

    </div>
  )
}

export default App
