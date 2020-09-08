import React from 'react';
import { StyledSidebarOption } from '../styles/SidebarOption';

const SidebarOption = ({ title, Icon }) => {
  return (
    <StyledSidebarOption>
      {Icon && <Icon className='icon' />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </StyledSidebarOption>
  );
};

export default SidebarOption;
