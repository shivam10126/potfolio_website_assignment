import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React, { useState } from 'react'

const Testimonial = ({info}) => {
  const[translate,settranslate] = useState(0)
  const left = ()=>{
    console.log('left')
    settranslate((translate)=>{return translate-200})
  }
  const right = ()=>{
    console.log('right')
    settranslate((translate)=>{return translate+200})

  }
  return (
    <div className="flex flex-col bg-slate-300 mt-3 py-5">
    <div className="Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full">
      check me out !!!
    </div>
    <div
      className={`capitalize text-3xl  underline-animation z-10 ${"underline-active"} mb-5 px-2 `}
    >
      testimonials
    </div>
    <div className='control flex flex-row justify-end mr-5 text-2xl text-white'>
      <div className='bg-green-500 mr-3  hover:bg-green-400 rounded-xl px-1' onClick={()=>left()}><CaretLeftOutlined className='mr-1' /></div>
      <div className='bg-green-500  hover:bg-green-400 rounded-xl px-1' onClick={()=>right()}><CaretRightOutlined className='ml-1' /></div>
    </div>
      <div className='scroll  overflow-hidden px-4 mt-5 py-3'>
          <div className={`flex flex-row transition-all duration-150 `} style={{transform:`translateX(${translate}px)`}}>
          {info.testimonials.map((testimonial,index)=>(
            <div className='mr-4 scroll'>
             <Card
             hoverable
             style={{ width: 300,height:450}}
             cover={<img alt="" src={testimonial.image.url} className='rounded-lg h-[10rem] ' />} 
             
           ><div className='flex flex-col'>
            <span className='text-lg bg-green-500 text-white pt-1 Merriweather px-2 text-center'>{testimonial.name}</span>
            <span className='text-lg bg-green-500 text-white pb-1 px-2 text-center'>{testimonial.position}</span>
            <p className='px-2 py-3'>{testimonial.review}</p>
           </div>
             
           </Card>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Testimonial
