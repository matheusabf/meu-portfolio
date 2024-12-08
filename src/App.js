import React from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Importando o ThemeProvider
import ThemeToggle from "./components/Tema"; // Importando o ThemeToggle
import RoutesApp from "./routes"; // Supondo que você tenha suas rotas configuradas
import "./index.css"; // Certifique-se de que o estilo para as linhas e outros elementos esteja aqui

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Adicionando as linhas como parte da estrutura visual */}
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* A parte principal da aplicação */}
        <div className="app">
          <RoutesApp />
        </div>

        {/* Botão de alternância de tema */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
