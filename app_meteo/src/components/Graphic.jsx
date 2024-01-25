import { useSelector } from 'react-redux';
import React, { PureComponent } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../assets/css/CardCity.css';


const Graphic = () => {
  const nextDays = useSelector((state) => state.nextDays) //assegno alla const nextDays lo stato storato di nextDays
  const day = nextDays.nextDays //alla const day è assegnato il livello di stato di nextDays in cui è presente l'array di dati richiamato dalla fetch forecast dei prossimi giorni 
  const data = [ //affido al grafico i dati relativi alle previsioni dei prossimi tre giorni
    { name: day.list[0].dt_txt.slice(0, 10), temperature: day.list[0].main.temp }, 
    { name: day.list[7].dt_txt.slice(0, 10), temperature: day.list[7].main.temp },
    { name: day.list[15].dt_txt.slice(0, 10), temperature: day.list[15].main.temp },
    { name: day.list[23].dt_txt.slice(0, 10), temperature: day.list[23].main.temp },
  ];

  return (
    <>
      <ResponsiveContainer id="grafico" width={750} height={350}>
        <AreaChart data={data} margin={{ top: 5, right: 50, bottom: 5, left: 0 }}>
          <Area type="monotone" dataKey="temperature" stroke="rgb(0, 8, 255)" fill="rgb(240, 140, 0, 0.638)" />
          <CartesianGrid stroke="rgba(74, 0, 134, 0.85)" strokeDasharray="3 3" />
          <XAxis stroke="rgb(0, 0,0)" dataKey="name" style={{ fontSize: '1.1rem' }} />
          <YAxis stroke="rgb(0, 0,0)" dataKey="temperature" style={{ fontSize: '1.1rem' }} />
        
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
export default Graphic