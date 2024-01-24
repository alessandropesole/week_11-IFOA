import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'

const Job = ({ data }) => {

  const dispatch = useDispatch()

  return (
      <Row
        className="mx-0 mt-3 p-3 d-flex align-items-center"
        style={{ border: '2px solid white', borderRadius: 4, backgroundColor: 'rgb(255, 255, 255, 0.200)'  }}
      >
        <Col xs={4}>
          <Button 
            variant="success"
            onClick={() => dispatch(addFavorite(data.title))}
          >
            Add to favorite
            </Button>
            </Col>
            <Col xs={4}>
          <Link to={`/${data.company_name}`} className='text-white' style={{cursor:'pointer'}}>{data.company_name}</Link>
        </Col>
        <Col xs={4}>
          <a href={data.url} target="_blank" rel="noreferrer" className='text-white' style={{cursor:'pointer'}}>
            {data.title}
          </a>
        </Col>
      </Row>
  )
}

export default Job
