import { Box, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Iconlocation from "../../parkwebAssets/Iconlocation.png"
import Iconsave from "../../parkwebAssets/Iconsave.png"
import iconwalk from "../../parkwebAssets/iconwalk.png"
import dogwalk from "../../parkwebAssets/dogwalk.png"
import carparking from "../../parkwebAssets/carparking.png"
import toiletloc from "../../parkwebAssets/toiletloc.png"
import iconarrow from "../../parkwebAssets/iconarrow.png"
import iconarrowright from "../../parkwebAssets/iconarrowright.png"
import "../../styles/Features.css"
import Resfeatures from '../resfeatures/Resfeatures'
import Slider from "react-slick";

export default function Features() {
  var settings = {
    className: "center",
    arrows: false,
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      {/* sx={{ display: { xs: "none", sm: "none", md: "block" } }} */}
      <Box id="features" sx={{ display: { xs: "none", sm: "none", md: "block" } }} mt="5%" className="features">
        <Box align="center" mt="2vh">
          <Typography variant='h5' color="#1A513B" fontWeight="bold">Features</Typography>
          <Stack>
            <Typography variant='paragraph' color="#454F63" sx={{ width: "40%", display:"flex", justifyContent:"center", alignSelf:"center" }} >Following mentioned are the main feature of this application, so just feel the nature and stay healthy in a more convenient style.</Typography>
          </Stack>
        </Box>

        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Slider autoplay {...settings} className="slider">

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={Iconlocation} alt="" className='location' />
                        <Typography variant="h5" fontWeight="bold" mt="10%" color="#1A513B">View Locations</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={Iconsave} alt="" className='save' />
                        <Typography variant="h5" fontWeight="bold" mt="12%" color="#1A513B">Save Locations</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={iconwalk} alt="" className='walk' />
                        <Typography variant="h5" fontWeight="bold" mt="12%" color="#1A513B">Walking Routes</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={dogwalk} alt="" className='location' />
                        <Typography variant="h5" fontWeight="bold" mt="10%" color="#1A513B">Dog Walks</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={dogwalk} alt="" className='location' />
                        <Typography variant="h5" fontWeight="bold" mt="10%" color="#1A513B">Dog Walks</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={carparking} alt="" className='location' />
                        <Typography variant="h5" fontWeight="bold" mt="10%" color="#1A513B">Car Parking</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box align="center">
                    <Card className='card'>
                      <CardContent align="center">
                        <img src={toiletloc} alt="" className='location' />
                        <Typography variant="h5" fontWeight="bold" mt="10%" color="#1A513B">Toilet Locations</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Resfeatures />
    </>
  )
}
