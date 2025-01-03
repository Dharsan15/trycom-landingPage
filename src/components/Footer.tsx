import instaIcon from "../assets/insta.svg"
import linkedinIcon from "../assets/linkedin.svg"
import TwitterIcon from "../assets/x-social.svg"
import youtubeIcon from "../assets/youtube.svg"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className='text-white/60 py-5 mx-5  bg-black border-t border-white/20' >
        <div className="flex items-center justify-center sm:justify-start" > <img src={logo} alt="" className="text-white  w-10" /> <span className="font-bold text-xl text-white " >tryCoM</span> </div>
        <div className="flex flex-col gap-4 mt-5 sm:flex-row sm:justify-between" >
            <div className="text-center" > © 2024Trycom™. All Rights Reserved. </div>
            <ul className="flex justify-center gap-2.5" >
                <li><img className="invert" src={instaIcon} ></img></li>
                <li><img className="invert" src={linkedinIcon} ></img></li>
                <li><img className = "invert" src={TwitterIcon} ></img></li>
                <li><img className = "invert" src={youtubeIcon} ></img></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;