'use client';

import { useState, FormEvent, useEffect } from "react";

interface Item {
  _id: string;
  Name: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search effect
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data: Item[] = await res.json();
        setResults(data.splice(0, 20)); // Limit to top 10 results
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission if needed
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="RECOMMENDATIONS FROM..."
          className="outline-2 p-2 pl-2 w-full m-2"
          autoComplete="off"
        />
      </form>

      {/* Results container - shows as you type */}
      {(results.length > 0 || isLoading) && (
        <div className="mt-4 p-4 rounded-lg">
          <h3 className="font-bold text-white mb-2">Search Results:</h3>
          
          {isLoading ? (
            <p className="text-black">Loading...</p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={item._id} className="p-2 text-white">
                  <button
                    className="w-full p-3 text-left hover:bg-gray-800  transition cursor-pointer text-white"
                    onClick={() => console.log('Selected:', item.Name)}
                  >
                    {item.Name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {results.length === 0 && query && !isLoading && (
        <div className="mt-4 p-4 rounded-lg">
          <p className="text-black">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}