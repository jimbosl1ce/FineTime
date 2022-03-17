import React from "react";
import './CitySelectBubble.css';

const CitySelect = ({ key, cityName, bubbleSelect, onNeighborhoodClick }) => {
return (
    <span
      key={key}
      onClick={() => bubbleSelect(cityName)}
      className="city-bubble"
    >
      {cityName}
    </span>
  );
}

export default CitySelect;