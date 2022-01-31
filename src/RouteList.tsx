import { useRoutes } from 'react-router-dom';
import { Aboult } from './pages/Aboult';
import { AboultItem } from './pages/AboultItem';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { RequereAuth } from './RequereAuth';

export const RouteList = () =>{

    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/sobre', element: <RequereAuth><Aboult/></RequereAuth>},
        { path: '/sobre/:slug', element: <AboultItem />},
        { path: '*', element: <NotFound /> }
    ]);

    /*** Rotas 1 
     import {Routes, Route} from 'react-router-dom';
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={
            <RequereAuth><Aboult/></RequereAuth>}
            />
            <Route path="/sobre/:slug" element={<AboultItem/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
    */
}