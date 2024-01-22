import { useState } from 'react';
import '../assets/css/Main.css';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap';


const Main = () => {
    const [search, setSearch] = useState('');
    const [cityData, setCityData] = useState(null);
    const navigate = useNavigate();
  
    const handleSearch = () => {
      setCityData(search);
      navigate(`/searchresults?searchedCity=${search}`);
    };
    return (
        <>
          <Container id="home" className='d-flex align-items-center'>
            <div>
              <input type='text' className='me-2' name="search" id="input-text" placeholder="Cerca una città..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <Button id="search-button" onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg></Button>
            </div>
          </Container>
        </>
      )
    
    }
    
    export default Main