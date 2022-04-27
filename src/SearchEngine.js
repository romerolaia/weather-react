import React, { useState } from "react";
import "./Styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function cityTemperature(event) {
    event.preventDefault();
    setTemperature(`It's 26ºC in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={cityTemperature}>
        <input type="search" placeholder="Search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{temperature}</h2>
    </div>
  );
}
