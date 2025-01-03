/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useEffect, useRef } from 'react'
import { useInView } from "motion/react"
import { motion } from "motion/react"
import { useFeatureStore } from './store'

type Props = {
    title : string,
    description : string,
    id : string
}

function ShowCaseText(props : Props) {

     const Ref = useRef<HTMLDivElement>(null);

     const isInView = useInView(Ref,{ margin :"-50% 0px -50% 0px" });

     const setinViewCard = useFeatureStore(state => state.setinViewCard)

     useEffect(() => {

      if(isInView) setinViewCard(props.id);

     },[isInView,setinViewCard,props.id])
     

  return (
    <motion.div ref={Ref}  
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }} 
     viewport={{ margin : "-50% 0px -50% 0px"}} 
     transition={{ duration: 0.3, ease: "spring" }}
     >
      <h1  className='text-center text-bold sm:text-4xl text-2xl'>{props.title}</h1>
      <p className='text-center  text-white/70 pt-10 sm:text-xl' >{props.description}</p>
    </motion.div>
  )
}

export default ShowCaseText;