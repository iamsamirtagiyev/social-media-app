import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegMoon } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { openModal } from "../stores/modal";

const NavBar = () => {
    const dispatch = useDispatch()
  return (
    <div className='sm:hidden w-full nav p-3 flex rounded items-center justify-between'>
        <Link className='text-xl font-bold' to='/'>Instagram</Link>
        <div className='flex items-center'>
            <button className='link cursor-pointer flex' onClick={() => dispatch(openModal({name: 'theme'}))}>
                <div className='icon'>
                  <FaRegMoon/>
                </div>
            </button>
        </div>
    </div>
  )
}

export default NavBar