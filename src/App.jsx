import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieInfo from './pages/MovieInfo'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movieinfo/:id' element={<MovieInfo/>}/>
      <Route path='/movies' element={<Movies/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
