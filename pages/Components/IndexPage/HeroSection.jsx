import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroSection.module.css"


// import required modules
import { Navigation, Autoplay } from "swiper";
import { Box, Button, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const t1 = [
  {
    image: "/Images/LoaderImages/L1.png",
    text: "Experience Printmaking"
  },

  {
    image: "/Images/LoaderImages/L2.jpg",
    text: "Meditation and Intuitive Art Making"
  },

  {
    image: "/Images/LoaderImages/L3.jpg",
    text: "Learn Travel Photography"
  },

  {
    image: "/Images/LoaderImages/L4.jpg",
    text: "Learn to Draw the Human Body"
  },

  {
    image: "/Images/LoaderImages/L5.jfif",
    text: "Create Abstruct Art"
  },

  {
    image: "/Images/LoaderImages/L6.jpg",
    text: "Learn Water Color Painting"
  },

  
]

function HeroSection() {
  const swiper = useSwiper();
  const Swiper1 = useRef(null)

  const [city, setCity] = React.useState('');

  const [media, setMedia] = React.useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.value);
  };


  const [progress, setProgress] = React.useState(0);
  const [color, setColor] = React.useState("red")

  const [watch1, setWatch1] = React.useState(1)
  const [featureText, setFeatureText] = React.useState(t1[0].text)
  const [featureImage, setFeatureImage] = React.useState(t1[0].image)

  useEffect(() => {
    if (progress >= 100)
      setWatch1(prev => prev >= 6 ? 1 : prev + 1)

  }, [progress])


  useEffect(() => {
    setFeatureText(t1[watch1 - 1].text)
    setFeatureImage(t1[watch1 - 1].image)
    

    Swiper1.current.swiper.slideTo(watch1+1)

  }, [watch1])

  React.useEffect(() => {
    
    const timer = setInterval(() => {

      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));

    }, 50);

    // const timer1 = setInterval(() => {

    //     next1()
    //   }, 50*100);




    return () => {

      clearInterval(timer);
      // clearInterval(timer1);

    };
  }, []);

  return (
    <div className={styles.header1} >
      <Box sx={{ position: "absolute", display: "flex", flexDiection: "row", justifyContent: "center", alignItems: "end", minWidth: "280px", textAlign: "right",  bottom: "40px", right: "40px", zIndex: "999999" }}>
        
        <Box sx={{ width: "80%", pb: "8px", pr: "20px"}}>
            <Typography variant="fs11fw400" color="#ffffff" lineHeight="2px" component="div" sx={{opacity: "0.6"}} > Featured Experience </Typography>
            <Typography variant="fs11fw400" color="#ffffff" lineHeight="2px" opacity="90%"> {featureText} </Typography>
            
        </Box>
        
        {/* Progress */}
        <Box sx={{ width: "20%",   color: "#ffffff", position: "relative" }}>
          <CircularProgress color="inherit" value={progress} size="42px" thickness={1} variant="determinate" sx={{
            "& .MuiCircularProgress-circle": {
              transition: "none"
            }
          }} >
          
          </CircularProgress> 

          <img style={{ position: "absolute", top: "3px", left: "16px",  width: "37px", height: "37px", borderRadius: "50%", objectFit: "cover", zIndex: "99999"}} src={featureImage} alt={featureText}/> 
  

        </Box>
        {/* Progress */}
      </Box>
      <Box sx={{ position: "absolute", ml: "156px", mt: "170px", background: "transparent", top: "0px", zIndex: 99 }}>
        {/* <Container variant="ct1"> */}
        <Typography component="h2" variant="bannerHeading"> Bringing people </Typography>
        <Typography variant="bannerHeading"> together through art </Typography>
        <Box sx={{ mt: "8px" }}>
          <Typography variant="bannerSubHeading"> Search and book art experiences near you. </Typography>
        </Box>

        <Paper sx={{ mt: "28px", width: "100%", height: "54px", pl: "44px", pr: "8px", }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%", }}>
            <select style={{ fontSize: "14px", fontWeight: "400", width: "126px", border: "none", color: "#8e9499", }}>
              <option> Copenhagen </option>
              <option> Copenhagen </option>
              <option> Copenhagen </option>
            </select>

            <select style={{ fontSize: "14px", fontWeight: "400", width: "151px", border: "none", color: "#8e9499", }}>
              <option> Select a medium </option>
              <option> Copenhagen </option>
              <option> Copenhagen </option>
            </select>

            <Box sx={{}}>
              <Button variant="SearchButton" sx={{}}>Search</Button>
            </Box>


          </Box>
          {/* <Grid container justifyContent="center"  alignItems="center">
              <Grid item xs={4}>
                <select style={{ fontSize: "14px", fontWeight: "400",  width: "60%", border: "none", color: "#8e9499",  }}>
                  <option> Copenhagen </option>
                  <option> Copenhagen </option>
                  <option> Copenhagen </option>
                </select>
              </Grid>

              <Grid item xs={4}>
              <select style={{ fontSize: "14px", fontWeight: "400",  width: "74%", border: "none", color: "#8e9499",  }}>
                  <option> Select a Medium </option>
                  <option> Copenhagen </option>
                  <option> Copenhagen </option>
                </select>
              </Grid>

              <Grid item xs={4} alignItems="end">
                <Button variant="SearchButton" sx={{  }}>Search</Button>
              </Grid>

            </Grid> */}
        </Paper>

        <Box sx={{ mt: "16px" }}>
          <Typography variant="bannerSubHeading3"> New cities announcing shortly </Typography>
        </Box>

        <Box sx={{ mt: "71px" }}>
          <Typography variant="fs12fw700" fontWeight="400" color="#ffffff"> Are you an artist? </Typography>
          <Link href="#">
            <Typography variant="fs12fw700" color="#ffffff" > Become a Hosting Artist <KeyboardArrowRightIcon sx={{ mb: "-7px" }} /> </Typography>
          </Link>

        </Box>
        {/* </Container> */}

      </Box>
      
      <Swiper
        ref={Swiper1}
        navigation={{
          nextEl: ".next"
        }}
        modules={[Autoplay]}
        autoplay={false}
        loop={true}
        className={styles.mySwiper}
        watchSlidesProgress={true}
        a11y= {true}
      >
        <SwiperSlide>
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide6.jpg" layout="fill"></Image>
        </SwiperSlide>

        <SwiperSlide >
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide1.png" layout="fill"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide2.jpg" layout="fill"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide3.jpg" layout="fill"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide4.jpeg" layout="fill"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Box className={styles.overlay}></Box>
          <Image src="/Images/Images/slide5.png" layout="fill"></Image>
        </SwiperSlide>

        

      </Swiper>
    </div>
  )
}

export default HeroSection