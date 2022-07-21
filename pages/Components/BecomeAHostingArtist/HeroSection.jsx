import React from 'react'
import { Box, ButtonBase, Container, Grid, styled, Typography } from '@mui/material'
import styles from "./HeroSection.module.css"
import Image from "next/image"
import Link from "next/link"



function HeroSection() {

    const benefits = [
        "New income opportunities",
        "Exposure to broad and new audiences",
        "Easy setup and management tools",
        "Access to a wealth of resources",
        "Support by our dedicated Host Success Team",
        "Automated and secure payment system",
        "Build a powerful online presence",
        "Become part of a trusted community of artists",
        "No up-front costs and no subscription fees",
    ]

    return (
        <div>
            <Box className={styles.heroContainer}>
                <Container variant="ct110"  maxWidth="xl">
                    <Grid container justifyContent="start" sx={{paddingTop: "4px"}}>
                        <Grid item sm={6} sx={{mt: "-46px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                            <Typography variant="fs44fw700"> Become a Hosting Artist </Typography>
                            <Typography variant="fs18fw700" color="#ffffff"> Income. Exposure. Community </Typography>
                        </Grid>

                        <Grid item sm={6} sx={{ display: "flex", justifyContent: "right" }}>
                            <Box className={styles.theBenefit}>
                                <Typography variant="fs20fw700"> The Benefits </Typography>

                                <Box sx={{ mt: "26px" }}>
                                    {/* <ul className={styles.benefitList}>
                                        <li className={styles.benefitListLi}>
                                            <Image src="/Images/Icon/benefitList.png" width="18px" height="18px" style={{marginTop: "4px",}}/>
                                            lkjj
                                        </li>

                                    </ul> */}
                                    {benefits.map((item, key) =>
                                        <Box key={key} className={styles.liLike}>
                                            <Box>
                                                <Image src="/Images/Icon/benefitList.png" width="18px" height="18px" />
                                            </Box>
                                            <Box sx={{ ml: "10px" }}>
                                                {item}
                                            </Box>

                                        </Box>
                                    )}

                                    <Link href="/become-a-hosting-artist/sign-up">
                                        <ButtonBase variant="shareButton" sx={{ fontSize: "13px", lineHeight: "18px", mt: "31px",  color: "#ffffff", background: "#141414", "&:hover": { backgroundColor: "#2B2B2B" } }}>
                                            Get Started
                                        </ButtonBase>
                                    </Link>
                                    
                                </Box>
                            </Box>


                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default HeroSection