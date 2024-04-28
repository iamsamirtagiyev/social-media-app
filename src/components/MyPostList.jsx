import React from 'react'
import MyPost from './MyPost'

const MyPostList = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold ml-5'>All Posts</h1>
        <div className='grid grid-cols-3 gap-1 p-1 mt-8'>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
    </div>
    </div>
  )
}

export default MyPostList