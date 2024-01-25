import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../actions/setQuery";
import { setJobs } from "../actions/setJobs";

const MainSearch = () => {
  const query = useSelector((state) => state.query.query) //utilizzando useSelector affido alla costante query lo stato storato che avrà lo scopo di assumere il value del testo inserito nella ricerca dall'utente
  const jobs = useSelector((state) => state.jobs.jobs) //jobs invece sarà lo stato globale che verrà valorizzato con i dati provenienti dalla fetch "scremati" dalla ricerca dell'utente
  const dispatch = useDispatch() //assegno alla costante dispatch l'hook di redux useDispatch che ha lo scopo di inviare azioni al reducer il quale innescherà la modifica dello stato selezionato
  

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // con questa funzione viene assegnato allo stato di query il value dell'input text compilato dall'utente come osservabile nel return 
  const handleChange = e => {
    dispatch(setQuery(e.target.value));
  };


  //fetch per richiamare i dati selezionati in base alla ricerca dell'utente nell'inpu text
  const handleSubmit = async e => { 
    e.preventDefault(); // la chiamata "standard" e.preventDefault() evita il ricaricamento automatico della pagina dovuto al comportamento dell'evento

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data)); //con dispatch assegno allo stato di jobs i dati ottenuti dalla fetch 
        console.log(jobs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{marginTop:'6vh'}}>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-2 text-center"><b>REMOTE JOBS SEARCH</b></h1>
          
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
