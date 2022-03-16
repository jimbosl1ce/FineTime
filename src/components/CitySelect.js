import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './CitySelect.css';

import MusicContext from "../context/MusicContext";
import Card from '../utilityComponents/Card';
import CitySelectBubble from './CitySelectBubble';

const CitySelect = ({text=undefined, data=undefined, link=undefined}) => {
  const { selectCity } = useContext(MusicContext);

  const bubbleSelect = (city) => {
    selectCity(city)
  }
  if (link) {
    return (
      <Card>
        {text}
        <div className="citySelect">
          {data.map((city, index) => {
            return (
              <Link key={city + index} to={link}>
                <CitySelectBubble
                  cityName={city}
                  bubbleSelect={bubbleSelect}
                />
              </Link>
            )
          })}
        </div>
      </Card>
    );
  } else {
    return (
      <Card>
        {text}
        <div className="citySelect">
          {data.map((city, index) => {
            return (
                <CitySelectBubble
                  cityName={city}
                  bubbleSelect={bubbleSelect}
                />
            )
          })}
        </div>
      </Card>
    );

  }
}

export default CitySelect;