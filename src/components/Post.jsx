import classNames from 'classnames';
import React, { useRef, useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Post = () => {
    const [isLiked, setIsLiked] = useState(false)
    const ref = useRef()
    const doubleClick = () =>{
        setIsLiked(true)
        ref.current.classList.replace('scale-0', 'scale-1')
        ref.current.classList.replace('opacity-0', 'opacity-1')
        setTimeout(() => { 
            ref.current.classList.replace('scale-1', 'scale-0')
            ref.current.classList.replace('opacity-1', 'opacity-0')
        }, 1000)
    }
  return (
    <div className='sm:rounded post flex flex-col gap-5 p-2'>
        <div className='flex items-center gap-2 cursor-pointer'>
            <img className='w-12 h-12 object-cover object-center rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3AGqeSbb44XK0v5V9dtjVdmYJqUysvdVVjxmZ_gmCA&s"  alt="" />
            <span className="font-medium text-lg">lorengray</span>
        </div>
        <div className='w-full relative' onDoubleClick={doubleClick}>
            <img className='w-full h-full max-h-[700px] rounded object-cover object-center' src="https://i.pinimg.com/originals/01/c8/b0/01c8b00e858404fa3503e30a8566c64f.jpg" alt="post" />
            <div ref={ref} className='text-white absolute top-1/2 opacity-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500' style={{ transitionTimingFunction: 'cubic-bezier(0.5, 2, 0.4, 0.7)' }}>
                <FaHeart size={100}/>
            </div>
        </div>
        <div className='flex items-center gap-3 px-2 py-1'>
            { isLiked ? <FaHeart size={30} onClick={() => setIsLiked(false)} className='cursor-pointer text-red-600'/> : <FaRegHeart onClick={() => setIsLiked(true)} size={30} className='cursor-pointer'/> }
            <span className='text-lg font-medium'>1253 Likes</span>
        </div>
    </div>
  )
}

export default Post