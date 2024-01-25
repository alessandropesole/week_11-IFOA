import '../assets/css/Main.css';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../actions/setSearch';

const Main = () => {
  const navigate = useNavigate(); //assegno alla costante navigate l'hook di react-router-dom useNavigate() 
  const dispatch = useDispatch(); //assegno alla costante dispatch l'hook di redux useDispatch() 
  const search = useSelector((state) => state.search.search); //tramite l'hook di redux useSelector assegno alla costante search lo stato di search
  

  const handleSearch = () => { //questa funzione che viene triggerata al click del search, una volta compilato l'input text, indirizzerà l'utente sulla pagina dei risultati meteo per la città cercata
    navigate(`/searchresults?searchedCity=${search}`);
  };
  //con dispatch (riga 29) assegno come nuovo stato di search il value dell'input text compilato dall'utente con la città da cercare 
  return (
    <>
      <Container id="home" className='d-flex align-items-center'>
        <div>
          <input
            type='text'
            className='me-2'
            name="search"
            id="input-text"
            placeholder="Cerca una città..."
            value={search}  
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <Button id="search-button" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Main