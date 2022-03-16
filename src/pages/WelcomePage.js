import React, {useContext, useEffect} from "react";
import './WelcomePage.css';

import CitySelect from "../components/CitySelect";
import MusicContext from "../context/MusicContext";

const WelcomePage = () => {
  const { loadShows } = useContext(MusicContext);

  useEffect(() => {
    loadShows();
  }, []);

  const text = "Let's get started! Select your city:"
  const cities = ['Chicago', 'Denver', 'London', 'Los Angeles', 'New York', 'San Francisco', 'Seattle', 'Washington, D.C.']
  const link = "/cityselect"

  return (
    <section className="welcomePageContainer">
      <div className="image-container">
        <img className="hero-image" src={require('./sofar.jpeg')} />
      </div>
      <div className="text-container">
        <div className="h1">FineTime</div>
        <CitySelect text={text} data={cities} link={link}/>
      </div>
    </section>
  );
}

export default WelcomePage;