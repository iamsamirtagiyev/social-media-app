import React, { useRef } from 'react'
import modals from '../modals'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { closeModal } from '../stores/modal'

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
    <div ref={modalRef} onClick={modalClose} className='z-10 fixed w-full h-full bg-black/50 flex items-center justify-center top-0 left-0 backdrop-blur-lg'>
        <div className={classNames(' bg-zinc-600 rounded-lg p-5 max-w-96 w-[95%] overflow-auto modal')}>
          <currentModal.element/>
        </div>
    </div>
  )
}

export default Modal