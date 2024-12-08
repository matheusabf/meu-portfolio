// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Criação do Contexto
const ThemeContext = createContext();

// Provedor do Tema
export const ThemeProvider = ({ children }) => {
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
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o tema
export const useTheme = () => useContext(ThemeContext);
