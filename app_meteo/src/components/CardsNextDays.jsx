import {Col } from "react-bootstrap"
import '../assets/css/CardCity.css';

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
            <Col xs={12} md={6}  xl={4} xxl={3} id='col-nextdays' className="d-flex justify-content-center align-items-center px-2">
            <div>
            <img width='140px' className="ms-0" src={`./src/assets/icons/${nextDay.weather[0].icon}.png`} />
            </div>
            <div>
            <div>
            <h5 className="m-0">{trasformaData(nextDay.dt_txt)}</h5> 
            <h4 className="m-0">{nextDay.dt_txt.slice(11, 16)}</h4> 
            </div>
            <div >
            <h3>{nextDay.main.temp.toFixed(0)}°</h3>
            </div>
            </div>
            </Col>
      
            </>
    )
}
export default CardsNextDays