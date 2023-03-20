import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState("Bursa")
    const [dateNow, setDateNow] = useState()

    useEffect(()=>{
        const key = "f07e374fa1929d25b9fc23b2669509e6"
        axios(`${process.env.REACT_APP_API_ENDPOINT}/data/2.5/weather?q=${city}&appid=${key}&lang=tr&units=metric`)
        .then((res)=> {
            setWeather(res.data)
            const date = new Date().getMinutes()
            setDateNow(date)
        })
        .then()
        .catch((e)=>console.log(e))
        
    },[city, dateNow])

    const values = {
        weather,
        setWeather,
        city,
        setCity,
    }
    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext)