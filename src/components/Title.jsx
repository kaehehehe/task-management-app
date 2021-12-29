import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';

const Title = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('Todo');

  const handleText = () => {
    setOpen(true);
  };

  const handleEditInput = (e) => {
    setOpen(false);
    setText(e.target.value);
  };

  return (
    <>
      {open ? (
        <EditInput defaultValue={text} onBlur={handleEditInput} />
      ) : (
        <TextContainer>
          <Text onClick={handleText}>{text}</Text>
          <FiMoreHorizontal />
        </TextContainer>
      )}
    </>
  );
};

const EditInput = styled.input`
  width: 300px;
  height: 35px;
  background-color: #ecedfc;
  line-height: 35px;
  border: none;
  padding-left: 10px;
  font-size: 18px;
`;

const TextContainer = styled.div`
  width: 300px;
  height: 35px;
  padding: 0 12px;
  background-color: #ecedfc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  line-height: 35px;
  font-weight: bold;
  font-size: 18px;
`;

export default Title;
