import Image from "next/image";
import Search from "../../public/search.svg";
import "./globals.css";

export default function Home() {
  return (
    <div className="font-sans flex items-center min-h-screen justify-center p-8 pb-20 gap-16 sm:p-20">
      <div className="max-w-2xl">
        <h1 className="mb-8 text-6xl font-bold">
          ANIMORE
          <span className="animate-blink">+</span>
        </h1>
        
        <div className="mb-8">
        NO MORE ENDLESS SCROLLING OR GUESSING WHAT TO WATCH NEXT—ANIMORE+ HELPS YOU DISCOVER ANIME THAT MATCHES YOUR TASTE, MOOD, 
        AND FAVORITE GENRES+ WHETHER YOU JUST FINISHED 
        A SERIES THAT LEFT YOU IN AWE OR YOU’RE SEARCHING FOR HIDDEN GEMS, ANIMORE+ MAKES RECOMMENDATIONS TAILORED TO YOU+
        </div>
        <div className="flex gap-4">
          <button className="outline-2 px-6 py-3 bg-black-600 text-white  hover:bg-blue-700 transition font-bold">
            LOGIN
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 hover:bg-gray-300 transition font-bold">
            SIGNUP
          </button>
        </div>
      </div>
      
      
    </div>
      
    
  );
}
