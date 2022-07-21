import React, { useState } from 'react'
import { Box, ButtonBase, Collapse, Container, Grid, Typography } from '@mui/material'
import styles from "./index.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OnSale from "../Components/IndexPage/OnSale"
import HostingBanner from '../Components/IndexPage/HostingBanner';
import Experience from '../Components/PrivateBookings/Experience';


function Index() {

    const [showMedium, setShowMedium] = useState(false)
    const [showType, setShowType] = useState(false)
    const [activeTime, setActiveTime] = useState("all")

    const mediumList = [
        {
            id: "m1",
            title: "Figure drawing",
            count: "2"
        },
        {
            id: "m2",
            title: "Mixed media",
            count: "7"
        },
        {
            id: "m3",
            title: "Photography",
            count: "8"
        },
        {
            id: "m4",
            title: "Printmaking",
            count: "6"
        },
        {
            id: "m5",
            title: "Painting",
            count: "17"
        },
        {
            id: "m6",
            title: "Drawing",
            count: "1"
        },
        {
            id: "m7",
            title: "Watercolour painting",
            count: "2"
        },
        {
            id: "m8",
            title: "Alcohol Ink",
            count: "6"
        }

    ]

    return (
        <div>

            <Container variant="ct110" sx={{ mt: "102px",  }} maxWidth="xl">
                <Grid container>
                    <Grid item sm={3}>
                        <Typography variant="fs26fw700"> Upcoming Experiences </Typography>
                        <Box sx={{ pt: "78px", maxWidth: "190px", display: "flex", flexDirection: "column" }}>
                            <Typography variant='fs11fw400' fontWeight="700" > City </Typography>
                            <Box className={styles.select1Wrapper}>
                                <select className={styles.select1}>
                                    <option> Copenhagen </option>
                                </select>
                            </Box>

                        </Box>

                        <Box sx={{ pt: "24px", maxWidth: "210px", display: "flex", flexDirection: "row" }}>

                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start" }}>
                                <label htmlFor="online" className={styles.label1} >
                                    <input id="online" type="checkbox" className={styles.checkboxInput} />
                                    <span style={{ paddingTop: "-6px", paddingLeft: "6px" }}> Online </span>
                                    <span className={styles.checkmark}></span>
                                </label>
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "row", pl: "32px" }}>
                                <label htmlFor="inPerson" className={styles.label1} >
                                    <input id="inPerson" type="checkbox" className={styles.checkboxInput} />
                                    <span style={{ paddingTop: "-6px", paddingLeft: "6px" }}> In Person </span>
                                    <span className={styles.checkmark}></span>
                                </label>
                            </Box>

                        </Box>

                        <Box sx={{ pt: "32px", maxWidth: "190px", display: "flex", flexDirection: "column" }}>
                            <Typography variant='fs11fw400' fontWeight="700" > Dates </Typography>
                            <Box className={styles.select1Wrapper}>
                                <select className={styles.select1}>
                                    <option> Dates </option>
                                </select>
                            </Box>

                        </Box>

                        <Box sx={{ pt: "22px", maxWidth: "190px", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant='fs11fw400' fontWeight="700" > Medium </Typography>
                                <ButtonBase sx={{ fontSize: "18px" }} onClick={() => setShowMedium(prev => !prev)}>
                                    <KeyboardArrowDownIcon fontSize="inherit" />
                                </ButtonBase>
                            </Box>

                            <Collapse in={showMedium} sx={{ mt: "12px", p: 0 }}>

                                {mediumList.map((item, key) => {

                                    return <Grid key={key} container sx={{ justifyContent: "center", alignItems: "center" }}>
                                        <Grid item xs={10} sx={{ ml: "-8px" }}>
                                            <label htmlFor={item.id} className={styles.label1} >
                                                <input id={item.id} type="checkbox" className={styles.checkboxInput} />
                                                <span style={{ paddingTop: "-6px", paddingLeft: "16px" }}> {item.title} </span>
                                                <span className={styles.checkmark}></span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={2} sx={{ textAlign: "right", display: "flex", justifyContent: "end", alignItems: "center" }}>
                                            <Typography variant="fs9fw400" mr="2px"> {item.count} </Typography>
                                        </Grid>
                                    </Grid>

                                })}

                                <Box sx={{ borderTop: "1px solid #f5f6f7", mt: "20px", mb: "49px" }}></Box>

                            </Collapse>

                        </Box>

                        <Box sx={{ pt: "1px", maxWidth: "190px", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant='fs11fw400' fontWeight="700" > Type </Typography>
                                <ButtonBase sx={{ fontSize: "18px" }} onClick={() => setShowType(prev => !prev)}>
                                    <KeyboardArrowDownIcon fontSize="inherit" />
                                </ButtonBase>
                            </Box>

                            <Collapse in={showType} sx={{ mt: "12px", p: 0 }}>



                                <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
                                    <Grid item xs={10} sx={{ ml: "-8px" }}>
                                        <label htmlFor="workshop" className={styles.label1} >
                                            <input id="workshop" type="checkbox" className={styles.checkboxInput} />
                                            <span style={{ paddingTop: "-6px", paddingLeft: "16px" }}> Workshop </span>
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: "right", display: "flex", justifyContent: "end", alignItems: "center" }}>
                                        <Typography variant="fs9fw400" mr="2px"> 45 </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
                                    <Grid item xs={10} sx={{ ml: "-8px" }}>
                                        <label htmlFor="Tour" className={styles.label1} >
                                            <input id="Tour" type="checkbox" className={styles.checkboxInput} />
                                            <span style={{ paddingTop: "-6px", paddingLeft: "16px" }}> Tour & WorkShop </span>
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: "right", display: "flex", justifyContent: "end", alignItems: "center" }}>
                                        <Typography variant="fs9fw400" mr="2px"> 4 </Typography>
                                    </Grid>
                                </Grid>

                                <Box sx={{ borderTop: "1px solid #f5f6f7", mt: "20px", mb: "49px" }}></Box>

                            </Collapse>


                        </Box>

                    </Grid>

                    <Grid container spacing={5} item sm={9}>

                        <Grid item sm={12} sx={{ mb: "22px" }}>
                            <ul className={styles.timeUl}>
                                <li onClick={() => setActiveTime("all")} style={{ fontWeight: `${activeTime == "all" ? 700 : 400}` }}> All </li>
                                <li onClick={() => setActiveTime("today")} style={{ fontWeight: `${activeTime == "today" ? 700 : 400}` }}> Today </li>
                                <li onClick={() => setActiveTime("week")} style={{ fontWeight: `${activeTime == "week" ? 700 : 400}` }}> This Week </li>
                                <li onClick={() => setActiveTime("month")} style={{ fontWeight: `${activeTime == "month" ? 700 : 400}` }}> This month </li>
                            </ul>
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sOnline sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sOnline sale="on sale" image="/Images/Paintings/p2.jpg" absoluteText="drawing" title="Get Started with Drawing Portraits: A Beginner’s Workshop in Drawing Faces" price="250 DKK" place="Online" dateString="Thursday, 21st Jul 2022, 20:30 - 22:30" hosted="Hosted by Lot Winther" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sOnline sale="selling fast" image="/Images/Paintings/p3.jpeg" absoluteText="mixed media" title="Meditation and Intuitive Art Making: Learn to Draw Your Emotions" price="390 DKK" place="Copenhagen, Denmark" dateString="Thursday, 21st Jul 2022, 21:00 - 23:00" hosted="Hosted by Hira Sameer Ahmed" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sOnline sale="selling out" image="Images/Paintings/p4.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Thursday, 21st Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </Grid>

                        <Grid item xs={4} >
                            <OnSale sale="on sale" image="Images/Paintings/p5.jpg" absoluteText="printmaking" title="Create a Magical Landscape Painting with Acrylics and Water" price="250 DKK" place="Online" dateString="Tuesday, 26th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sale="on sale" image="Images/Paintings/p6.jpg" absoluteText="painting" title="Create a Dreamy Landscape Painting with Acrylics" price="320 DKK" place="Copenhagen, Denmark" dateString="Saturday, 23rd Jul 2022, 19:00 - 22:00" hosted="Hosted by Melanie Larsen" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sale="on sale" image="Images/Paintings/p7.jpeg" absoluteText="alcohol ink" title="Create Unique Abstract Art" price="590 DKK" place="Copenhagen, Denmark" dateString="Saturday, 23rd Jul 2022, 20:30 - 23:30" hosted="Hosted by Rita Howis" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sale="selling fast" image="Images/Paintings/p8.jpeg" absoluteText="photography" title="Cyanotype: Make Botanical Sun Prints" price="390 DKK" place="Copenhagen, Denmark" dateString="Sunday, 24th Jul 2022, 14:30 - 16:30" hosted="Hosted by Kathrine Thude" />
                        </Grid>

                        <Grid item xs={4}>
                            <OnSale sale="selling fast" image="Images/Paintings/p8.jpeg" absoluteText="photography" title="Cyanotype: Make Botanical Sun Prints" price="390 DKK" place="Copenhagen, Denmark" dateString="Sunday, 24th Jul 2022, 14:30 - 16:30" hosted="Hosted by Kathrine Thude" />
                        </Grid>

                        <Grid sm={12} sx={{ mt: "60px", display: "flex", justifyContent: "center" }}>
                            <ButtonBase variant="LoadMore">
                                Load More Experiences
                            </ButtonBase>
                        </Grid>

                    </Grid>
                </Grid>

                <Box sx={{ mt: "40px" }}>
                    <HostingBanner />
                </Box>

                

            </Container>

        </div>
    )
}

export default Index