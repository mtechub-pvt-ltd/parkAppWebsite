import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import saveandsearchmockup from "../../parkwebAssets/saveandsearchmockup.png"
import dogandwalkingroute from "../../parkwebAssets/dogandwalkingroute.png"
import carparkingandtoiletlocmock from "../../parkwebAssets/carparkingandtoiletlocmock.png"
import "../../styles/Reswork.css"

export default function Reswork() {
    return (
        <><Container>
            <Box id="works" className="res_work">
                <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }} align="center">
                    <Typography variant="h5" fontWeight="bold" color="#1A513B">How It Works?</Typography>
                    <Typography variant="paragraph" color="#454F63">The proper guideline about this app is here for you! Follow these steps and keep up-to-date.</Typography>

                    <Stack mt="10%" direction="column" spacing={0}>
                        <Box>
                            {/* <Card sx={{backgroundColor:"#1A513B"}} className="card_background"><CardContent></CardContent></Card> */}
                            <Card className='cards'>
                                <CardContent >
                                    <Typography variant='h6' fontWeight="bold" mt="2%" color="#1A513B">User Can Search<br /> And Save Locations</Typography>
                                    <Box mt="2%" color="#454F63">
                                        <Typography variant="paragraph" fontSize="12.5px" >Park app is made searching very easy, you just have to click on search icon, the nearby places will be appear select any of the location/place and you can save it for the future as well. So whenever you want to see those locations, just click on Saved Location tap and the saved location list will be open.</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <img src={saveandsearchmockup} alt="..." className='search_and_save_mockup' />
                    </Stack>

                    <Stack mt="5%" direction="column" spacing={82}>
                        <Box>
                            <Card className='cards1'>
                                <CardContent >
                                    <Typography variant='h6' fontSize="large" fontWeight="bold" mt="6%" color="#1A513B">User Can View Walking Routes And Dog Walks</Typography>
                                    <Box mt="2%" color="#454F63">
                                        <Typography variant="paragraph" fontSize="13.5px" fontWeight="normal">No need to worries about the walking routes and dog walks, we have made the separate path for both of them. Just click on “Walking routes or Dog” Walks from the side bar menu and then you will be able to see the relevant routes.</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <img src={dogandwalkingroute} alt="..." className='search_and_save_mockup' />
                    </Stack>


                    <Stack mt="5%" direction="column" spacing={0}>
                        <Box>
                            <Card className='cards2'>
                                <CardContent >
                                    <Typography variant='h6' fontSize="large" fontWeight="bold" mt="4%" color="#1A513B">User Can View Toilet Locations And Car Parkings</Typography>
                                    <Box mt="4%" color="#454F63">
                                        <Typography variant="paragraph" fontSize="13.5px" fontWeight="normal">Want to use washroom and don’t know where the toilet is? Just select the Toilet Location and the pin location will be seen there. And also we are giving you the facility of finding the locations of nearby car parking by clicking on “Car Parking”, so that you can Park your car safely.</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <img src={carparkingandtoiletlocmock} alt="..." className='search_and_save_mockup' />
                    </Stack>
                </Box>
            </Box>
        </Container>
        </>
    )
}
