"use client";
import Link from "next/link";

export default function Navbar(){
  return(
          <nav id="UpperNavBar">
        <div id="innerBox">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/livemusic">Live Music</Link>
        </div>
      </nav>

  )
}
