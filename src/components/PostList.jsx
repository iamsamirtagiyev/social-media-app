import React from 'react'
import Post from './Post'

const PostList = () => {
  return (
    <div className='flex flex-col sm:gap-2 gap-[1px] w-full h-[97vh] overflow-auto'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default PostList