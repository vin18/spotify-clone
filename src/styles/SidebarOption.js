import styled from 'styled-components';

export const StyledSidebarOption = styled.div`
  color: gray;
  height: 4rem;
  cursor: pointer;
  transition: 200ms color ease-in;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  &:hover {
    color: #fff;
  }

  & > p {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.8rem;
  }
`;

export const StyledIcon = {
  color: 'grey',
  fontSize: '5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginRight: '1rem',
};
