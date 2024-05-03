'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import { delay, motion } from 'framer-motion'


const variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * i,
    }
  })
}

const variants2 = {
  initial: {
    opacity: 0, x: 200
  }, animate: {
    opacity: 1, x: 0,
    transition: {duration: 1}
  }
}

const variants3 = {
  initial: {
    opacity: 0, y: -200
  }, animate: {
    opacity: 1, y: 0,
    transition: {duration: 0.5}
  }

}

const Portfolio = () => {
  const context = useContext(GlobalContext)
  if (!context) return null
  const { data } = context;
  console.log(data)


  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center py-[70px] gap-10'>
        <motion.h1 
         variants={variants3}
         initial='initial'
         animate='animate'
        className='name-span text-transparent font-extrabold text-[25px] uppercase ml-[10px] text-center tracking-[3px]'>Latest Works</motion.h1>
        <div className='container w-full px-[10%] flex flex-col items-center justify-between gap-y-[50px] flex-wrap md:flex-col lg:flex-row'>
          {data.map((item, i) => (
            <motion.div
              variants={variants}
              initial='hidden'
              animate='visible'
              custom={`${item.id}`}
              key={i}
              className=''>
              <div className="card relative  ">
                <img src={`/${item.img}`} alt=''
                  className='object-cover  rounded-lg shadow-lg shadow-[green-600] border border-[green] w-[200px] h-[125px] md:w-[500px] md:h-[225px]
              lg:w-[500px] lg:h-[225px] hover:bg-white hover:opacity-80 hover:transition hover:duration-300 mb-2 hover:scale-95 transition-transform duration-300
              ' />
                <div className='flex flex-col gap-2 text-center md:text-left lg:text-left'>
                  <h2 className='text-[12px] text-[#7C5DFA] font-bold md:text-base lg:text-base'>{item.title}</h2>
                  <p className='w-[200px] text-[#9c9ca0] text-[13px] md:w-[500px] lg:w-[500px]'>{item.desc}</p>
                  <div className='flex flex-row gap-4'>
                    <a href={item.git} target='_blank' rel='noopener noreferrer'>
                      <button className='text-[#7C5DFA] border border-green-600 rounded-[8px] px-6 py-2 hover:scale-95 transition-transform duration-200'>Github</button>
                    </a>
                    <a href={item.live} target='_blank' rel='noopener noreferrer'>
                      <button className='text-[#7C5DFA] border border-green-600 rounded-[8px] px-6 py-2 hover:scale-95 transition-transform duration-200'>Live</button>
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <footer className='w-full h-[90px] flex items-center 
        justify-end  bg-gradient-to-t from-[rebeccapurple] to-[#32194a10] px-[10%] '>
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
    </>
  )
}

export default Portfolio
