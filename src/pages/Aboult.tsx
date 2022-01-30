import { Link } from "react-router-dom"

export const Aboult = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/sobre/bonieky">Bonieky</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>
            </ul>
        </div>
    )
}