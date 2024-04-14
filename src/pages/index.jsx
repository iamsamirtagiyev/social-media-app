import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import NavBar from '../components/NavBar'

const Home = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={theme}className='w-full' >
      <NavBar/>
    </div>
  )
}

export default Home