import React from 'react'
import NavBar from '../components/NavBar'
import MainSide from '../components/MainSide'
import AllUsers from '../components/AllUsers'

const Home = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <div className='flex gap-1.5'>
        <MainSide/>
        <AllUsers/>
      </div>
    </div>
  )
}

export default Home