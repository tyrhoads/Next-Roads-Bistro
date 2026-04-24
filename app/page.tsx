// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import SpinningBike from "./components/SpinningBike"; 

export default function Home() {
  return (
    <main className="main">
    <div className="topofthepop">

      <div id="header">
        <div id="branding">
          <div id="name">
            <Link href="/">
              <Image
                id="nameLogo"
                src="/images/THE ROADS BISTRO Name.svg"
                alt="The Roads Bistro"
                width={1000} // adjust as needed
                height={80} // adjust as needed
              />
            </Link>
            

            <div id="logoContainer">
              <Image
                id="logo"
                src="/images/THE ROADS BISTRO LOGO.svg"
                alt="Logo"
                width={100}
                height={100}
              />
              <Image
                id="frontWheel"
                src="/images/Wheel.svg"
                alt="Wheel"
                width={50}
                height={50}
              />
              <Image
                id="backWheel"
                src="/images/backWheel.svg"
                alt="Back Wheel"
                width={50}
                height={50}
              />
            </div>
            <SpinningBike />
          </div>
        </div>

        <nav id="navBar">
          <Link href="/menu">Menu</Link>
          <Link href="/livemusic">Live Music</Link>
          <a href="tel:+17579041566">Call Us</a>
          <a href="mailto:whatyousippinon@theroadsbistro.com">Email Us</a>
        </nav>
      </div>
      </div>
      <section className="info">
        <div className="infoBox">
          <h3>LOCATION</h3>
          <p>
            <a
              href="https://maps.app.goo.gl/Z8Wf75X9fT85npNw5"
              target="_blank"
            >
              3809 Princess Anne Road Unit 123, Virginia Beach, VA
            </a>
          </p>
        </div>
        <div className="infoBox">
          <h3>HOURS</h3>
          <p>Tues-Sat: 5pm – Midnight</p>
        </div>
        <div className="infoBox">
          <h3>FOLLOW US</h3>
          <a
            href="https://www.facebook.com/TheRoadsBistro"
            target="_blank"
            className="fa-brands fa-facebook"
          ></a>
          <a
            href="https://www.instagram.com/theroadsbistrovb/"
            target="_blank"
            className="fa-brands fa-instagram"
          ></a>
        </div>
      </section>

      <div className="aboutUs">
        <div className="aboutPic">
          <Image
            className="aboutPic"
            src="/images/aboutUs.jpg"
            alt="About Us Picture"
            width={400}
            height={300}
          />
        </div>
        <div className="aboutUsBox">
          <h3>About Us</h3>
          <p>
           Nothing brings people together like good food, good drinks and great music. 
           Unfortunately, we suck at making music so we chose to start our business 
           around the things we are good at. We have since found out how to hire great 
           musicians. So come join us with a friend (or twelve) and enjoy some good food, 
           good drinks and great music. We are open Tuesday through Saturday with live music 
           every evening. See you all soon!
          </p>
        </div>
      </div>

      <div id="bikePicture">
        <Image
          className="bikePicture"
          src="/images/hangingBike.jpg"
          alt="Bike Picture"
          width={2000}
          height={1000}
        />
        <Image
          className="bikePicture"
          src="/images/glasses.jpg"
          alt="Glasses Picture"
          width={2000}
          height={1000}
        />
        <Image
          className="bikePicture"
          src="/images/picOfBar.jpg"
          alt="Glasses Picture"
          width={2000}
          height={1000}
        />
        <Image
          className="bikePicture"
          src="/images/roadSide.jpg"
          alt="Glasses Picture"
          width={2000}
          height={1000}
        />
      </div>

    </main>
  );
}
