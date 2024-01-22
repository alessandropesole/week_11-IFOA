import {Col,  Row } from "react-bootstrap"


const CardsNextDays = ({nextDay, trasformaData }) => {

    function trasformaData(data) {
        let newDate= data.slice(0,10)
        let componentiData = newDate.split('-');
        let giorno = componentiData[2];
        let mese = componentiData[1];
        let dataConvertita = giorno + '/' + mese;
        return dataConvertita;
      }

    return ( 
        <>
            <Row className="d-flex align-items-center mb-3">
            <Col>
            <img width='140px' className="ms-0" src={`./src/assets/icons/${nextDay.weather[0].icon}.png`} />
            </Col>
            <Col>
            <div>
            <h3 className=" ">{nextDay.main.temp.toFixed(0)}°</h3>
            </div>
            <div >
            <h5 className="m-0">{trasformaData(nextDay.dt_txt)}</h5> 
            <h5 className="m-0">{nextDay.dt_txt.slice(11, 16)}</h5> 
            </div>
            </Col>
            </Row>
      
            </>
    )
}
export default CardsNextDays