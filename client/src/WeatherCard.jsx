export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.city}, {data.country}</h2>
      <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description} />
      <p className="temp">{data.temperature}°C</p>
      <p>Feels like: {data.feelsLike}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
      <p className="desc">{data.description}</p>
    </div>
  );
}
