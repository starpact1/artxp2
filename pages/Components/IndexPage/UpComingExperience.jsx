import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import OnSale from './OnSale'
import HostingBanner from './HostingBanner'


function UpComingExperience() {
    return (
        <div>
            <Container variant="ct110" sx={{ pt: "56px" }} maxWidth="xl">
                {/* <Grid container sx={{ border: "1px solid" }} >
                    <Grid item container xs={12} sm={3} sx={{ border: "1px solid" }}>
                        <Grid item xs={1}>
                            <Image src="/Images/Icon/palette.png" width="26px" height="26px" />
                        </Grid>
                        <Grid item container xs={10} direction="column" sx={{ pl: "22px" }}>
                            <Typography variant="fs13fw700"> Painting </Typography>
                            <Typography variant="fs11fw400"> Explore painting experiences </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={3}>
                        <Grid item xs={1}>
                            <Image src="/Images/Icon/photography.png" width="26px" height="26px" />
                        </Grid>
                        <Grid item container xs={10} direction="column" sx={{ pl: "22px" }}>
                            <Typography variant="fs13fw700"> Photography </Typography>
                            <Typography variant="fs11fw400"> Explore photography experiences </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={3}>

                        <Grid item xs={1}>
                            <Image src="/Images/Icon/printmaking.png" width="26px" height="26px" />
                        </Grid>
                        <Grid item container xs={10} direction="column" sx={{ pl: "22px" }}>
                            <Typography variant="fs13fw700"> Printmaking </Typography>
                            <Typography variant="fs11fw400"> Explore printmaking experiences </Typography>
                        </Grid>

                    </Grid>

                    <Grid item container xs={12} sm={3} sx={{ border: "1px solid", justifyContent: "end", alignItems: "end" }}>

                        <Grid item xs={1}>
                            <Image src="/Images/Icon/figuredrawing.png" width="26px" height="26px" />
                        </Grid>
                        <Grid item xs={11} direction="column" sx={{ pl: "22px", display: "flex", border: "1px solid", flexDirection: "column" }}>
                            <Typography variant="fs13fw700"> Figure drawing </Typography>
                            <Typography variant="fs11fw400"> Explore figure drawing experiences </Typography>
                        </Grid>

                    </Grid>
                </Grid> */}

                <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                    <Box sx={{ display: "flex", }}>
                        <img src="/Images/Icon/palette.png" height="26px" />
                        <Box sx={{ pl: "22px", display: "flex", flexDirection: "column", "&:hover": { color: "#FE3559", cursor: "pointer" } }}>
                            <Typography variant="fs13fw700" color="inherit"> Painting </Typography>
                            <Typography variant="fs11fw400" color="inherit"> Explore painting experiences </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", }}>
                        <Image src="/Images/Icon/photography.png" width="26px" height="26px" />
                        <Box sx={{ pl: "22px", display: "flex", flexDirection: "column", "&:hover": { color: "#FE3559", cursor: "pointer" } }}>
                            <Typography variant="fs13fw700" color="inherit"> Photography </Typography>
                            <Typography variant="fs11fw400" color="inherit"> Explore photography experiences </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", }}>
                        <Image src="/Images/Icon/printmaking.png" width="26px" height="26px" />
                        <Box sx={{ pl: "22px", display: "flex", flexDirection: "column", "&:hover": { color: "#FE3559", cursor: "pointer" } }}>
                            <Typography variant="fs13fw700" color="inherit"> Printmaking </Typography>
                            <Typography variant="fs11fw400" color="inherit"> Explore printmaking experiences </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", }}>
                        <Image src="/Images/Icon/figuredrawing.png" width="26px" height="26px" />
                        <Box sx={{ pl: "22px", display: "flex", flexDirection: "column", "&:hover": { color: "#FE3559", cursor: "pointer" } }}>
                            <Typography variant="fs13fw700" color="inherit"> Figure drawing </Typography>
                            <Typography variant="fs11fw400" color="inherit"> Explore figure drawing experiences </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Upcoming Experiances */}

                <Box sx={{ display: "flex", mt: "90px", justifyContent: "space-between", pb: "28px", borderBottom: "1px solid #f5f6f7" }}>
                    <Box>
                        <Typography variant="fs18fw700" > Upcoming Experiences in </Typography>
                        <select style={{ fontSize: "18px", fontWeight: "700", color: "#8e9499", border: "none" }}>
                            <option> Copenhagen </option>
                        </select>
                    </Box>

                    <Box>
                        <Link href="#" >
                            <Typography variant="fs11fw400" sx={{ cursor: "pointer", letterSpacing: "1px", "&:hover": { textDecoration: "underline" } }}>See all (49)</Typography>
                        </Link>
                    </Box>

                </Box>

                {/* Upcoming Experiances */}

                <Grid container spacing={5} sx={{ pt: "22px" }}>
                    <Grid item xs={3}>
                        <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="on sale" image="/Images/Paintings/p2.jpg" absoluteText="drawing" title="Get Started with Drawing Portraits: A Beginner’s Workshop in Drawing Faces" price="250 DKK" place="Online" dateString="Thursday, 21st Jul 2022, 20:30 - 22:30" hosted="Hosted by Lot Winther" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="selling fast" image="/Images/Paintings/p3.jpeg" absoluteText="mixed media" title="Meditation and Intuitive Art Making: Learn to Draw Your Emotions" price="390 DKK" place="Copenhagen, Denmark" dateString="Thursday, 21st Jul 2022, 21:00 - 23:00" hosted="Hosted by Hira Sameer Ahmed" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="selling out" image="Images/Paintings/p4.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Thursday, 21st Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                    </Grid>

                    <Grid item xs={3} >
                        <OnSale sale="on sale" image="Images/Paintings/p5.jpg" absoluteText="printmaking" title="Create a Magical Landscape Painting with Acrylics and Water" price="250 DKK" place="Online" dateString="Tuesday, 26th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="on sale" image="Images/Paintings/p6.jpg" absoluteText="painting" title="Create a Dreamy Landscape Painting with Acrylics" price="320 DKK" place="Copenhagen, Denmark" dateString="Saturday, 23rd Jul 2022, 19:00 - 22:00" hosted="Hosted by Melanie Larsen" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="on sale" image="Images/Paintings/p7.jpeg" absoluteText="alcohol ink" title="Create Unique Abstract Art" price="590 DKK" place="Copenhagen, Denmark" dateString="Saturday, 23rd Jul 2022, 20:30 - 23:30" hosted="Hosted by Rita Howis" />
                    </Grid>

                    <Grid item xs={3}>
                        <OnSale sale="selling fast" image="Images/Paintings/p8.jpeg" absoluteText="photography" title="Cyanotype: Make Botanical Sun Prints" price="390 DKK" place="Copenhagen, Denmark" dateString="Sunday, 24th Jul 2022, 14:30 - 16:30" hosted="Hosted by Kathrine Thude" />
                    </Grid>

                </Grid>

                <Box sx={{textAlign: "right"}}>
                    <Link href="#" >
                        <Typography variant="fs11fw400" sx={{ cursor: "pointer", letterSpacing: "1px", "&:hover": { textDecoration: "underline" } }}>See all (49)</Typography>
                    </Link>
                </Box>


                <Box sx={{ mt: "94px"}}>
                    <HostingBanner />
                </Box>

            </Container>

        </div>
    )
}

export default UpComingExperience