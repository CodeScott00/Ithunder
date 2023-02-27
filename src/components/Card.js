import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardDetail = () => {
  
  
  
  
  return (
    
    <Card  sx={{ maxWidth: 150 }}>
      <h1>Card</h1>
      <CardActionArea>

        <CardMedia
          component="img"
          height="150"
          image='https://via.placeholder.com/150.png'
          alt="Artist"
        />

        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          
        </CardContent>

      </CardActionArea>
    </Card>
  );
}

export default CardDetail;