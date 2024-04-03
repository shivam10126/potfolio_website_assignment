import React, { useState } from "react";
import { CloseOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined, XOutlined } from "@ant-design/icons";

const Navbar = ({ info }) => {
  const [showNav, setShowNav] = useState(false);
  const Navbar=[
                {link:'#Home',name:'Home'},
                {link:'#About',name:'About'},
                {link:'#Skills',name:'Skills'},
                {link:'#Timeline',name:'Timeline'},
                {link:'#Projects',name:'Projects'},
                {link:'#Services',name:'Services'},
                {link:'#Testimonials',name:'Testimonials'},
                {link:'#ContactForm',name:'Contact Me'}
               ]
  return (
    <div className="flex w-[100vw] overflow-x-hidden  flex-row px-2 py-3 justify-between items-center shadow-custom  ">

        <span className="capitalize font-bold text-xl text-green-500">
          {info.about.name}
        </span>
      <div
        className={`${showNav && 'text-white'} ml-auto nav:hidden flex flex-col cursor-pointer translate-y-[2px] z-50`}
        onClick={() => setShowNav((showNav)=>{return !showNav})}
      >
        {showNav ? <CloseOutlined /> : <MenuOutlined />}
      </div>
      <div className={` ${showNav ? "translate-x-0" : "translate-x-full"} nav:hidden h-[100vh] mt-0 overflow-hidden transition-all duration-500 flex flex-col gap-y-1 fixed bg-secondary2 w-full top-0 left-0 text-white justify-start
       px-4 z-[10]`}
      >
        <div className="flex flex-col">
        <div className="flex flex-col">
      {Navbar.map((nav,index)=>(
        <a key={index} href={nav.link} 
          className={`text-center tab:text-xl text-lg hover:bg-green-400 hover:text-slate-700 hover:font-bold transition-all ${index===0 && 'mt-[48px]'} duration-100 
          hover:scale-[1.1] py-1`} 
          // onClick={()=>setShowNav(false)}
          >
          {nav.name}
        </a>
      ))}
        </div>
        <div className="mt-2 w-fit phone:mt-3 phone:w-full  mx-auto flex flex-col custom-img-animation px-2">
          <div className="flex flex-row justify-start ">
          <img  src={info.about.alternateAvatars[0].url} alt={info.about.alternateAvatars[0].public_id} 
          className="w-[7rem] h-[8rem] phone:rounded-lg  object-cover tab:h-[10rem] tab:w-[12rem] mx-auto transition duration-300 " />
          <div className="py-2 hidden phone:flex flex-col ">
          <span className="align-middle font-oswald mr-auto ml-4 sm:text-4xl text-3xl">{info.about.quote}</span>
          <span className="text-right Monsieur my-auto text-2xl  mr-4 mt-4 ">- {info.about.name}</span>
          </div>
          </div>
          <div className="flex flex-row phone:justify-start mt-3 justify-center items-center">
            <div className="h-3 w-3 tab:w-4 tab:h-4  mr-4 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-lg  tab:text-xl sm:text-2xl">{info.about.title}</span></div>
        </div>
        </div>
        <div className="flex sm:text-2xl flex-row gap-x-3 justify-center text-xl mt-1">
          <a href={info.social_handles[0].url} className="hover:text-green-400"><InstagramOutlined /></a>
          <a href={info.social_handles[1].url} className="hover:text-green-400"><LinkedinOutlined /></a>
          <a href={info.social_handles[2].url} className="hover:text-green-400"><XOutlined /></a>
          <a href={info.social_handles[3].url} className="hover:text-green-400"><FacebookOutlined /></a>
        </div>
      </div>
      <div className="nav:flex flex-row hidden ">
      {Navbar.map((nav,index)=>(
        <a key={index} href={nav.link} 
          className={`text-center ${index===Navbar.length ? 'mr-0':'mr-3'} rounded-md hover:text-secondary2 px-2 py-1 tab:text-xl text-lg hover:bg-green-400 transition-all  duration-100`} 
          >
          {nav.name}
        </a>
      ))}
        </div><div>

      </div>
    </div>
  );
};

export default Navbar;
