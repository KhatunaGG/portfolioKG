'use client'
import React from 'react'
import {motion} from 'framer-motion'


const variants2 = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

const Footer = () => {
  return (
    <footer className='w-full h-[90px] flex items-center 
        justify-end  bg-gradient-to-t from-[#32194a10] to-[rebeccapurple] px-[10%] '>
        <div className='w-full flex flex-row items-center justify-end text-[#9c9ca0] text-[10px] '>
          <motion.div
          variants={variants2}
          initial='initial'
          whileInView={'animate'}
          className='flex items-center flex-col border border-green-600 px-4 py-[2px] rounded-[8px]'>
            <div className='flex flex-row items-center gap-[2px]'>
              <span className='italic'>Mobile:</span>
              <span className='italic text-green-600'>599 70 22 59</span>
            </div>
            <div>Khatuna Gagloshvili</div>
          </motion.div>
        </div>
      </footer>
  )
}

export default Footer