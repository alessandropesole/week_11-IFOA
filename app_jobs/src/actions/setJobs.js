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

//queste azioni verranno utilizzate per ottenere come payload i dati delle fetch relative rispettivamente al lavoro cercato nell'input text dall'utente e 
// quella relativa alle offerte di una specifica company/azienda