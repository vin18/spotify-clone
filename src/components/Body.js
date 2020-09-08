import React from 'react';
import { StyledBody } from '../styles/Body';
import Header from './Header';

const Body = ({ spotify }) => {
  return (
    <StyledBody>
      <Header spotify={spotify} />
    </StyledBody>
  );
};

export default Body;
