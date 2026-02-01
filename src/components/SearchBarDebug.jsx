"use client";

import { useState, useEffect } from "react";

export default function SearchBarDebug() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    const timer = setTimeout(async () => {
      try {
        console.log("Fetching:", `/api/search?q=${query}`);
        
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        console.log("Response status:", response.status);
        console.log("Response data:", data);

        setResults(data || []);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>🔍 Search Bar Debugger</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        style={{
          width: "100%",
          padding: "12px",
          border: "2px solid #3b82f6",
          borderRadius: "8px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />

      <div style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
        <strong>Query:</strong> "{query}"<br />
        <strong>Loading:</strong> {isLoading ? "Yes" : "No"}<br />
        <strong>Results Count:</strong> {results.length}<br />
        <strong>Error:</strong> {error || "None"}
      </div>

      {isLoading && (
        <div style={{ padding: "20px", textAlign: "center", color: "#3b82f6" }}>
          Loading...
        </div>
      )}

      {error && (
        <div style={{ padding: "20px", backgroundColor: "#fee2e2", border: "1px solid #ef4444", borderRadius: "8px", color: "#991b1b" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {!isLoading && !error && results.length === 0 && query && (
        <div style={{ padding: "20px", backgroundColor: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "8px" }}>
          No results found for "{query}"
        </div>
      )}

      {!isLoading && results.length > 0 && (
        <div style={{ border: "2px solid #10b981", borderRadius: "8px", overflow: "hidden" }}>
          <div style={{ padding: "12px", backgroundColor: "#d1fae5", borderBottom: "1px solid #10b981", fontWeight: "bold" }}>
            ✅ Found {results.length} results:
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {results.map((item, index) => (
              <li
                key={item.id}
                style={{
                  padding: "16px",
                  borderBottom: index < results.length - 1 ? "1px solid #e5e7eb" : "none",
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9fafb",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{item.name}</div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  Category: {item.category} | Slug: {item.slug}
                </div>
                <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
                  Keywords: {item.keywords?.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#dbeafe", borderRadius: "8px" }}>
        <h3>📋 Checklist:</h3>
        <ul>
          <li>✅ API is working (you tested: /api/search?q=bed)</li>
          <li>❓ Does typing show results above?</li>
          <li>❓ Check browser console (F12) for errors</li>
          <li>❓ Is SearchBar component imported correctly?</li>
        </ul>
      </div>
    </div>
  );
}
