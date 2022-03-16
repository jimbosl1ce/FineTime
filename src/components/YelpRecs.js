import React from 'react';

const YelpRecs = ({ item }) => {

  return(
    <div className="yelp-recs">
      <div className="yelp-result">
        <div className="image-container">
          <img src={item.image_url} />
        </div>
        <div className="yelp-text-container">
          <div>{item.name}</div>
          <div>{item.rating} Stars - {item.review_count} Reviews</div>
          <div>Currently {item.is_closed ? 'Cloased' : 'Open'}</div>
        </div>
      </div>
    </div>
  )
}

export default YelpRecs;