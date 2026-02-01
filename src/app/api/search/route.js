// app/api/search/route.js

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    if (!query || query.trim().length === 0) {
      return Response.json([]);
    }

    // Multi-column fuzzy search
    const { data, error } = await supabase
      .from("search_items")
      .select("*")
      .or(`name.ilike.%${query}%,category.ilike.%${query}%`)
      .limit(10);

    if (error) {
      console.error("Supabase error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data || []);
  } catch (err) {
    console.error("Search API error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}