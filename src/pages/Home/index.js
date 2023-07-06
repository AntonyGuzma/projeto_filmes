import {useEffect, useState} from 'react'
import api from '../../services/api';

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

            console.log(response.data)

        }

        loadFilms();

    }, [])

    return(
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}

export default Home;