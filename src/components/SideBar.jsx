import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipses } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../stores/modal'
import { FaInstagram } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { TbSunMoon } from "react-icons/tb";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme)

  const clickHandle = e => {
    if(e.target.classList.contains('messages')){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
  }
  return (
    <aside className={classNames('px-2 py-3 flex flex-col gap-5  w-full  transition-all duration-500 z-10 h-full', {
      'sm:w-64': !isOpen,
      'sm:w-16': isOpen
    })} onClick={clickHandle}>
      <Link to='/' className={classNames('link text-2xl font-bold hover:bg-transparent px-4 hidden sm:flex', { 'px-3': isOpen })}>
        { isOpen && <FaInstagram size='30' /> }
        { isOpen || 'iamsamirtagiyev' }
      </Link>
      <ul className='flex sm:flex-col justify-between sm:justify-start gap-2'>
        <NavLink to='/' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='icon'>
                  { isActive ? <GoHomeFill/> : <GoHome/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive, 'sm:hidden': isOpen })}>Home</span>
              </>
            )
          }
        </NavLink>
        <button className='link cursor-pointer' onClick={() => dispatch(openModal({name: 'notifications'}))}>
                <div className='icon'>
                  <FaRegHeart/>
                </div>
              <span className={classNames('text-lg hidden sm:flex', { 'sm:hidden': isOpen})}>Notifications</span>
        </button>
        <button className='link cursor-pointer' onClick={() => dispatch(openModal({name: 'post'}))} >
          <div className='icon'>
            <MdOutlineAddAPhoto/>
          </div>
          <span className={classNames('text-lg hidden sm:flex', { 'sm:hidden': isOpen})} >Create</span>
        </button>
        <NavLink to='/messages' className='link messages'>
          {
            ({isActive}) => (
              <>
                <div className='icon messages'>
                  { isActive ? <IoChatbubbleEllipses /> : <IoChatbubbleEllipsesOutline /> }
                </div>
                <span className={classNames('text-lg hidden sm:flex messages', { 'font-medium': isActive, 'sm:hidden': isOpen })}>Messages</span>
              </>
            )
          }
        </NavLink>
        
        <button className='link cursor-pointer hidden sm:flex' onClick={() => dispatch(openModal({name: 'theme'}))}>
                <div className='icon'>
                  { theme === 'dark' && <FaRegMoon/> }
                  { theme === 'light' && <LuSun/> }
                  { theme === 'system' && <TbSunMoon/> }
                </div>
              <span className={classNames('text-lg hidden sm:flex capitalize', { 'sm:hidden': isOpen})}>{ theme }</span>
        </button>
        <NavLink to='/profile' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='icon'>
                  { isActive ? <FaUser/> : <FaRegUser/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive, 'sm:hidden': isOpen })}>Profile</span>
              </>
            )
          }
        </NavLink>
      </ul>
    </aside>
  )
}

export default SideBar