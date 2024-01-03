
import { Link } from 'react-router-dom';
import './header.css';
import React, { useState } from 'react';

import Links from '../../components/Links'


function Header() {
    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const fechaMenu = () => {
        
            setMenuOpen(false);
        
    }
    return (
        <div className="headerDiv">
            <header>
                <Link className="logo" to="/">Home</Link>
                <Link className="logo" to="/sobre">Sobre</Link>
                <Link className="logo" to="/projetos">Projetos</Link>
                <Link className="logo" to="/habilidades">Habilidades</Link>
                <Link className="logo" to="/contato">Contato</Link>
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
