import React, { useContext } from 'react';
import {
  StyledSidebar,
  StyledSidebarLogo,
  StyledTitle,
} from '../styles/Sidebar';
import SidebarOption from '../components/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SpotifyContext from '../context/spotifyContext';

const Sidebar = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { playlists } = spotifyContext;

  return (
    <StyledSidebar>
      <StyledSidebarLogo
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt='Spotify logo'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <StyledTitle>PLAYLISTS</StyledTitle>
      <hr />

      {playlists?.items?.map((playlist, index) => (
        <SidebarOption key={index} title={playlist.name} />
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
