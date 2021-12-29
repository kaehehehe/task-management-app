import React from 'react';
import Title from './Title';
import Card from './Card';
import styled from 'styled-components';


const List = () => {
  return (
    <ListContainer>
      <Title />
      <Card />
      <Card />
      <Card />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 340px;
  background-color: #ecedfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default List;