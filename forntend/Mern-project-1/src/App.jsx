import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './compontent/Navbar'
import orkoutDetails from './compontent/workoutDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <BrowserRouter>
       <Navbar/>
     <div className="pages">
      <Routes>
        <Route  path='/' element={<Home/>}/>
      </Routes>
     </div>
      </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
