import { SET_JOBS } from "../actions/setJobs"

const initialState = {
    jobs: []
}


const setJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
        
        default:
            return state
    }
}


export default setJobsReducer;