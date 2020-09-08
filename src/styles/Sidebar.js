import styled from 'styled-components';

export const StyledSidebar = styled.div`
  height: 100vh;
  flex: 0.15;
  background-color: #040404;
  color: #fff;
  height: 100vh;
  min-width: 23rem;
  padding: 0 1rem;

  & > hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 1rem auto;
    color: red;
  }
`;

export const StyledSidebarLogo = styled.img`
  object-fit: contain;
  height: 7rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const StyledTitle = styled.strong`
  margin-left: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
`;
