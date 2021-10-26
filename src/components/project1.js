import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import weatherBeats from './static/weatherBeats.jpg';

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={weatherBeats}
                    alt="WeatherBeatsProject1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        WeatherBeats
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Weather Beats is a app that will wet you a playlist depending on the current weather.                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}