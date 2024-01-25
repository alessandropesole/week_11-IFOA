import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function MyNavbar() {
    const navigate = useNavigate()
  // grazie all'hook di react-router-dom useNavigate() affido ai link della navbar il collegamento o alla pagina home ('/') o alla pagina preferiti (/favorites) 
  return (
    <Navbar expand="lg" className="bg-primary" style={{position:'fixed', top:'0', width:'100%'}} >
      <Container>
        <Navbar.Brand className='text-light' href="#" onClick={()=> navigate('/')}>FindJob</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between">
          <Nav className="me-auto">
            <Nav.Link  className='text-light' href="#"  onClick={()=> navigate('/')}>Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link  className='text-light' href="#"  onClick={()=> navigate('/favorites')}><b>Go to Favorites</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;