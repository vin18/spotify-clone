import React, { useContext } from 'react';
import SpotifyContext from '../context/spotifyContext';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderRight,
} from '../styles/Header';

const Header = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { user } = spotifyContext;

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <SearchIcon />
        <input
          type='text'
          placeholder='Search for artists, songs, or podcasts'
        />
      </StyledHeaderLeft>

      <StyledHeaderRight>
        {/* <Avatar src={user?.images[0]?.url} alt={user?.display_name} /> */}
        <Avatar
          src='https://avatars1.githubusercontent.com/u/31928236?s=60&v=4'
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
      </StyledHeaderRight>
    </StyledHeader>
  );
};

export default Header;
