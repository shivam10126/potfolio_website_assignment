import { Slider } from 'antd';
import React, { useState } from 'react'

const Skills = ({info}) => {
  const[skills,setSkills] = useState(true);
  return (
    <div className='py-2 bg-slate-200 mt-3'>
      <div className='Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full'>what can i do?</div>
      <div className='flex flex-col gap-y-2 px-2'>
        <div className={`capitalize text-3xl  underline-animation z-10 ${skills && 'underline-active'} `}>
          my skills</div>
      </div>
      {skills && 
      <div className={`mt-3 duration-1000  flex flex-col sm:flex-row flex-wrap sm:gap-x-4 gap-y-3 py-7 px-2 `}>
      {info.skills.map((skill,index)=>(
        <div key={index} className={`flex flex-row opacity-0 animate-left text-white rounded-md hover:bg-slate-600 bg-slate-400 mx-auto w-full phone:w-[90%] sm:w-[20rem] border-slate-600 border-2`} style={{animationDelay:`${index*0.3}s`}}>
          <img src={skill.image.url} alt="" className='w-14 object-cover px-1 rounded-full my-auto' />
          <div className='flex flex-col w-full align-middle border-l-2 px-3  font-oswald'>
          <span className='translate-y-2'>{skill.name} : <span className=''>{skill.percentage}%</span></span>
          <Slider className='w-full -translate-x-2 transition-all duration-150' defaultValue={30} value={skill.percentage} disabled />
          </div>
        </div>
      ))}
      </div>}
    </div>
  )
}

export default Skills
