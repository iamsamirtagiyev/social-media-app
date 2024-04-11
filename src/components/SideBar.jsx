import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipses } from "react-icons/io5";
import { FaRegFolder, FaRegUser, FaUser } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { openModal } from '../stores/modal'
import { FaInstagram } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <aside className={classNames('rounded  px-2 py-3 flex flex-col gap-5 fixed sm:static sm:translate-x-0 bottom-1.5 left-1/2 w-[98%] -translate-x-1/2 transition-all duration-500 ', {
      'sm:w-64': !isOpen,
      'sm:w-16': isOpen
    })}>
      <Link to='/' className={classNames('link text-2xl font-bold hover:bg-transparent px-4 hidden sm:flex', { 'px-3': isOpen })}>
        { isOpen && <FaInstagram size='30' /> }
        { isOpen || 'Instagram' }
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
        <button className='link cursor-pointer hidden sm:flex'>
                <div className='icon'>
                  <FaRegHeart/>
                </div>
              <span className={classNames('text-lg hidden sm:flex', { 'sm:hidden': isOpen})}>Notifications</span>
        </button>
        <NavLink to='/messages' className='link'>
          {
            ({isActive}) => (
              <>
                <div className='icon'>
                  { isActive ? <IoChatbubbleEllipses/> : <IoChatbubbleEllipsesOutline/> }
                </div>
                <span className={classNames('text-lg hidden sm:flex', { 'font-medium': isActive, 'sm:hidden': isOpen })}>Messages</span>
              </>
            )
          }
        </NavLink>
        <button className='link cursor-pointer' >
          <div className='icon'>
            <FaRegFolder/>
          </div>
          <span className={classNames('text-lg hidden sm:flex', { 'sm:hidden': isOpen})} >Create</span>
        </button>
        <button className='link cursor-pointer hidden sm:flex' onClick={() => dispatch(openModal({name: 'theme'}))}>
                <div className='icon'>
                  <FaRegMoon/>
                </div>
              <span className={classNames('text-lg hidden sm:flex', { 'sm:hidden': isOpen})}>Dark</span>
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