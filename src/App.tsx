import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoTicker from "./components/LogoTicker"
import Features from "./components/Features"
import ProductShowcase from "./components/ProductShowcase"
import Waitlist from "./components/Waitlist"
function App() {
  
  return (
    <>
    <div className="bg-black font-display" >
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <ProductShowcase/>
      <Waitlist/>
    </div>
        
    </>
  )
}

export default App
