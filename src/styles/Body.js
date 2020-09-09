import styled from 'styled-components';

export const StyledBody = styled.div`
  flex: 0.85;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  height: 100vh;
  color: #fff;
  padding: 3rem;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledBodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  & > img {
    height: 20vw;
    margin: 0 2rem;
    box-shadow: 0 4px 6rem rgba(0, 0, 0, 0.5);
  }
`;

export const StyledBodyInfoText = styled.div`
  & > h2 {
    font-size: 4.8rem;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.4rem;
  }
`;

export const StyledBodySongs = styled.div`
  margin: 2rem -3rem;
`;

export const StyledBodyIcons = styled.div`
  display: flex;
  align-items: center;

  & > .shuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }

  .MuiSvgIcon-root {
    font-size: 4rem;
    margin-block: 2rem;
    margin-bottom: 2rem;
  }

  .MuiSvgIcon-root.shuffle {
    font-size: 8rem !important;
    margin-left: 4rem;
    margin-right: 3rem;
    margin-block: 2rem;
  }
`;
