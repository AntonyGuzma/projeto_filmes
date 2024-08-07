import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'
import { toast } from 'react-toastify';

function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);

    useEffect (() => {
        //acessando meu local storage pela chave
        const minhaLista = localStorage.getItem("@primefix")

        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

function excluirFilme(id){
    //filtrar todos os filmes da lista 
    let filtroFilmes = filmes.filter((item) =>{
        return (item.id !== id)
    })    

    setFilmes(filtroFilmes); 

    localStorage.setItem("@primefix", JSON.stringify(filtroFilmes));
    toast.success("Filme Removido Com Sucesso")
}

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {/* Condição dentro do html para verificar se tem ou não filme na lista */}
            {filmes.length === 0 && <span>Você não possui nenhum Filme Salvo :(</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() =>excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;