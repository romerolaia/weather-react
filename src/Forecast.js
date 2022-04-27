import "./Styles.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="app-overview">
      <h1 id="city">Barcelona</h1>
      <ul>
        <li id="date">Thursday 19:45</li>
        <li id="description"></li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temp">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="orange"
              size={48}
              animate={true}
            />
            <div className="float-left">
              <strong id="temperature">18</strong>
              <span className="units">ºC | ºF</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">47</span> %
            </li>
            <li>
              Wind: <span id="wind">2</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
