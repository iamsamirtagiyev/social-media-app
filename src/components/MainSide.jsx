import React from 'react'
import PostList from './PostList'

const MainSide = () => {
  return (
    <main className='w-full h-screen overflow-auto'>
      <PostList/>
    </main>
  )
}

export default MainSide