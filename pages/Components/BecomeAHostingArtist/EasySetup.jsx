import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'
import Link from "next/link"

const D1 = [
    {
        title: "Easy Setup and Management Tools for Every Artist",
        text: "It only takes a few minutes to set up a hosting artist account. We do not request any upfront costs or subscription fees. Once you have submitted your first experience and reached full access to your artist dashboard, our management tools will help you get started and stay organized. We make it simpler for you to share your art with the world.",
        button: "Get Started",
        image: "/Images/BecomeHero/s1.jpg"
    },
    {
        title: "Ongoing Support and Access to a Wealth of Resources",
        text: "Our team has hosted hundreds of experiences with thousands of guests in attendance. We understand the finer details when it comes to the creation, promotion, and execution of successful art experiences. As such, our hosting artists will gain access to a wealth of resources, guidelines, and ongoing support by our dedicated Host Success Manager. Your success awaits",
        button: "Start Hosting",
        image: "/Images/BecomeHero/s2.jpg"
    },

    {
        title: "Your Terms Your Money",
        text: "What is truly unique about our approach is that we provide every ARTXP hosting artist the chance to host experiences on their own terms. You are in control of your presence, image, and your success. Our tools and platform allow you to choose the pricing of your experiences, the size of your audience (monitored through ticket sales), and the dates you wish to host on. Host anything from 30-300 dates per year and earn anything from 500€ to 5,000€+ for every date. What are you waiting for?",
        button: "Sign Up Today !",
        image: "/Images/BecomeHero/s3.jpg"
    },

    {
        title: "Gain Prime Exposure",
        text: "As an ARTXP hosting artist, you can take advantage of powerful and influential exposure across online and print media. We help you create and grow your presence through our very own marketing campaigns.",
        button: "Start Hosting",
        image: "/Images/BecomeHero/s4.jpg"
    }
]

function EasySetup() {
    return (
        <div>
            {D1.map((item, index, key) =>
                <Box key={key} sx={{margin: "auto", mb: "170px", alignItems: "center", justifyContent: "center", gridGap: "64px", gap: "64px", display: "flex", width: "90%", maxWidth: "1300px",  flexDirection: `${index % 2 == 0 ? "row" : "row-reverse" }` }}>
                    <Box sx={{ background: `url(${item.image})`, width: "50%", backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", marginRight: "12px", height: "550px", }}>

                    </Box>
                    <Box sx={{ marginLeft: "12px", width: "50%", padding: "88px 110px 88px 120px" }}>
                        <Box sx={{ marginBottom: "40px", }}>
                            <Typography variant="fs32fw400" fontFamily="Gordita-Regular"> {item.title} </Typography>
                        </Box>

                        <Box sx={{ marginBottom: "72px", }}>
                            <Typography fontSize="17px" fontWeight="400" lineHeight="26px" fontFamily="Gordita-Regular"> {item.text} </Typography>
                        </Box>
                        <Box>
                            <Link href="/">
                                <ButtonBase variant="shareButton" sx={{ color: "#ffffff", background: "#141414", "&:hover": { background: "#2B2B2B" } }}>
                                    {item.button}
                                </ButtonBase>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            )}
        </div>
    )
}

export default EasySetup