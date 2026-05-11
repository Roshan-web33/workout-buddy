import React from 'react'
import { Link } from 'react-router'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {

  const handleClick =()=>{
    
  }
  return (
    <header className='  '>
        <div className='container flex w-screen justify-between '>
            <Link to="/">
            <h1 className='font-[ui] font-bold text-3xl p-5 ml-50 '>Workout Buddyy</h1>
            </Link>
            <div className='flex gap-10'>
                <Link onClick={handleClick}>
            <h1 className='font-[ui] font-bold bg-green-600 p-3 mt-3 rounded-2xl text-white  '>LOG OUT</h1>
            </Link>
               <Link to="/login">
            <h1 className='font-[ui] font-bold bg-green-600 p-3 mt-3 rounded-2xl text-white  '>LOGIN</h1>
            </Link>
             <Link to="/signup">
            <h1 className='font-[ui] font-bold   bg-red-600 p-3 mt-3 rounded-2xl text-white  '>SIGN UP</h1>
            </Link>
            </div>

        </div>
    </header>
  )
}

export default Navbar
