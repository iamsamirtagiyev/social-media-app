import React from 'react'
import Post from './Post'

const PostList = () => {
  return (
    <div className='flex flex-col w-full overflow-auto h-screen'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default PostList