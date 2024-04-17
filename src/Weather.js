import React, { useState } from "react";
import axios from "axios";

const URl = () => {
  const [data, setState] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = () => {
    // if(event.key==="enter"){
    axios.get(url).then((response) => {
      setState(response.data);
      console.log(response.data);
    });
    setLocation("");
    // }
  };

  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            type="text"
          />
          <button onClick={searchLocation}>Click</button>
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              {data.main ? <h1>{data.main.temp} F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name != undefined ? (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like}F</p>
                ) : null}
                <p className="bold">65 F</p>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.feels_like}</p>
                ) : null}
                <p>Humididty</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.main.humidity}</p>
                ) : null}

                <p>Wind Speed</p>
              </div>
            </div>
          ) : (
            "data not avaialble"
          )}
        </div>
      </div>
    </>
  );
};
export default URl;
