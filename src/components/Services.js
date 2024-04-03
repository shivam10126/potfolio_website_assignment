import React, { useState } from 'react'

const Services = ({info}) => {
  const[active,setActive] = useState(Array.from(info.services.length, () => false))
  return (
    <div className="flex flex-col bg-slate-300 mt-3 py-5">
    <div className="Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full">
      hire me !!!
    </div>
    <div
      className={`capitalize text-3xl  underline-animation z-10 ${"underline-active"} mb-5 px-2 `}
    >
      services
    </div>
    <div className='flex flex-col justify-center flex-wrap px-2 gap-x-3 gap-y-2'>
      {info.services.map((service,index)=>(
        <div className={`service hover:bg-slate-200 transition-all duration-100 flex sm:flex-row flex-col sm:w-[90%] phone:w-[22rem] w-[96%] mx-auto border-4  my-3 border-green-500 rounded-lg `}>
          <div className='overflow-hidden'>
           <img src={service.image.url} alt="" className=' h-[16rem] sm:w-[20rem] w-fit mx-auto object-cover' />
          </div>
           <div className={`flex flex-col sm:border-l-4 border-green-500 w-full `}>
            <div className='bg-green-500 text-white px-2 py-2 text-center text-lg'>{service.name}</div>
            <div className='w-[80%] min-h-[5rem] py-1 text-center mx-auto'>{service.desc}</div>
           </div>
           <div className='border-green-500 sm:border-t-0 min-w-[7rem] flex flex-row items-center sm:border-l-4 sm:my-0 border-t-4 py-3 mt-1 text-lg text-center'>
            <span className='sm:hidden'>Pricing starts from:</span> <span className=' text-green-500 mx-auto font-bold'> {service.charge}</span>
           </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Services
