import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Aboult } from './pages/Aboult';
import { AboutPedro } from './pages/AboultPedro';
import { AboutBonieky } from './pages/AboutBonieky';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {

  
 
  return (
   <div className='p-5 bg-indigo-600 text-white container'>
     <header>
        <h1>Titulo do site</h1>
        <hr />
     </header>
     <div className='py-4'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Aboult/>} />
          <Route path="/sobre/bonieky" element={<AboutBonieky/>} />
          <Route path="/sobre/pedro" element={<AboutPedro/>} />
          <Route path="*" element={<NotFound/>} />
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
