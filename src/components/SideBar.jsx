import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipses } from "react-icons/io5";
import { FaRegFolder, FaRegUser, FaUser } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import classNames from 'classnames';


const SideBar = () => {
  return (
    <aside className='bg-zinc-800 rounded sm:w-64 px-2 py-3 flex flex-col gap-5 fixed sm:static sm:translate-x-0 bottom-1.5 left-1/2 w-[98%] -translate-x-1/2 '>
      <ul className='flex sm:flex-col justify-between sm:justify-start gap-2'>
        <NavLink to='/' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='text-white text-2xl'>
                  { isActive ? <GoHomeFill/> : <GoHome/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive })}>Home</span>
              </>
            )
          }
        </NavLink>
        <NavLink to='/notifications' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='text-white text-2xl'>
                  { isActive ? <FaHeart/> : <FaRegHeart/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive })}>Notifications</span>
              </>
            )
          }
        </NavLink>
        <NavLink to='/messages' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='text-white text-2xl'>
                  { isActive ? <IoChatbubbleEllipses/> : <IoChatbubbleEllipsesOutline/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive })}>Messages</span>
              </>
            )
          }
        </NavLink>
        <button className='link cursor-pointer'>
                <div className='text-white text-2xl'>
                  <FaRegFolder/>
                </div>
                <span className={classNames('text-lg hidden sm:flex')}>Create</span>
        </button>
        <button className='link cursor-pointer hidden sm:flex'>
                <div className='text-white text-2xl'>
                  <FaRegMoon/>
                </div>
                <span className={classNames('text-lg hidden sm:flex')}>Dark</span>
        </button>
        <NavLink to='/profile' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='text-white text-2xl'>
                  { isActive ? <FaUser/> : <FaRegUser/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive })}>Profile</span>
              </>
            )
          }
        </NavLink>
      </ul>
    </aside>
  )
}

export default SideBar