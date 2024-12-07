import './index.css'
import React from 'react';

const dadosItens = [
  {
    linguagem: 'https://logospng.org/download/javascript/logo-javascript-icon-512.png',
    experiencia: 'JavaScript',
    estado: true,
  },
  {
    linguagem: 'https://i.pinimg.com/originals/2b/9a/11/2b9a117a2476341aa1c113a7142197da.png',
    experiencia: 'MySQL',
    estado: true,
  },
  {
    linguagem: 'https://douglasnickson.com.br/wp-content/uploads/2023/06/instalando-PHP.png',
    experiencia: 'PHP',
    estado: true,
  },
  {
    linguagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
    experiencia: 'React.js',
    estado: true,
  },
  {
    linguagem: 'https://cdn-icons-png.flaticon.com/512/1493/1493169.png',
    experiencia: 'API',
    estado: true,
  },
  {
    linguagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
    experiencia: 'HTML',
    estado: true,
  },
  {
    linguagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png',
    experiencia: 'CSS',
    estado: true,
  },
  {
    linguagem: 'https://static-00.iconduck.com/assets.00/redux-icon-256x238-ag4i1e52.png',
    experiencia: 'Redux',
    estado: false,
  },
  {
    linguagem: 'https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png',
    experiencia: 'Figma',
    estado: true,
  },
  {
    linguagem: 'https://seeklogo.com/images/W/wordpress-logo-24439D45A6-seeklogo.com.png',
    experiencia: 'WordPress',
    estado: true,
  },
  {
    linguagem: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png',
    experiencia: 'Python',
    estado: false,
  },
  {
    linguagem: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
    experiencia: 'Node.js',
    estado: true,
  },
  {
    linguagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png',
    experiencia: 'Sass',
    estado: false,
  },
  {
    linguagem: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    experiencia: 'Git',
    estado: true,
  },
];

function Skills() {
  return (
    <div className="habcontainer">
      {dadosItens.map((item, index) => (
        <div key={index} className='dadosskills'>
          <div className={`dadoshab ${item.estado ? '' : 'estado-falso'}`}>
            <div className='tarjadiv'>
              {item.estado ? (
                <>
                  <img src={item.linguagem} alt={item.experiencia} /><br />
                  <span>{item.experiencia}</span>
                </>
              ) : (
                <>
                  <div className="tarja">EM ESTUDO</div>
                  <img src={item.linguagem} alt={item.experiencia} /><br />
                  <span>{item.experiencia}</span>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
