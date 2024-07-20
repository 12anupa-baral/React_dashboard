import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/Home/Home'
import NotFound from './pages/404/NotFound'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='reset' element={<Reset/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
