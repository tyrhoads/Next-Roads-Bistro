import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/NavBar.tsx";
export default function Menu() {
  return (
    <main>

    <Navbar/> 
      <h1>Menu</h1>

      <section className="menu">
        <h2 id="hotTitle">Hot</h2>
        <ul id="hotMenu" className="hotMenuItems"></ul>

        <div className="key">
          <p>V - vegetarian</p>
          <p>v - vegan option</p>
          <p>gf - gluten free</p>
        </div>

        <h2 id="coldTitle">Cold</h2>
        <ul id="coldMenu" className="hotMenuItems"></ul>

        <br />
        <br />

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
