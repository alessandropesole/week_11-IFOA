export const SET_NEXT_DAYS =  'SET_NEXT_DAYS'

export const setNextDays = (data) => {
    return {
        type: SET_NEXT_DAYS,
        payload: data
    }
}
//questa action verrà utilizzata per ottenere come payload i dati relativi alla seconda fetch riguardante le previsioni dei prossimi giorni