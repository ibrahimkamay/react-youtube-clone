import React from 'react'
import icons from "../assets/icons"
import images from '../assets/images/images'

const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between h-20 px-3'>
        <div className='w-3/12 flex items-center space-x-4'>
        <icons.menu className='icons-style '/>
        <img className='w-32' src={images.youtube} alt="" />
        </div>
        <div className='w-6/12 flex items-center space-x-4'>
            <div className='w-3/4 flex items-center '>
                <input className='outline-none border p-2 h-10 flex-1' type="text" placeholder='Ara' />
                <div className='bg-gray-100 h-10 w-20 flex items-center justify-center border'>
                <icons.search className='icons-style '/>
            </div>
            </div>
      
            <div className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                <icons.microphone className='icons-style '/>
            </div>
        </div>
        <div className='w-3/12 flex items-center justify-end space-x-5'>
        <icons.video className='icons-style '/>
        <icons.notification className='icons-style '/>
    <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
        </div>
    </div>
  )
}

export default Navbar