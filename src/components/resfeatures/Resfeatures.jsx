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

function Resfeatures() {
    return (
        <>
            <Container>
                <Box id="features" sx={{ display: { xs: "block", sm: "block", md: "none" } }} mt={{ xs: "10%", sm: "15%" }} className="res_features">
                    <Box align="center">
                        <Typography variant='h5' color="#1A513B" fontWeight="bold">Features</Typography>
                        <Typography variant='paragraph' color="#454F63" > Following mentioned are the main feature of this application, so just feel the nature and stay healthy in a more convenient style.</Typography>
                    </Box>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4} >
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={Iconlocation} alt="" className='location' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">View Locations</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={Iconsave} alt="" className='save' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">Save Locations</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={iconwalk} alt="" className='walk' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">Walking Routes</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={dogwalk} alt="" className='walk' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">Dog Walks</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={carparking} alt="" className='walk' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">Car Parkings</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className='res_card'>
                                    <CardContent align="center">
                                        <img src={toiletloc} alt="" className='walk' />
                                        <Typography variant="h5" fontWeight="bold" mt={{ xs: "10%", sm: "1%" }} color="#1A513B">Toilet Locations</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Divider Color="#1A513B" sx={{ height: "0.2vh", marginBottom: "5%", marginTop: "5%", fontWeight: "bolder" }} />
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default Resfeatures
