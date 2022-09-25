import Head from "next/head";
// import Header from "../components/header";
// import styles from "../styles/Home.module.css";
// import About from "../components/mainPage/About";
// import Home from "../components/mainPage/About";

import Header from "../components/mainPage/Header";
import HomeScreen from "../components/mainPage/Home";
import About from "../components/mainPage/About";
import Description from "../components/mainPage/Description";
import TeamDesc from "../components/mainPage/TeamDesc";
import StyleOptions from "../components/mainPage/StyleOptions";
import Services from "../components/mainPage/Services";
import NewsTeller from "../components/mainPage/NewsTeller";
import Clients from "../components/mainPage/Clients";
import Technology from "../components/mainPage/Technology";
import Portfolio from "../components/mainPage/Portfolio";
import Creative from "../components/mainPage/Creativity";
import Number from "../components/mainPage/Number";
import Contact from "../components/mainPage/Contact";
import GoogleMaps from "../components/mainPage/GoogleMaps";

export default function Home() {
  return (
    <div
    // className={styles.container}
    >
      <Head>
        <title>Groovy Dots</title>
        <meta name="description" content="Groovy Dots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      {/* <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Groovy Dots!!!</h1>
        <h1 className={styles.title}>Coming soon</h1>
      </main> */}
      <div className="App">
        <div
          style={{
            height: "100%",
            padding: "0px",
            margin: "0px",
            overflow: "hidden",
          }}
        >
          <Header />
          <HomeScreen />
          <About />
          <Description />
          <TeamDesc />
          <NewsTeller />
          <Services />
          <Clients />
          <Technology />
          <Creative />
          <Portfolio />
          <Number />
          <Contact />
          <GoogleMaps />
          <StyleOptions />
        </div>
      </div>
    </div>
  );
}
