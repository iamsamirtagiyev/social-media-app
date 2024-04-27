import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from "../stores/modal";
import { IoSearch } from "react-icons/io5";
import User from './User';
import { LuSun } from "react-icons/lu";
import { TbSunMoon } from "react-icons/tb";


const NavBar = () => {
    const inputRef = useRef()
    const searchRef = useRef()
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.theme)
    const showUsers = e => {
      if(e.target.value){
        searchRef.current.classList.replace('hidden', 'flex')
      }
      else{
        searchRef.current.classList.replace('flex', 'hidden')
      }
    }
  return (
    <div className='sm:hidden relative w-full nav p-3 flex items-center justify-between'>
        <Link className='text-xl font-bold mr-1' to='/'>Instagram</Link>
        <div className='flex items-center gap-1.5'>
          <div className='icon-bg flex items-center rounded w-full px-2 py-1'>
              <input onChange={showUsers} ref={inputRef} type="text" className='bg-transparent border-0 outline-0 text-lg font-medium w-0 focus:w-full' placeholder='Search...' />
              <button onClick={() => inputRef.current.focus()}>
                <IoSearch size={25}/>
              </button>
          </div>
            <button className='link cursor-pointer flex' onClick={() => dispatch(openModal({name: 'theme'}))}>
              <div className='icon'>
                  { theme === 'dark' && <FaRegMoon/> }
                  { theme === 'light' && <LuSun/> }
                  { theme === 'system' && <TbSunMoon/> }
              </div>
            </button>
        </div>
        <div ref={searchRef} className="fixed left-1/2 -translate-x-1/2 top-[65px] w-full h-[86%] search z-10 rounded overflow-auto p-2 flex-col gap-1.5 hidden">
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
        </div>
    </div>
  )
}

export default NavBar