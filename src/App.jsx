import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Heeaderr from './components/Heeaderr'

export default function App() {
  return (
    <BrowserRouter>
    <Heeaderr/>
    <Routes>
     
     
      <Route  path='/' element = {<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    
   
  )
}
