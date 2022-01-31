import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <div>
            Home
            <hr />
            <Link to = "/sobre">Sobre</Link>
        </div>
    )
}