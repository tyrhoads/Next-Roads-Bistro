"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/NavBar";
import Image from "next/image";

interface Event {
  title: string;
  description: string;
  start: string;
  end: string;
  image: string;
}

export default function LiveMusic() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/LiveMusic"); // ✅ fixed URL
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <main>
      <Navbar />
      <h1>Live Music</h1>

      <div id="jazzContainer">
        <Image
          id="jazzImage"
          src="/images/jazzPlay.jpg"
          alt="jazz image"
          width={2000}
          height={1000}
        />
      </div>

      
        <section id="musicShit">
          <h2 id="siteHeaders">Upcoming Events</h2>
          {loading && <p>Loading events...</p>}
          {!loading && events.length === 0 && <p>No upcoming events found.</p>}

          <ul id="events-list">
            {events.map((event, index) => {
              // convert Google Drive URLs for Next.js Image
              const driveUrl = event.image.includes("drive.google.com")
                ? event.image.replace("/open?id=", "/uc?export=view&id=")
                : event.image;

              return (
                <li key={index} className="musicBox">
                    
                  <div className="musicPhoto">
                    <Image className="musicPicture"
                      src={driveUrl}
                      alt={event.title}
                      width={2000}
                      height={2000}
                    />
                  </div>
                  <div className="musicSummary">{event.title}</div>
                  <div className="musicDate">
                    {new Date(event.start).toLocaleString(undefined, {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="musicDescription">{event.description}</div>
                </li>
              );
            })}
          </ul>
        </section>
     
    </main>
  );
}