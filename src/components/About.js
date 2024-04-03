import React from 'react'

const About = ({info}) => {
 const bioParts = info.about.description.split('. ');
  return (
    <div id='#About' className='flex flex-col py-8 mt-5 bg-slate-100'>
      <div className='Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full'>about me</div>
      <div className='flex flex-col md:flex-row px-8 justify-center items-center'>
      <img src={info.about.alternateAvatars[0].url} alt="" className='hidden xl:h-[21rem] xl:w-[33rem] phone:block lg:h-[21rem] bigtab:h-[18rem] bigtab:w-[48rem] my-3 md:w-[40rem] w-[222px] h-[13rem] rounded-full mx-auto object-cover ' />
      <div className='px-3 phone:text-xl Noto-Sans text-center mx-auto'>
      {bioParts.map((part, index) => (
        <p key={index} className={`mt-3 md:w-full lg:w-[70%] xl:w-[60%]  tab:w-[90%] mx-auto  sm:mt-4 text-center`}>{part}</p>
        ))}
      </div>
      </div>

    </div>
  )
}

export default About
