import styled from 'styled-components';

export const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 10rem;
  width: 100%;
  background-color: #282828;
  padding: 2rem;

  .MuiSvgIcon-root {
    font-size: 2.5rem;
  }

  .MuiSvgIcon-root.fontLarge {
    font-size: 5rem;
  }

  .MuiSvgIcon-root.green {
    color: #1ed15e;
  }
`;

export const StyledFooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: #fff;
  width: 30rem;
  margin-left: 2rem;
`;

export const StyledSongInfo = styled.div`
  & > h4 {
    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: 1.3rem;
  }
`;

export const StyledFooterLogo = styled.img`
  height: 6rem;
  width: 6rem;
  margin-right: 2rem;
  object-fit: contain;
`;

export const StyledFooterCenter = styled.div`
  flex: 0.4;
  padding: 0 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;

  .MuiSvgIcon-root {
    transition: transform 200ms ease-in-out;
  }

  .MuiSvgIcon-root:hover {
    transform: scale(1.15) !important;
  }
`;

export const StyledFooterRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-right: 2rem;

  * .MuiSlider-root {
    color: green;
  }

  .MuiSvgIcon-root {
    font-size: 2.75rem;
 `;
