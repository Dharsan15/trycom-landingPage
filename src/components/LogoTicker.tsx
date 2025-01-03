import React from 'react'
import image1 from "../assets/archa.webp"
import image2 from "../assets/cosc.webp"
import image3 from "../assets/gbr.webp"
import image4 from "../assets/kalp.webp"
import image5 from "../assets/naadi.webp"
import image6 from "../assets/sha.webp"
import { motion } from "framer-motion"

function LogoTicker() {
  return (
    <div>
        <div className='py-[60px] mt-5 text-2xl bg-transparent' >
         <h1 className='text-white/60 text-center  text-2xl' >Our Trusted Customers</h1>
        </div>
        <div className="overflow-hidden  px-5 [mask-image:linear-gradient(to_right,transparent,#000,transparent)]" >
        <motion.div className='flex items-center inline-block justify-between gap-16' animate={{
           translateX : "-50%"
        }} 
        transition={{
           duration : 20,
           repeat : Infinity,
           ease : 'linear',
           repeatType : 'loop'
        }} >
               <img src={image1} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image2} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image3} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image4} className='invert  w-32 h-28 grayscale flex-none'  />
               <img src={image5} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image6} className='invert  w-26 grayscale flex-none h-12'  />

                {/* second set of logos */}

               <img src={image1} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image2} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image3} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image4} className='invert  w-32 h-28 grayscale flex-none'  />
               <img src={image5} className='invert  w-26 grayscale flex-none h-12'  />
               <img src={image6} className='invert  w-26 grayscale flex-none h-12'  />
          </motion.div>

        </div>
    </div>
  )
}

export default LogoTicker