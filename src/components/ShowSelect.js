import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ShowSelect.css';
import Card from '../utilityComponents/Card';
import './ShowSelect.css';

const ShowSelect = ({ show = undefined, yelpItem = undefined }) => {
  if (show !== undefined) {
    const hasKey = 'type' in show;
    const { date, location, eventUrl } = show;
    const checkIfNull = (key) => {
      if (key) {
        return show['type']
      }
    };

    return (
      <Card className="show-card">
        {checkIfNull(hasKey) && <div className="special">{checkIfNull(hasKey)}</div>}
        <div className="show-img-container">
          <img className="show-img" alt="city-view" src={'https://bit.ly/3CKaj3f'}/>
        </div>
        <div className="text-container-show">
          <div className="location">{location}</div>
          <div className="font-style">{date}</div>
        </div>
      </Card>
    );
  } else {
    const { image_url, name, rating, review_count, is_closed, url } = yelpItem

    return (
      <a className="no-decoration" target="_blank" rel="noreferrer" href={url}>
      <Card className="show-card">
        <div className="show-img-container">
          <img className="show-img" alt="city-view" src={image_url}/>
        </div>
        <div className="text-container-show">
          <div className="location">{name}</div>
          <div className="font-style">{rating} out of {review_count} reviews</div>
          <div className="isOpen">{is_closed ? 'Closed' : 'Open'}</div>
        </div>
      </Card>
      </a>
    );
  }
}

export default ShowSelect;