import React from "react";
import styled from "styled-components";
import CallToAction from "./CallToAction";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 1rem;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Make The Most Of WhatsApp</Title>
    <Subtitle>Manage all business conversations at one place.</Subtitle>
    <CallToAction>Start Free Trial</CallToAction>
  </HeaderContainer>
);

export default Header;
