import React from 'react'

function Waitlist() {
  return (
    <div className='bg-gradient-to-b  text-white py-[72px] text-center from-[#5D2CA8] to-black'>
        <div className='mx-3' >

        <h2 className='font-bold text-5xl' >Excited to try(CoM) our Product</h2>
        <p className='text-xl text-white/70  mt-5 text-center' >Unleash the power of marketing! Take charge of your campaigns and achieve exceptional results with tryCoM – your ultimate marketing partner. Start today and watch your business thrive!</p>
        <form className='mt-10 flex flex-col gap-2.5' >
            <input type='email' placeholder='your@gmail.com ' className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]' ></input>
            <button className='bg-white text-black h-12 rounded-lg ' >Join Waitlist</button>
        </form>
        </div>
        </div>
  )
}

export default Waitlist;