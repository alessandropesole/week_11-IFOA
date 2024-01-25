import { SET_JOBS, SET_JOBS_SEARCH } from "../actions/setJobs"

const initialState = { //il valore iniziale dello stato sarà array vuoto
    jobs: [],
    jobsSearched : []
}

//sia per l'azione relativa ai lavori cercati che a quella degli annunci offerti da una specifica azienda il reducer ritornerà come stato il nuovo payload della action 
const setJobsReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_JOBS:
            return {
                ...state,
                jobs: action.payload,
            }
        case SET_JOBS_SEARCH: 
            return {
                ...state,
                jobsSearched: action.payload,
            }    
        
        default: //default obbligatorio in uno switch case che in questo caso ritorna lo stato iniziale di jobs e jobsSearched
            return state
    }
}


export default setJobsReducer;