import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';


function CureMe(props) {

    const btnColor = props.color;

    return <div>
        <Grid item xs sx={{
            margin: "10px",
        }}>

            <Card sx={{
                backgroundColor: "#313742",
                color: "white",
                width: "270px",
                boxShadow: "5px 5px 0px 0px #BE3D3E"
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.img}
                        alt={props.type}
                        sx={{
                            objectFit: "cover"
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                        fontWeight: "700"
                        }}>
                            {props.type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </div>
}

export default CureMe;