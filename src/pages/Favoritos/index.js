import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'

function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);

    useEffect (() => {
        //acessando meu local storage pela chave
        const minhaLista = localStorage.getItem("@primefix")

        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;