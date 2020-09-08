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

  &:hover,
  .MuiSvgIcon-root.icon:hover {
    color: #fff;
  }

  & > p {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.8rem;
  }

  .MuiSvgIcon-root.icon {
    color: grey;
    font-size: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;
  }
`;
