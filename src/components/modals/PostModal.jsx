import React, { useState } from 'react'
import { MdCloudUpload } from "react-icons/md";

const PostModal = () => {
  const [post, setPost] = useState(null)
  const upload = e => {
    setPost({
      link: URL.createObjectURL(e.target.files[0]),
      type: e.target.files[0].type
    })
  }
  const dropHandle = e => {
    e.preventDefault()
    setPost({
      link: URL.createObjectURL(e.dataTransfer.files[0]),
      type: e.dataTransfer.files[0].type
    })
  }
  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='w-full h-56 rounded bg-zinc-600 flex items-center justify-center' onDragOver={e => e.preventDefault()} onDrop={dropHandle}>
        <input type="file" accept='image/*, video/*' hidden onChange={upload} />
        { !post && (
          <div className='flex flex-col items-center text-center text-zinc-400 font-medium text-xl cursor-pointer'>
            <MdCloudUpload size={80}/>
            Drag and Drop or click here <br /> to upload image
          </div>
        ) }
        { post && (
          <>
            { post.type.includes('image') && <img className='w-full h-full rounded object-cover object-center' src={post.link} alt="post" /> }
            { post.type.includes('video') && <video src={post.link} className='w-full h-full rounded object-cover object-center' controls></video> }
          </>
        ) }
      </label>
      <input type="text" placeholder='Description' className='w-full bg-zinc-600 rounded text-xl font-medium px-3 py-2' />
      <button type="submit" className='w-full rounded text-xl font-medium bg-indigo-600 px-3 py-2 transition-all duration-500 hover:bg-indigo-700'>Send Post</button>
    </div>
  )
}

export default PostModal