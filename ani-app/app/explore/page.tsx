"use client"; // 👈 Required if you're in Next.js App Router

import Image from "next/image";
import { useRouter } from "next/navigation"; // Next.js router hook
import SearchBar from "../../components/SearchBar"
import "../globals.css";
export default function ExplorePage() {
  const router = useRouter();

  return (
    <div className="font-sans min-h-screen p-4 sm:p-8">
      <div className="flex justify-between gap-4 m-4 cursor-pointer">
        <h1 onClick={() => router.push("")} className="m-4 mt-4 text-4xl font-bold flex">
            ANIMORE
            <span className="animate-blink text-amber-300">+</span>
        </h1>
        <div className="flex gap-4 ml-auto">
          <button
            onClick={() => router.push("/signup")}
            className="flex-wrap-reverse outline-2 px-6 py-3 my-3 bg-black text-white hover:bg-white hover:text-black transition font-bold"
          >
            SIGNUP
          </button>

          <button
            onClick={() => router.push("/login")}
            className="flex-wrap-reverse outline-2 px-6 py-3 my-3 bg-black text-white hover:bg-white hover:text-black transition font-bold"
          >
            LOGIN
          </button>
        </div>
          
      </div>
      <div className="">
        <h1 className="flex justify-center text-6xl font-bold mt-8">EXPLORE+</h1>
      </div>
      <div className="flex justify-center mt-8">
        <SearchBar />
      </div>
    </div>
  );
}