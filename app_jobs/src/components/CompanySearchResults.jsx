import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJobsSearch } from "../actions/setJobs";

const CompanySearchResults = () => {
  // utilizzando l'hook di redux useSelector assegno alla const jobSearched lo stato storato che conterrà quelli che saranno gli annunci di lavoro di una specifica azienda 
  const jobSearched = useSelector((state) => state.jobs.jobsSearched);

  // assegno alla costante dispatch l'hook di redux useDispatch che ha lo scopo di inviare azioni al reducer il quale innescherà quindi la modifica dello stato selezionato
  const dispatch = useDispatch()

  //viene assegnata alla costante params l'hook di react-router useParams()
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  //getJobs() è la fetch per richiamare i dati relativi gli annunci di lavoro pubblicati da una specifica azienda/company
  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company); // useParams() prende il value di company che comparirà nell'endpoint dopo l'input (click) dell'utente sul link della azienda (nella MainSearch)
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsSearch(data)); //assegno, utilizzando dispatch, i dati richiamati dalla fetch allo stato di jobSearched 
        //console.log(jobSearched);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error); //classico catch che subentra nel momento in cui il try non va a buon fine
    }
  };

  //nel return viene eseguito un map che assegna ad ognuno degli oggetti richiamati dalla fetch il render del componente Job raffigurante i dati di riferimento
  // trattandosi di un map deve essere dichiarata anche una key che in questo caso ha come valore univoco l'id di ciascun oggetto richiamato dalla fetch 
  return (
    <Container style={{marginTop:'6vh'}}>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobSearched.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
 
};

export default CompanySearchResults;
