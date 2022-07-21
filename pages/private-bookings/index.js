import React from 'react'
import { Box, ButtonBase, Container, Typography } from '@mui/material'
import Header from '../Components/PrivateBookings/Header'
import Experience from '../Components/PrivateBookings/Experience'
import Ocasion from '../Components/PrivateBookings/Ocasion'
import HostingBanner from '../Components/IndexPage/HostingBanner'
import HowDoesPrivateExperiencesWork from '../Components/PrivateBookings/HowDoesPrivateExperiencesWork'


function index() {
    return (
        <div>
            <Header />
            <Box>
                <Experience />  
            </Box>

            <Box sx={{mt: "80px"}}>
                <Ocasion />
            </Box>

            <Box sx={{mt: "160px"}}>
                <HowDoesPrivateExperiencesWork />
            </Box>

            <Box sx={{mt: "86px"}}>
                <Container variant="ct110" maxWidth="xl">
                    <HostingBanner />
                </Container>
                
            </Box>
        </div>
    )
}

export default index