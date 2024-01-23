import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Graphic = () => {
    const nextDays = useSelector((state) => state.nextDays)
    const day= nextDays.nextDays
    const data = [
        {name:day.list[0].dt_txt.slice(0,10) , temperature: day.list[0].main.temp }, 
        {name:day.list[7].dt_txt.slice(0,10)  , temperature: day.list[7].main.temp  }, 
        {name:day.list[15].dt_txt.slice(0,10)  , temperature: day.list[15].main.temp  }, 
        {name:day.list[23].dt_txt.slice(0,10)  , temperature: day.list[23].main.temp  },
    ];

    return(
      <>
      
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 50, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temperature" stroke="rgb(0, 8, 255)" />
    <CartesianGrid stroke="rgba(74, 0, 134, 0.85)" strokeDasharray="3 3" />
    <XAxis  stroke="rgb(0, 0,0)" dataKey="name" />
    <YAxis stroke="rgb(0, 0,0)" dataKey="temperature" />
    <Tooltip />
  </LineChart>
 
  </>
 )
}
export default Graphic