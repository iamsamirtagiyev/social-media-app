import React from 'react'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'

const Home = () => {
  const { open, data } = useSelector(state => state.modal)
  return (
    <div className='bg-black w-full min-h-screen text-white flex gap-1.5 p-2'>
      {open && <Modal name={open} data={data}/>}
      <SideBar/>
    </div>
  )
}

export default Home