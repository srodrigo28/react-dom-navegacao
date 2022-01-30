import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Aboult } from './pages/Aboult';
import { AboutPedro } from './pages/AboultPedro';
import { AboutBonieky } from './pages/AboutBonieky';
import { Home } from './pages/Home';

function App() {

  
 
  return (
   <div className=''>
     <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Aboult/>} />
          <Route path="/sobre/bonieky" element={<AboutBonieky/>} />
          <Route path="/sobre/pedro" element={<AboutPedro/>} />
        </Routes>
     </div>

     <hr />

     <footer>
       Todos direitos reservados.
     </footer>

   </div>

  );
}

export default App;
