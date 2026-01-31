"use client";

import { saveQuote } from "@/actions/quote.actions";

export default function SubmitButton({ formData }) {
  return (
    <button
      onClick={async () => {
        await saveQuote(
          formData.name,
          formData.contact,
          formData.furnitureType,
          formData.roomType,
          formData.roomSize,
          formData.budget,
          formData.requirements
        );
      }}
      className="w-full flex-1 bg-orange-600 text-white rounded-md py-2 text-xs font-medium hover:bg-orange-700"
    >
      Submit Quote Requests
    </button>
  );
}
