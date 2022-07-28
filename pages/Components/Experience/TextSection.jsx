import React, { useRef, useState } from 'react'
import { Box, Button, ButtonBase, Collapse, Typography } from '@mui/material'
import Link from "next/link"
import styles from "../../experience/index.module.css"
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import SwiperCarousel from './SwiperCarousel'
import Location from './Location'
import Review from './Review'
import { Link as Link1 } from 'react-scroll'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function TextSection({ type }) {

    const [readMore, setReadMore] = useState(false)

    const inquireRef = useRef(null);

    const handleInquire = () => {

    }

    return (
        <div>
            <Box sx={{ mb: "64px", display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: `${type == "type1" ? "50%" : "70%"}`, margin: `${type == "type1" ? "0" : "auto"}`, }}>
                    {/* Navbar */}
                    <Box sx={{ display: "flex", flexDirection: "row", mb: "65px" }}>

                        <Box className={styles.navText}>
                            <Link1 className={styles.PageLink} to="about" smooth={true} offset={-102} >
                                <Typography variant="fs10fw400"> About </Typography>
                            </Link1>
                        </Box>

                        <Box className={styles.navText}>
                            <Link1 to="your_hosting_artist" className={styles.PageLink} smooth={true} offset={-102}>
                                <Typography variant="fs10fw400"> YOUR HOSTING ARTIST </Typography>
                            </Link1>
                        </Box>

                        <Box className={styles.navText}>
                            <Link1 to="location" className={styles.PageLink} smooth={true} offset={-102}>
                                <Typography variant="fs10fw400"> LOCATION </Typography>
                            </Link1>
                        </Box>

                        <Box className={styles.navText}>
                            <Link1 to="reviews" className={styles.PageLink} smooth={true} offset={-102}>
                                <Typography variant="fs10fw400"> REVIEWS </Typography>
                            </Link1>
                        </Box>

                        <Box className={styles.navText}>
                            <Link1 to="upcoming_dates" className={styles.PageLink} smooth={true} offset={-102}>
                                <Typography variant="fs10fw400"> UPCOMING DATES </Typography>
                            </Link1>
                        </Box>

                    </Box>
                    {/* Navbar */}

                    {/* Read More Box */}

                    <Box id="about" sx={{ mb: "60px", display: "block" }}>
                        <Typography variant="fs18fw700" component="div" fontFamily="Gordita"> About the Experience </Typography>
                        <Box sx={{ mt: "20px" }}>
                            <Typography variant="fs11fw400" component="div"> Level: suitable for all levels </Typography>
                            <Typography variant="fs11fw400" component="div"> Type: workshop </Typography>
                        </Box>

                        <Box sx={{ paddingTop: "16px", }}>
                            <Collapse in={readMore} collapsedSize="178px" sx={{ position: "relative" }}>
                                <Box sx={{ fontSize: "13px", lineHeight: "150%", }}>
                                    {readMore == false &&
                                        <Box className={styles.textOverlay}></Box>
                                    }
                                    COLORFLOW INK WORKSHOPS <br /> <br />

                                    Play with colors and create your own piece of Scandinavian artwork using an easy-to-grasp Colorflow Ink Technique. <br /> <br />

                                    Anyone can do it! It’s mindful, soothing and playful. And we promise that you’ll be able to create a piece of art to be proud of and bring it right home! <br /> <br />

                                    I am thrilled to invite you to our Colorflow Ink Workshop hosted in a beautiful art gallery in the city centre of Copenhagen! The art workshop is tailored to unleash your inner creative artist and perfectly suitable for all ages - no prior artwork experience is needed. <br /> <br />

                                    The main mediums are colorful alcohol inks and you’ll create your own piece of unique art by focusing on your own perceptions, imagination and feelings. Most importantly, we’ll share our tips and tricks so you’ll be able to create your own stunning masterpiece! <br /> <br />

                                    The program for this 3 h workshop is: <br /> <br />

                                    <ul style={{ padding: "0px", paddingLeft: "20px" }}>
                                        <li> Start with some refreshments and snacks;</li>
                                        <li> Introduction to the technique, basics of composition and color theory; </li>
                                        <li> Demonstration of the technique, tips and tricks for a successful piece of artwork; </li>
                                        <li> We will choose the colors and test the method; </li>
                                        <li> Art therapy - time to let your imagination flow and create the artwork; </li>
                                        <li> Bringing art home (yes, we even have customized frames that you can buy)! </li>
                                    </ul>
                                    <br /> <br />

                                    We will work in a small group of up to 15 people in the beautiful venue - spacious Nata Watts Gallery, located in the heart of Copenhagen. <br /> <br />

                                    …So what are you waiting for? :-) <br /> <br /> <br />


                                    Ticket Includes:<br /> <br />

                                    <ul style={{ padding: "0px", paddingLeft: "20px" }}>
                                        <li> Admission to a 3 h abstract art creation experience </li>
                                        <li> Introduction to the technique, basics of composition and color theory </li>
                                        <li> Demonstration of the technique, tips and tricks for a successful piece of artwork </li>
                                        <li> All the necessary materials, including synthetic paper a4 and a3; colourful alcohol inks; spirit to mix the colours; markers and paint brushes; bellows and blowdryers; gloves and an apron. </li>
                                        <li> 2 glasses of wine </li>
                                        <li> Tea and coffee & light snacks </li>
                                        <li> A beautiful and original artwork to take home </li>
                                    </ul> <br /> <br />

                                    The workshop will be conducted in English.
                                </Box>
                            </Collapse>

                            <Button className={styles.readMoreButton} onClick={() => setReadMore(prev => !prev)}>
                                {readMore ?
                                    "Read Less "
                                    :
                                    "Read More"
                                }
                            </Button>
                        </Box>

                    </Box>

                    {/* Read More Box */}

                    {/* Inquire Now Box */}

                    <Box ref={inquireRef} id="inquire" sx={{
                        margin: "0 0 56px",
                        backgroundColor: "#f5f6f7",
                        padding: "24px 40px 24px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>



                        <Box>
                            <Box sx={{ mb: "8px" }}>
                                <Typography variant="fs11fw400" fontWeight="700"> This experience is also available for private bookings. </Typography>
                            </Box>

                            <Box sx={{ mb: "8px" }}>
                                <Typography variant="fs10fw400" component="div"> Minimum booking price: 3000 DKK </Typography>
                                <Typography variant="fs10fw400" component="div"> Groups bigger then 5 guests will pay the ticket price per person. </Typography>
                                <Typography variant="fs10fw400" component="div"> Additional guests will be charged the ticket price: 590 DKK. </Typography>
                            </Box>

                            <Box sx={{ mb: "8px" }}>
                                <Typography variant="fs10fw400" component="div"> Inquire now and our team will get back to you within 24h. </Typography>
                            </Box>

                            <Box sx={{ mb: "8px" }}>
                                <Typography variant="fs10fw400" component="div"> Location: this experience can be held at your location (up to 40 participants) or the artists location (up to 12 participants). </Typography>
                            </Box>

                        </Box>

                        <Box>
                            <Button className={styles.readMoreButton} sx={{ opacity: "1 !important", fontSize: "12px !important", fontWeight: "bold" }}> Inquire now </Button>

                        </Box>

                    </Box>

                    {/* Inquire Now Box */}


                    {/* Your Hosting Artist */}
                    <Box id="your_hosting_artist" sx={{ mb: "60px", display: "block", }}>
                        <Typography variant="fs18fw700" component="div" fontFamily="Gordita"> Your Hosting Artist </Typography>
                        <Box sx={{ marginTop: "28px", display: "flex", }}>
                            <Box sx={{ marginRight: "24px" }}>
                                {/* <img src="/Images/Images/slide4.jpeg"/> */}
                                <img src="/Images/LoaderImages/L5.jfif" width="56px" height="56px" style={{ objectFit: "cover", objectPosition: "center", borderRadius: "50%" }} />
                            </Box>
                            <Box sx={{ width: "calc(100% - 81px)" }}>
                                <Box sx={{ display: "flex", alignItems: "end", pt: "6px" }}>
                                    <Box sx={{ mr: "12px" }}>
                                        <Typography variant="fs16fw700" component="div" fontFamily="Gordita"> Rita Howis </Typography>
                                    </Box>

                                    <Box>
                                        <StarIcon fontSize='xs' sx={{ mb: "-3px" }} />
                                        <Typography variant="fs11fw400"> <b> 4.90 </b> (10) </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ fontSize: "11px", lineHeight: "140%", marginTop: "20px", }}>
                                    Languages: English, Russian, Danish
                                </Box>

                                {/* Select Work */}
                                <Box sx={{ width: "100%", }}>
                                    <SwiperCarousel />
                                </Box>
                                {/* Selected Work */}


                            </Box>
                        </Box>
                    </Box>

                    {/* Your Hosting Artist */}

                    {/* Location */}
                    <Box id="location">
                        <Location />
                    </Box>
                    {/* Location */}

                    {/* Location */}
                    <Box id="reviews">
                        <Review />
                    </Box>
                    {/* Location */}



                </Box>
                {type == "type1" &&
                    <Box sx={{position: "relative"}}>
                        <Box sx={{ position: "sticky", top: "90px", width: "410px", mt: "82px" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="fs18fw700" fontFamily="Gordita"> Book your ticket </Typography>
                                <Typography variant="fs18fw700" fontFamily="Gordita"> DKK 500 </Typography>
                            </Box>
                            <Box sx={{ mt: "30px", display: "flex", flexDirection: "column", gap: "8px", pb: "35px", borderBottom: "1px solid #f5f6f7" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <img src="/Images/Icon/price.png" />
                                    <Typography variant="fs11fw400" ml="10px" color="#8e9499">DKK 500</Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <img src="/Images/Icon/calendar.png" />
                                    <Typography variant="fs11fw400" ml="10px" color="#8e9499">Tuesday, 26th july 2022</Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <img src="/Images/Icon/watch.png" />
                                    <Typography variant="fs11fw400" ml="10px" color="#8e9499"> 22:00 - 00:30 </Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <img src="/Images/Icon/location.png" />
                                    <Typography variant="fs11fw400" ml="10px" color="#8e9499"> Blågårdsgade 29, 1635 Copenhagen </Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <img src="/Images/Icon/hosted.png" />
                                    <Typography variant="fs11fw400" ml="10px" color="#8e9499"> Hosted by <a href="#" className="aLinkUnderline" style={{color: "#000000"}}>Craig Martin Wood</a> </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ pb: "28px", borderBottom: "1px solid #000000" }}>
                                <Typography variant="fs13fw400" color="#000000">Your ticket includes</Typography>

                                <ul style={{ listStyleType: "square", fontSize: "11px", margin: "0px", padding: "0px", marginLeft: "18px", marginTop: "12px" }}>
                                    <li>All materials are included: linoleum, carving tools, inks, papers, etc...</li>
                                    <li>A strong cup of black tea of the British kind or coffee.</li>
                                </ul>
                            </Box>

                            <Box sx={{ display: "flex", mt: "16px", justifyContent: "space-between" }}>
                                <Box className={styles.select1Wrapper}>
                                    <select className={styles.select1}>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </Box>

                                <Box>
                                    <Typography variant="fs18fw700" component="div" fontFamily="Gordita"> DKK 500 </Typography>
                                    <Typography variant="fs11fw400" component="div" lineHeight="15.4px">Total incl. VAT</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <ButtonBase variant="shareButton" sx={{ fontSize: "13px", lineHeight: "18px", mt: "31px", color: "#ffffff", background: "#141414", "&:hover": { backgroundColor: "#2B2B2B" } }}>
                                    Book Ticket
                                </ButtonBase>
                                <Box sx={{ textAlign: "center", mt: "6px" }}>
                                    <Typography variant="fs11fw400" color="#8e9499">
                                        By proceeding you agree to our <span className={styles.hoverText}> <Link href="/terms-conditions" >terms and conditions</Link> </span>
                                    </Typography>
                                    <Box sx={{ mt: "22px" }}>
                                        <Link href="#" >
                                            <span style={{ fontSize: "13px", color: "#8e9499" }}>
                                                <CalendarTodayIcon fontSize='inherit' />
                                            <Typography variant="fs13fw400" color="#8e9499" className={styles.hoverText} ml="4px" >View all Dates</Typography>
                                            </span>
                                            
                                        </Link>
                                    </Box>

                                </Box>

                            </Box>

                        </Box>
                    </Box>
                }
            </Box>
        </div>
    )
}

export default TextSection