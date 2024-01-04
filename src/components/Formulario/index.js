import React, { useState, useEffect } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');


  
  
    useEffect(() => {
      // Obtendo a string da consulta da URL
      const queryString = window.location.search;
  
      // Criando um objeto URLSearchParams
      const urlParams = new URLSearchParams(queryString);
  
      // Obtendo o valor associado à chave 'envio'
      const envioParam = urlParams.get('envio');
  
      if (envioParam === 'true') {
        alert('Mensagem enviada, logo irei entrar em contato!');
      }
    }, []);
  return (
    <form action="https://formsubmit.co/matheus.abentof@gmail.com" method="POST" style={{ width: '100%' }}>
       <div>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ width: '50%', marginBottom: '10px' }}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '50%', marginBottom: '10px' }}
        required
      />
      </div>
      <div>
      <input
        type="tel"
        name="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
        required
      />
      </div>
      <div>
      <textarea
        placeholder="Mensagem"
        name="message"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      </div>
      <input type="hidden" name="_subject" value="Novo Contato!"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_next" value="https://matheusabf.vercel.app/contato"></input>
      <div>
      <button type="submit" style={{ width: '100%' }}>Enviar Mensagem</button>
      </div>
    </form>
  );
};

export default Formulario;
