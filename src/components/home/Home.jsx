import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import homemain from "../../parkwebAssets/homemain.jpg"
import logo from "../../parkwebAssets/logo.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../../styles/Home.css"
import Features from '../features/Features';
import Work from '../work/Work';
import Download from '../download/Download';
import Footer from '../footer/Footer';
import Sideshapes from '../sideshapes/Sideshapes';

export default function Home() {
  return (
    <>
      <Box id="home" className='home'>
        <Box className="home_main" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={8}>
              <img src={logo} alt="..." className="logo" />
            </Grid>
            <Grid item md={6} lg={4}>
              <Box >
                <Stack align="center" direction="row" spacing={5} sx={{ color: "#1A513B", fontWeight: "bold", marginTop: { md: "4%", lg: "10%" } }}>
                  <Typography variant="paragraph"><a href="#work" style={{ textDecoration: "none", color: "white" }}>How it Works</a></Typography>
                  <Typography variant="paragraph"><a href="#features" style={{ textDecoration: "none", color: "white" }}>Features</a></Typography>
                  <Stack direction="row">
                  </Stack>
                  <button className="sign_in">Sign In</button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Box ml="3.8%" mt={{ md: "15%", lg: "15%" }} color="#FFFFFF">
            <Typography variant="h3" fontWeight="bold">Welcome to<br />Balloch Park</Typography>
            <Typography variant="paragraph"> Yes, you are at right place! Forget about the tension of getting<br /> lost just enjoy your track. We are here to guide you the location<br /> of walking routes, dog walks, car parking and toilet locations. After<br /> downloading you will be able to sign up your profile and you can<br /> also give reviews to any location. Now you will be able to explore<br /> the whole park with us in a smart way.</Typography>
            <Stack mt="1%" direction="row" spacing={2}>
              <Button variant="contained" className="download"><a href="#download" style={{ textDecoration: "none", color: "white" }}>Download App Now</a></Button>
              <Button variant="outlined" className="learn"><a href="#features" style={{ textDecoration: "none", color: "white" }}>Learn More</a></Button>
            </Stack>
          </Box>
        </Box>

        {/* responsive */}
        <Box className="res_home_main" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          {/* <img src={homemain} alt="..." className="res_home_main" /> */}
          <Container>
            <Grid container spacing={2} pt={1}>
              <Grid item xs={4} sm={7}>
                <img src={logo} alt="..." className="res_logo" />
              </Grid>
              <Grid item xs={8} sm={5}>
                <Stack align="center" direction="row" spacing={1.8} sx={{ color: "#1A513B", fontWeight: "bold", marginTop: { xs: "7%", sm: "4%" } }}>
                  <Typography variant="paragraph" fontSize="small"><a href="#works" style={{ textDecoration: "none", color: "white" }}>How it Works</a></Typography>
                  <Typography variant="paragraph" fontSize="small"><a href="#features" style={{ textDecoration: "none", color: "white" }}>Features</a></Typography>
                  <button className="sign_in">Sign In</button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <Box ml="0%" mt={{ xs: "20vh", sm: "17%" }} color="#FFFFFF">
            <Container>
              <Typography variant="h4" fontWeight="bold" fontSize="x-large">Welcome to Balloch Park</Typography>
              <Typography variant="paragraph" pr={5} fontSize="15px">Yes, you are at right place! Forget about the tension of getting lost just enjoy your track. We are here to guide you the location of walking routes, dog walks, car parking and toilet locations. After downloading you will be able to sign up your profile and you can also give reviews to any location. Now you will be able to explore the whole park with us in a smart way.</Typography>
              <Stack mt={{ xs: "1%", sm: "8%" }} align="center" direction="row" spacing={1}>
                <Button variant="contained" className="res_download"><a href="#download" style={{ textDecoration: "none", color: "white" }}>Download </a></Button>
                <Button variant="outlined" className="res_learn"><a href="#features" style={{ textDecoration: "none", color: "white" }}>Learn More</a></Button>
              </Stack>
            </Container>

          </Box>
        </Box>
      </Box>

      {/* <Sideshapes/> */}
      <Features />
      <Work />
      <Download />

    </>
  )
}
