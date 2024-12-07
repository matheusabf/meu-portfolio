import './index.css';

import Links from '../../components/Links'
function Home (){
    return(
        <div className="container">
            <section className="secao">
                <div className="col-1">
                    <span>👋 Olá Mundo!</span>
                    <h1>Eu sou o Matheus ☕</h1> 
                    <p><mark> Full-Stack </mark> - <mark> Developer </mark></p>
                    <Links/>
                </div>    
                <div className="col-2">
                    <img className="perfil" src="https://github.com/matheusabf/meu-portfolio/assets/48792317/bd313bc1-eda1-4c14-ab75-83ca9d47671d" alt="imagem de perfil"></img>
                </div>
                <div className="col-3">
                    <span><a href="https://github.com/matheusabf/meu-portfolio/files/14450162/Curriculo_Matheus.pdf">Baixar CV <i class="fas fa-arrow-down"></i></a></span><br/>
                    <span className="btnconversa"><a href="https://api.whatsapp.com/send?phone=5511975507168&text=Ol%C3%A1%20Matheus,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i> VAMOS CONVERSAR</a></span>
                </div>  
            </section>
        </div>
    )
}

export default Home;
