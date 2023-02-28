import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardDetail = ({ music }) => {
  
  
  
  
  return (

    
  <Card  sx={{ maxWidth: 150 }}>
    {/* <CardActionArea> =Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CardActionArea component. */}
      
      {music.map(item => ( //mapping over elements and putting into card below

    <CardContent>

      {/* CARD IMAGE */}
      <CardMedia
        component="img"
        height="150"
        image={item.artworkUrl60}
        title='Artist Name'
        alt='album cover'
      />

        {/* CARD TEXT ARTIST*/}
        <Typography gutterBottom variant="h5" component="div"> 
          Artist: {item.artistName}
        </Typography>
        {/* <ol>Artist: {item.artistName}</ol> */}

        {/* CARD TEXT ALBUM*/}
        <Typography variant="body2" color="text.secondary">
          Album: {item.collectionCensoredName}
        </Typography>   
        {/* <ol>Album: {item.collectionCensoredName}</ol> */}

        {/* CARD TEXT RELEASED     */}
        <Typography variant="body2" color="text.secondary">
          <ol>Released: {item.releaseDate}</ol>
        </Typography>

        {/* CARD TEXT GENRE */}
        <Typography variant="body2" color="text.secondary">
          <ol>Genre: {item.primaryGenreName}</ol>
        </Typography>

    </CardContent>
      
      
    ))}
    {/* </CardActionArea> */}
  </Card>
    );

}

export default CardDetail;