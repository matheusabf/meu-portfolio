import './index.css'
import SobreMim from '../../components/Sobre';
import Experiencia from '../../components/Experiencia';
function Sobre (){
    return(
        <div className="container">
        <div className="containersobre">
            <div  className="sobre">
                <div className="titulosobre">
                    <h1>
                Sobre
                </h1>
                </div>
                <div className="sobreComponente">
                    <SobreMim />
                </div>
                
            </div>
            <div className="hrcomponente">
            <hr/>
            </div>
            <div  className="sobre">
                <div className="titulosobre">
                    <h1>Experiência</h1>
                </div>
                <div className="sobreComponente">
                    <Experiencia />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sobre;