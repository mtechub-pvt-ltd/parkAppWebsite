import { Grid, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import saveandsearchmockup from "../../parkwebAssets/saveandsearchmockup.png"
import dogandwalkingroute from "../../parkwebAssets/dogandwalkingroute.png"
import carparkingandtoiletlocmock from "../../parkwebAssets/carparkingandtoiletlocmock.png"
import textbox from "../../parkwebAssets/textbox.png"
import "../../styles/Work.css"
import Reswork from '../reswork/Reswork'

function Work() {
    return (
        <>
            <Container>
                <Box id="work" mt="13%" className="work">
                    <Box id="work" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }} align="center">
                        <Typography variant="h5" fontWeight="bold" color="#1A513B">How It Works?</Typography>
                        <Typography variant="paragraph" color="#454F63">The proper guideline about this app is here for you! Follow these steps and keep up-to-date.</Typography>

                        <Grid container spacing={2} mt={5}>
                            <Grid item md={6} lg={6}>
                                <Box mt={20} className='text_box'>
                                    <Box mt={{ lg: "0vh", md: "0vh" }}>
                                        <Stack width="50%" mr={{ md: "40%", lg: "42%" }} >
                                            <Typography variant="h5" pt={{ md: 5, lg: 7 }} fontWeight="bold" fontSize={{ xs: "large" }} color="#1A513B">User Can Search And Save Locations</Typography>
                                            <Typography variant="paragraph" fontSize={{ xs: "17px", md: "small", lg: "15px" }} mt={{ md: 0, lg: 2 }} color="#454F63" lineHeight="25px">Park app is made searching very easy, you just have to click on search icon, the nearby places will be appear select any of the location/place and you can save it for the future as well. So whenever you want to see those locations, just click on Saved Location tap and the saved location list will be open.</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <img src={saveandsearchmockup} alt="..." className='save_search_location' />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} mt={5}>
                            <Grid item md={6} lg={6}>
                                <img src={dogandwalkingroute} alt="..." className='save_search_location' />
                            </Grid>

                            <Grid item md={6} lg={6}>
                                <Box mt={20} className='text_box'>
                                    <Box mt={{ md: "0vh", lg: "0vh" }} ml={-5} >
                                        <Stack width="45%" mr="32%">
                                            <Typography variant="h5" pt={{ md: 5, lg: 10 }} fontSize={{ md: "large", lg: "x-large" }} fontWeight="bold" color="#1A513B">User Can View Walking Routes And Dog Walks</Typography>
                                            <Typography variant="paragraph" fontSize={{ md: "14px", lg: "15px" }} mt={2} color="#454F63" lineHeight="25px">No need to worries about the walking routes and dog walks, we have made the separate path for both of them. Just click on “Walking routes or Dog” Walks from the side bar menu and then you will be able to see the relevant routes.</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} mt={5}>
                            <Grid item md={6} lg={6}>
                                <Box mt={20} className='text_box'>
                                    <Box mt={{ lg: "0vh", md: "0vh" }}>
                                        <Stack width="50%" mr={{ md: "40%", lg: "42%" }} >
                                            <Typography variant="h5" pt={{ md: 5, lg: 7 }} fontSize={{ md: "17px", lg: "x-large" }} fontWeight="bold" color="#1A513B">User Can View Toilet Locations And Car Parkings</Typography>
                                            <Typography variant="paragraph" fontSize={{ md: "13px", lg: "15px" }} mt={0} color="#454F63" lineHeight="25px">Want to use washroom and don’t know where the toilet is? Just select the Toilet Location and the pin location will be seen there. And also we are giving you the facility of finding the locations of nearby car parking by clicking on “Car Parking”, so that you can Park your car safely.</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <img src={carparkingandtoiletlocmock} alt="..." className='save_search_location' />
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
            <Reswork />
        </>
    )
}

export default Work