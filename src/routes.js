import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';


import Header from './components/Header';
import Footer from './components/Footer'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/contato" element= {<Contato />} />
                <Route path="/projetos" element= {<Projetos />} />
                <Route path="/habilidades" element= {<Habilidades />} />
                <Route path="/sobre" element= {<Sobre />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;