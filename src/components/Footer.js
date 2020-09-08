import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import SkipPreviousButton from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterCenter,
  StyledFooterRight,
  StyledFooterLogo,
  StyledSongInfo,
} from '../styles/Footer';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <StyledFooterLogo
          src='https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'
          alt='Song cover image'
        />
        <StyledSongInfo>
          <h4>Shape of you</h4>
          <p>Ed Sheeran</p>
        </StyledSongInfo>
      </StyledFooterLeft>

      <StyledFooterCenter>
        <ShuffleIcon className='green' />
        <SkipPreviousButton />
        <PlayCircleOutlineIcon className='fontLarge' />
        <SkipNextIcon />
        <RepeatIcon className='green' />
      </StyledFooterCenter>

      <StyledFooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </StyledFooterRight>
    </StyledFooter>
  );
};

export default Footer;
