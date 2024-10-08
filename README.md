
# React Weather App

## 🚀 Introduction

This repository contains a **React** weather application built using **Tailwind CSS** for styling. The app allows users to search for a location and retrieve real-time weather information. It integrates two APIs: **GeoDB RapidAPI** to search for city locations and **OpenWeather API** to fetch the weather data for the selected location.

## 🎯 Features
- **Search for cities** using the GeoDB RapidAPI.
- Fetches **current weather** and **4-day weather forecast** using the OpenWeather API.
- Responsive and mobile-friendly design with **Tailwind CSS**.
- Modular architecture for easy scalability.

## 🗂️ Project Structure

Here's an overview of the folder structure of this project:

```bash
.
├── public                  # Static assets (HTML, icons, etc.)
│   └── index.html          # Main HTML file
├── src                     # Main application source code
│   ├── assets              # Static assets like images and icons
│   ├── components          # Reusable React components
│   │   ├── CurrentWeather.jsx  # Displays current weather info
│   │   ├── Search.jsx         # Search bar for city lookup
│   │   └── WeatherForecast.jsx # Displays the weather forecast
│   ├── api.js              # API service logic for GeoDB and OpenWeather
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for the React app
│   ├── App.css             # Global styles
│   └── index.css           # Tailwind CSS configuration and styles
├── .env                    # Environment variables for API keys
├── package.json            # Project dependencies and scripts
├── README.md               # This file
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration for fast build tooling
```

### Key Folders:
- **`components/`**: Contains reusable components for the weather app, such as `CurrentWeather`, `Search`, and `WeatherForecast`.
- **`api.js`**: Handles all API interactions with the GeoDB and OpenWeather APIs.
- **`.env`**: Stores environment variables, such as API keys.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **npm** or **yarn**

### Installation

Clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/elviajero971/react-weather-app.git

# Navigate to the project directory
cd react-weather-app

# Install dependencies using npm or yarn
npm install
# OR
yarn install
```

### Running the Application

Create a `.env` file in the root of your project with your **GeoDB RapidAPI** and **OpenWeather API** keys:

```bash
# .env
REACT_APP_GEO_DB_API_KEY=your-geo-db-api-key
REACT_APP_OPENWEATHER_API_KEY=your-openweather-api-key
```

Start the development server:

```bash
npm start
# OR
yarn start
```

This will start the application and you can view it in your browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application:

```bash
npm run build
# OR
yarn build
```

This will generate optimized static files in the `dist/` folder, which can be deployed to any hosting service.

## 🧩 Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GeoDB RapidAPI**: Used to search for city data.
- **OpenWeather API**: Used to fetch weather data for cities.
- **Vite**: Fast build tool for React apps.

## ⚙️ API Setup

### GeoDB RapidAPI
You can obtain an API key for GeoDB by creating an account at [RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities).

### OpenWeather API
You can obtain an API key for OpenWeather by creating an account at [OpenWeather](https://home.openweathermap.org/users/sign_up).

### How to Add API Keys:
1. Create a `.env` file in the root of the project.
2. Add your GeoDB and OpenWeather API keys as shown below:
```bash
REACT_APP_GEO_DB_API_KEY=your-geo-db-api-key
REACT_APP_OPENWEATHER_API_KEY=your-openweather-api-key
```

3. The application will now be able to fetch weather data based on city searches.

### Project Roadmap

```diff
+ MVP : Search bar creation with the GeoDB API
+ MVP : Display of the current weather with the OpenWeather API
+ MVP : Display of the 4-day weather forecast with the OpenWeather API
- MVP : Adjust the design with Tailwind CSS
- FEATURE : Display of the air quality data to the weather display with the OpenWeather API
- FEATURE : Display of hourly weather forecast for the next 24h with the OpenWeather API
- FEATURE : Display of a background image according to the weather
```

## 🌐 Live Demo

You can view the live version of this weather app at: [https://weather.](https://your-demo-link.com)

## 📬 Contact

- **Email**: [lucas.illiano@hotmail.com](mailto:lucas.illiano@hotmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/lucas-illiano/](https://www.linkedin.com/in/lucas-illiano/)
- **GitHub**: [https://github.com/elviajero971/](https://github.com/elviajero971/)

Feel free to reach out if you have any questions or want to collaborate on a project!
