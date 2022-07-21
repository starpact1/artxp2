import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from "next/image"

function EveryThingSection() {

    const P1 = [
        {
            image: "/Images/BecomeHero/calender.png",
            text: "Booking and guest management tools"
        },
        {
            image: "/Images/BecomeHero/dollar.png",
            text: "New income opportunities"
        },
        {
            image: "/Images/BecomeHero/performance.png",
            text: "Transactions and income overview"
        },
        {
            image: "/Images/BecomeHero/support.png",
            text: "Internal communication tool with our support team"
        },
        {
            image: "/Images/BecomeHero/review.png",
            text: "Automated review system to build trust and credibility"
        },
        {
            image: "/Images/BecomeHero/terms.png",
            text: "Host on your own terms and set your pricing and your schedule"
        }
    ]
    return (
        <div>
            <Box sx={{  py: { lg: "115px", md: "60px" }, px: "0px", width: "90%", maxWidth: 1300, margin: "auto", }}>
                <Box sx={{ width: { md: "100%", lg: "65%" }, margin: "auto", textAlign: "center", marginBottom: "120px", }}>
                    <Box sx={{  fontFamily: "Gordita-Regular", fontSize: "40px", lineHeight: "120%", fontWeight: "400", textAlign: "center" }}> Everything You Need to Create, Manage, and Execute Bestselling Experiences </Box>
                </Box>

                <Box sx={{  }}>
                    {/* <Grid container justifyContent="center" gridGap="64px">
                        {P1.map((item1, key) =>

                            <Grid key={key} item lg={4} md={6} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
                                <Box sx={{ width: { lg: "300px", md: "46%" } }}>
                                    <Box>
                                        <Image src={item1.image} width="40px" height="100%" objectFit='contain' alt={item1.text} />
                                    </Box>
                                    <Box>
                                        <Typography variant="fs16fw700"> {item1.text} </Typography>
                                    </Box>
                                </Box>

                            </Grid>
                        )}

                    </Grid> */}

                    <Box sx={{ display: "flex", flexWrap: "wrap", flexGrow: "1", justifyContent: "center", gridGap: "64px", gap: "64px", }}>
                        {P1.map((item1, key) =>

                            <Box key={key} sx={{ width: { lg: "300px", md: "46%" }, textAlign: "center", }}>
                                <Box>
                                    <Image src={item1.image} width="40px" height="100%" objectFit='contain' alt={item1.text} />
                                </Box>
                                <Box>
                                    <Typography variant="fs16fw700"> {item1.text} </Typography>
                                </Box>
                            </Box>

                        )}

                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default EveryThingSection