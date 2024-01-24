import { SET_JOBS, SET_JOBS_SEARCH } from "../actions/setJobs"

const initialState = {
    jobs: [],
    jobsSearched : []
}


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
        
        default:
            return state
    }
}


export default setJobsReducer;