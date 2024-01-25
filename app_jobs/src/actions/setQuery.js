export const SET_QUERY = 'SET_QUERY';

export const setQuery = (data) => {
    return {
        type: SET_QUERY,
        payload: data
    }
}
//azione che avrà come payload il value dell'input text inserito dall'utente nella ricerca 