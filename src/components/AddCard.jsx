import React from 'react';
import styled from 'styled-components';

const AddCard = ({setOpen}) => {
  const handleCloseBtn = () => {
    setOpen(false);
  };
  return (
    <AddCardContainer>
      <InputCard placeholder="Add new card..." />
      <Buttons>
        <AddBtn>Add Card</AddBtn>
        <CloseBtn onClick={handleCloseBtn}>&times;</CloseBtn>
      </Buttons>
    </AddCardContainer>
  );
};

const AddCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  margin: auto;
`;

const InputCard = styled.textarea`
  width: 310px;
  background-color: whitesmoke;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  padding-left: 5px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
`

const AddBtn = styled.button`
  background-color: pink;
  border: none;
  height: 30px;
  width: 80px;
  border-radius: 3px;
  margin-right: 25px;
  cursor: pointer;
`;

const CloseBtn = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

export default AddCard;
