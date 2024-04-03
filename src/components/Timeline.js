import { PushpinOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React, { useEffect } from 'react'

const Timeline = ({info}) => {
  
  const generateItemsArray = (data) => {
    return data.map((item, index) => ({
      key: index.toString(),
      label: (
        <div className='flex flex-col text-white Noto-Sans '>
          <div className='flex flex-col phone:flex-row text-md font-bold tab:text-lg mb-2'>
          <span className='phone:mr-4'>{item.company_name}</span>
          <span>
            {`${new Date(item.startDate).toLocaleDateString()} - ${new Date(item.endDate).toLocaleDateString()}`}
          </span>
          </div>
          <span className='text-md text-gray-200 tab:text-base '>{item.jobTitle} 
          <span className='ml-2'><PushpinOutlined className='mr-2 text-red-800'  />{item.jobLocation}</span> </span>
          <span className='text-md text-gray-100 border-t-2 mt-1 pt-1 tab:text-base '>{item.summary}</span>

        </div>
      ),
      children: (
        <div>
          {item.bulletPoints.map((point, index) => (
            <div className='flex flex-row items-center mb-2' key={index}><div className='w-2 h-2 justify-center rounded-full mr-3  bg-black '></div> {point}</div>
          ))}
        </div>
      ),
    }));
  };

  let items=generateItemsArray(info.timeline)
  
  return (
    <div className='flex flex-col bg-slate-300 mt-3 py-5'>
            <div className='Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full'>my history</div>
      <div className={`capitalize text-3xl  underline-animation z-10 ${'underline-active'} mb-5 px-2 `}>experience</div>
      <Collapse  items={items} className='cursor-pointer' />
    </div>
  )
}

export default Timeline
