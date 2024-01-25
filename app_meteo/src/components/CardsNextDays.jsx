import { Col } from "react-bootstrap"
import '../assets/css/CardCity.css';

//componente che uso per popolare il map dei dati ottenuti dalla fetch delle previsioni sui prossimi giorni
const CardsNextDays = ({ nextDay }) => {

    function trasformaData(data) { //funzione per visualizzare correttamente la data 
        let newDate = data.slice(0, 10) //con slice estraggo la parte di stringa contenente AAAA-MM-GG
        let componentiData = newDate.split('-'); //con split ottengo un array in cui gli indici conterranno l'AAAA il MM e il GG 
        let giorno = componentiData[2]; //assegno alle costanti giorno e mese gli indici contenenti il giorno e il mese
        let mese = componentiData[1]; 
        let dataConvertita = giorno + '/' + mese; //la mia data convertita sarà in formato GG/MM
        return dataConvertita;
    }
    //la prop nextday viene valorizzata nel componente CardCity 
    return (
        <>
            <Col xs={12} md={6} xl={4} xxl={3} id='col-nextdays' className="d-flex justify-content-center align-items-center px-2">
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