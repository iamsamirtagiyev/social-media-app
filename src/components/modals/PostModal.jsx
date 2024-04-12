import React from 'react'
import { IoClose } from "react-icons/io5";

const PostModal = () => {
  return (
    <div className='flex flex-col gap-3'>
        <label className='relative'>
            <div className='absolute top-1 right-1 text-2xl cursor-pointer hover:text-red-500 transition-all duration-500'>
                <IoClose/>
            </div>
            <input type="file" accept='images/*, video/*' className='hidden' />
            <div className="w-full">
                <img className='w-full h-40 object-cover rounded-md' src="https://i.pinimg.com/736x/98/d0/72/98d0722dc446aee1d5818b1fd4de2dc3.jpg" alt="" />
            </div>
        </label>
        <input type="text" className="text-xl font-medium rounded w-full px-3 py-1.5" placeholder='Description' />
        <button className="w-full bg-indigo-600 transition-all duration-500 hover:bg-indigo-800 rounded px-3 py-1.5 text-xl font-medium">Send Post</button>
    </div>
  )
}

export default PostModal