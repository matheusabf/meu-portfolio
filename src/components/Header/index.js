
import { Link, NavLink} from 'react-router-dom';
import './header.css';
import React, { useState, useEffect } from 'react';
import Tema from '../Tema';

import Links from '../../components/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Header() {
    
  const [isActive, setIsActive] = useState(false); // Estado para controlar se o botão está ativo

  const toggleActive = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('dark-theme', !isActive);
  };
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const fechaMenu = () => {
        
            setMenuOpen(false);
        
    }
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrolledToTop = currentScrollTop === 0;
  
        if (isScrolledToTop || currentScrollTop < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [setIsVisible]);
    
    return (
        <div id="menu" className='headerDiv'>
            <header id="menu" className={isVisible ? '' : 'hidden'}>
        
        <Tema />
      <NavLink 
        className="logo" 
        to="/" 
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faHome} /> Home
      </NavLink>
      <NavLink 
        className="logo" 
        to="/sobre" 
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faUser} /> Sobre
      </NavLink>
      <NavLink 
        className="logo" 
        to="/projetos" 
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faProjectDiagram} /> Projetos
      </NavLink>
      <NavLink 
        className="logo" 
        to="/habilidades" 
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faCode} /> Habilidades
      </NavLink>
      <NavLink 
        className="logo" 
        to="/contato" 
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Contato
      </NavLink>
    </header>
            <div className="menuHamb">
              <div className="menu-btn" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={fechaMenu}>Home</Link></li>
                    <li><Link to="/sobre" onClick={fechaMenu}>Sobre</Link></li>
                    <li><Link to="/projetos" onClick={fechaMenu}>Projetos</Link></li>
                    <li><Link to="/habilidades" onClick={fechaMenu}>Habilidades</Link></li>
                    <li><Link to="/contato" onClick={fechaMenu}>Contato</Link></li>
                </ul>
                <div className="linksHamb">
                    <Links/>
                </div>
            </nav>
        </div>
    );
}

export default Header;
