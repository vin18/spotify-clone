import React from 'react';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { StyledPlayerBody } from '../styles/Player';

const Player = ({ spotify }) => {
  return (
    <div className='plater'>
      <StyledPlayerBody>
        <Sidebar />
        <Body />
      </StyledPlayerBody>
      <Footer />
    </div>
  );
};

export default Player;
