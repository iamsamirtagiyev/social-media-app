import React from 'react'
import Post from './Post'

const PostList = () => {
  return (
    <div className='flex flex-col gap-2 w-full mt-1.5'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default PostList