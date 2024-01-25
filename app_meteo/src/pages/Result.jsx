import { useLocation } from "react-router-dom";
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../actions/setCity";


//pagina dei risultati meteo per città cercata
const Result = () => {
    const location = useLocation(); //assegno alla costante location l'hook di react-router-dom 
    const searchCity = new URLSearchParams(location.search).get('searchedCity'); //con URLSearchParams assegno alla const searchCity la parte di URL che conterrà come stringa la città cercata
    const dispatch = useDispatch();
    
    dispatch(setCity(searchCity)) //usando l'hook di redux useDispatch cambio lo stato globale di city assegnandole il nome della città cercata (city servirà nel componente CardCity.jsx figlio di Result.jsx per impostare l'endpoint della fetch)

    
    return (
        <>
        <div style={{margin:'5vh 0'}}className="d-flex justify-content-center">
           <CardCity> </CardCity>
           </div>
        </>
    )
    
}

export default Result