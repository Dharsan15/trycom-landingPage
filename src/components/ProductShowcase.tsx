import showcaseimg from "../assets/macbook.png"
import ShowCasecard from './ShowCaseText';
import { featureCard1 , featureCard2 , featureCard3 } from './ShowCaseCard';

const cards = [
    {
        title : "Declutter your marketing strategy",
        description : "Organize your market research, social media trend analysis, content all in one place. Our AI creates and schedules content that engages your target audience instead of being generic.",
        src : '',
        id : "feature1",
        card : featureCard1
    },
    {
        title : "Out of mind, not out of sight",
        description : "Get the pressure of posting consistently out of mind. tryCoM AI is there to schedule content for as long as you want. It can auto-schedule content posting with your approval and post at the right time based on when your audience will be active online.",
        src : '',
        id : "feature2",
        card : featureCard2
    },
    {
        title : "Manage all your socials and its analytics - all in one place",
        description : "No more digging into Business Manager, LinkedIn Page Analytics, YouTube Studio, and Google Business Insights. View the most impactful metrics surfaced by our AI and drill deep into each one of them without the need to switch platforms or accounts.",
        src : '',
        id : "feature3",
        card : featureCard3
    },
    {
        title : "  ",
        description : "",
        id : "feature3",
        card : featureCard3
    }
]

function ProductShowcase() {
  return (
    <>
    <div className='bg-gradient-to-b text-white from-black to-[#5D2CA8]' >
    <div className='sm:max-w-6xl sm:mx-auto sm:flex  gap-20  px-[22px] tracking-tighter' >
        <div className='sm:w-[880px] mt-44' >
          <ul>
       {
           cards.map(({ title , description , id}) => (
            <li key={id} className='pb-20' >
            <ShowCasecard id ={id} title={title} description={description} />
            </li> 
           ))
       } 
          </ul>
          </div>

        {/* <div className=' [mask-image:linear-gradient(to_bottom,#000,#000,transparent)]' >
               <div className='sticky top-0 flex h-screen w-full items-center' >
            <img src={showcaseimg} className='sm:pt-10 sm:mt-32 sm:px-10 pt-10 sm:w-[1000px]'></img>
           </div> 
              <div className='w-[850px] mx-auto absolute top-20  sm:top-[200px]  left-[100px] sm:left-[100px]  overflow-hidden' >
            <img className=' sm:w-[480px] sm:h-[290px] w-[310px] h-[200px]' src = {img1}></img>
            </div>

         </div> */}

 
        <div className='sm:sticky sm:top-0 sm:flex sm:h-screen sm:w-full sm:items-center overflow-hidden' >

          <div className='[mask-image:linear-gradient(to_bottom,#000,#000,transparent)] overflow-hidden' >

          <div className='overflow-hidden' >
            <img  src={showcaseimg} className=''></img>
        {
           cards.map((cards) => (
              <cards.card id={cards.id} key={cards.id} />
           ))
        }
          </div>
          
          </div>


        </div>

        </div>
      </div>

            
    
        {/* <div className='h-screen overflow-hidden' >more room to scrool  */}
        
   
    {/* </div> */}

    </>
  ) 
}

export default ProductShowcase;