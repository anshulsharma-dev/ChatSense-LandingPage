import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection2 from "./components/HeroSection2";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection2 />
    </ThemeProvider>
  );
};

export default App;
