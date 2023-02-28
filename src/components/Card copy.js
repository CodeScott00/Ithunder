// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, Grid } from '@mui/material';
// import ListItem from '@mui/material';

// const CardDetail = ({ music }) => {
  
  
  
  
//   return (

//     <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Typography>xs=8</Typography>
//   </Grid>
//   <Grid item xs={4}>
//     <Typography border-style={"solid"} borderColor={"red"} >xs=4</Typography>
//   </Grid>
//   {/* <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid> */}
// </Grid>
//   )

// {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
//   <Card  sx={{ maxWidth: 150 }}>
//     {/* <CardActionArea> =Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CardActionArea component. */}
      
//       {music.map(item => ( //mapping over elements and putting into card below

//     <CardContent>

//       {/* CARD IMAGE */}
//       <Grid item xs={6}>
//       <CardMedia
//         component="img"
//         height="150"
//         image={item.artworkUrl60}
//         title='Artist Name'
//         alt='album cover'
//       />
//       </Grid>

//         {/* CARD TEXT ARTIST*/}
//         <Grid item xs={6}>
//         <Typography gutterBottom variant="h5" component="div"> 
//           Artist: {item.artistName}
//         </Typography>
//         </Grid>
//         {/* <ol>Artist: {item.artistName}</ol> */}

//         {/* CARD TEXT ALBUM*/}
//         <Grid item xs={6}>
//         <Typography variant="body2" color="text.secondary">
//           Album: {item.collectionCensoredName}
//         </Typography>  
//         </Grid> 
//         {/* <ol>Album: {item.collectionCensoredName}</ol> */}

//         {/* CARD TEXT RELEASED     */}
//         <Grid item xs={6}>
//         <Typography variant="body2" color="text.secondary">
//           <ol>Released: {item.releaseDate}</ol>
//         </Typography>
//         </Grid>

//         {/* CARD TEXT GENRE */}
//         <Grid item xs={6}>
//         <Typography variant="body2" color="text.secondary">
//           <ol>Genre: {item.primaryGenreName}</ol>
//         </Typography>
//         </Grid>

//       </CardContent>
      
      
//     ))}
//     {/* </CardActionArea> */}
//   // </Card>
//   // </Grid> */}
  
//     // );
    

// }

// export default CardDetail;