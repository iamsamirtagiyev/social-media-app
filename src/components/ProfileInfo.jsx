import React from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ProfileInfo = () => {
  return (
    <div className='flex sm:gap-7 p-5 flex-col sm:flex-row'>
      <div className='flex items-center gap-6'>
        <div className='border-indigo-500 border-2 rounded-full p-1 sm:w-64 sm:h-64 w-40 h-40'>
            <img className='w-full h-full object-cover rounded-full' src="https://image.cnbcfm.com/api/v1/image/105232079-2018-Chevrolet-Camaro-ZL1-033.jpg?v=1679502991&w=1920&h=1080" alt="profile" />
        </div>
        <div className='flex gap-8 items-center sm:hidden'>
          <button className='text-lg flex flex-col items-center'>Post <span className='font-medium'>10</span></button>
          <button className='text-lg flex flex-col items-center'>Followers <span className='font-medium'>1000</span></button>
          <button className='text-lg flex flex-col items-center'>Following <span className='font-medium'>1000</span></button>
        </div>
      </div>
      <div className='flex flex-col gap-2 py-5'>
        <h1 className='text-2xl sm:text-4xl font-bold'>iamsamirtagiyev</h1>
        <div className='sm:flex gap-5 items-center hidden'>
          <button className='text-lg'>Followers <span className='font-medium'>1000</span></button>
          <button className='text-lg'>Following <span className='font-medium'>1000</span></button>
        </div>
        <span className='italic text-xl'>Samir Tagiyev</span>
        <div className='flex items-center gap-3 mt-4 sm:mt-2 w-full'>
          <button className='bg-indigo-700 button hover:bg-indigo-800'><MdModeEditOutline/>Edit Profile</button>
          <button className='bg-red-600 button hover:bg-red-700'><RiDeleteBin6Fill/>Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo