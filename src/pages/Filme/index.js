import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api'; 

import '../Filme/filme-info.css';

function Filme(){

    const {id} = useParams();
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
                console.error('Filme Não Encontrado');
            })
        }

        loadFilme();

    })

    return(
        <div className="filme-info">
             <h1>{filme.title}</h1>
             <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avalicação: {filme.vote_average} / 10</strong>

            <div className="area-button">
                <button>Salvar</button>
                <button><a href="#">Trailer</a></button>
            </div>
        </div>
    )
}
     
export default Filme;