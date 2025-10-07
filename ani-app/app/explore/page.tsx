"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import "../globals.css";
// Import the new component
import AutocompleteSearchBar from "../../components/AutocompleteSearchBar";

// ... (RecommendedAnime interface remains the same) ...
interface RecommendedAnime {
  _id: string;
  title: {
    english: string;
  };
  genres: string[];
  coverImage?: {
    large: string;
  };
  popularity: number;
  score: number;
}


export default function ExplorePage() {
  const [results, setResults] = useState<RecommendedAnime[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // This function is now passed to our new component
  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    // ... (rest of the handleSearch logic is the same)
    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(`/api/recommend?title=${encodeURIComponent(searchTerm)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch recommendations');
      }

      const data: RecommendedAnime[] = await response.json();
      setResults(data);

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen p-4 sm:p-8 bg-black text-white">
      <SiteHeader />
      <h1 className="text-center text-4xl md:text-6xl font-bold mt-8">EXPLORE+</h1>
      <p className="text-center text-gray-400 mt-2">Find anime similar to your favorites using vector search.</p>

      {/* MODIFIED: Use the new AutocompleteSearchBar component */}
      <div className="flex justify-center mt-8">
        <AutocompleteSearchBar onSearch={handleSearch} />
      </div>

      {/* Results Section (no changes here) */}
      <div className="mt-12">
        {isLoading && <p className="text-center">FINDING RECOMMENDATIONS</p>}
        {error && <p>ERROR</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {results.map((anime) => (
            <div key={anime._id} className="bg-gray-800 rounded-lg overflow-hidden group transition-transform transform hover:-translate-y-2">
              {anime.coverImage?.large && (
                <Image 
                  src={anime.coverImage.large} 
                  alt={anime.title.english}
                  width={300}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-3">
                <h3 className="font-bold truncate text-sm">{anime.title.english}</h3>
                <p className="text-xs text-gray-400">Similarity: {(anime.score * 100).toFixed(1)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}