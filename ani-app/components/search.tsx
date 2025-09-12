import { useState, FormEvent } from "react";

interface Item {
  _id: string;
  name: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Item[]>([]);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/search?q=${query}`);
    const data: Item[] = await res.json();
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
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
