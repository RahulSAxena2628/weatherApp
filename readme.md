# Weather App 🌤️

A real-time weather application built with vanilla JavaScript using the OpenWeatherMap API. Supports both GPS-based location detection and manual city search.

## ✨ Features

- 📍 **Your Weather** — Auto-detect location using browser GPS
- 🔍 **Search Weather** — Search weather by any city name
- 🌡️ Live temperature, weather description & icon
- 💨 Wind speed, humidity & cloudiness data
- 🏳️ Country flag display
- 💾 Saves location in session storage (no repeated permission prompts)

## 🛠️ Tech Stack

- **HTML5** — Structure
- **CSS3** — Glassmorphism dark UI with animations
- **JavaScript (Vanilla)** — API calls, DOM manipulation, Geolocation
- **OpenWeatherMap API** — Live weather data
- **Font Awesome** — Icons
- **FlagCDN** — Country flags

## 📁 Project Structure

```
weatherApp/
├── index.html   # Main UI structure
├── style.css    # Dark glassmorphism styling
└── app.js       # API logic, geolocation, tab switching
```

## 🚀 Getting Started

1. Clone the repo
```bash
git clone https://github.com/RahulSAxena2628/weatherApp.git
cd weatherApp
```

2. Get a free API key from [openweathermap.org](https://openweathermap.org/api)

3. In `app.js`, replace the API key:
```js
const API_KEY = "your_api_key_here";
```

4. Open `index.html` in your browser — done! ✅

## 👨‍💻 Author

**Rahul Saxena** — [GitHub](https://github.com/RahulSAxena2628) · [LinkedIn](https://www.linkedin.com/in/rahul-saxena-695343241/)