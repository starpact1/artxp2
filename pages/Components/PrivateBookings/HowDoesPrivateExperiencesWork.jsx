import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'

function HowDoesPrivateExperiencesWork() {
    return (
        <div>
            <Container variant="ct110" maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item sm={6}>
                        <Slider />
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="fs32fw700" color="#000000" lineHeight="140%"> How Does Private Experiences Work? </Typography>
                        <Box sx={{ mt: "32px" }}>
                            <Typography variant="fs16fw700"> Step 1 </Typography> <br />
                            <Typography variant="fs16fw700" fontWeight="400"> Browse our wide selection of art experiences available for private booking. </Typography>
                        </Box>

                        <Box sx={{ mt: "22px" }}>
                            <Typography variant="fs16fw700"> Step 2 </Typography> <br />
                            <Typography variant="fs16fw700" fontWeight="400"> Find the experience that you like. </Typography>
                        </Box>

                        <Box sx={{ mt: "22px" }}>
                            <Typography variant="fs16fw700"> Step 3 </Typography> <br />
                            <Typography variant="fs16fw700" fontWeight="400"> Click on Inquire Now. </Typography>
                        </Box>

                        <Box sx={{ mt: "22px" }}>
                            <Typography variant="fs16fw700"> Step 4 </Typography> <br />
                            <Typography variant="fs16fw700" fontWeight="400"> Complete our Private Booking Form. </Typography>
                        </Box>

                        <Box sx={{ mt: "22px" }}>
                            <Typography variant="fs16fw700"> Step 5 </Typography> <br />
                            <Typography variant="fs16fw700" fontWeight="400"> Our Private Bookings Team will get back to you within 24h. </Typography>
                        </Box>
                        <Box sx={{mt: "78px"}}>
                            <ButtonBase variant="shareButton" sx={{width: "198px", color: "#ffffff", background: "#141414", "&:hover": { backgroundColor: "#2B2B2B"}}}>
                                Browse Experiences
                            </ButtonBase>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default HowDoesPrivateExperiencesWork