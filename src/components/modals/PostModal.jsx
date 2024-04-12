import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";

const PostModal = () => {
  const [post, setPost] = useState()
  return (
    <div className='flex flex-col gap-3'>
      <label className='w-full h-52 rounded relative'>
        { post && <button className='absolute top-2 right-2 z-20 bg-red-500 rounded text-2xl' onClick={() => setPost()}>
          <IoClose/>
        </button> }
        <input type="file" accept='image/*, video/*' className='hidden' onChange={e => setPost(URL.createObjectURL(e.target.files[0]))} />
        <div className="w-full h-full bg-zinc-400 rounded flex items-center justify-center text-zinc-600">
         { post ? <img src={post} className='w-full h-full object-cover rounded' alt="" /> : <FaImage size={35}/>}
        </div>
      </label>
    </div>
  )
}

export default PostModal