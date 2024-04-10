import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { TbSunMoon } from "react-icons/tb";


const ThemeModal = () => {

  return (
    <div className={classNames('flex flex-col gap-2 items-center justify-center')}>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='light' />
          <LuSun classname={classNames(' text-white')} size='30'/>
          <span className={classNames('text-2xl font-medium')}>Light</span>
      </label>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='dark' />
          <FaRegMoon classname={classNames(' text-white')} size='25'/>
          <span className={classNames('text-2xl font-medium')}>Dark</span>
      </label>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='system' />
          <TbSunMoon classname={classNames(' text-white')} size='30'/>
          <span className={classNames('text-2xl font-medium')}>System</span>
      </label>
    </div>
  )
}

export default ThemeModal