import React from 'react';
import styled from 'styled-components';

const Card = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: white;
  text-align: center;
  margin: 0 10px 10px 10px;
  padding: 5px 0;
  border-radius: 3px;
`;

export default Card;
