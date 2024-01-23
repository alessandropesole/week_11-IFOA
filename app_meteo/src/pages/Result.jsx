import { useLocation } from "react-router-dom";
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../actions/setCity";



const Result = () => {
    const location = useLocation();
    const searchCity = new URLSearchParams(location.search).get('searchedCity');
    const dispatch = useDispatch();
    
    dispatch(setCity(searchCity))

    
    return (
        <>
        <div style={{margin:'5vh 0'}}className="d-flex justify-content-center">
           <CardCity> </CardCity>
           </div>
        </>
    )
    
}

export default Result