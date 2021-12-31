import React from 'react';
import styled from 'styled-components';

const InputMode = ({ placeholderName, btnName }) => {
  return (
    <Container>
      <Input placeholder={placeholderName} />
      <Buttons>
        <AddBtn>{btnName}</AddBtn>
        <CloseBtn>&times;</CloseBtn>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 310px;
  height: 35px;
  background-color: whitesmoke;
  margin-bottom: 10px;
  border: none;
  outline: none;
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
  width: 120px;
  border-radius: 3px;
  margin-right: 25px;
  cursor: pointer;
`;

const CloseBtn = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

export default InputMode;
