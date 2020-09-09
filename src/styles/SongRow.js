import styled from 'styled-components';

export const StyledSongRow = styled.div`
  margin-left: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  z-index: 100;
  color: #fff;
  width: 97%;

  &:hover {
    cursor: pointer;
    background-color: #000;
    opacity: 0.8;
  }
`;

export const StyledSongRowInfo = styled.div`
  margin-left: 2rem;

  & > h1 {
    font-size: 1.6rem;
  }

  & > p {
    font-size: 1.4rem;
    margin-top: 3px;
    color: gray;
  }
`;

export const StyledSongRowAlbum = styled.img`
  height: 4rem;
  width: 4rem;
`;
