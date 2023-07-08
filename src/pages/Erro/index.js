import { Link } from "react-router-dom";
import './erro.css'

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina Não Encontrada!</h2>
            <Link to='/'>Veja Todos Filmes</Link>
        </div>
    )
}

export default Erro;