// imports react hooks and types. 'use client' directive for Next.js
// 'FormEvent' type for form event handling in TypeScript
import { useState, FormEvent } from "react";

// Define the structure of the search result item
interface Item {
  _id: string;
  name: string;
}


export default function SearchBar() {
  const [query, setQuery] = useState<string>(""); // query holds the search input
  const [results, setResults] = useState<Item[]>([]); // results holds the search results of Item type
  // and sets the initial state to an empty array

  // handleSearch function to manage form submission and fetch search results
  const handleSearch = async (e: FormEvent<HTMLFormElement> ) => { // specify the event type for TypeScript
    e.preventDefault(); // prevent default form submission behavior
    const res = await fetch(`/api/search?q=${query}`); // fetch search results from the API
    const data: Item[] = await res.json(); // parse the JSON response and type it as an array of Item
    setResults(data); // update the results state with the fetched data
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="RECOMMENDATIONS FROM..."
          className="outline-2 p-2 pl-2 w-128 m-2"
        />
        <button type="submit" className="outline-2 px-4 py-2 my-3 bg-black text-white hover:bg-white hover:text-black transition font-bold">
          SEARCH
        </button>
      </form>

      <ul>
        {results.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
