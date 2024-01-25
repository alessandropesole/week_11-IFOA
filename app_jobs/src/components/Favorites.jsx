import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";


const Favorites = () => {
    
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.list) //richiamo lo stato di favorites usando l'hook di redux useSelector
    return (
        <Container style={{marginTop:'10vh'}}>
               <h1 className="text-center mt-5">FAVORITE JOB ADS</h1>
            <Row className="mt-5" >

                 {favorites.length > 0 ? ( //utilizzando il ternary operator uso come condizione: se i dati sono presenti ( e se quindi la lunghezza dell'array contenente i dati è > di 0) allora mappami i dati assegnando ad essi il componente Col(riga 17), altrimenti ritorna il messaggio di assenza preferiti 
                 favorites.map((favorite, index) => (
                <Col xs={12} className="p-3 my-3" key={index} style={{ border: '2px solid white', borderRadius: 4, backgroundColor: 'rgb(255, 255, 255, 0.200)' }}>
                <Button variant="danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: favorite })}>Delete</Button> 
                <span className="ms-3"> {favorite} </span>
                </Col>
                ))
                 ) : (
                 <Col xs={12} className="d-flex justify-content-center"><h2>You have no favorite Ads yet</h2></Col>
                )}
                 
            </Row>
        </Container>
    )
 //nel dispatch a riga 19 specifico che il tipo di azione che favorite assumerà è REMOVE_FAVORITE (che serve a rimuovere dai preferiti l'elemento selezionato)
}

export default Favorites;