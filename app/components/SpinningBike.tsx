"use client"; // ensures this runs only on the client

import { useEffect } from "react";

export default function SpinningBike() {
  useEffect(() => {
    const container = document.getElementById("logoContainer");
    if (!container) return;

    const toggleSpin = () => container.classList.toggle("spinning");

    container.addEventListener("click", toggleSpin);

    return () => container.removeEventListener("click", toggleSpin);
  }, []);

  return null; // this component doesn't render anything itself
}
