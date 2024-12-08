import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Importando o hook useTheme
import "./index.css"; // Certifique-se de que o estilo para o botão esteja aqui

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme(); // Usando o contexto para pegar o estado e a função de alternância

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme} // Chamando a função para alternar o tema
      aria-label="Alternar tema"
      id="botao-tema"
    >
      {isDarkMode ? (
        // Ícone de Lua
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
        </svg>
      ) : (
        // Ícone de Sol
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
