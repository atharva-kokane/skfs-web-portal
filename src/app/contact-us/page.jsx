"use client";

import { useState } from "react";


export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    furnitureType: "",
    roomType: "",
    roomSize: "",
    budget: "",
    requirements: ""
  });

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.contact || !formData.furnitureType || !formData.budget) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    // Create quote object
    const newQuote = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      status: "New",
      ...formData
    };

    // Save to localStorage
    const existingQuotes = JSON.parse(localStorage.getItem("skfs_quotes") || "[]");
    localStorage.setItem("skfs_quotes", JSON.stringify([newQuote, ...existingQuotes]));

    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      contact: "",
      furnitureType: "",
      roomType: "",
      roomSize: "",
      budget: "",
      requirements: ""
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
            Fill in the details below and get personalized furniture recommendations
          </p>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-medium block mb-1">Name *</label>
              <input
                placeholder="Your full name"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Contact Number *</label>
              <input
                placeholder="+91 98765 43210"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Furniture Type *</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.furnitureType}
                onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
              >
                <option value="">Select furniture type</option>
                <option>Bed</option>
                <option>Sofa</option>
                <option>Wardrobe</option>
                <option>Modular Kitchen</option>
                <option>TV Unit</option>
                <option>Dining Set</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">Room Type</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
              >
                <option value="">Select room type (optional)</option>
                <option>Bedroom</option>
                <option>Living Room</option>
                <option>Kitchen</option>
                <option>Dining Room</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">Room Size (optional)</label>
              <input
                placeholder="e.g. 10x12 feet"
                className="w-full bg-gray-100 rounded-md px-3 py-2 outline-none"
                value={formData.roomSize}
                onChange={(e) => setFormData({ ...formData, roomSize: e.target.value })}
              />
            </div>

            <div>
              <label className="font-medium block mb-1">Budget Range *</label>
              <select
                className="w-full bg-gray-100 rounded-md px-3 py-2"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Select your budget</option>
                <option>₹50k - ₹1L</option>
                <option>₹1L - ₹3L</option>
                <option>₹3L+</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-1">Custom Requirements</label>
              <textarea
                placeholder="Tell us about your specific needs, preferences, or any special requirements..."
                className="w-full bg-gray-100 rounded-md px-3 py-2 h-20 resize-none outline-none"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => alert("AI Suggestions generated")}
              className="flex-1 border rounded-md py-2 text-xs font-medium hover:bg-gray-50"
            >
              ✨ Get AI Suggestions
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 bg-sky-600 text-white rounded-md py-2 text-xs font-medium hover:bg-sky-700"
            >
              Submit Quote Request
            </button>
          </div>

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
              <p className="text-gray-600">
                Instant rough price estimates
              </p>
            </div>
          </div>

          <p className="text-[11px] text-gray-600 mt-5">
            Fill in the form and click <b>“Get AI Suggestions”</b> to receive personalized recommendations!
          </p>
        </div>
      </div>
    </div>
  );
}
