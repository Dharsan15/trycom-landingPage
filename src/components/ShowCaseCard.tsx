/* eslint-disable @typescript-eslint/no-unused-vars */
import img1 from "../assets/feature1.webp"
import img2 from "../assets/feature3.webp"
import img3 from "../assets/feature2.webp"
import classNames from 'classnames'
import { useFeatureStore } from './store'

type ShowCasecardProps = {
   children : React.ReactNode
   id : string;
}

type cardsProp = {
    id : string     
}

function ShowCasecard({children , id} : ShowCasecardProps)  {


    const inViewCard = useFeatureStore(state => state.inViewCard)

  return (
    <div className= {classNames('w-[850px] mx-auto absolute top-20  sm:top-[200px]   sm:left-[50px] transition-opacity overflow-hidden',
        inViewCard == id ? "opacity-100" : "opacity-0"
         
    )
        
    } >
         {children}
     </div>
  )
}

export const featureCard1 = ({id} : cardsProp) => {
    return (
        <ShowCasecard id = {id} >
        {/* <img  src={showcaseimg} className='relative'></img> */}
        <img src={img1} className=' sm:w-[480px] sm:h-[290px] w-[310px] h-[200px]'>
         </img>
        </ShowCasecard>

    )
}
export const featureCard2 = ({id} : cardsProp) => {
    return (
        <ShowCasecard id = {id}  >
        <img src={img2} className=' sm:w-[480px] sm:h-[290px] w-[310px] h-[200px]'>
         </img>

        </ShowCasecard>

    )
}
export const featureCard3 = ({id} : cardsProp) => {
    return (
        <ShowCasecard id = {id} >
        <img src={img3} className=' sm:w-[480px] sm:h-[290px] w-[310px] h-[200px]'>
         </img>

        </ShowCasecard>     

    )
}