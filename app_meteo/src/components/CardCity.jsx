import { Col, Container, Row } from "react-bootstrap"
import {useState, useEffect} from 'react'
import '../assets/css/CardCity.css';
import Graphic from "./Graphic";
import { useDispatch, useSelector } from 'react-redux';
import {setNextDays} from '../actions/setNextDays'
import CardsNextDays from "./CardsNextDays";
import { setCityData } from "../actions/setCityData";


//PRIMA FETCH
const CardCity = () => {
    const URLCityFetch = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const URLForecastFetch = 'https://api.openweathermap.org/data/2.5/forecast?q='
    const key = '&appid=25e1b8a92164beae4d571e17a214d5f2&units=metric';
    const nextDays = useSelector((state) => state.nextDays);
    const cityData = useSelector((state) => state.cityData);
    const city = useSelector ((state) => state.city.search);
    const dispatch = useDispatch();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (city) {
            const resp = await fetch(URLCityFetch + city + key);
            if (resp.ok) {
              const data = await resp.json();
             dispatch(setCityData(data));
                //console.log(cityData.cityData);
            } else {
              console.error('Error in the HTTP request');
            }
          }
        } catch (error) {
          console.error('Error in the HTTP request:', error);
        }
      };
      
      fetchData();
    }, [city]);

   

    //SECONDA FETCH
   
    useEffect(() => {
    const nextDaysFetch = async () => {
        try {
            const res = await fetch(URLForecastFetch + city + key)
            if(res.ok){
            const data = await res.json();
            dispatch(setNextDays(data));
           //console.log(nextDays.nextDays.list);
        }
        }
        catch(error) {
            console.log(error);
        }
    }
    
  nextDaysFetch(); 
}, [city]);




    return (
        <>
        <div id="div-card">
        <Container className="d-flex flex-column align-items-center"  >
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
            <h3 style={{marginTop:'15px'}}>{cityData.cityData.weather[0].main}</h3>
            <img style={{width:'100px' , marginLeft:'10px'}} src={`./src/assets/icons/${cityData.cityData.weather[0].icon}.png`} />   
        </Col>
        </Row>
        
        <Row>
        <Col className="d-flex align-items-center colonna">
        
            <h5>Min: {cityData.cityData.main.temp_min.toFixed(0)}° / Max: {cityData.cityData.main.temp_max.toFixed(0)}°</h5>  
            <h5>Feels like: {cityData.cityData.main.feels_like.toFixed(0)}°</h5>
            <img style={{width:'35px', marginBottom:'15px'}} src="./src/assets/icons/termometer.png" /> 
        </Col>
        </Row>
        <Row>
            <Col className="d-flex align-items-center colonna">
            <h5>Umidity: {cityData.cityData.main.humidity.toFixed(0)}%</h5>   
            <img style={{width:'40px', marginBottom:'15px'}} src="./src/assets/icons/drop.png" /> 
            </Col>
        </Row>
        <Row>
        <Col className="d-flex colonna align-items-center">
            <h5>Pressure: {cityData.cityData.main.pressure} mbar / Wind: {cityData.cityData.wind.speed} Knots</h5>
            
            <img style={{width:'40px', marginBottom:'15px'}}src="./src/assets/icons/wind.png"/>
           
        </Col>
        </Row>
    </Container>        
    <Container className="d-flex flex-column align-items-center mt-5">
        <h3 className="h3">Temperatures over the next 3 days: </h3>
        <Graphic />
    </Container>
    <Container className="d-flex flex-column align-items-center" style={{marginTop:'10vh'}}>
    <h3  className="h3">Forecast for the next few days: </h3>
    {nextDays.nextDays.list.map((nextday)=> (
        <CardsNextDays nextDay={nextday} key={nextday.dt_txt} />
    ))}
    </Container>
    
    </div> 
    
    </>
    )
}
export default CardCity

