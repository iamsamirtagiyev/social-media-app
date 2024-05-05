import React from 'react'
import { motion, useAnimate, useDragControls, useMotionValue } from "framer-motion"
import { useDispatch } from 'react-redux'
import { closeModal } from '../stores/modal'

const BottomSheet = ({children}) => {
    const [ scope, animate ] = useAnimate()
    const dispatch = useDispatch()
    const controls = useDragControls()
    const y = useMotionValue(0)
    const handleClose = async () => {
        const yStart = typeof y.get() === 'number' ? y.get() : 0
        await animate(scope.current, { y: [yStart, 500] })
        dispatch(closeModal())
    }
  return (
        <motion.div 
        ref={scope}
        onClick={e => e.stopPropagation()}
        initial={{ y: "100%" }} 
        animate={{ y: "0%" }} 
        transition={{ ease: "easeInOut"}}
        drag='y'
        dragControls={controls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        style={{ y }}
        onDragEnd={() => {
            if(y.get() >= 100) handleClose()
        }}
        className='absolute bottom-0  w-full overflow-hidden rounded-t-3xl theme left-0'>
            <div className='absolute left-0 right-0 top-0 z-10 flex justify-center items-center theme p-4'>
                <button onPointerDown={e => controls.start(e)} className='h-2 w-14 cursor-grap touch-none rounded-full bg-zinc-600 active:cursor-grabbing'></button>
            </div>
            <div className='overflow-y-auto max-h-screen p-4 pt-12'>
                {children}
            </div>
        </motion.div>
  )
}

export default BottomSheet