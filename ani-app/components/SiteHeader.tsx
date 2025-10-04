"use client";

import { useRouter } from "next/navigation"; // Next.js router hook

export default function SiteHeader() {
    const router = useRouter();

    return (

        //what does each class do?
        //flex makes it a flexbox container which allows for flexible layouts
        //justify-between spaces out the child elements to the edges
        //items-center vertically centers the child elements
        //p-4 sm:p-8 adds padding of 1rem on all sides for small screens and 2rem for larger screens
        //border-b border-gray-300 adds a bottom border with a light gray color
        <header className ="flex justify-between items-center p-4 sm:p-8">
        
            <h1 onClick={() => router.push("/")} className="text-4xl font-bold cursor-pointer flex">
                ANIMORE
                <span className="animate-blink text-amber-300">+</span>
            </h1>

            <div className="flex gap-4">
                <button
                    onClick={() => router.push("/signup")}
                    className="outline-2 px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition font-bold"
                >
                    SIGNUP
                </button>
                <button
                    onClick={() => router.push("/login")}
                    className="outline-2 px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition font-bold"
                >   LOGIN
                </button>
            </div>
        </header>

    );
}