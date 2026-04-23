import { NextResponse } from "next/server";

let cachedMenu: any[] = [];
let lastFetch = 0;
const CACHE_DURATION = 0; // 5 minutes

export async function GET() {
  const now = Date.now();

  // Serve cached menu if it's still fresh
  if (cachedMenu.length && now - lastFetch < CACHE_DURATION) {
    return NextResponse.json(cachedMenu);
  }

  const SHEET_ID = "1HRsVggkxwUrAEDW841hJjQdBn6Z-y0HDxmPvuV7GbGU";
  const API_KEY = process.env.API_KEY_MENU;
  const RANGE = "Sheet1!A2:C";

  try {
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Sheets API error:", res.status, text);
      return NextResponse.json(cachedMenu, { status: 200 }); // fallback to last cached menu
    }

    const data = await res.json();
    const menu = (data.values || []).map((row: string[]) => ({
      category: row[0]?.trim().toLowerCase() || "",
      name: row[1] || "",
      description: row[2] || "",
    }));

    // ✅ Update cache
    cachedMenu = menu;
    lastFetch = now;

    return NextResponse.json(menu);
  } catch (err) {
    console.error("Menu fetch failed:", err);
    return NextResponse.json(cachedMenu, { status: 200 }); // fallback
  }
}