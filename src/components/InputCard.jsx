import React, { useState } from 'react';
import styled from 'styled-components';
import AddCard from './AddCard';

const InputCard = () => {
  const [open, setOpen] = useState(false);

  const handleText = () => {
    setOpen(true);
  };

  return (
    <InputCardContainer>
      {open ? (
        <AddCard setOpen={setOpen} />
      ) : (
        <Text onClick={handleText}>+ Add a task</Text>
      )}
    </InputCardContainer>
  );
};

const InputCardContainer = styled.div`
  border-radius: 3px;
  line-height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.span`
  width: 300px;
  padding: 3px 10px;
  padding-left: 5px;
  background-color: #dadefa;
  border-radius: 3px;
  color: #3950e7;
  font-weight: 500;
  margin: auto;
  cursor: pointer;
`;

export default InputCard;
