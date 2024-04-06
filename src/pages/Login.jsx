import { Form, Formik } from 'formik'
import React from 'react'
import InputText from '../components/form/InputText';
import InputPassword from '../components/form/InputPassword';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center w-full min-h-screen'>
      <div className='w-1/2 min-h-screen bg-black relative after:w-1/2 after:h-full after:bg-gradient-to-l after:from-black after:absolute after:top-0 after:right-0'>
        <video src="/videos/video-1.mp4" className='absolute top-0 left-0 w-full h-full object-cover' autoPlay muted loop></video>
      </div>
      <div className='w-1/2 min-h-screen bg-black flex items-center justify-center flex-col gap-5'>
        <h1 className="text-white text-4xl text-center font-bold">Login</h1>
        <Formik 
          initialValues={{ usernameOrEmail: '', password: '' }} 
          onSubmit={(values, actions) => {
          console.log(values);
        }}>
          { props => (
            <Form onSubmit={props.handleSubmit}>
              <InputText name='usernameOrEmail' placeholder='Username Or Email'/>
              <InputPassword name='password' placeholder='Password'/>
              <button type='submit' className="px-4 py-1.5 text-white bg-indigo-500 rounded w-full text-lg font-medium transition-all duration-500 hover:bg-indigo-700">Login</button>
            </Form>
          ) }
        </Formik>
        <p className='text-white font-medium'>I don't have an account <Link className='text-blue-500' to='/signup'>Signup</Link></p>
      </div>
    </div>
  )
}

export default Login