import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, IconButton } from '@mui/material';

export default function CardMusic( { item }) {
    return(
        <div>
            <Card elevation={6} sx={{ maxWidth: 200 }} >
            <CardActionArea href={item.collectionViewUrl}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.artworkUrl60}
                        title='Artist Name'
                        alt='album cover'
                    />

                    <Typography gutterBottom variant="h7" component="div"> 
                        Artist: {item.artistName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Album: {item.collectionCensoredName}
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                     Released: {item.releaseDate}
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