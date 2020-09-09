import React from 'react';
import {
  StyledSongRow,
  StyledSongRowInfo,
  StyledSongRowAlbum,
} from '../styles/SongRow';

const SongRow = ({ track = 'test' }) => {
  return (
    <StyledSongRow>
      <StyledSongRowAlbum
        src={track?.album.images[0].url}
        alt='Album'
      />
      <StyledSongRowInfo>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')} -{' '}
          {track.album.name}
        </p>
      </StyledSongRowInfo>
    </StyledSongRow>
  );
};

export default SongRow;
