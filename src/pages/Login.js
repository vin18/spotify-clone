import React from 'react';
import { loginUrl } from '../api/spotifyApi';
import { StyledLogin, StyledButton } from '../styles/Login';

const Login = () => {
  return (
    <StyledLogin>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt='Spotify logo'
      />
      <StyledButton href={loginUrl}>Login with Spotify</StyledButton>
    </StyledLogin>
  );
};

export default Login;
