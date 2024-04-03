import { ArrowRightOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, PushpinOutlined, XOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { BsFillPinFill } from "react-icons/bs";

const Hero = ({info}) => {
  const [active,setActive] = useState(false)
  return (
    <div id='#Home' className='flex flex-col  mt-3 w-full bigtab:py-5'>
      <div className='flex flex-col bigtab:flex-row-reverse mt-3 w-full items-center px-6'>
       <img src={info.about.avatar.url} className='w-[22rem] md:w-[22rem] md:h-[22rem] tab:h-[22rem] phone:h-[24rem] h-[16rem] object-cover  mx-auto mt-4 animate-border border-[7px] border-green-600' alt="" />
       <div className='flex flex-col gap-y-2 mt-4'>
        <span className='text-3xl bigtab:text-5xl bigtab:mb-5 text-center font-bold  text-green-500'>{info.about.title}</span>
        <span className='text-xl bigtab:text-3xl bigtab:w-[90%] mb-5 tab:w-[70%] px-2 mx-auto text-center text-black Merriweather'>{info.about.subTitle}</span>
        <span className='text-lg w-[98%] bigtab:text-2xl mx-auto text-center -translate-x-2 text-black flex flex-row justify-center align-middle'><PushpinOutlined  className='text-red-600 translate-y-1 mr-2 font-extrabold' />{info.about.address} </span>
       </div>
      
      </div>
      <div className={` ${active && 'box-shadow'} transition-all duration-20050 text-center capitalize text-white bg-green-700 w-fit mx-auto px-4 py-2 rounded-full my-3 
       text-lg Noto-Sans `} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}}>
       <a> hire me !! <ArrowRightOutlined className={`${active && 'animate-arrow'} delay-100`} /></a>
       </div>
       <div className="flex sm:text-3xl flex-row gap-x-3 justify-center text-2xl">
          <a href={info.social_handles[0].url} className="hover:text-green-400"><InstagramOutlined /></a>
          <a href={info.social_handles[1].url} className="hover:text-green-400"><LinkedinOutlined /></a>
          <a href={info.social_handles[2].url} className="hover:text-green-400"><XOutlined /></a>
          <a href={info.social_handles[3].url} className="hover:text-green-400"><FacebookOutlined /></a>
        </div>
    </div>
  )
}

export default Hero
