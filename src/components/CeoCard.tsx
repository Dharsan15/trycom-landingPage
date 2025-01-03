import React from "react";
import { FaLinkedin } from "react-icons/fa";

const CeoCard = () => {
  return (
    <div className="min-h-screen flex mb-10 items-center justify-center bg-gray-900 p-4 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="relative max-w-4xl w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
        </div>

        <div className="relative bg-[#1A1A1A] p-8 rounded-xl border border-purple-500/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
             
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AK
                </h3>
                <p className="text-gray-400">CEO & Founder, TryCoM</p>
              </div>
            </div>

            <blockquote className="text-gray-300 text-lg flex flex-col leading-relaxed mb-8">
            <span>Just like email, content marketing has its highs and lows. It's great when it connects, but often, it's a grind. Creating engaging content takes time, consistency is hard, and keeping it authentic? Even tougher. 😓</span> <br></br>
            <span>Then there's the cost of creating content and making sure it actually engages. And don't get me started on repurposing existing material. It's a lot, right? 🤷‍♂️</span>
           <br></br>
           <span>That's where tryCoM comes in. We're simplifying all of this—making content creation less time-consuming, more consistent, genuinely authentic, and cost-effective. 🚀</span>
           <br></br>

            <span>We're excited for you to try tryCoM. It's our way of making digital marketing enjoyable again. 😊</span> 
            </blockquote>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#"
                className="text-purple-400  border rounded-lg p-3 border-purple-500 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
              >
                <FaLinkedin className="text-xl " />
                <span>Connect with me</span>
              </a>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-purple-500/30 rounded-xl">
            <div className="absolute inset-0 animate-border-flow">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" style={{ transform: "translateX(-100%)", animation: "border-flow 3s linear infinite" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes border-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CeoCard;