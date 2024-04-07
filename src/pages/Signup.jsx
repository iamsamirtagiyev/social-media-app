import { Form, Formik } from 'formik';
import React from 'react'
import InputText from '../components/form/InputText';
import InputPassword from '../components/form/InputPassword';
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Signup = () => {
  return (
    <div className='flex items-center w-full min-h-screen relative'>
      <div className='w-full z-10 md:w-1/2 min-h-screen bg-black/90 md:bg-black flex items-center justify-center flex-col gap-5 px-2'>
        <h1 className="text-white text-4xl text-center font-bold">Sign Up</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '', confirm_password: '' }} 
          onSubmit={(values, actions) => {
          console.log(values);
        }}>
          { props => (
            <Form onSubmit={props.handleSubmit}>
              <InputText icon={<FiUser/>} name='username' placeholder='Username'/>
              <InputText icon={<IoMailOutline/>} name='email' placeholder='Email'/>
              <InputPassword name='password' placeholder='Password'/>
              <InputPassword name='confirm_password' placeholder='Confirm Password'/>
              <button type='submit' className="px-4 py-1.5 text-white bg-indigo-500 rounded w-full text-lg font-medium transition-all duration-500 hover:bg-indigo-700">Sign Up</button>
            </Form>
          ) }
        </Formik>
        <p className='text-white font-medium text-center'>I already have an account <Link className='text-blue-500' to='/login'>Login</Link></p>
      </div>
      <div className='md:w-1/2 w-full min-h-screen bg-black absolute top-0 left-0 md:relative md:after:w-1/2 md:after:h-full md:after:bg-gradient-to-r md:after:from-black md:after:absolute md:after:top-0 md:after:left-0'>
        <video src="/videos/video-2.mp4" className='absolute top-0 -left-0 w-full h-full object-cover' autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Signup