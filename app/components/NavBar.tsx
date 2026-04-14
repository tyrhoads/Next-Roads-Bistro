"use client";
import Link from "next/link";
import { FaHome, FaUtensils, FaMusic, FaPhone, FaEnvelope } from "react-icons/fa";
export default function Navbar(){
  return(
          <nav id="UpperNavBar">
      
          <Link href="/"><FaHome /></Link>
          <Link href="/menu"><FaUtensils /></Link>
          <Link href="/livemusic"><FaMusic /></Link>
          <a href="tel:+17579041566"><FaPhone /></a>
          <a href="mailto:whatyousippinon@theroadsbistro.com"><FaEnvelope /></a>
       
      </nav>

  )
}
