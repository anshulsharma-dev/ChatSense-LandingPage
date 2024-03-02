import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const lightTheme = {
  navBackground: "#fff",
  navText: "#000",
  shadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
};

const darkTheme = {
  navBackground: "#000",
  navText: "#fff",
  shadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
};

const Nav = styled.nav`
  background: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.navText};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
`;

const Logo = styled.h1`
  margin: 0;
  color: inherit;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 2rem;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.navBackground};
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: center; 
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const MenuItem = styled.li`
  padding: 0.5rem 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isLight = theme === "light";

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav>
        <Logo>Logo</Logo>
        <MenuIcon onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</MenuIcon>
        <Menu open={open} theme={isLight ? lightTheme : darkTheme}>
          <MenuItem>
            <a href="/solution">Solution</a>
          </MenuItem>
          <MenuItem>
            <a href="/pricing">Pricing</a>
          </MenuItem>
          <MenuItem>
            <a href="/login">Log In</a>
          </MenuItem>
          <MenuItem>
            <a href="/register">Register</a>
          </MenuItem>
          <MenuItem>
            <ThemeToggle onClick={toggleTheme}>
              {isLight ? "🌞" : "🌜"}
            </ThemeToggle>
          </MenuItem>
        </Menu>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
