import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Aboult } from './pages/Aboult';
import { AboultItem } from './pages/AboultItem';
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
          <Route path="/sobre/:slug" element={<AboultItem/>} />
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
