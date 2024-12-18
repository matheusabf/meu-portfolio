import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importando o useTheme
import Links from '../../components/Links';
import './index.css';

function Home() {
  const { isDarkMode } = useTheme(); // Acessando o estado isDarkMode do contexto

  return (
    <div className="container">
      <section className="secao">
        <div className="col-1">
          <span>👋 Olá Mundo!</span>
          <h1>Eu sou o Matheus ☕</h1>
          <p>Desenvolvedor <mark>Full-Stack</mark></p>
          <Links />
        </div>
        <div className="col-2">
          {/* Alterando a foto com base no tema */}
          <img
            className="perfil"
            src={isDarkMode ? '/perfildark.jpg' : '/perfilclaro.jpg'} // A foto muda dependendo do tema
            alt="imagem de perfil"
          />
        </div>
        <div className="col-3">
          <span>
            <a href="https://github.com/user-attachments/files/18187944/Matheus.Alves.Bento.Ferreira.docx">
              Baixar CV <i className="fas fa-arrow-down"></i>
            </a>
          </span>
          <br />
          <span className="btnconversa">
            <a
              href="https://api.whatsapp.com/send?phone=5511975507168&text=Ol%C3%A1%20Matheus,%20gostaria%20de%20entrar%20em%20contato!"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> VAMOS CONVERSAR
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Home;
