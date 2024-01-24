export const SET_JOBS = 'SET_JOBS';
export const SET_JOBS_SEARCH = 'SET_JOBS_SEARCH';

export const setJobs = (newJob) => {
    return {
        type: SET_JOBS,
        payload: newJob
    };
};

export const setJobsSearch = (jobSearched) => {
    return {
        type: SET_JOBS_SEARCH,
        payload: jobSearched
    }
} 

