import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import icondownload from "../../parkwebAssets/icondownload.png"
import iconarrowup from "../../parkwebAssets/iconarrowup.png"
import React from 'react'
import "../../styles/Download.css"

export default function Download() {
  return (
    <>
      <Box id="download" mt={{ xs: "30%", sm: "25%", md: "15%" }} className='download'>
        <Container>
          <Stack align="center">
            <Typography variant='h5' display="flex" justifyContent="center" mt="3%" color="#FFFFFF" ><b>Download App</b></Typography>
            <Typography variant='paragraph' mt="3%" color="#FFFFFF" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>So what are you waiting for? Download the app now for enabling the exciting features.</Typography>

            <Typography variant='paragraph' mt="3%" color="#FFFFFF" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>So what are you waiting for? Download the app now for enabling the exciting features.</Typography>

            <Stack sx={{ display: { xs: "none", sm: "none", md: "block" } }} align="center">
              <button>
                <Grid container spacing={0}>
                  <Grid item xs={1} lg={2} >
                    <img src={icondownload} />
                  </Grid>
                  <Grid item xs={9} lg={10} sx={{ mt: "2%" }}>Download
                  </Grid>
                </Grid>
              </button>
            </Stack>


            <Stack sx={{ display: { xs: "block", sm: "block", md: "none" } }} align="center">
              <button style={{ width: "40%" }}>
                <Grid container spacing={0}>
                  {/* <Grid item xs={1} lg={2} pl={1}>
                  <img src={icondownload} />
                </Grid> */}
                  <Grid item xs={12} lg={10} align="center" sx={{ mt: "0%", ml: "0vh" }}> Download
                  </Grid>
                </Grid>
              </button>
            </Stack>

          </Stack>
        </Container>
      </Box>


    </>
  )
}
