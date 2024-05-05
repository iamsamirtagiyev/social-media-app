import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const ChatNav = ({setOpen}) => {
  return (
    <div className='flex items-center gap-3 p-2 theme-bg'>
        <IoIosArrowBack size='30' className='sm:hidden cursor-pointer' onClick={() => setOpen(false)}/>
        <div className='flex gap-2 cursor-pointer items-center'>
            <img className='w-12 h-12 object-cover rounded-full' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <span>@Username</span>
        </div>
    </div>
  )
}

export default ChatNav