import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'
import { useState } from 'react'

//Job sarà il singolo componente che passerò al map dell'array contenente i dati relativi al lavoro cercato (all'interno del componente MainSearch)
const Job = ({ data }) => {
  const favorites = useSelector((state)=> state.favorites.list) //con useSelector affido alla costante favorites lo stato degli annunci salvati come preferiti
  const [isButtonDisabled, isButtonSet] = useState(false) //costante dichiarata come stato locale in quanto servirà per disabilitare il bottone Add to favorite una volta cliccato
  const dispatch = useDispatch() //affido alla costante dispatch l'hook di redux useDispatch()
  
  function isFavoriteFunction() { //in questa funzione che triggero al click del bottone Add to Favorites pongo come condizione: se l'elemento selezione non è ancora presente nell'array dei favoriti allora inseriscilo e disabilita il bottone Add to favorites
    if (!favorites.includes(data.title)) {
  dispatch(addFavorite(data.title))
   isButtonSet(true)
  } 
}

  return (

      <Row
        className="mx-0 mt-3 p-3 d-flex align-items-center"
        style={{ border: '2px solid white', borderRadius: 4, backgroundColor: 'rgb(255, 255, 255, 0.200)' }}
      >
        <Col xs={4}>
          <Button variant="success" disabled={isButtonDisabled} onClick={() => isFavoriteFunction()}>
             {favorites.includes(data.title) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg>
 :
 'Add to favorite' }
            </Button>
            </Col>
            <Col xs={4}>
              Company: <Link to={`/${data.company_name}`} className='text-white' style={{cursor:'pointer'}}>{data.company_name}</Link>
        </Col>
        <Col xs={4}>
         Go to Announce: <a href={data.url} target="_blank" rel="noreferrer" className='text-white' style={{cursor:'pointer'}}>
            {data.title}
          </a>
        </Col>
      </Row>
  )
  //col ternary operator affidato al bottone a riga 29 dico che se l'elemento non è ancora contenuto nell'array dei preferiti allora mostra nel bottone Add to favorites altrimenti disabilitalo e mostra icona check
}

export default Job
