import './index.css';
import React from 'react';

function ProjetoGit() {
  const MeuItem = ({ nome, imagem, descricao, link, github }) => (
    <div className="projetos">
        <div className="projeto">
        <div className="img">
          <img src={imagem} alt={nome} />
        </div>
        <div className="projetoinfos">
          <h2>{nome}</h2>
          <p>{descricao}</p>
          <div className="botoes">
            <a href={link} target="_blank" rel="noreferrer"><span className="deploy">Ver Site</span></a>
            <a href={github} target="_blank" rel="noreferrer"><span className="github">Github</span></a>
          </div>
          </div>
        </div>
    </div>
  );

  const dadosItens = [
    {
      nome: 'Socialab',
      link: 'https://socialab-one.vercel.app/',
      github: 'https://github.com/matheusabf/Socialab',
      imagem: '/assets/proj1.jpg',
      descricao:
        'Projeto de site para Agência de Marketing Digital fictícia',
    },
    {
      nome: 'PrimeFlix',
      link: 'https://primeflix-mabf.vercel.app/',
      github: 'https://github.com/matheusabf/Socialab',
      imagem: '/assets/proj2.jpg',
      descricao: 'Projeto de site de catálogo de filmes',
    },
    {
      nome: 'Calculadora de restaurante',
      link: 'https://conta-divisao-rosy.vercel.app/',
      github: 'https://github.com/matheusabf/Socialab',
      imagem: '/assets/proj3.jpg',
      descricao: 'Projeto de conta para restaurante.',
    },
  ];

  return (
    <div className="projetos">
      {dadosItens.map((item, index) => (
        <MeuItem
          key={index}
          nome={item.nome}
          imagem={item.imagem}
          descricao={item.descricao}
          link={item.link}
          github={item.github}
        />
      ))}
    </div>
  );
}

export default ProjetoGit;
