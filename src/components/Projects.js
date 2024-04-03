import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";

const Projects = ({ info }) => {
  const [project, setProject] = useState({});
  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col bg-slate-300 mt-3 py-5">
      <div className="Noto-Sans mb-3 capitalize phone:text-lg  text-sm bg-transparent border-2 w-fit font-bold mx-auto px-3 py-[0.2rem] border-green-500 rounded-full">
        my works
      </div>
      <div
        className={`capitalize text-3xl  underline-animation z-10 ${"underline-active"} mb-5 px-2 `}
      >
        projects
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-x-5 px-4">
        {info.projects.map((project,index)=>(
      <div key={index} className=" cursor-pointer project phone:w-[23rem] flex flex-col w-[90%] mx-auto bg-green-500 my-3 border-2 border-white rounded-lg" onClick={()=>{setProject(project);setModal(true)}}>
            <div className="px-1 py-1 text-white">{project.title}</div>
            <div className="overflow-hidden border w-full"><img src={project.image.url} className="w-full" alt="" /></div>
            <div className="flex flex-row py-2 justify-around">
              <a href={project.liveurl} className="capitalize px-2 py-1 bg-white rounded-xl w-fit text-green-600">live link<LinkOutlined className="ml-3" /></a>
              <a href={project.githuburl} className="capitalize px-2 py-1 bg-white rounded-xl w-fit text-green-600">github url<GithubOutlined  className="ml-3" /></a>
            </div>
          </div>
        ))}
      </div>
      <Modal centered title={JSON.stringify(project)==='{}' ? 'Loading....' :project.title} open={modal} onOk={()=>setModal(false)} onCancel={()=>setModal(false)}>
      <div className="flex flex-col overflow-y-scroll">
      <img src={JSON.stringify(project)==='{}' ? 'Loading....' :project.image.url} className="w-full" alt="" />
      <div className="my-3 flex flex-col">
        <span className="capitalize text-lg underline decoration-green-500 decoration-2">project description:</span>
        <span className="text-base">{JSON.stringify(project)==='{}' ? 'Loading....' :project.description}</span>
      </div>
      <span className="capitalize text-lg mt-2 underline decoration-green-500 decoration-2">tech Stack:</span>
      <div className="my-3 w-full flex flex-row ">
        {JSON.stringify(project)==='{}' ? 'Loading....' : 
        project.techStack.map((tech,index)=>(
          <div className="capitalize px-2 border-2 border-slate-300 py-1 bg-green-500 rounded-full w-fit text-white mr-3">{tech}</div>
        ))}
      </div>
      <span className="capitalize text-lg mt-2  underline decoration-green-500 decoration-2">Links:</span>
      <div className="flex flex-row py-2 mt-1 justify-around">
              <a href={JSON.stringify(project)==='{}' ? 'Loading....' : project.liveurl} className="capitalize px-2 border-2 border-slate-300 py-1 bg-green-500 rounded-full w-fit text-white mr-3">live link<LinkOutlined className="ml-3" /></a>
              <a href={JSON.stringify(project)==='{}' ? 'Loading....' : project.githuburl} className="capitalize px-2 border-2 border-slate-300 py-1 bg-green-500 rounded-full w-fit text-white mr-3">github url<GithubOutlined  className="ml-3" /></a>
            </div>
      </div>
      </Modal>
    </div>
  );
};

export default Projects;
