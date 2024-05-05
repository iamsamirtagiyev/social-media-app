import React, { useRef, useState } from 'react'
import modals from '../modals'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from '../stores/modal'
import BottomSheet from './BottomSheet'

const Modal = ({ name, data }) => {
    const dispatch = useDispatch()
    const currentModal = modals.find(s => s.name === name)
    const modalRef = useRef()
    const modalClose = e => {
      if(modalRef.current === e.target){
        dispatch(closeModal())
      }
    }
  return (
    <div ref={modalRef} onClick={modalClose} className='z-20 fixed w-full h-full flex items-center justify-center top-0 left-0 px-2 backdrop-blur-xl'>
      <div className={classNames('hidden sm:block bg-zinc-600 rounded-lg p-5 w-full max-w-[500px] overflow-auto modal max-h-[80%]')}>
          <currentModal.element/>
        </div>

        <div className="sm:hidden">
          <BottomSheet>
            <currentModal.element/>
          </BottomSheet>
        </div>
    </div>
  )
}

export default Modal