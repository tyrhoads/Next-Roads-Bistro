
import Navbar from "@/app/components/NavBar";
import Image from "next/image";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
interface Event {
  title: string;
  description: string;
  start: string;
  end: string;
  image: string;
}


export default async function LiveMusic() {
  const res = await fetch(`${baseUrl}/api/LiveMusic`, {
    cache: "no-store", // or "force-cache" if data is stable
  });

  const events: Event[] = await res.json();
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