"use client"
import {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Button, AppBar, ButtonBase, Card} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavBar from "@/components/NavBar";
import MusicList from "@/components/MusicList/MusicList";
import Container from "@mui/material/Container";

export default function Home(){
  return(
    <>
      <NavBar/>
      <Container maxWidth="xl" sx={{marginTop: "30px"}}>
        <MusicList />
      </Container>
    </>
  )
}
