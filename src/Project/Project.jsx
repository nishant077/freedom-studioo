import React from 'react'
import AnimatedGradientBackground from '../component/AnimatedGradientBackground'
import ProjectList from './ProjectList'


const Project = () => {
  return (
    <>
     <div className="relative w-full h-screen overflow-hidden">
      <AnimatedGradientBackground
        Breathing={true}
       />
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center">
          <div className="relative z-20">
             <h2 className="md:text-7xl text-5xl font-semibold  text-center uppercase ">Project</h2>
        </div>
      </div>
    
    </div>
    <ProjectList/>
    </>
  )
}

export default Project