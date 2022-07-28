import { Box, Button, Collapse, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../artists/artist.module.css"
import styles1 from "../../experience/index.module.css"
import ArtistSwiper from './ArtistSwiper'
import UpComing from './UpComing'
import Review from "../../Components/Experience/Review"
import { Link as Link1, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Cover() {

    const [readMore, setReadMore] = useState(false)

    return (
        <div>
            <Box sx={{ width: "100%", height: "280px", backgroundColor: "#141414" }}>
                <Box sx={{ padding: "120px 110px 40px", display: "flex", width: "90%", maxWidth: "1300px", margin: "auto", }}>

                    <Box sx={{ position: "relative", width: "250px", height: "250px", overflow: "hidden", borderRadius: "50%" }}>
                        <img src="/Images/Artist/artist1.jpg" width="100%" height="100%" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "72px", marginLeft: "40px", fontSize: "14px", }}>
                        <Typography variant="fs36fw700"> LULA MOOR </Typography>
                        <Box sx={{ mt: "16px", pl: "2px" }}>
                            <img src="/Images/Icon/location1.png" />
                            <Typography variant="fs14fw400" color="#ffffff" fontFamily="Gordita-Regular"> Copenhagen, Denmark  </Typography>
                            <a href="/upcoming-experience" >
                                <u style={{ color: "#8e9499" }}>
                                    <Typography variant="fs14fw400" color="#8e9499" fontFamily="Gordita-Regular" sx={{ ml: "16px" }}> Painting </Typography>
                                </u>
                            </a>

                        </Box>

                    </Box>

                </Box>
            </Box>

            <Box sx={{ display: "flex", padding: "140px 110px 0", width: "90%", maxWidth: "1300px", margin: "auto", }}>
                <Box sx={{ width: "30%", minWidth: "65px", position: "relative", }}>
                    <ul className={styles.navUl}>
                        <li className={styles.navUlLi}>
                            <Link1 activeClass="linkActive" to="biography" spy={true} smooth={true} offset={-432}>
                                Biography
                            </Link1>


                        </li>
                        <li className={styles.navUlLi}>
                            <Link1 activeClass="linkActive" to="work" spy={true} smooth={true} offset={-432}>
                                Work
                            </Link1>
                        </li>
                        <li className={styles.navUlLi}>
                            <Link1 activeClass="linkActive" to="upcoming" spy={true} smooth={true} offset={-432}>
                                Upcoming experiences
                            </Link1>
                        </li>

                        <li className={styles.navUlLi}>
                            <Link1 activeClass="linkActive" to="reviews" spy={true} smooth={true} offset={-432}>
                                Reviews
                            </Link1>
                        </li>
                    </ul>
                </Box>

                <Box  sx={{ width: "70%" }}>

                    {/* Biography */}
                    <Element id="biography">
                        <Box sx={{ paddingBottom: "40px", borderBottom: "1px solid #f5f6f7", marginBottom: "80px" }}>
                            <Typography variant="fs18fw700"> Biography </Typography>

                            <Collapse in={readMore} collapsedSize="92px" sx={{ position: "relative" }}>
                                {readMore == false &&
                                    <Box className={styles1.textOverlay} sx={{ height: "92px !important" }}></Box>
                                }
                                <p className={styles.bioText}>
                                    Hi! I am Lula Moor. I’m Argentinean but I’m currently based on Copenhagen.
                                    <br /> <br />
                                    I thrive on creating colourful pieces on an on since 2004. What it is truly essential to me is to be constantly amazed by what surrounds me.  And that could be anything: leaves, nature itself, cups, food, faces and of course the human body. As well as colours, textures, shapes and shades. But above all thing: the light. Therefore, what certainly stimulates me is the observation.
                                    <br /> <br />
                                    To me, working with different styles and mediums is much more fun. I can’t stick to one specific technique; I just love to work with different materials. To begin with, I’ve always had a passion for watercolours. However, oil painting was one of my first steps to the world of colours.  Lately I´ve been painting a lot with gouache, acrylics, as well as colour pencils or graphite.
                                    <br /> <br />
                                    It is my belief that talent is not the key but practice is. The process of creating can be sometimes overwhelming but most of time is amusing and exciting.
                                </p>
                            </Collapse>
                            <Button className={styles1.readMoreButton} onClick={() => setReadMore(prev => !prev)}>
                                {readMore ?
                                    "Read Less "
                                    :
                                    "Read More"
                                }
                            </Button>

                            <Box sx={{ mt: "40px" }}>
                                <Typography variant="fs11fw400" fontFamily="Gordita-Regular"> Languages: English, Spanish, Italian </Typography>

                            </Box>

                        </Box>
                    </Element>
                    {/* Biography */}

                    {/* Work */}
                    <Element id="work">

                        <ArtistSwiper />
                    </Element>
                    {/* Work */}

                    {/* UpcomingExperience        */}
                    <Element id="upcoming">
                        <UpComing />
                    </Element>
                    {/* Upcoming Experiences */}

                    {/* Reviews        */}
                    <Element id="reviews">
                        <Review />
                    </Element>
                    {/* Reviews */}

                </Box>
            </Box>
        </div >
    )
}

export default Cover