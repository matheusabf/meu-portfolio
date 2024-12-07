import React, { useState, useEffect } from "react";
import "./index.css";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Carregar o tema salvo no localStorage e aplicar no :root
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      applyTheme("dark");
    }
  }, []);

  // Alternar tema
  const toggleTheme = () => {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    applyTheme(newMode);
    localStorage.setItem("theme", newMode);
  };

  // Função para alterar as variáveis no :root
  const applyTheme = (theme) => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--cor-primaria", "#121212");
      root.style.setProperty("--cor-primaria-hover", "#1a1a1a");
      root.style.setProperty("--cor-secundaria", "#5f097981");
      root.style.setProperty("--cor-secundaria-hover", "#1c0b2b");
      root.style.setProperty("--fonte-secundaria", "#ffffff");
      root.style.setProperty("--fonte-primaria", "#cccccc");
      root.style.setProperty("--fonte-primaria-hover", "#aaaaaa");
    } else {
      root.style.setProperty("--cor-primaria", "#F4F2EE");
      root.style.setProperty("--cor-primaria-hover", "#ebe8e3");
      root.style.setProperty("--cor-secundaria", "#243a69");
      root.style.setProperty("--cor-secundaria-hover", "#243a69");
      root.style.setProperty("--fonte-secundaria", "#ffffff");
      root.style.setProperty("--fonte-primaria", "#666666");
      root.style.setProperty("--fonte-primaria-hover", "#585858");
    }
  };

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Alternar tema"
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
