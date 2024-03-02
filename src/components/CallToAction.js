import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CallToAction = ({ children }) => <Button>{children}</Button>;

export default CallToAction;
