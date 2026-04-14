import { getSupabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ count: 0 });
  }

  try {
    const body = await request.json();

    await supabase.from("portfolio_visits").insert({
      visitor_id: crypto.randomUUID(),
      page: body.page || "/",
      user_agent: body.userAgent || null,
      referrer: body.referrer || null,
    });

    const { count } = await supabase
      .from("portfolio_visits")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({ count: count || 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ count: 0 });
  }

  try {
    const { count } = await supabase
      .from("portfolio_visits")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({ count: count || 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
