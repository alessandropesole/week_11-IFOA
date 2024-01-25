import { ADD_FAVORITE, REMOVE_FAVORITE} from "../actions/favoriteActions"


//stato iniziale del reducer, ossia un array vuoto
const initialState = {
    list: [],
    
}

//questo reducer servirà ad inviare il payload delle favoriteActions allo store
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE: //in questo caso ritornerà la  lista dei preferiti più il nuovo elemento aggiunto nei preferiti
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case REMOVE_FAVORITE: //in questo caso ho affidato alla costante updatedList l'intera lista dei preferiti e in seguito, utilizzando il metodo splice, ho eliminato  dalla lista  l'elemento triggerato dal bottone Delete 
                const updatedList = [...state.list];
                updatedList.splice(action.payload, 1); 
                return {
                    ...state,
                    list: updatedList
            }

        default:
            return state
    }
}


export default favoritesReducer;