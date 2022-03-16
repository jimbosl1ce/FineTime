import React, { useEffect, useState, useContext } from "react";
import MusicContext from "../context/MusicContext";
import './SelectPage.css';
import ShowSelect from '../components/ShowSelect';
import { Link } from "react-router-dom";

import CitySelect from "../components/CitySelect";


const SelectPage = () => {
  const [cityShows, setCityShows] = useState([]);
  const { shows, selectedCity, setSelectedShow } = useContext(MusicContext);

  useEffect(() => {
    const filterShowsByCity = shows.filter(show => show.city.includes(selectedCity));

    setCityShows(filterShowsByCity);
  }, []);


  const hoods = cityShows.map(shows => shows.location);
  let uniqueItems = [...new Set(hoods)]

  return (
    <section className="SelectPageContainer">
      <div className="metaContainer">
        <div className="meta-image">
          <img className="meta-img" src={'https://bit.ly/3IffwB6'} />
          <div className="meta-city-text">
            {selectedCity}
          </div>
        </div>

        <div className="meta-input">
          <input placeholder="filter" type="text" />
          <input placeholder="filter" type="date" onChange={(e) => console.log(e)}/>
          <CitySelect text="Select a Neighborhood:" data={uniqueItems}/>
        </div>
      </div>

      <div className="showContainer">
        <h3 className="h3"> Upcoming Shows in {selectedCity}</h3>
        <div className="showGrid">
          {cityShows.map(show => {
            return (
              <Link to="/showpage" style={{ textDecoration: 'none' }} onClick={() => {setSelectedShow(show)}}>
                <ShowSelect show={show}/>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default SelectPage;