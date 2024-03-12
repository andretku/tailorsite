import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutPage from './Pages/AboutPage/AboutPage'
import BlogsPage from './Pages/BlogsPage/BlogsPage'
import SuitsOffice from './Pages/Suits&Office/Suits&Office'
import AddNewBlog from './Pages/BlogsPage/AddNewBlog'
import ViewBlog from './Pages/BlogsPage/ViewBlog/ViewBlog'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogsPage />} />
        <Route path='/blog/addNewBlog' element={<AddNewBlog />} />
        <Route path='/blog/:id' element={<ViewBlog />} />
        <Route path='/office' element={<SuitsOffice />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
