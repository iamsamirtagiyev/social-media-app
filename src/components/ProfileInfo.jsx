import React from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ProfileInfo = () => {
  return (
        <div className='flex gap-7 items-center p-5'>
            <div className='border-indigo-500 border-2 rounded-full p-1 sm:w-64 sm:h-64 w-40 h-40'>
                <img className='w-full h-full object-cover rounded-full' src="https://image.cnbcfm.com/api/v1/image/105232079-2018-Chevrolet-Camaro-ZL1-033.jpg?v=1679502991&w=1920&h=1080" alt="profile" />
            </div>
        </div>
  )
}

export default ProfileInfo