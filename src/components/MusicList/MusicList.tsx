import {FC} from "react";

import Grid from "@mui/material/Grid";

import {Musics} from "@/musicsData";

import * as React from "react";
import MusicCard from "@/components/MusicCard";

const MusicList: FC = () => {
  return (
    <Grid container spacing={4}>
      {
        Musics.map( (music, index) => (
            <MusicCard
              key={index}
              data={music}
            />
          )
        )
      }
    </Grid>
  );
}

export default MusicList;
