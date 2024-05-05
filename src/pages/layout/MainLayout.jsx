import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from "../../components/SideBar"
import { useSelector } from 'react-redux'
import Modal from '../../components/Modal'

const MainLayout = () => {
    const { open, data } = useSelector(state => state.modal)
  return (
    <div className='body overflow-hidden p-0 h-screen flex flex-col sm:flex-row'>
        {open && <Modal name={open} data={data}/>}
        <div className='sm:order-2  w-full'>
          <Outlet/>
        </div>
        <div>
          <SideBar/>
        </div>
    </div>
  )
}

export default MainLayout