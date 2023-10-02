import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import Moment from 'moment';
 
const CardListItem = ({ item }) => {
    console.log(item);
    return(
        <div>
            <Card elevation={6} sx={{ minHeight: 300, maxWidth: 350, boxShadow: 10 }} >
                <CardActionArea href={item.collectionViewUrl} target={item.collectionViewUrl}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="150"
                            image={item.artworkUrl100}
                            title='Artist Name'
                            alt='album cover'
                        />
                        <Typography variant="h8">
                            Album: {item.collectionCensoredName}
                        </Typography> 
                        <Typography gutterBottom color="text.secondary" variant="h7" component="div"> 
                            Artist: {item.artistName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Released: {Moment(item.releaseDate).format('DD-MM-YYYY')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Genre: {item.primaryGenreName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardListItem;
