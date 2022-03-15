import React from "react";
import './CitySelect.css';
import { Link } from "react-router-dom";

import Card from '../utilityComponents/Card';
import CitySelectBubble from './CitySelectBubble';

const cities = ['Chicago', 'Denver', 'London', 'Los Angeles', 'New York', 'San Francisco', 'Seattle', 'Washington, D.C.']

const CitySelect = () => {
  return (
    <Card>
      Let's get started! Select Your City:
      <div className="citySelect">
        {cities.map(city => <CitySelectBubble cityName={city} />)}
      </div>
      <Link to="/CitySelect">City Select</Link>
    </Card>
  );
}

export default CitySelect;