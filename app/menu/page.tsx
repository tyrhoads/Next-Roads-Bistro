"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

type MenuItem = {
  category: string;
  name: string;
  description?: string;
};

export default function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("/api/menu")
        .then((res) => {
          console.log("API status:", res.status); // check HTTP status
          return res.json();
        })
        .then((data) => {
          console.log("Fetched menu:", data); // log what you get
          setMenu(data);
        })
        .catch((err) => console.error("Fetch error:", err));
  }, []);

  const hotItems = menu.filter((item) => item.category === "hot");
  const coldItems = menu.filter((item) => item.category === "cold");
  const dessertItems = menu.filter((item) => item.category === "desserts");

  return (
      <main>
        <Navbar />
        <h1>Menu</h1>

        <section className="menu">
          <h2 id="menuTitle">Hot</h2>
          <ul id="hotMenu" className="menuItems">
            {hotItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>

          <div className="key">
            <p>V - vegetarian</p>
            <p>v - vegan option</p>
            <p>gf - gluten free</p>
          </div>

          <h2 id="menuTitle">Cold</h2>
          <ul id="coldMenu" className="menuItems">
            {coldItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>

          <h2 id="menuTitle">Desserts</h2>
          <ul id="dessertMenu" className="menuItems">
            {dessertItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>

          <div className="classification">
            <p>20% Gratuity will be added to parties of five (5) or more</p>
            <p>*These foods are served raw, or undercooked.</p>
            <p>
              *Consuming raw or undercooked meats, poultry, seafood, or eggs may
              increase risk of foodborne illness.
            </p>
          </div>
        </section>
      </main>
  );
}