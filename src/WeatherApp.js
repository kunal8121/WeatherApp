import React , {useState} from "react";

import axios from "axios";


const WeatherApp = () =>{
    const[city ,setCity] = useState("");
    const[weather , setWeather] = useState(null);
    const[error , setError] = useState("");

    const API_KEY = "YOUR_API_KEY";

    const fetchWeather = async() =>{

        if(!city){
            setError("Please Enter a city Name");
            return;
        }

        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );

            setWeather(response.data);
            setError("");
        }catch(error)
        {
              setError("City not Found ,Please try again");
              setWeather(null);
        }
    };

    return (
        <div className = "weatherReport">
            <h2 className="weather">Weather App</h2>

            <input 
            type="text" 
            placeholder="Enter city Name"
            value = {city}
            onChange={(e) => setCity(e.target.value)}
            className ="weather-input"
            />

            <button className="weather-button" onClick={fetchWeather}>Get Weather</button>

            {error && <p className = "error">{error}</p>}

            {weather && (
                <div className="weatherDetails">
                    <h3 className="showWeather">{weather.name} , {weather.sys.country}</h3>
                    <p>{weather.weather[0].description}</p>
                    <p>{weather.main.temp}°C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Weather-Icon" />
                </div>
            )}
        </div>
    );
};


export default WeatherApp;