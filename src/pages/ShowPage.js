import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import YelpRecs from '../components/YelpRecs'
import MusicContext from "../context/MusicContext";
import './ShowPage.css';

import ShowSelect from '../components/ShowSelect';


const item = {
  "id": "gnKu_z4fkV9rKdVVQLBgTw",
  "alias": "the-wild-denver",
  "name": "The Wild",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/AZcnZxV1WkyFsu_LU24UOw/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/the-wild-denver?adjust_creative=gaYCAlMf5vVd4gCFuD01gw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=gaYCAlMf5vVd4gCFuD01gw",
  "review_count": 44,
  "categories": [
      {
          "alias": "cocktailbars",
          "title": "Cocktail Bars"
      },
      {
          "alias": "coffee",
          "title": "Coffee & Tea"
      }
  ],
  "rating": 5.0,
  "coordinates": {
      "latitude": 39.7521995680525,
      "longitude": -105.00019844331364
  },
  "transactions": [],
  "price": "$$",
  "location": {
      "address1": "1660 Wynkoop St",
      "address2": "Ste 100",
      "address3": "",
      "city": "Denver",
      "zip_code": "80202",
      "country": "US",
      "state": "CO",
      "display_address": [
          "1660 Wynkoop St",
          "Ste 100",
          "Denver, CO 80202"
      ]
  },
  "phone": "",
  "display_phone": "",
  "distance": 1497.5823390615722
}

const ShowPage = () => {
  const { selectedShow, selectedCity } = useContext(MusicContext);
  const [cocktailBars, setCocktailBars] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const yelpUrl = 'https://api.yelp.com/v3/businesses/search'
  const yelpApi = process.env.REACT_APP_YELP_API;
  const location_to_search = selectedShow.location + ', ' + selectedCity;

  useEffect(() => {
    axios({
      url: `http://localhost:3000/cocktailbars/${yelpApi}/${location_to_search}`,
      method: 'get',
      headers: { Authorization: `Bearer ${yelpApi}` }
    })
    .then(data => {
      setCocktailBars(data.data.businesses)
    })
    .catch(error => console.log(error));

    axios({
      url: `http://localhost:3000/restaurants/${yelpApi}/${location_to_search}`,
      method: 'get',
      headers: { Authorization: `Bearer ${yelpApi}` }
    })
    .then(data => {
      setRestaurants(data.data.businesses)
    })
    .catch(error => console.log(error));


  }, []);

  return (
    <section className="showPageContainer">
      <div className="hero-image" />
      <div className="textContainer">
        <h2>{selectedShow.location}, {selectedCity}</h2>
        <h3>{selectedShow.date}</h3>
        <a href={`https://www.sofarsounds.com${selectedShow.eventUrl}`}>
          <button>Buy Tickets</button>
        </a>
      </div>
    <h1>Nearby bars:</h1>

      <div className="yelpContainer">
        <div className="yelp-separator2">
          <h3 className="h3"> Restaurant Ideas near {selectedCity}</h3>
          {(restaurants.length > 0) && <div className="showGrid">
            {restaurants.map(bar => {
              return (
                  <ShowSelect yelpItem={bar}/>
              )
            })}
          </div>}
        </div>
        <div className="yelp-separator1">
          <h3 className="h3"> Bar Ideas near {selectedCity}</h3>
          {(cocktailBars.length > 0) && <div className="showGrid">
            {cocktailBars.map(bar => {
              return (
                  <ShowSelect yelpItem={bar}/>
              )
            })}
          </div>}
        </div>



      </div>
    </section>
  );
}

export default ShowPage;