import React from 'react'

const Header = () => {
    return (
        <div className='w-full  absolute top-[100px] flex items-cente justify-center md:h-[calc(100vh-35vh)] lg:h-[calc(100vh-25vh)]'>
            <div className='w-full flex flex-row items-center justify-between px-[10%]'>
                <div className='w-[50%]'>
                    <p className='text-gray-500 font-base font-bold'>Hello, I am
                        <span className='text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-500 to-cyan-500 text-[20px] font-bold tracking-[2px]'> Khatuna</span><span className='mr-[10px]'>.</span>
                        I am a front-end developer. I enjoy building sites & apps. My focuse is <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[30px] font-bold'>React(Next.js)</span></p>
                </div>
                <div className='w-[50%]'>
                    <img className='md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] ' src="/stars/mainIconsdark.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header