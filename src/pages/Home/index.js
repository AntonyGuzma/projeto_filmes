import {useEffect, useState} from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'

// /movie/now playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR


function Home(){

    const [filmes, setFilmes] = useState([]);

    //toda vez que a aplicação abrir ele vai chamaro UE
    useEffect(()=>{

        async function loadFilms(){
            //await espera a requisição para prosseguir
            const response = await api.get('movie/now_playing', {params:{
                api_key: '28fc232cc001c31e8a031f419d0a14ca', 
                language: 'pt-Br',
                page: 1,
             }
            })

           // console.log(response.data.results.slice(0, 10));

           setFilmes(response.data.results.slice(0, 10));
        }

        loadFilms();

    }, [])

    return(
        <div className='container'>
            <div className='lista_filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;