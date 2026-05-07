import { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {

  if (!city.trim()) {
    setError("Please enter a city name");
    return;
  }

  setLoading(true);
  setError("");
  setWeather(null);

  try {

    const { data } = await axios.get(
      `http://localhost:5000/api/weather?city=${city}`
    );

    setWeather(data);

  } catch (err) {

    if (err.response && err.response.data.error) {
      setError(err.response.data.error);
    } else {
      setError("Server error");
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
