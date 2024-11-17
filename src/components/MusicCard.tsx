import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShareIcon from '@mui/icons-material/Share';

import {FC} from "react";

import {MusicType} from "@/Types/musicType";
import {CardActionArea} from "@mui/material";

// import MovieDetailDialog from "@/components/MovieDetailDialog/MovieDetailDialg";
const  MusicCard: FC<MusicType> = (musicData) => {

  const _musicData = musicData.data;

  const handleClick = () => {
    console.log(_musicData.name);
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card  sx={{ maxWidth: 345 }}  onClick={handleClick}>
         <CardActionArea>
           <Link href={`/music/${_musicData.id}`}>
             <CardMedia

               sx={{ height: 350 }}
               image={_musicData.cover}
               name={_musicData.name}
             />
           </Link>
         </CardActionArea>
          <CardContent sx={{margin: 0,justifyContent:"center"}}>
            <Link sx={{ textDecoration: 'none' }} href={`/music/${_musicData.id}`} >
              <Typography sx={{margin: 0, padding: 0, display:"block"}} gutterBottom variant="h5" component="span">
                {_musicData.name}
              </Typography>
            </Link>
            <Typography sx={{margin: 0, padding: 0, fontFamily:"arial", color:"#521111"}} gutterBottom variant="p" component="span">
              {_musicData.artist}
            </Typography>
            {/*<Typography variant="body2" sx={{ color: 'text.secondary' }}>*/}
            {/*  Lizards are a widespread group of squamate reptiles, with over 6,000*/}
            {/*  species, ranging across all continents except Antarctica*/}
            {/*</Typography>*/}
          </CardContent>
          <CardActions>
            <Button>
              <ShareIcon/>
            </Button>
            <Button>
              <PlayCircleIcon sx={{color:"#ad2828", fontSize:40,padding:0}}/>
            </Button>
          </CardActions>
        </Card>
      {/*<MovieDetailDialog isOpen={false} />*/}
    </Grid>
  );
}
export default MusicCard;

