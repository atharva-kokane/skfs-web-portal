"use client";

<<<<<<< HEAD
import { useState, useEffect ,Suspense } from "react";
import SubmitButton from "@/components/submit-quote-button";
import { useSearchParams } from "next/navigation";
=======
import { useState } from "react";
import SubmitButton from   "@/components/submit-quote-button";
import AIQuoteButton from "@/components/ui/AIQuoteButton";



>>>>>>> 6c8042e18504f2a5cd92ce8c4fea9e5516e9c954

export default function RequestQuotePage() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [aiQuote, setAiQuote] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    furnitureType: "",
    roomType: "",
    roomSize: "",
    budget: "",
    requirements: "",
  });
 useEffect(() => {
    const furniture = searchParams.get("furniture");
    const req = searchParams.get("req");

    if (furniture || req) {
      setFormData((prev) => ({
        ...prev,
        // Using || prev.furnitureType ensures we don't overwrite if params are empty
        furnitureType: furniture || prev.furnitureType,
        requirements: req ? `I am interested in: ${req}` : prev.requirements
      }));
    }
  }, [searchParams]);
  const handleSubmit = () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.contact ||
      !formData.furnitureType ||
      !formData.budget
    ) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    // Create quote object
    const newQuote = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      status: "New",
      ...formData,
    };

    // Save to localStorage
    const existingQuotes = JSON.parse(
      localStorage.getItem("skfs_quotes") || "[]",
    );
    localStorage.setItem(
      "skfs_quotes",
      JSON.stringify([newQuote, ...existingQuotes]),
    );

    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      contact: "",
      furnitureType: "",
      roomType: "",
      roomSize: "",
      budget: "",
      requirements: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white px-4 py-10">
      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-center mb-2">
        Request a Quote
      </h1>

      <p className="text-center text-gray-500 mb-10 text-sm">
        Get instant AI-powered design suggestions and price estimates!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-sm mb-1">Your Requirements</h3>
          <p className="text-xs text-gray-500 mb-5">
            Fill in the details below and get personalized furniture
            recommendations
          </p>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-medium block mb-1">Name *</label>
              <input
                placeholder="Your full name"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Contact Number *</label>
              <input
                placeholder="+91 98765 43210"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Furniture Type *</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.furnitureType}
                onChange={(e) =>
                  setFormData({ ...formData, furnitureType: e.target.value })
                }
              >
                <option value="">Select furniture type</option>
                <option value="Beds">Beds</option>
              <option value="Wardrobes">Wardrobes</option>
              <option value="Sofas & Seating">Sofas & Seating</option>
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="TV Units">TV Units</option>
              <option value="Study Tables">Study Tables</option>
              <option value="Dining Sets">Dining Sets</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">Room Type</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({ ...formData, roomType: e.target.value })
                }
              >
                <option value="">Select room type (optional)</option>
                <option>Bedroom</option>
                <option>Living Room</option>
                <option>Kitchen</option>
                <option>Dining Room</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">
                Room Size (optional)
              </label>
              <input
                placeholder="e.g. 10x12 feet"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.roomSize}
                onChange={(e) =>
                  setFormData({ ...formData, roomSize: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Budget Range *</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              >
                <option value="">Select your budget</option>
                <option>₹50k - ₹1L</option>
                <option>₹1L - ₹3L</option>
                <option>₹3L+</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">
                Custom Requirements
              </label>
              <textarea
                placeholder="Tell us about your specific needs, preferences, or any special requirements..."
                className="w-full bg-gray-100 rounded-md px-3 py-2 h-20 resize-none outline-none"
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
  <div className="flex-1">
    <AIQuoteButton
  formData={formData}
  onQuote={(quote) => setAiQuote(quote)}
/>

            <SubmitButton formData={formData} />
  </div>

  <div className="flex-1">
    <SubmitButton formData={formData} />
  </div>
</div>

            {/*<button
              onClick={handleSubmit}
              className="flex-1 bg-sky-600 text-white rounded-md py-2 text-xs font-medium hover:bg-sky-700"
            >
              Submit Quote Request
            </button>*/}
          

          {submitted && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-800 text-xs rounded-md p-3">
              Thank you! Your quote request has been submitted successfully.
            </div>
          )}
        </div>

        {/* RIGHT CARD */}
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 h-fit">
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
            ✨ AI Design Assistant
          </h3>

          <p className="text-xs text-gray-600 mb-4">
            Get instant furniture recommendations powered by AI
          </p>

          <div className="space-y-4 text-xs">
            <div>
              <b>💡 Smart Suggestions</b>
              <p className="text-gray-600">
                Get design ideas based on your requirements
              </p>
            </div>

            <div>
              <b>📐 Space Optimization</b>
              <p className="text-gray-600">
                Tips to maximize your available space
              </p>
            </div>

            <div>
              <b>💲 Price Estimation</b>
              <p className="text-gray-600">Instant rough price estimates</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-600 mt-5">
            Fill in the form and click <b>“Get AI Suggestions”</b> to receive
            personalized recommendations!
          </p>
          {aiQuote && (
  <div
    id="ai-quote-card"
    className="mt-6 bg-white border border-orange-200 rounded-xl shadow-sm p-6
               text-sm text-gray-800 leading-relaxed font-serif"
  >
    {/* Header */}
    <div className="mb-4 text-center border-b pb-3">
      <h2 className="text-lg font-bold">Shree Krishna Furniture Store</h2>
      <p className="text-xs text-gray-500">
        {new Date().toLocaleString()}
      </p>
    </div>

    {/* Quote content */}
    <div className="whitespace-pre-wrap space-y-3">
      {aiQuote.split("\n").map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-6 border-t pt-3 flex justify-between items-center">
      <p className="text-xs text-gray-500">
        * This is an AI-generated quotation, so there is a chance to vary main price.
      </p>

      <button
        className="text-xs bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700"
        onClick={() => {
          const printContents =
            document.getElementById("ai-quote-card").innerHTML;
          const originalContents = document.body.innerHTML;

          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents;
          window.location.reload();
        }}
      >
        Download
      </button>
    </div>
  </div>
)}




        </div>
      </div>
    </div>
  );
}
