import logo from  "../assets/logo.png"

function Navbar() {
  return (
    <div className="flex bg-transparent items-center bg-black  p-4 justify-between" >
          <div className="flex items-center" >
             <img className="w-10" src= {logo} alt="trycom logo" > 
             </img>
             <p className="text-white text-2xl  " >tryCoM.ai</p>
          </div>
          <div>
            <button className="bg-transparent border text-md font-medium text-gray-300  mr-2 px-4 py-2 rounded-3xl" > Join our waitlist </button>
          </div>
      </div>
  )
}

export default Navbar