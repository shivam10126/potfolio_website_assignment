import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, XOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const ContactForm = ({info}) => {
  return (
    <div className="flex flex-col bg-slate-900 mt-3 py-5 text-white">
      <div className="Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full">
      Get In Touch
    </div>
    <div
      className={`capitalize text-3xl  underline-animation z-10 ${"underline-active"} mb-5 px-2 `}
    >
      Contact Form
    </div>
    <div className='flex flex-col '>
      <div className='flex flex-col gap-y-3 px-3 w-full'>
      <Input value="ENTER YOUR NAME" allowClear/>
      <Input value="ENTER YOUR Email" allowClear />
      <Input value="ENTER YOUR PHONE" allowClear />
      <Input value="ENTER YOUR PHONE" allowClear />
      <TextArea rows={4} placeholder="send me a message" maxLength={6} />
      </div>
      <div className='flex flex-col  px-3 justify-center w-full tab:text-left text-center gap-y-2  mt-4'>
      <span className='text-lg '>
         <span className='text-green-500 capitalize text-left '>Mail</span> :{info.about.contactEmail}
        </span>
      <span className='text-lg '>
         <span className='text-green-500  capitalize text-left'>phone</span> :{info.about.phoneNumber}
        </span>
      <span className='text-lg'>
         <span className='text-green-500 capitalize text-left'>adress</span> :{info.about.address}
        </span>
      
      </div>
    </div>
    <div className="flex sm:text-xl flex-row gap-x-5 justify-center text-2xl mt-7">
          <a href={info.social_handles[0].url} className="hover:text-green-400"><InstagramOutlined /></a>
          <a href={info.social_handles[1].url} className="hover:text-green-400"><LinkedinOutlined /></a>
          <a href={info.social_handles[2].url} className="hover:text-green-400"><XOutlined /></a>
          <a href={info.social_handles[3].url} className="hover:text-green-400"><FacebookOutlined /></a>
        </div>
    </div>
  )
}

export default ContactForm
