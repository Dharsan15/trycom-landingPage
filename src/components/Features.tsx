import {  PiNumberSquareOneBold,  PiNumberSquareThreeBold, PiNumberSquareTwoBold } from "react-icons/pi";



const features = [
    {
        title : "Having a Wide Reach",
        description : "Your targeting is too broad and this leads to in-effective messaging creating a lot of noise and no leads.",
        icon : "PiNumberSquareOne"
    },
    {
        title : "Being Inconsistent",
        description : "You get excited a few days in a year and create content irregularly without a strategy or any market research. Social media algorithms hate irregularity."
    },
    {
        title : "Unmeasured Data",
        description : "You post content regularly but do not measure its reach, engagement, and lead conversions. Without knowing who is interested it becomes impossible to create an impactful content strategy that performs."
    }
]

function Features() {
  return (
    <div className='text-white max-w-6xl mx-auto bg-black  pt-16' >
        <div>
            <h2 className='text-center font-bold text-5xl tracking-tighter' >We Solve Three Main Problems</h2>
            <p className='text-center text-white/70 text-2xl mt-5' >
            tryCoM solves the three main problems that lead to ineffective marketing
            </p>
            <div className='mt-16 flex flex-col sm:flex-row gap-6 mx-5 ' >

            
                        <div className='border hover:border-[#5D2CA8] transition-colors  text-center   px-5 py-10 rounded-xl flex-1 shadow-inset-purple border-[#5D2CA8]/50'>
                            <PiNumberSquareOneBold className='inline-flex h-10 w-10 justify-center items-center rounded-xl' />
                            <h1 className='mt-6 font-bold text-xl' >{features[0].title}</h1>
                            <p className='mt-2 text-white/70 ' >{features[0].description}</p>
                        </div>
                        <div className='border hover:border-[#5D2CA8] transition-colors text-center px-5 py-10 rounded-xl flex-1 shadow-inset-purple border-[#5D2CA8]/50'>
                            <PiNumberSquareTwoBold className='inline-flex h-10 w-10  justify-center items-center rounded-xl'/>
                            <h1 className='mt-6 font-bold text-xl' >{features[1].title}</h1>
                            <p className='mt-2 text-white/70 ' >{features[1].description}</p>
                        </div>

                        <div className='border hover:border-[#5D2CA8] transition-colors text-center  px-5 py-10 rounded-xl flex-1 shadow-inset-purple border-[#5D2CA8]/50'>
                            <PiNumberSquareThreeBold className='inline-flex h-10 w-10 justify-center items-center rounded-xl' />
                            <h1 className='mt-6 font-bold text-xl' >{features[2].title}</h1>
                            <p className='mt-2 text-white/70 ' >{features[2].description}</p>
                        </div>

        
            </div>
        </div>
    </div>
  )
}

export default Features