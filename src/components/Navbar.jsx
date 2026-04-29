import React from 'react'
import { IoIosMenu } from "react-icons/io";
import logo from '../../public/logo.png'
import { CiSearch } from "react-icons/ci";
import { PiMicrophone } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import profile from '../../public/profile.png'
import { MdOutlineVideoCall } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-2 fixed top-0 w-full bg-white z-50'>
        <div className='flex items-center space-x-4'>
          <IoIosMenu className='text-2xl cursor-pointer'/>
          <img className = 'h-8 w-30 cursor-pointer' src={logo} alt=''></img>
           </div>

        <div className='flex h-11 w-[39%]'>
          <div className='w-full border rounded-l-full px-3 py-2'>
            <input className='w-full h-full outline-none py-2 px-2' type='text' placeholder='Search'></input>
          </div>
          <button className='px-4 py-2 border bg-gray-200 rounded-r-full cursor-pointer hover:bg-gray-200 h-full'><CiSearch /></button>
          <div>
            <button className='border h-full ml-3 p-2 cursor-pointer rounded-full text-2xl hover:bg-gray-200'><PiMicrophone /></button>
          </div>
        </div>

        <div className='flex items-center space-x-6'>
          <MdOutlineVideoCall className='text-4xl border rounded-full p-1'/>
          <GoBell className='text-4xl border rounded-full p-1'/>
          <img className = 'h-9 w-9 border rounded-full' src = {profile} alt = ''></img>
        </div>
      
    </div>
  )
}

export default Navbar
