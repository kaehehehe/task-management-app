import React, { useState, createContext } from 'react';
import Title from './Title';
import Card from './Card';
import styled from 'styled-components';
import InputCard from './InputCard';

export const ListContext = createContext(null);

const List = () => {
  const [list, setList] = useState([]);
  return (
    <ListContainer>
      <Title />
      {list.map((item, index) => (
        <Card key={index} text={item} />
      ))}
      <ListContext.Provider value={{ list, setList }}>
        <InputCard />
      </ListContext.Provider>
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
