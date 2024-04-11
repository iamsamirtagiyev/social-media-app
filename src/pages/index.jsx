import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'

const Home = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={theme} >
      Home
    </div>
  )
}

export default Home