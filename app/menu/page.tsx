
import Navbar from "../components/NavBar";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
type MenuItem = {
  category: string;
  name: string;
  description?: string;
};


export default async function LiveMusic() {
  const res = await fetch(`${baseUrl}/api/menu`, {
    cache: "no-store", // or "force-cache" if data is stable
  });

  const menu: MenuItem[] = await res.json();

  const hotItems = menu.filter((item) => item.category === "hot");
  const coldItems = menu.filter((item) => item.category === "cold");
  const dessertItems = menu.filter((item) => item.category === "desserts");
  const cocktailstItems = menu.filter((item) => item.category === "cocktails");
  const whiteItems = menu.filter((item) => item.category === "white");
  const redItems = menu.filter((item) => item.category === "red");
  const bubblesItems = menu.filter((item) => item.category === "bubbles");
  const dessertWineItems = menu.filter((item) => item.category === "dessertwine");
  const bottlesAndCansItems = menu.filter((item) => item.category === "bottlesandcans");

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
           <h2 id="menuTitle">Cocktails</h2>
          <ul id="cocktailMenu" className="menuItems">
            {cocktailstItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">White</h2>
          <ul id="whiteMenu" className="menuItems">
            {whiteItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">Red</h2>
          <ul id="redMenu" className="menuItems">
            {redItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">Bubbles</h2>
          <ul id="bubblesMenu" className="menuItems">
            {bubblesItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">Dessert Wine</h2>
          <ul id="dessertWineMenu" className="menuItems">
            {dessertWineItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">Bottles And Cans</h2>
          <ul id="bottlesAndCansMenu" className="menuItems">
            {bottlesAndCansItems.map((item, i) => (
                <li key={i}>
                  <strong id="menuItemName">{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
            ))}
          </ul>
           <h2 id="menuTitle">Drafts on Chalkboard </h2>
          <div className="classification">
            <p>20% Gratuity will be added to parties of five (5) or more</p>
            <p>*These foods are served raw, or undercooked.</p>
            <p>
              *Consuming raw or undercooked meats, poultry, seafood, or eggs may
              increase risk of foodborne illness.
            </p>
          </div>
          <br></br>
          
        </section>
      </main>
  );
}