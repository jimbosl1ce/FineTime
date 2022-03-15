import React from "react";
import './CitySelectBubble.css';

const CitySelect = ({ cityName }) => {
  return (
    <span className="city-bubble">
      {cityName}
    </span>
  );
}

export default CitySelect;