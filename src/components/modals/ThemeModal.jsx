import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { TbSunMoon } from "react-icons/tb";
import { currentTheme } from "../../stores/theme"
import { useDispatch } from 'react-redux';

const ThemeModal = () => {
  const dispatch = useDispatch()
  const selectTheme = e => {
    dispatch(currentTheme(e.target.value))
  }

  return (
    <div className={classNames('flex flex-col gap-2 items-center justify-center')}>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='light' onChange={ selectTheme } />
          <LuSun classname={classNames(' text-white')} size='30'/>
          <span className={classNames('text-2xl font-medium')}>Light</span>
      </label>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='dark' onChange={ selectTheme } />
          <FaRegMoon classname={classNames(' text-white')} size='25'/>
          <span className={classNames('text-2xl font-medium')}>Dark</span>
      </label>
      <label className='label'>
        <input type="radio" className='hidden' name='theme' value='system' onChange={ selectTheme } />
          <TbSunMoon classname={classNames(' text-white')} size='30'/>
          <span className={classNames('text-2xl font-medium')}>System</span>
      </label>
    </div>
  )
}

export default ThemeModal