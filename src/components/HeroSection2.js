import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const HeroContainer = styled.section`
  display: flex;
  padding: 35px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#333333")};
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const LeftItem = styled.div`
  flex: 1;
  max-width: 600px; 

  h2 {
    font-size: 2.5rem; 
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff; 
    color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3; 
  }
`;

const RightItem = styled.div`
  flex: 1;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeroContainer theme={theme}>
      <LeftItem>
        <h2>Make The Most Of WhatsApp Marketing</h2>
        <p>Manage all business conversations at one place.</p>
        <button>Start Free Trial</button>
      </LeftItem>
      <RightItem>
        <img src="whatsapp.gif" alt="Whatsapp" />
      </RightItem>
    </HeroContainer>
  );
};

export default HeroSection;
