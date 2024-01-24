import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../actions/setQuery";
import { setJobs } from "../actions/setJobs";

const MainSearch = () => {
  const query = useSelector((state) => state.query.query)
  const jobs = useSelector((state) => state.jobs.jobs)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    dispatch(setQuery(e.target.value));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
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
          <Button variant="outline-primary" onClick={() => navigate("/favorites")}>Vai ai preferiti</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
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
