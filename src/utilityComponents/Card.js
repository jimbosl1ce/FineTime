import React from "react";
import './Card.css';

const Card  = ({children, className, onClick}) => {
  const cardClasses = 'card ' + className;

  if (onClick) {
    return(
      <div onClick={() => onClick()} className={cardClasses}>
        {children}
      </div>
    )
  } else {
    return(
      <div className={cardClasses}>
        {children}
      </div>
    )
  }

}

export default Card;