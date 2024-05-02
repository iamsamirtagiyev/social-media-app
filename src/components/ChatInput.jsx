import React from 'react'
import { IoIosSend } from "react-icons/io";

const ChatInput = () => {
  return (
    <div className='w-full user rounded p-2 flex items-center gap-3'>
        <input type="text" placeholder='Messaging...' className='w-full text-xl capitalize font-medium px-3 py-2 rounded-full search-bg' />
        <button className='bg-indigo-700 hover:bg-indigo-800 hover:-rotate-45 transition-all duration-500 rounded-full p-3 text-2xl'>
            <IoIosSend  />
        </button>
    </div>
  )
}

export default ChatInput