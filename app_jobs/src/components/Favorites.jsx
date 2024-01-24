import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.list)

    const navigate = useNavigate();

    return (
        <Container style={{marginTop:'10vh'}}>
               <h1 className="text-center mt-5">ANNUNCI PREFERITI</h1>
            <Row className="mt-5" >
                
                        {favorites.length > 0 ? (
                            favorites.map((fav, index) => (
                            <Col xs={12} className="p-3 my-3" key={index} style={{ border: '2px solid white', borderRadius: 4, backgroundColor: 'rgb(255, 255, 255, 0.200)' }}>
                                <Button variant="danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: fav })}>Delete</Button>
                               <span className="ms-3"> {fav} </span>
                            </Col>
                        ))
                        ) : (
                            <Col xs={12} className="d-flex justify-content-center"><h2>Non hai ancora annunci preferiti</h2></Col>
                        )}
                 
            </Row>
        </Container>
    )

}

export default Favorites;