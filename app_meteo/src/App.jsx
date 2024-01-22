import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {

  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
        <Route>
        <Route path ='/' element= {<Home />} />
        <Route path = '/searchresults' element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

