export const SET_CITY = 'SET_CITY'

export const setCity = (data) => {
    
    return {
        type: SET_CITY,
        payload: data
    }
}
//questa action servirà per valorizzare lo stato di city.