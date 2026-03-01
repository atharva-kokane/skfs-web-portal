// app/api/search/route.js

import { searchIndex } from "./searchData";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    if (!query || query.trim().length === 0) {
      return Response.json([]);
    }

    const q = query.trim().toLowerCase();

    const results = searchIndex
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 10);

    return Response.json(results);
  } catch (err) {
    console.error("Search API error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}