export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const addFavorite = (item) => {
    return {
        type: ADD_FAVORITE,
        payload: item
    }
}

export const removeFavorite = (item) => {
    return {
        type: REMOVE_FAVORITE,
        payload: item
    }
}

//queste azioni verranno utilizzate per aggiungere o eliminare un elemento dall'array dei preferiti e avranno rispettamente come type ADD_FAVORITE E REMOVE_FAVORITE 
// e come payload il valore ricevuto (elemento da eliminare  o aggiungere)