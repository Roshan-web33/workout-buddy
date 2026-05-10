import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className='  '>
        <div className='container w-scre '>
            <Link to="/">
            <h1 className='font-[ui] font-bold text-3xl p-5 ml-50 '>Workout Buddyy</h1>
            </Link>

        </div>
    </header>
  )
}

export default Navbar
