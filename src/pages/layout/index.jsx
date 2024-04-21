import React from 'react'
import NavBar from '../../components/NavBar'
import MainSide from '../../components/MainSide'
import AllUsers from '../../components/AllUsers'

const Home = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <div className='flex gap-1.5 w-full h-full rounded sm:m-0 mt-1'>
        <div className='sm:w-[65%] w-full h-full overflow-auto rounded'>
          <MainSide/>
        </div>
        <div className='sm:w-[35%] hidden sm:block w-full h-full rounded'>
          <AllUsers/> 
        </div>
      </div>
    </div>
  )
}

export default Home