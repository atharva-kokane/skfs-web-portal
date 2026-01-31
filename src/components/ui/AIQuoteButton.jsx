"use client";
import { useState } from "react";

export default function AIQuoteButton({ formData, onQuote }) {

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");

  const sendToAI = async () => {
    setLoading(true);
    setQuote("");

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setQuote(data.quote || "No quote generated");
    onQuote?.(data.quote);
    setLoading(false);
  };

  return (
    <div className="flex-1">
      <button
        onClick={sendToAI}
        className="w-full bg-orange-600 text-white py-2 rounded-md text-xs"
      >
        {loading ? "Generating..." : "Get AI Quote"}
      </button>

     

    </div>
  );
}
