"use client"; // Required if you're in Next.js App Router

import { useState, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Next.js router hook
import SearchBar from "../../components/SearchBar"
import "../globals.css";
import React, { use } from "react";
import * as d3 from 'd3';
import SiteHeader from "../../components/SiteHeader";


interface Anime {
    id: number;
    title: string;
    genres: string[];
    synopsis: string;
    image_url: string;
    umap_x: number;
    umap_y: number;
}

interface TooltipData {
    visible: boolean;
    content: Anime | null;
    x: number;
    y:number;
}

const sampleAnimes = [
    { id: 1, title: 'Attack on Titan', genres: ['Action', 'Drama', 'Fantasy'], synopsis: 'In a world where humanity resides within enormous walls, giant humanoid Titans prey on them. The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown.', image_url: 'https://placehold.co/300x450/7f1d1d/fee2e2?text=AoT', umap_x: -8.5, umap_y: 10.2 },
    { id: 2, title: 'Steins;Gate', genres: ['Sci-Fi', 'Thriller', 'Drama'], synopsis: 'A group of friends who have customized their microwave into a device that can send text messages to the past.', image_url: 'https://placehold.co/300x450/064e3b/d1fae5?text=Steins;Gate', umap_x: 5.1, umap_y: -7.3 },
    { id: 3, title: 'Your Name.', genres: ['Romance', 'Supernatural', 'Drama'], synopsis: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.', image_url: 'https://placehold.co/300x450/1e3a8a/dbeafe?text=Your+Name', umap_x: 12.8, umap_y: 3.5 },
    { id: 4, title: 'Death Note', genres: ['Thriller', 'Mystery', 'Supernatural'], synopsis: 'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it.', image_url: 'https://placehold.co/300x450/171717/e5e5e5?text=Death+Note', umap_x: 2.3, umap_y: -9.1 },
    { id: 5, title: 'My Neighbor Totoro', genres: ['Fantasy', 'Slice of Life'], synopsis: 'Two young girls move to the countryside to be near their ailing mother and have adventures with the wondrous forest spirits who live nearby.', image_url: 'https://placehold.co/300x450/059669/a7f3d0?text=Totoro', umap_x: 15.2, umap_y: 8.9 },
    { id: 6, title: 'K-On!', genres: ['Slice of Life', 'Comedy', 'Music'], synopsis: 'A group of high school girls form a light music club. Their days are filled with practice, performances, and heartwarming moments.', image_url: 'https://placehold.co/300x450/be185d/fce7f3?text=K-On!', umap_x: 18.5, umap_y: 12.1 },
    { id: 7, title: 'Cowboy Bebop', genres: ['Action', 'Sci-Fi', 'Adventure'], synopsis: 'The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.', image_url: 'https://placehold.co/300x450/9a3412/fed7aa?text=Cowboy+Bebop', umap_x: -12.3, umap_y: -4.8 },
    { id: 8, title: 'Fullmetal Alchemist: Brotherhood', genres: ['Action', 'Adventure', 'Fantasy'], synopsis: 'Two brothers search for the Philosopher\'s Stone after an attempt to revive their deceased mother goes awry and leaves them with damaged bodies.', image_url: 'https://placehold.co/300x450/78350f/fef3c7?text=FMAB', umap_x: -10.1, umap_y: 8.5 },
    { id: 9, title: 'Mushishi', genres: ['Fantasy', 'Mystery', 'Slice of Life'], synopsis: 'A "Mushi Master" named Ginko travels to investigate and help people troubled by supernatural creatures called Mushi.', image_url: 'https://placehold.co/300x450/365314/dcfce7?text=Mushishi', umap_x: 14.9, umap_y: 9.5 },
    { id: 10, title: 'Psycho-Pass', genres: ['Sci-Fi', 'Thriller', 'Police'], synopsis: 'In a futuristic Japan, the Sibyl System can determine a person\'s criminal potential. The story follows Akane Tsunemori, a new Inspector.', image_url: 'https://placehold.co/300x450/1e40af/dbeafe?text=Psycho-Pass', umap_x: 4.5, umap_y: -8.2 },
]


export default function SignupPage() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [animeData, setAnimeData] = useState<Anime[]>([]);
    const [tooltip, setTooltip] = useState<TooltipData>({ visible: false, content: null, x: 0, y: 0 });


    

    useEffect(() => {
        setAnimeData(sampleAnimes);
    }, []);

    useEffect(() => {
        if (!animeData || animeData.length === 0) return;

        // what is svg? it is the d3 selection of the svg element
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous contents

        const { width, height } = svg.node()!.getBoundingClientRect(); 
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        // Scales for positioning the points based on umap_x and umap_y
        const xExtent = d3.extent(animeData, d => d.umap_x) as [number, number];
        const yExtent = d3.extent(animeData, d => d.umap_y) as [number, number];

        // main container for all points
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear()
            .domain([xExtent[0] - 1, xExtent[1] + 1])
            .range([0, width - margin.left - margin.right]);
        const yScale = d3.scaleLinear()
            .domain([yExtent[0] - 1, yExtent[1] + 1])
            .range([height - margin.top - margin.bottom, 0]); // Invert y-axis for correct orientation

        g.selectAll("circle")
            .data(animeData)
            .join("circle")

            // this is where the points are positioned
            .attr("cx", d => xScale(d.umap_x)) 
            .attr("cy", d => yScale(d.umap_y))

            // radius of each point
            .attr("r", 6)

            // color of each point
            .attr("fill", "white")

            // opacity of each point
            .attr("opacity", 0.8)

            .style("cursor", "pointer")
            .on("mouseover", (event, d) => {
                d3.select(event.currentTarget).attr("fill", "orange").attr("r", 10);
                setTooltip({ visible: true, content: d, x: event.pageX, y: event.pageY });
            })
            .on("mouseout", (event, d) => {
                d3.select(event.currentTarget).attr("fill" , "white").attr("r", 6);
                setTooltip({
                    visible: false,
                    content: null,
                    x:0,
                    y:0
                })
            })
        
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.5, 20]) // Limit zoom scale
            .on("zoom", (event) => {
                g.attr("transform", event.transform.toString());
            
            });

            svg. call(zoom as any); // Type assertion for d3 zoom

            

    }, [animeData]); // re-run when animeData changes

    



    

    return (
        <div className="font-sans min-h-screen p-4 sm:p-8">
            <SiteHeader />

            {/* Main content area */}
            <main>
                <div className="w-full h-[calc(100vh-150px)] border rounded-lg shadow-lg bg-black overflowh-hidden">
                    <svg ref={svgRef} className="w-full h-full"></svg>
                </div>

                {/* Tooltip */}
                {tooltip.visible && tooltip.content && (
                    <div
                        className="absolute bg-white p-4 border rounded-lg shadow-lg max-w-xs"
                        style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
                    ></div>
                )}
            </main>
        </div>
    
  );
}