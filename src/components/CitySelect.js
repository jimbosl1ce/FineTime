import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './CitySelect.css';

import MusicContext from "../context/MusicContext";
import Card from '../utilityComponents/Card';
import CitySelectBubble from './CitySelectBubble';

const cities = ['Chicago', 'Denver', 'London', 'Los Angeles', 'New York', 'San Francisco', 'Seattle', 'Washington, D.C.']

const CitySelect = () => {
  const { selectCity } = useContext(MusicContext);

  const bubbleSelect = (city) => {
    selectCity(city)
  }

  return (
    <Card>
      Let's get started! Select Your City:
      <div className="citySelect">
        {cities.map(city => {
          return (
            <Link to="/cityselect">
              <CitySelectBubble
                key={city}
                cityName={city}
                bubbleSelect={bubbleSelect}
              />
            </Link>
          )
        })}
      </div>
    </Card>
  );
}

export default CitySelect;