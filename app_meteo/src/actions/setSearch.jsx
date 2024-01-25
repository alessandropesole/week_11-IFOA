export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (data) => {
    return {
        type : SET_SEARCH,
        payload : data
    }
}
//questa action servirà a delineare globalmente lo stato di search che verrà valorizzato dallo useDispatch richiamato dalla funzione onChange nel componente Main.jsx