import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogin = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #000;

  & > img {
    height: 25rem;
  }
`;

export const StyledButton = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 2rem 3rem;
  background: #1db954;
  border-radius: 10rem;
  font-weight: 800;
  color: #fff;
`;
