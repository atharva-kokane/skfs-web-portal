"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  const wrapperRef = useRef(null);

  // Fetch results when query changes
  useEffect(() => {
    if (!query || query.trim().length === 0) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        console.log("Search results:", data); // Debug log
        
        setResults(data || []);
        setShowDropdown(true);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      }
    };

    const timer = setTimeout(fetchResults, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showDropdown || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          navigate(results[activeIndex].slug);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        break;
    }
  };

  // Navigate to page
  const navigate = (slug) => {
    console.log("Navigating to:", slug); // Debug log
    router.push(slug);
    setQuery("");
    setShowDropdown(false);
    setActiveIndex(-1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matching text
  const highlightMatch = (text) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} style={{ backgroundColor: "#fef08a", color: "#000" }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => query && setShowDropdown(true)}
        placeholder="Search furniture..."
        style={{
          width: "100%",
          padding: "8px 40px 8px 16px",
          border: "2px solid #666",
          borderRadius: "12px",
          fontSize: "16px",
          outline: "none",
        }}
        className="focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
      />

      {/* Search Icon */}
      <svg
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          height: "20px",
          color: "#9ca3af",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Dropdown Results */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            maxHeight: "400px",
            overflowY: "auto",
            zIndex: 50,
          }}
        >
          {results.length === 0 ? (
            <div
              style={{
                padding: "24px",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "8px" }}>🔍</div>
              <div style={{ fontWeight: "500" }}>No results found</div>
              <div style={{ fontSize: "14px", marginTop: "4px" }}>
                Try different keywords
              </div>
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {results.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => navigate(item.slug)}
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    backgroundColor: index === activeIndex ? "#eff6ff" : "#fff",
                    borderBottom: index < results.length - 1 ? "1px solid #f3f4f6" : "none",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: "500", color: "#111827", marginBottom: "2px" }}>
                        {highlightMatch(item.name)}
                      </div>
                      <div style={{ fontSize: "14px", color: "#6b7280", textTransform: "capitalize" }}>
                        {item.category}
                      </div>
                    </div>
                    <svg
                      style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Keyboard Hints */}
          {results.length > 0 && (
            <div
              style={{
                padding: "8px 16px",
                fontSize: "12px",
                color: "#6b7280",
                backgroundColor: "#f9fafb",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>↑↓ to navigate</span>
              <span>Enter to select</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
