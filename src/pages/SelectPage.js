import React, { useContext } from "react";
import MusicContext from "../context/MusicContext";
// import './SelectPage.css';


const SelectPage = () => {
  const { selectedCity } = useContext(MusicContext);
  console.log(selectedCity)
  return (
    <section className="SelectPageContainer">
      {selectedCity}
    </section>
  );
}

export default SelectPage;