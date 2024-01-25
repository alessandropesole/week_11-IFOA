export const SET_CITY_DATA = 'SET_CITY_DATA'

export const setCityData = (data) => {
    
    return {
        type: SET_CITY_DATA,
        payload: data
    }
}

//questa action verrà utilizzata per ottenere come payload i dati relativi alla prima fetch riguardante le previsioni di oggi sulla città cercata