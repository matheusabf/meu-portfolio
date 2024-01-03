import "./index.css"
import Formulario from "../../components/Formulario" 
import Contatos from "../../components/Contato"
function Contato (){
    return(
        <div className ="container">
            <div className="formulario">
                
                    <h1>Me envie uma <mark>mensagem! </mark></h1>
                    <Formulario />
            </div>
            <div className="contato">
                    <Contatos />
            </div>
        </div>
    )
}

export default Contato;