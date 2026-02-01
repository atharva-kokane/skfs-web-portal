"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setNotFound(false);
      return;
    }

    const fetchResults = async () => {
      const semantic = await fetch("/api/semantic", {
        method: "POST",
        body: JSON.stringify({ query }),
      }).then(r => r.json());

      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({ query: semantic.expanded }),
      });

      const data = await res.json();

      if (data.length === 0) {
        setResults([]);
        setNotFound(true);
      } else {
        setResults(data);
        setNotFound(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      setActive((prev) => Math.min(prev + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      setActive((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter" && results[active]) {
      router.push(results[active].slug);
    }
  };

  const highlight = (text) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="search-wrapper">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Search furniture..."
      />

      {results.length > 0 && (
        <ul>
          {results.map((item, i) => (
            <li
              key={item.id}
              className={i === active ? "active" : ""}
              onClick={() => router.push(item.slug)}
              dangerouslySetInnerHTML={{
                __html: highlight(item.name),
              }}
            />
          ))}
        </ul>
      )}

      {notFound && <div>Item not found</div>}
    </div>
  );
}
