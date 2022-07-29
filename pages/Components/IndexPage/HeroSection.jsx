import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroSection.module.css"


// import required modules
import { Navigation, Autoplay } from "swiper";
import { Box, Button, ButtonBase, CircularProgress, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
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

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (ref.current.id == "selectMedium") {
            setShowMedium(false)
          }
          if (ref.current.id == "selectCity") {
            setShowCity(false)
          }
        }

      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
  }



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


    Swiper1.current.swiper.slideTo(watch1 + 1)

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

  const [medium, setMedium] = useState("Select a medium")
  const [showMedium, setShowMedium] = useState(false)

  const [selectCity, setSelectCity] = useState("Copenhagen")
  const [showCity, setShowCity] = useState(false)


  const handleMedium = (text1) => {
    setMedium(text1)
    setShowMedium(false)
  }

  const handleCity = (text1) => {
    setSelectCity(text1)
    setShowCity(false)
  }

  const selectRef = useRef(null)
  const cityRef = useRef(null)
  useOutsideAlerter(selectRef)
  useOutsideAlerter(cityRef)

  return (
    <div className={styles.header1} >
      <Box sx={{ position: "absolute", display: "flex", flexDiection: "row", justifyContent: "center", alignItems: "end", minWidth: "280px", textAlign: "right", bottom: "40px", right: "40px", zIndex: "999" }}>

        <Box sx={{ width: "80%", pb: "8px", pr: "20px" }}>
          <Typography variant="fs11fw400" color="#ffffff" lineHeight="2px" component="div" sx={{ opacity: "0.6" }} > Featured Experience </Typography>
          <Typography variant="fs11fw400" color="#ffffff" lineHeight="2px" opacity="90%"> {featureText} </Typography>

        </Box>

        {/* Progress */}
        <Box sx={{ width: "20%", color: "#ffffff", position: "relative" }}>
          <CircularProgress color="inherit" value={progress} size="42px" thickness={1} variant="determinate" sx={{
            "& .MuiCircularProgress-circle": {
              transition: "none"
            }
          }} >

          </CircularProgress>

          <img style={{ position: "absolute", top: "3px", left: "16px", width: "37px", height: "37px", borderRadius: "50%", objectFit: "cover", zIndex: "1" }} src={featureImage} alt={featureText} />


        </Box>
        {/* Progress */}
      </Box>
      <Box sx={{ position: "absolute", ml: { lg: "171px", xl: "182px" }, mt: "170px", background: "transparent", top: "0px", zIndex: 99 }}>
        {/* <Container variant="ct1"> */}
        <Typography component="h2" variant="bannerHeading" letterSpacing="1px"> Bringing people </Typography>
        <Typography variant="bannerHeading" letterSpacing="1px"> together through art </Typography>
        <Box sx={{ mt: "8px" }}>
          <Typography variant="bannerSubHeading" fontFamily="Gordita-Regular"> Search and book art experiences near you. </Typography>
        </Box>

        <Paper sx={{ mt: "28px", width: "100%", height: "54px", pl: "44px", pr: "8px", }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%", }}>

            <Box id="selectCity" sx={{ width: "140px", position: "relative", }} ref={cityRef}>
              <ButtonBase sx={{
                border: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#8e9499",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "space-between",
                lineHeight: "140%",
                fontSize: "14px",
                display: "flex",
              }}
                onClick={() => setShowCity(prev => !prev)}
              // onBlur={() => setShowMedium(false)}

              >
                <span sx={{
                  width: "150px",
                  display: "inline-block",
                  // width: "120px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textTransform: "capitalize",
                }}>
                  {selectCity}
                </span>

                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translateY(2px)", margin: "0 4px", width: "10px", height: "10px" }}><path d="M9.48535 1.24265L5.24271 5.48529L1.00007 1.24265" stroke="currentColor" ></path></svg>

              </ButtonBase>
              {showCity &&
                <ul className={styles.selectOption}>
                  <li className={styles.selectOptionLi} onClick={() => handleCity("Copenhagen")}> Copenhagen </li>
                </ul>
              }
            </Box>

            <Box >
              <Box sx={{
                width: "1px",
                height: "13px",
                backgroundColor: "#edf0f2",
                margin: "0px 12px",
              }}>

              </Box>
            </Box>

            <Box id="selectMedium" sx={{ width: "160px", position: "relative", }} ref={selectRef}>
              <ButtonBase sx={{
                border: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: "#8e9499",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "space-between",
                lineHeight: "140%",
                fontSize: "14px",
                display: "flex",
              }}
                onClick={() => setShowMedium(prev => !prev)}
              // onBlur={() => setShowMedium(false)}

              >
                <span sx={{
                  width: "150px",
                  display: "inline-block",
                  // width: "120px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textTransform: "capitalize",
                }}>
                  {medium}
                </span>

                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translateY(2px)", margin: "0 4px", width: "10px", height: "10px" }}><path d="M9.48535 1.24265L5.24271 5.48529L1.00007 1.24265" stroke="currentColor" ></path></svg>

              </ButtonBase>
              {showMedium &&
                <ul className={styles.selectOption}>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Figure Drawing")}>Figure Drawing</li>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Mixed Media")}>Mixed Media</li>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Photography")}>Photography</li>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Printmaking")}>Printmaking</li>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Watercolor Painting")}>Watercolor Painting</li>
                  <li className={styles.selectOptionLi} onClick={() => handleMedium("Alcohol Ink")}>Alcohol Ink</li>

                </ul>
              }
            </Box>

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
          <Typography variant="bannerSubHeading3" fontFamily="Gordita-Regular"> New cities announcing shortly </Typography>
        </Box>

        <Box sx={{ mt: "71px" }}>
          <Typography variant="fs12fw700" fontWeight="400" color="#ffffff" fontFamily="Gordita-Regular"> Are you an artist? </Typography>
          <Link href="/become-a-hosting-artist">
            <Typography variant="fs12fw700" color="#ffffff" fontFamily="Gordita-Regular" sx={{ml: "6px", cursor: "pointer" }}> Become a Hosting Artist <KeyboardArrowRightIcon sx={{ mb: "-7px" }} /> </Typography>
          </Link>

        </Box>
        {/* </Container> */}

      </Box >

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
        a11y={true}
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
    </div >
  )
}

export default HeroSection