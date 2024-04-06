import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { user } = useSelector(stete => stete.auth.user)
  if(user){
    return (
      <div>Home</div>
    )
  }
  return <Navigate to='/login'/>
}

export default Home