import { Form, Formik } from 'formik'
import React from 'react'
import InputText from '../components/form/InputText';
import InputPassword from '../components/form/InputPassword';
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";

const Login = () => {
  return (
    <div className='flex items-center w-full min-h-screen relative'>
      <div className='md:w-1/2 w-full min-h-screen bg-black absolute top-0 left-0 md:relative md:after:w-1/2 md:after:h-full md:after:bg-gradient-to-l md:after:from-black md:after:absolute md:after:top-0 md:after:right-0'>
        <video src="/videos/video-1.mp4" className='absolute top-0 left-0 w-full h-full object-cover' autoPlay muted loop></video>
      </div>
      <div className='w-full z-10 md:w-1/2 min-h-screen bg-black/90 md:bg-black flex items-center justify-center flex-col gap-5 px-2'>
        <h1 className="text-white text-4xl text-center font-bold">Login</h1>
        <Formik
          initialValues={{ usernameOrEmail: '', password: '' }} 
          onSubmit={(values, actions) => {
          console.log(values);
        }}>
          { props => (
            <Form onSubmit={props.handleSubmit}>
              <InputText icon={<FiUser/>} name='usernameOrEmail' placeholder='Username Or Email'/>
              <InputPassword name='password' placeholder='Password'/>
              <button type='submit' className="px-4 py-1.5 text-white bg-indigo-500 rounded w-full text-lg font-medium transition-all duration-500 hover:bg-indigo-700">Login</button>
            </Form>
          ) }
        </Formik>
        <p className='text-white font-medium text-center'>I don't have an account <Link className='text-blue-500' to='/signup'>Signup</Link></p>
      </div>
    </div>
  )
}

export default Login