
import React from 'react';
const dadosItens = [
    {
      nome: 'Guiare - Manual do Proprietário',
      tempo: '05/2023 - até o momento',
      cargo: 'Estagiário de audiovisual',
    },
    {
        nome: 'Custo X Confecções',
        tempo: '02/2023 - 05/2023',
        cargo: 'Desenvolvedor Web Júnior',
    },
    {
        nome: 'Ganep Educação',
        tempo: '05/2022 - 01/2023',
        cargo: 'Desenvolvedor Web Júnior',
    },
    {
        nome: 'EB Treinamentos',
        tempo: '05/2021 - 05/2022',
        cargo: 'Desenvolvedor de Sistemas Júnior',
    },
  ];
function Experiencia() {
    return (
        <div className="experiencia">
          {dadosItens.map((item, index) => (
            <div key={index} className="linhadados">
            <div className="dadosexperiencia">
            <div className="spanExperiencia">
                <span>
                  <strong>{item.nome}</strong>
                </span>
              </div>
              <div className="spanExperiencia">
                <span>{item.tempo}</span>
              </div>
              <div className="spanExperiencia">
                <span>{item.cargo}</span>
              </div>
              
            </div>
            <hr/>
            </div>
          ))}
        </div>
      );
    }
    
    export default Experiencia;