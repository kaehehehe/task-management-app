import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ListContext } from './List';

const AddCard = ({ setOpen }) => {
  const { list, setList } = useContext(ListContext);
  const CardRef = useRef(null);

  useEffect(() => {
    CardRef.current.focus();
  }, []);

  const handleAddBtn = () => {
    const text = CardRef.current.value;
    if (text === '') return;
    const newList = [...list];
    newList.push(text);
    setList(newList);
    CardRef.current.focus();
    CardRef.current.value = '';
  };

  const handleCloseBtn = () => {
    setOpen(false);
  };
  return (
    <AddCardContainer>
      <InputCard type="text" placeholder="Add new card..." ref={CardRef} />
      <Buttons>
        <AddBtn onClick={handleAddBtn}>Add Card</AddBtn>
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

const InputCard = styled.input`
  width: 310px;
  height: 35px;
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
`;

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
