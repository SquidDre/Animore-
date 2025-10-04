"use client"; // 👈 Required if you're in Next.js App Router

import Image from "next/image";
import { useRouter } from "next/navigation"; // Next.js router hook
import SearchBar from "../../components/SearchBar"
import "../globals.css";
import SiteHeader from "../../components/SiteHeader"


export default function ExplorePage() {
  const router = useRouter();

  return (
    <div className="font-sans min-h-screen p-4 sm:p-8">
      
          
      <SiteHeader />
      
      <h1 className="flex justify-center text-6xl font-bold mt-8">EXPLORE+</h1>
      
      <div className="flex justify-center mt-8">
        <SearchBar />
      </div>
    </div>
  );
}