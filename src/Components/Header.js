import React from 'react'
import { useWeather } from '../Context/WeatherContext'

function Header() {
    const {city, setCity} = useWeather()
  return (
    <div>
        <select name="" id="" value={city} onChange={ (e) => setCity(e.target.value)}>
            <option value="Bursa">Bursa</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Balıkesir">Balıkesir</option>
            <option value="Burdur">Burdur</option>
            <option value="Kayseri">Kayseri</option>
            <option value="Nevşehir">Nevşehir</option>
            <option value="Samsun">Samsun</option>
            <option value="Trabzon">Trabzon</option>
            <option value="Adana">Adana</option>
            <option value="İzmir">İzmir</option>
        </select>
    </div>
  )
}

export default Header