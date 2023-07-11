import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api'; 

import '../Filme/filme-info.css';

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});

    useEffect(()=>{
        //requisitando da api o ID pego
        async function loadFilme(){
            await api.get(`/movie/${id}`,
            {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca', 
                    language: 'pt-Br'
                }
            })
            .then((response)=>{
                setFilme(response.data);
            })
            .catch(()=>{
                //tratamento para quando a pagina do filme não é encontrada
                console.error('Filme Não Encontrado');
                navigate("/",  {replace: true});
                return;
            })
        }

        loadFilme();
    
        //dependencia do useEffect
    }, [navigate, id])

    function salvarfilme(){
        const minhaLista = localStorage.getItem("@primefix");

        //json para converter em String 
        let filmeSalvos = JSON.parse(minhaLista) || [];
        
        //função do JS que verifica se na lista existe um item repetido pelo menos
        const hasfilmes = filmeSalvos.some((filmeSalvo) =>filmeSalvo.id === filme.id) ;

        if(hasfilmes){
            alert('Esse Filme já está na lista')
        }else{
            filmeSalvos.push(filme);
            localStorage.setItem("@primefix", JSON.stringify(filmeSalvos));
            alert("Filme Salvo COm Sucesso")
        }
    }

    return(
        <div className="filme-info">
             <h1>{filme.title}</h1>
             <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avalicação: {filme.vote_average} / 10</strong>

            <div className="area-button">
                <button onClick={salvarfilme}>Salvar</button>
                <button><a target="blank" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
            </div>
        </div>
    )
}
     
export default Filme;