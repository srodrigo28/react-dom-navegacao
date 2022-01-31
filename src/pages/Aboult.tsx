import { Link, useSearchParams } from "react-router-dom"

export const Aboult = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    // http://localhost:3000/sobre/?filter=bo
    //http://localhost:3000/sobre/?filter=bo&order=desc

    const setOrder = (order: 'asc' | 'desc') =>{
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return(
        <div>
            Filtro: {searchParams.get('filter')}<br />
            Orderm: {searchParams.get('order')}
            <hr />
            <button onClick={()=>setOrder('asc')} >Asc</button> | | .  
            <button onClick={()=>setOrder('desc')}>Desc</button>
            <ul>
                <li><Link to="/sobre/bonieky">Bonieky</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>
            </ul>
        </div>
    )
}