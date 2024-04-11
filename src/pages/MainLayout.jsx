import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from "../components/SideBar"
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'

const MainLayout = () => {
    const { open, data } = useSelector(state => state.modal)
  return (
    <div className='body'>
        {open && <Modal name={open} data={data}/>}
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout