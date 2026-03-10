import AnimatedGradientBackground from "../component/AnimatedGradientBackground"
import Footer from "../component/Footer"
import Navbar from "../Navigation/Navbar"
import ServiceList from "./ServiceList"
import ServiceStickyCard from "./ServiceStickyCard"

const Service = () => {
  return (
    <>
       <Navbar/>
       <div className="relative w-full h-screen overflow-hidden">
      <AnimatedGradientBackground 
        Breathing={true}
       />
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center">
          <div className="relative z-20">
             <h2 className="md:text-7xl text-5xl  font-droid font-semibold uppercase  text-center">We know what</h2>
              <h2 className="md:text-7xl text-5xl font-droid  font-semibold uppercase text-center">we're good <span className="text-[#9a1d20]">at!</span></h2>
        </div>
        <p>
           
          </p> 
      </div>
    
    </div>
    <ServiceStickyCard/>
    <ServiceList/>
    <Footer/>
    </>
  )
}

export default Service