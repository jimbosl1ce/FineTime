import React from "react";
import './CitySelectBubble.css';

const CitySelect = ({ cityName, bubbleSelect }) => {
  return (
    <span
      onClick={() => bubbleSelect(cityName)}
      className="city-bubble"
    >
      {cityName}
    </span>
  );
}

export default CitySelect;