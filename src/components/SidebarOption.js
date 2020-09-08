import React from 'react';
import {
  StyledSidebarOption,
  StyledIcon,
} from '../styles/SidebarOption';

const SidebarOption = ({ title, Icon }) => {
  return (
    <StyledSidebarOption>
      {Icon && <Icon style={StyledIcon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </StyledSidebarOption>
  );
};

export default SidebarOption;
