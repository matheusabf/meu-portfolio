import './index.css';

import Links from '../../components/Links'
function Home (){
    return(
        <div className="container">
            <section className="secao">
                <div className="col-1">
                    <span>👋 Olá Mundo!</span>
                    <h1>Eu sou o Matheus ☕</h1> 
                    <p>Desenvolvedor <mark>Front-End</mark> - <mark>UX Designer</mark></p>
                    <Links/>
                </div>   
                <div className="col-2">
                    <img className="perfil" src="/assets/perfil.png" alt="imagem de perfil"></img>
                </div>
                <div className="col-3">
                    <span><a href="https://cdn.discordapp.com/attachments/1176727129245896905/1186628030127411231/Curriculo_Matheus.pdf?ex=6593f078&is=65817b78&hm=2cce851b6dce4d349118baa18106516dcbbb2f4f7f3ddd053a1f5a1e1a2bd641&">Baixar CV <i class="fas fa-arrow-down"></i></a></span><br/>
                    <span className="btnconversa"><a href="https://api.whatsapp.com/send?phone=5511975507168&text=Ol%C3%A1%20Matheus,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i> VAMOS CONVERSAR</a></span>
                </div>  
            </section>
        </div>
    )
}

export default Home;
