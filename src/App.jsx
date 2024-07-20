import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/Home/Home'
import NotFound from './pages/404/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
