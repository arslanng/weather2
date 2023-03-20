import React from "react";
import { useWeather } from "../Context/WeatherContext";

function Container() {
  const { weather, date } = useWeather();
  if (!weather){
      return (
          <div>Loading...</div>
          )
        }
        let timestampRise = weather.sys.sunrise
        let sunrise = new Date(timestampRise*1000).toLocaleTimeString()
        let timestampSet = weather.sys.sunset
        let sunset = new Date(timestampSet*1000).toLocaleTimeString()
  return (
    <div>
      {/* <p>{JSON.stringify(weather)}</p> */}
      <h3>{weather.name}</h3>
      <img
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt=""
      />
      <p>{weather.weather[0].description}</p>
      <p>
        Sıcaklık: {weather.main.temp}°C - Hissedilen: {weather.main.feels_like}°C <br />
        Basınç: {weather.main.pressure}hPa <br />
        Nem: {weather.main.humidity}% <br /><br/>
        Rüzgar Hızı: {weather.wind.speed}m/s - Esintiler: {weather.wind.gust}m/s<br/> 
        Görüş Mesafesi: {weather.visibility} metre <br/>
        {weather.clouds && `Bulut: ${weather.clouds.all}%` }<br/><br/>
        Gün Doğumu: {sunrise} <br />
        Gün Batımı: {sunset} <br />
        
        {weather.rain && <div>
          <br />
          {weather.rain["1h"] && `Son 1 saatteki yağmur miktarı: ${weather.rain["1h"]}mm`} <br />
          {weather.rain["3h"] && `Son 3 saatteki yağmur miktarı: ${weather.rain["3h"]}mm`}
        </div>  } 
        
        {weather.snow && <div>
          <br />
          {weather.snow["1h"] && `Son 1 saatteki kar miktarı: ${weather.snow["1h"]}mm`} <br />
          {weather.snow["3h"] && `Son 3 saatteki kar miktarı: ${weather.snow["3h"]}mm` }
        </div> }
      </p>
    </div>
  );
  }

export default Container;
