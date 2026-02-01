import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const { data } = await supabase
    .from("search_items")
    .select("*")
    .ilike("name", `%${query}%`)
    .limit(5);

  return Response.json(data || []);
}
