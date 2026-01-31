"use client";
import { useState } from "react";

export default function AIQuoteButton({ formData, onQuote }) {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [open, setOpen] = useState(false);

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
    setOpen(true);
    setLoading(false);
  };

  const downloadQuote = () => {
  const quoteEl = document.getElementById("ai-quote-card");
  if (!quoteEl) return;

  const win = window.open("", "_blank");
  if (!win) return;

  win.document.open();
 win.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Quotation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    body {
      background: #fff;
      padding: 24px;
    }
    .print-card {
      max-width: 700px;
      margin: auto;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      font-family: serif;
    }
  </style>
</head>

<body>
  <div class="print-card">
    ${quoteEl.innerHTML}
  </div>

  <script>
    window.onload = function() {
      window.print();
    }
  </script>
</body>
</html>
`);
  win.document.close();
};


  return (
    <>
      {/* BUTTON */}
      <div className="flex-1">
        <button
          onClick={sendToAI}
          className="w-full bg-orange-600 text-white py-2 rounded-md text-xs"
        >
          {loading ? "Generating..." : "Get AI Quote"}
        </button>
      </div>

      {/* POPUP OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-3">
          {/* POPUP CARD */}
          <div
            id="ai-quote-card"
            className="bg-white w-full max-w-xl rounded-xl p-5 relative animate-scaleIn"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            <h3 className="font-semibold text-sm mb-3 text-center">
              AI Generated Quotation
            </h3>

            <div className="text-xs whitespace-pre-wrap border rounded-md p-3 bg-gray-50 max-h-[60vh] overflow-y-auto">
              {quote}
            </div>

            <div className="mt-4 flex justify-between items-center border-t pt-3">
              <p className="text-[11px] text-gray-500">
                * This is an AI-generated quotation. Final price may vary.
              </p>

              <button
  className="text-xs bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700"
  onClick={() => {
    const quoteEl = document.getElementById("ai-quote-card");

    if (!quoteEl) {
      alert("Quote not found");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Quotation</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
              padding: 24px;
              font-family: serif;
            }
            .print-wrapper {
              max-width: 700px;
              margin: auto;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              padding: 24px;
            }
          </style>
        </head>
        <body>
          <div class="print-wrapper">
            ${quoteEl.innerHTML}
          </div>
        </body>
      </html>
    `);
    doc.close();

    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    };
  }}
>
  Download
</button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
