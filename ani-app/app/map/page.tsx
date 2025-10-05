"use client";

import { useState, useEffect, useRef } from "react";
import * as d3 from 'd3';
import SiteHeader from "../../components/SiteHeader";
import "../globals.css";

interface Anime {
  _id: string;
  anilist_id: number;
  title: {
    english: string;
  };
  genres: string[];
  description: string;
  umap_2d: [number, number];
  coverImage?: {
    large: string;
  };
  popularity: number;
}

interface TooltipData {
    visible: boolean;
    content: Anime | null;
    x: number;
    y: number;
}

export default function AnimeMapPage() { // Renamed component for clarity
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [animeData, setAnimeData] = useState<Anime[]>([]);
    const [tooltip, setTooltip] = useState<TooltipData>({ visible: false, content: null, x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/anime');
                if (!response.ok) throw new Error('Failed to fetch data');
                const rawData: Anime[] = await response.json();

                // FIXED: The filter now also checks for the 'popularity' field
                const validData = rawData.filter(anime => 
                    anime.umap_2d && Array.isArray(anime.umap_2d) && anime.umap_2d.length === 2 && typeof anime.popularity === 'number'
                );
                
                if (validData.length === 0 && rawData.length > 0) {
                    console.warn("Warning: All fetched data was filtered out. Check if 'umap_2d' and 'popularity' fields are coming correctly from your API.");
                }

                setAnimeData(validData);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Guard clause to prevent running D3 code with no data
        if (isLoading || animeData.length === 0 || !svgRef.current) return;
        
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const { width, height } = svg.node()!.getBoundingClientRect();
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        
        const xExtent = d3.extent(animeData, d => d.umap_2d[0]) as [number, number];
        const yExtent = d3.extent(animeData, d => d.umap_2d[1]) as [number, number];
        const popularityExtent = d3.extent(animeData, d => d.popularity) as [number, number];
        
        // The scales' ranges now correctly account for the margins
        const xScale = d3.scaleLinear().domain([xExtent[0] - 1, xExtent[1] + 1]).range([margin.left, width - margin.right]);
        const yScale = d3.scaleLinear().domain([yExtent[0] - 1, yExtent[1] + 1]).range([height - margin.bottom, margin.top]);
        const radiusScale = d3.scaleSqrt().domain(popularityExtent).range([3, 15]);

        // FIXED: The <g> element no longer has a redundant transform attribute
        const g = svg.append("g").attr("class", "points-group");

        g.selectAll("circle")
            .data(animeData)
            .join("circle")
            .attr("cx", d => xScale(d.umap_2d[0]))
            .attr("cy", d => yScale(d.umap_2d[1]))
            .attr("r", d => radiusScale(d.popularity)) // Using the popularity scale
            .attr("fill", "white")
            .attr("opacity", 0.7)
            .style("cursor", "pointer")
            .style("transition", "all 0.2s ease")
            .on("mouseover", (event, d) => {
                const currentRadius = radiusScale(d.popularity);
                d3.select(event.currentTarget).attr("fill", "#FFC107").attr("r", currentRadius + 3).attr("opacity", 1);
                setTooltip({ visible: true, content: d, x: event.pageX, y: event.pageY });
            })
            .on("mouseout", (event, d) => {
                d3.select(event.currentTarget).attr("fill", "white").attr("r", radiusScale(d.popularity));
                setTooltip({ visible: false, content: null, x: 0, y: 0 });
            });

        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([1, 20])
            // FIXED: Correct syntax for the zoom event handler
            .on("zoom", (event) => {
                g.attr("transform", event.transform.toString());
            });

        svg.call(zoom);

    }, [animeData, isLoading]);

    return (
        <div className="font-sans min-h-screen flex flex-col bg-black">
            <SiteHeader />
            <main className="flex-grow p-4 sm:p-8">
                {/* FIXED: Corrected CSS typo 'overflowh-hidden' and added flexbox for centering */}
                <div className="w-full h-[calc(100vh-150px)] border border-white outline-2 shadow-lg bg-black overflow-hidden relative flex items-center justify-center">
                    {isLoading ? (<div className="text-white text-xl font-bold">LOADING MAP DATA...</div>)
                               : (<svg ref={svgRef} className="w-full h-full"></svg>)
                    }
                    {!isLoading && tooltip.visible && tooltip.content && (
                        <div
                            className="absolute bg-white text-black p-3 border shadow-xl w-60 pointer-events-none flex flex-col gap-2"
                            style={{ top: tooltip.y - 275, left: tooltip.x- 25}}
                        >
                            {tooltip.content.coverImage && (
                                <img
                                    src={tooltip.content.coverImage.large}
                                    alt={`Poster for ${tooltip.content.title.english}`}
                                    className="rounded-md"
                                />
                            )}
                            <div>
                                <h3 className="font-bold text-md mb-1">{tooltip.content.title.english}</h3>
                                <p className="text-xs text-gray-600">
                                    <strong>Popularity:</strong> {tooltip.content.popularity.toLocaleString()}
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Genres:</strong> {tooltip.content.genres.join(', ')}
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Description:</strong> {tooltip.content.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}