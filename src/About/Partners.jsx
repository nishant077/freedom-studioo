import React from 'react'
import logo1 from '../assets/NED_logo2.png'
import logo2 from '../assets/worldMovement.jpg'
import logo3 from '../assets/chevening.png'
import logo4 from '../assets/ICVA.png'
import logo5 from '../assets/globalfund.jpeg'
import logo6 from '../assets/civicus.jpeg'
import logo7 from '../assets/IRI.png'
import logo8 from '../assets/Moleskine.avif'
import logo9 from '../assets/google.webp'
import logo10 from '../assets/asiaFoundation.jpg'

const Partners = () => {

   const partnersLogo=[logo1, logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10]

  return (
    <>
     <div className='bg-white w-full h-auto md:py-20 py-10 md:px-10 px-4'>
       <div className='mt-5'>
       <h3 className='md:text-5xl text-2xl text-center'>Our Partners</h3>
       </div>
       <div className='flex md:justify-around flex-wrap justify-center items-center gap-5 md:gap-10 md:mt-10 mt-5'>
           {partnersLogo.map((item,key)=>(
            <div>
                <img src={item} className='md:w-auto md:h-36 w-32 h-28 object-cover'/>
            </div>
           )

        )}
        </div>
     </div>
    </>
  )
}

export default Partners