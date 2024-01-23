export const SET_QUERY = 'SET_QUERY';

export const setQuery = (data) => {
    return {
        type: SET_QUERY,
        payload: data
    }
}