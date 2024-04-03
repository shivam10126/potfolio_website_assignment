
import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"
import Projects from "./components/Projects.js"
import Services from "./components/Services.js"
import Timeline from "./components/Timeline.js"
import Testimonial from "./components/Testimonial.js"
import ContactForm from "./components/ContactForm.js"
import { useEffect, useState } from 'react';

function App() {
  const[info,setInfo]= useState();
  const[loading,seLoading]= useState(false);

  function fetchData() {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setInfo(data.user);
        console.log(data.user)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  useEffect(()=>{
    fetchData();
  },[])
  useEffect(()=>{
    setTimeout(()=>seLoading(true), 2300);
  },[info])

  return (
    <div className="App text-black">
      {loading ? 
    <div className='min-h-[100vh]'>
    <Navbar info={info} />
    <Hero info={info} />
    <About info={info} />
    <Skills info={info} />
    <Timeline info={info}  />
    <Projects info={info}  />
    <Services info={info}  />
    <Testimonial info={info}  />
    <ContactForm info={info}  />
    </div>
    :
    <div className='w-full h-[100vh] flex justify-center align-middle items-center '>
      <div className={` w-[55%] h-[30%]  flex flex-col -translate-y-10 md:flex-row justify-center items-center align-middle `}>
      <span className='md:text-6xl text-3xl md:mr-5 capitalize font-serif font-bold text-nowrap'>
  {Array.from('portfolio loading').map((char, index) => (
    <span
      className={`${info ? 'animate-fall' : ''}`} 
      key={index}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {char}
    </span>
  ))}
</span> 
     <span className="ml-3 justify-center items-baseline  translate-y-[22px] flex flex-row"> 
     <span className={`xl:w-[20px] xl:h-[20px] w-[10px] h-[10px] bg-blue-500 animate-blink ${info && 'animate-fall'} rounded-full `} style={{animationDelay:info ?"1.8s": '0s'}}></span> 
     <span className={`xl:w-[20px] xl:h-[20px] w-[10px] h-[10px] bg-blue-500 animate-blink ${info && 'animate-fall'} rounded-full ml-4`} style={{animationDelay:info ?"1.9s": '0.2s'}}></span>
     <span className={`xl:w-[20px] xl:h-[20px] w-[10px] h-[10px] bg-blue-500 animate-blink ${info && 'animate-fall'} rounded-full ml-4`} style={{animationDelay:info ?"2s":'0.4s'}}></span> 
     <span className={`xl:w-[20px] xl:h-[20px] w-[10px] h-[10px] bg-blue-500 animate-blink ${info && 'animate-fall'} rounded-full ml-4`} style={{animationDelay:info ?"2.1s":'0.6s'}}></span> 
    </span>  
      </div>
    </div> 
    }
     
     
    </div>
  );
}

export default App;
