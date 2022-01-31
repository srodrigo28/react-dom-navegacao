import './App.css';
import './index.css';
import { RouteList } from './RouteList';

function App() {

  return (
   <div className='p-5 bg-indigo-600 text-white container'>
     <header>
        <h1>Titulo do site</h1>
        <hr />
     </header>
     <div className='py-4'>
       <RouteList />
     </div>

     <hr />

     <footer>
       Todos direitos reservados.
     </footer>

   </div>

  );
}

export default App;
