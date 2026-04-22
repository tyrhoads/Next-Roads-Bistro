// app/api/LiveMusic/route.ts
import { NextResponse } from "next/server";

const CALENDAR_ID = "5e02ed53d168186921c77d383ed856b720fe696921ced1ff8df524d4841ddc29@group.calendar.google.com";
const API_KEY = process.env.API_KEY_MUSIC; 
const MAX_RESULTS = 20;

export async function GET() {
  try {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}&maxResults=${MAX_RESULTS}&supportsAttachments=true`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Google API error: ${res.status}`);

    const data = await res.json();

    // Map events into simpler format for frontend
    const events = (data.items || []).map((event: any) => {
      // Grab image from Google Drive if available
      let image = "/images/musicLogo.jpg"; // fallback
      if (event.attachments && event.attachments[0]?.fileUrl) {
        // Convert Drive file link to direct view link
        image = event.attachments[0].fileUrl.replace("/view?usp=drive_web", "?export=view");
      }

      return {
        title: event.summary || "Untitled Event",
        description: event.description || "",
        start: event.start?.dateTime || event.start?.date || "",
        end: event.end?.dateTime || event.end?.date || "",
        image,
      };
    });

    return NextResponse.json(events);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}