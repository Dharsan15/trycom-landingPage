import image1 from "../assets/archa.webp"
import image2 from "../assets/cosc.webp"
import image3 from "../assets/gbr.webp"
import image4 from "../assets/kalp.webp"
import image5 from "../assets/naadi.webp"
import image6 from "../assets/sha.webp"
import { motion } from "framer-motion"

function LogoTicker() {
  return (
    <div className="overflow-hidden" >
        <div className='mt-5 text-2xl' >
         <h1 className='text-white/60 text-center text-2xl' >Our Trusted Customers</h1>
        </div>
        <div className="py-12 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black,transparent)]" >
        <motion.div className='flex overflow-hidden items-center gap-14 flex-none pr-14' 
        animate={{
           translateX : "-50%"
        }} 
        transition={{
           duration : 20,
           repeat : Infinity,
           ease : 'linear',
           repeatType : 'loop'
        }} >
               <img src={image1} className='invert  w-26 grayscale h-12'  />
               <img src={image2} className='invert  w-26 grayscale h-12'  />
               <img src={image3} className='invert  w-26 grayscale h-12'  />
               <img src={image4} className='invert  h-24 grayscale'  />
               <img src={image5} className='invert  w-26 grayscale h-12'  />
               <img src={image6} className='invert  w-26 grayscale h-12'  />

                {/* second set of logos */}

               <img src={image1} className='invert  w-26 grayscale h-12'  />
               <img src={image2} className='invert  w-26 grayscale h-12'  />
               <img src={image3} className='invert  w-26 grayscale h-12'  />
               <img src={image4} className='invert  h-24 grayscale'  />
               <img src={image5} className='invert  w-26 grayscale h-12'  />
               <img src={image6} className='invert  w-26 grayscale h-12'  />

          </motion.div>

        </div>
    </div>
  )
}

export default LogoTicker