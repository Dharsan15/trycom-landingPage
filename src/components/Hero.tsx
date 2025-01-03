function Hero() {
  return (
    <div className="relative pb-32 mb-5 tracking-tight mt-10  text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_70%,#A46EDB_88%)] overflow-clip" >
        
        <div className="relative pb-4 mx-auto max-w-5xl text-center" >

            <h1 className="pb-2 pt-14 bg-[linear-gradient(to_right,#e4e4e7,#71717a)] bg-clip-text text-transparent text-3xl sm:text-5xl/[1.07] font-bold tracking-tight  font-display  md:text-7xl/[1.07]" > Your marketing is a mess. But, It's not your fault.</h1>
        </div>
           <div className="relative sm:mx-auto mx-6 max-w-3xl text-center" >
        <p className="text-xl sm:text-2xl text-tight  text-center" >
        tryCoM is a new way to manage your content marketing
that helps declutter your social media marketing efforts
and your mind with the power of AI
        </p>
        <button className="border rounded-lg sm:text-xl mb-10 mt-8 text-black px-3 py-2 bg-white" >Join our waitlist</button>
           </div>
        
           <div className="absolute h-[484px] pb-28 w-[1200px] sm:w-[2636px] sm:h-[800px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-98px)] sm:top-[calc(100%-120px)]  ">


           </div>
        
    </div>
  )
}

export default Hero;