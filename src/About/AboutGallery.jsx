import {useEffect,useRef} from 'react'
import About1 from '../assets/About1.jpeg'
import About2 from '../assets/About2.jpeg'
import About3 from '../assets/About3.jpeg'
import About4 from '../assets/About4.jpeg'
import About5 from '../assets/About5.jpeg'
import About6 from '../assets/About6.jpeg'
import About7 from '../assets/About7.jpeg'
import About8 from '../assets/About8.jpeg'
import freedom1 from '../assets/freedom1.png'
import freedom2 from '../assets/freedom2.jpg'
import About9 from '../assets/About9.jpeg'
import About10 from '../assets/About10.jpeg'

import {useTransform, useScroll,motion} from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Dimension from './Dimension'
import './About.css'



const AboutGallery = () => {

    const images=[About1,About2,About3,About4,About6,About5,About7,freedom1,freedom2,About8,About9,About10,

    ]
   
 const container =useRef(null);
 const {height} = Dimension();
 const {scrollYProgress}=useScroll({
    target: container,
    offset:['start end','end start']
 })

 const y= useTransform(scrollYProgress,[0,1],[0,height * 2 ])
 const y2= useTransform(scrollYProgress,[0,1],[0,height * 3.3 ])
 const y3= useTransform(scrollYProgress,[0,1],[0,height * 1.25 ])
 const y4= useTransform(scrollYProgress,[0,1],[0,height * 3 ])

 useEffect(()=>{
    const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
 },[])

  return (
    <main className='main'>
       
   <div ref={container} className='gallery h-[175vh] bg-black flex flex-row gap-[2vw] p-[2vw] overflow-hidden box-border'>
    <Column images={[images[0],images[1],images[2]]} y={y}/>
    <Column images={[images[3],images[4],images[5]]} y={y2}/>
    <Column images={[images[6],images[7],images[8]]} y={y3}/>
    <Column images={[images[9],images[10],images[11]]} y={y4}/>
   </div>
   </main>
  )
}

export default AboutGallery

const Column=({images,y=0})=>{
    return (
        <motion.div style={{y}} className="column-position w-1/4 h-full flex flex-col gap-[2vw] min-w-[250px] relative">
            {
                images.map((src,index)=>{
                    return <div key={index} className="imagecontainer w-full h-full relative rounded-[1vw] overflow-hidden ">
                       <img src={src} className='object-cover'/>
                    </div>
                })
            }
        </motion.div>
    )
}