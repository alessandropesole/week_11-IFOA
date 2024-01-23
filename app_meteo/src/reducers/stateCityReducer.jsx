import { SET_CITY_DATA } from "../actions/setCityData";

const initialState = {
    
    cityData: {
        "coord": {
            "lon": 0,
            "lat": 0
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "base": "",
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "humidity": 0
        },
        "visibility": 0,
        "wind": {
            "speed": 0,
            "deg": 0
        },
        "clouds": {
            "all": 0
        },
        "dt": 0,
        "sys": {
            "type": 0,
            "id": 0,
            "country": "",
            "sunrise": 0,
            "sunset": 0
        },
        "timezone": 0,
        "id": 0,
        "name": "",
        "cod": 0
    }
}

const stateCityReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_CITY_DATA:
            return{
                ...state,
                cityData: action.payload,
            };
            default:
                 return state;
    }
}
export default stateCityReducer