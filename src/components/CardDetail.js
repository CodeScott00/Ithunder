import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper, CardActionArea, Grid } from '@mui/material';
import ListItem from '@mui/material';
import { Container } from '@mui/system';
import CardMusic from './CardMusic';

const CardDetail = ({ music }) => {
  
  
  
  
  return (
   <Container>
    {/* <Grid container>
      <Grid item xs={12} s={6} md={3}>
        <Paper>1</Paper>
      </Grid>
      <Grid item xs={12} s={6} md={3}>
        <Paper>2</Paper>
      </Grid>
      <Grid item xs={12} s={6} md={3}>
        <Paper>3</Paper>
      </Grid>
      <Grid item xs={12} s={6} md={3}>
        <Paper>4</Paper>
      </Grid>
    </Grid> */}

    <Grid container spacing={3}>
      {music.map(item => (      //maps the items into a grid here - other component for neatness
      <Grid item key={item.artistId} xs={5} md={3} lg={2}>
        <CardMusic item={item}/>
      </Grid>
    ))}
    </Grid>
   </Container>
  )
}



export default CardDetail;