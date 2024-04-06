import { useField } from 'formik';
import React, { useState } from 'react'
import { FiLock } from "react-icons/fi";
import { TbEyeClosed, TbEye } from "react-icons/tb";



const InputPassword = ({...props}) => {
    const [field, meta, helpers] = useField(props);
    const [show, setShow] = useState(false)
  return (
    <div className="flex items-center w-full max-w-96 bg-zinc-600 rounded px-2 py-1.5 gap-1 mb-1.5">
      <FiLock className="text-2xl text-white" />
      <input type={show ? 'text' : 'password'} className="text-lg w-full mx-1 bg-transparent text-white font-medium outline-none border-none" {...field} {...props} />
      <div className="text-white text-2xl cursor-pointer" onClick={() => setShow(!show)}>
        { show ? <TbEye/> : <TbEyeClosed/> }
      </div>
    </div>
  )
}

export default InputPassword