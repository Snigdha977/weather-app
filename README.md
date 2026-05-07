
# Weather App

A full-stack weather application built using React, Node.js, Express, and the OpenWeather API. The application allows users to search for any city or country and view real-time weather information including temperature, humidity, wind speed, and weather conditions.

## Features

- Search weather by city or country
- Real-time weather data using OpenWeather API
- Displays:
  - Temperature
  - Feels Like Temperature
  - Humidity
  - Weather Description
  - Wind Speed
  - Country Information
  - Weather Icons
- Responsive and clean user interface
- Error handling for invalid city names and server issues

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- dotenv
- cors

## Project Structure

```bash
weather-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
````

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Snigdha977/weather-app.git
cd weather-app
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
OPENWEATHER_API_KEY=your_api_key_here
PORT=5000
```

Start the backend server:

```bash
npm start
```

---

### 3. Setup Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

---

## API Endpoint

### Get Weather Data

```http
GET /api/weather?city=London
```

### Sample Response

```json
{
  "city": "London",
  "country": "GB",
  "temperature": 8.39,
  "feelsLike": 7.26,
  "humidity": 85,
  "description": "broken clouds",
  "icon": "04n",
  "windSpeed": 2.06
}
```

## Environment Variables

| Variable            | Description         |
| ------------------- | ------------------- |
| OPENWEATHER_API_KEY | OpenWeather API Key |
| PORT                | Backend server port |

## Future Improvements

* 5-day weather forecast
* Current location weather detection
* Dark/Light mode
* Weather-based dynamic backgrounds
* Search history
* Deployment support

## Author

Snigdha Saha

## License

This project is created for learning and educational purposes.

```
```
