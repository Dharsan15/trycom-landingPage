function Waitlist() {
  return (
    <div className='bg-gradient-to-t mt-0 text-white py-[70px] sm:py-[50px] text-center from-[#5D2CA8] to-black'>
        <div className='' >

        <h2 className='font-bold text-5xl sm:text-6xl' >Excited to try(CoM) our Product</h2>
        <p className='text-xl text-white/70  mx-5 mt-5 sm:max-w-6xl sm:mx-auto sm:text-2xl' >Unleash the power of marketing! Take charge of your campaigns and achieve exceptional results with tryCoM – your ultimate marketing partner. Start today and watch your business thrive!</p>
        <form className='mt-10 flex flex-col gap-2.5 mx-5 sm:max-w-sm sm:flex-row sm:mx-auto' >
            <input type='email' placeholder='your@gmail.com ' className='h-12  sm:flex-1 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]' ></input>
            <button className='bg-white text-black h-12 rounded-lg px-5' >Join Waitlist</button>
        </form>
        </div>
        </div>
  )
}

export default Waitlist;