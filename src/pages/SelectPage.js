import React, { useEffect, useState, useContext } from "react";
import MusicContext from "../context/MusicContext";
import './SelectPage.css';
import ShowSelect from '../components/ShowSelect';
import { Link } from "react-router-dom";

import CitySelect from "../components/CitySelect";


const SelectPage = () => {
  const [cityShows, setCityShows] = useState([]);
  const [allCityShows, setAllCityShows] = useState([]);
  const [uniqueHoods, setUniqueHoods] = useState([]);
  const [selectedHoods, setSelectedHoods] = useState([]);
  const { shows, selectedCity, setSelectedShow } = useContext(MusicContext);

  useEffect(() => {
    const filterShowsByCity = shows.filter(show => show.city.includes(selectedCity));
    const hoods = filterShowsByCity.map(shows => shows.location);
    const distinctHoods = [...new Set(hoods)];
    console.log(distinctHoods)
    setUniqueHoods(distinctHoods);
    setCityShows(filterShowsByCity);
    setAllCityShows(filterShowsByCity);
  }, [shows, selectedCity]);


  // to filter and organize neighborhoods
  const onNeighborhoodClick = (hood) => {
    let hoodCopy;

    // add clicked hood to current hoods that we want to show:
    if (selectedHoods.includes(hood)) {
      hoodCopy = selectedHoods.map(currentHood => {
        if (currentHood !== hood) {
          return currentHood
        }
      });
    } else {
      hoodCopy = [...selectedHoods, hood];
    }

    // create an array that will house all shows associated with current hoods:
    let allHoodShows = [];
    // loop over current hoods
    for (let hood of hoodCopy) {
      // for each hood, build an array of shows specific to that hood:
      const showsInSpecificHood = shows.filter(show => show.location === hood);
      // concat this array onto the "all shows" array.
      allHoodShows = allHoodShows.concat(showsInSpecificHood);
    }
    // update the list of currently selected hoods
    setSelectedHoods(hoodCopy);
    // update the list of all shows correlating with these hoods
    setCityShows(allHoodShows);
  };



  return (
    <section className="SelectPageContainer">
      <div className="metaContainer">
        <div className="meta-image">
          <img className="meta-img" alt="city view" src={'https://bit.ly/3IffwB6'} />
          <div className="meta-city-text">
            {selectedCity}
          </div>
        </div>

        <div className="meta-input">
          <input placeholder="filter" type="date" onChange={(e) => console.log(e)}/>
          <CitySelect onNeighborhoodClick={onNeighborhoodClick} text={'Select a Neighborhood:'} data={uniqueHoods}/>
        </div>
      </div>

      <div className="showContainer">
        <div>
          <h3 className="h3">Upcoming Shows in {selectedCity} {(cityShows.length === allCityShows.length) ? '' : (<span className="clearBtn" onClick={() => setCityShows(allCityShows)}>CLEAR</span>)}</h3>
        </div>
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