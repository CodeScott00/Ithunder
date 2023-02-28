import * as React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import CardListItem from './CardListItem';

const CardMusicList = ({ music }) => {
  
  return (
   <Container>
    <Grid container spacing={3}>
      {music.map(item => (      //maps the items into a grid here - other component for neatness
      <Grid item key={item.artistId} xs={5} md={3} lg={2}>
        <CardListItem item={item}/>
      </Grid>
    ))}
    </Grid>
   </Container>
  )
}

export default CardMusicList;