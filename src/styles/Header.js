import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  .MuiSvgIcon-root {
    font-size: 2rem;
    margin-right: 0.25rem;
  }
`;

export const StyledHeaderLeft = styled.div`
  flex: 0.5;
  min-width: 7rem;
  background-color: #fff;
  color: grey;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  padding: 1rem;

  & > input {
    border: none;
    width: 100%;

    &::placeholder {
      font-size: 1.4rem;
      font-weight: inherit;
    }
  }
`;

export const StyledHeaderRight = styled.div`
  flex: right;
  display: flex;
  align-items: center;

  & > h4 {
    margin-left: 1rem;
  }
`;
