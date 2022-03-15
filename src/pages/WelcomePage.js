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
      <div className="hero-image">FineTime</div>
      <div className="usp-box">
        <h3>Easy Planning.</h3>
        <h3>Unique Experiences.</h3>
        <h3>Excellent Music.</h3>
      </div>
      <CitySelect />
    </section>
  );
}

export default WelcomePage;