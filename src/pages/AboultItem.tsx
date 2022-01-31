import { useParams, useNavigate } from 'react-router-dom'

export const AboultItem = () =>{
    const params = useParams();
    const navigate = useNavigate();

    const voltar = () => {
        navigate(-1)
    }

    const sobre = () =>{
        navigate('/sobre')
    }

    const nomeDinamico = () =>{
        let name: string = 'ciclano';

        navigate(`/sobre/${name}`)
    }

    return(
        <div>
            
            <h1 className='p-4'>Página sobre Item - {params.slug}</h1>
            <br /><hr />
            <button className='bg-white text-black' onClick={voltar}>Voltar</button> | .
            <button className='bg-white text-black' onClick={sobre}>Sobre</button> | .
            <button className='bg-white text-black' onClick={nomeDinamico}>Dinamico</button>
        </div>
    )
}