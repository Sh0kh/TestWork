import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className=''>
        <h1 className='text-white text-7xl font-bold		'>
          Error
        </h1>
        <NavLink to='/' className='bg-[#FC4747] px-[20px] py-[10px] mt-[30px] block text-center text-white rounded-xl	hover:bg-transparent hover:text-[#FC4747] border-solid	border-[#FC4747] border-2 transition duration-500 ease-in-out'>
          Back
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage