import React from 'react'
import { Grid, Paper, Container, Typography } from '@mui/material'
import Link from "next/link"
import styles from "./Footer.module.css"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useRouter } from 'next/router';

function Footer() {


    const { pathname } = useRouter()

    return (
        <div>
            {pathname !== "/become-a-hosting-artist/sign-up" &&
                <Paper sx={{ background: "#F5F6F7", mt: "115px" }}>
                    <Container variant="ct110" maxWidth="xl" sx={{ pt: "81px", pb: "52px" }}>
                        <Grid container>
                            <Grid item sm={4} sx={{ display: "flex", justifyContent: "start", flexDirection: "column" }}>
                                <img src="/Images/Icon/LogoDark.png" style={{ height: "15px", width: "96px" }} />
                                <Typography variant="fs10fw400" fontWeight="700" mt="21px">
                                    Bringing people
                                </Typography>
                                <Typography variant="fs10fw400" fontWeight="700">
                                    together through art
                                </Typography>
                            </Grid>

                            <Grid item sm={5} sx={{ display: "flex", justifyContent: "start", alignItems: "start", flexDirection: "column" }}>
                                <ul className={styles.linkList} style={{ marginTop: "0px" }}>
                                    <li>
                                        <Link href="#">
                                            Upcoming Experiences
                                        </Link>

                                    </li>

                                    <li>
                                        <Link href="#">
                                            Private Bookings
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            Become a Hosting Artist
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>

                            <Grid item sm={3} sx={{ display: "flex", justifyContent: "start", alignItems: "end", flexDirection: "column" }}>
                                <ul className={styles.socialList} style={{ marginTop: "0px", textAlign: "right" }}>
                                    <li>
                                        <Link href="#">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ mt: "120px", }}>
                            <Grid item sm={3} sx={{}}>
                                <CopyrightIcon sx={{ fontSize: "14px", mb: "-3px" }} />
                                <Typography variant="fs11fw400">  ARTXP 2021 </Typography>
                            </Grid>

                            <Grid item sm={5} sx={{}}>

                                <Typography variant="fs11fw400">
                                    Contact: Our team is here to assist you at &nbsp;</Typography>
                                <Link href="#" >
                                    <Typography variant="fs11fw400" sx={{ opacity: "0.7", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                                        service@art-xp.com
                                    </Typography>
                                </Link>

                            </Grid>

                            <Grid item sm={4} sx={{ display: "flex", justifyContent: "space-around", alignItems: "end" }}>
                                <Link href="/privacy-policy" sx={{cursor: "pointer"}}>
                                    <Typography variant="fs11fw400" sx={{ cursor: "pointer" }}>  Privacy Policy </Typography>
                                </Link>

                                <Link href="terms-conditions">
                                    <Typography variant="fs11fw400" sx={{ cursor: "pointer" }}>  Terms & Conditions </Typography>
                                </Link>

                                <Link href="cookies">
                                    <Typography variant="fs11fw400" sx={{ cursor: "pointer" }}>  Use of Cookies </Typography>
                                </Link>

                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            }
        </div>
    )
}

export default Footer