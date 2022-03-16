import React, { useEffect, useState, useContext } from "react";
import MusicContext from "../context/MusicContext";
import './SelectPage.css';
import ShowSelect from '../components/ShowSelect';
import { Link } from "react-router-dom";


const SelectPage = () => {
  const [cityShows, setCityShows] = useState([]);
  const { shows, selectedCity, setSelectedShow } = useContext(MusicContext);

  useEffect(() => {
    const filterShowsByCity = shows.filter(show => show.city.includes(selectedCity));
    setCityShows(filterShowsByCity)
  }, []);

  return (
    <section className="SelectPageContainer">
      <h3> Upcoming Shows in {selectedCity}</h3>
      <div className="showContainer">
        {cityShows.map(show => {
          return (
            <Link to="/showpage" style={{ textDecoration: 'none' }} onClick={() => {setSelectedShow(show)}}>
              <ShowSelect show={show}/>
            </Link>
          )
        })}
      </div>
    </section>
  );
}

export default SelectPage;