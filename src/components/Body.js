import React, { useContext } from 'react';
import {
  StyledBody,
  StyledBodyInfo,
  StyledBodyInfoText,
  StyledBodyIcons,
  StyledBodySongs,
} from '../styles/Body';
import Header from './Header';
import SongRow from './SongRow';
import SpotifyContext from '../context/spotifyContext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
  const spotifyContext = useContext(SpotifyContext);
  const { discover_weekly } = spotifyContext;

  return (
    <StyledBody>
      <Header spotify={spotify} />

      <StyledBodyInfo>
        <img
          src={discover_weekly?.images[0].url}
          alt='Discover weekly'
        />
        <StyledBodyInfoText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </StyledBodyInfoText>
      </StyledBodyInfo>

      <StyledBodySongs>
        <StyledBodyIcons>
          <PlayCircleFilledIcon className='shuffle' />
          <MoreHorizIcon />
        </StyledBodyIcons>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </StyledBodySongs>
    </StyledBody>
  );
};

export default Body;
