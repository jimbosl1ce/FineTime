import React, {useContext, useEffect} from "react";
import './WelcomePage.css';

import CitySelect from "../components/CitySelect";
import MusicContext from "../context/MusicContext";

const WelcomePage = () => {
  const { loadShows } = useContext(MusicContext);

  useEffect(() => {
    loadShows();
  }, []);

  return (
    <section className="welcomePageContainer">
      <div className="image-container">
        <img className="hero-image" src={require('./sofar.jpeg')} />
      </div>
      <div className="text-container">
        <div className="h1">FineTime</div>
        <CitySelect />
      </div>
    </section>
  );
}

export default WelcomePage;