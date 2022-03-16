import React from "react";
import './ShowSelect.css';
import Card from '../utilityComponents/Card';
import './ShowSelect.css';

const ShowSelect = ({ show }) => {
  const { date, location, eventUrl } = show

  const hasKey = 'type' in show;

  const checkIfNull = (key) => {
    if (key) {
      return show['type']
    }
  };

  return (
    <Card className="show-card">
      <div className="text-container">
        <h3>{location}</h3>
        <p>{date}</p>
        <div className="special">{checkIfNull(hasKey)}</div>
      </div>
    </Card>
  );
}

export default ShowSelect;