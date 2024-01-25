import { Col, Container, Row } from "react-bootstrap"
import {useEffect } from 'react'
import '../assets/css/CardCity.css';
import Graphic from "./Graphic";
import { useDispatch, useSelector } from 'react-redux';
import { setNextDays } from '../actions/setNextDays'
import CardsNextDays from "./CardsNextDays";
import { setCityData } from "../actions/setCityData";



const CardCity = () => { 
  // nelle righe 14-15-16 assegno alle costanti le porzioni di stringa e la mia key che mi serviranno per effettuare correttamente le due fetch 
  const URLCityFetch = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const URLForecastFetch = 'https://api.openweathermap.org/data/2.5/forecast?q='
  const key = '&appid=25e1b8a92164beae4d571e17a214d5f2&units=metric';
  const nextDays = useSelector((state) => state.nextDays); // mi richiamo lo stato 'globale' di nextDays 
  const cityData = useSelector((state) => state.cityData);// mi richiamo lo stato 'globale' di cityData 
  const city = useSelector((state) => state.city.search); // mi richiamo lo stato 'globale' di city che avrà per value il nome della città cercata (come definito nel componente Result.jsx)
  const dispatch = useDispatch(); //assegno alla const dispatch l'hook di redux useDispatch()

  //FETCH PREVISIONI DI OGGI CITTA' CERCATA
  //come visibile a riga 28 l'url della fetch avrà city che viene iniettato nell'endpoint a livello della query => 'weather?q=' + {city}
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const resp = await fetch(URLCityFetch + city + key);
          if (resp.ok) {
            const data = await resp.json();
            dispatch(setCityData(data)); //assegno allo stato di cityData i dati richiamati dalla fetch  
          
          } else {
            console.error('Error in the HTTP request');
          }
        }
      } catch (error) {
        console.error('Error in the HTTP request:', error);
      }
    };

    fetchData();
  }, [city]); //utilizzo come dipendenza di useEffect city => al variare della query relativa alla città cercata verrà chiamata nuovamente la fetch con i dati relativi alla nuova ricerca



  // FETCH FORECAST PREVISIONI PROSSIMI GIORNI

  useEffect(() => {
    const nextDaysFetch = async () => {
      try {
        const res = await fetch(URLForecastFetch + city + key)
        if (res.ok) {
          const data = await res.json();
          dispatch(setNextDays(data)); //assegno allo stato di nextDays i dati richiamati dalla fetch 
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    nextDaysFetch();
  }, [city]); // anche in questo caso utilizzo city come dipendenza di useEffect



 //popolo il componente
 /*a riga 121 mappo i dati della fetch relativa alle previsioni dei giorni seguenti utilizzando il componente CardsNextDays.jsx
 utilizzo come key nel map l'id univoco di ciascun oggetto presente nella fetch*/
  return (
    <>
      <div id="div-card">
        <div id="div-head">
          <Container className="d-flex flex-column mt-5  align-items-center" >
            <Row className="mb-3">
              <Col>
                <h2>Forecast for today:</h2>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex colonna ">
                <h1>{cityData.cityData.name}, {cityData.cityData.sys.country}</h1>
                <h1 className="ms-4">{cityData.cityData.main.temp.toFixed(0)}°</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center ">
                <h3 style={{ marginTop: '15px' }}>{cityData.cityData.weather[0].main}</h3>
                <img style={{ width: '100px', marginLeft: '10px' }} src={`./src/assets/icons/${cityData.cityData.weather[0].icon}.png`} />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column align-items-center colonna">
                <h5>Min: {cityData.cityData.main.temp_min.toFixed(0)}° / Max: {cityData.cityData.main.temp_max.toFixed(0)}° </h5>
                <h5>Feels like: {cityData.cityData.main.feels_like.toFixed(0)}°</h5>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center colonna">
                <h5>Umidity: {cityData.cityData.main.humidity.toFixed(0)}%</h5>

              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column colonna align-items-center">
                <h5>Pressure: {cityData.cityData.main.pressure} hPa </h5>
                <h5>Wind: {cityData.cityData.wind.speed} Km/h</h5>
              </Col>
            </Row>
          </Container>
          <div id="container-grafico">
            <Container className="d-flex flex-column align-items-center mt-5">
              <h3 className="h3">Temperatures over the next 3 days: </h3>
              <Graphic />
            </Container>
          </div>
        </div>
        <Row className="align-items-center px-3 " style={{ marginTop: '10vh' }}>
          <h3 id="forecast-title" className="h3" >Forecast for the next hours: </h3>
          {nextDays.nextDays.list.map((nextday) => (
            <CardsNextDays nextDay={nextday} key={nextday.dt_txt} />
          ))}
        </Row>

      </div>

    </>
  )
}
export default CardCity

