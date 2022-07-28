import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";

const ImageData = [
    "/Images/ExperienceArtist/1.jpg",
    "/Images/ExperienceArtist/2.jpg",
    "/Images/ExperienceArtist/3.jpg",
    "/Images/ExperienceArtist/4.jpg",
    "/Images/ExperienceArtist/5.jpg",
    "/Images/ExperienceArtist/6.jpg",
    "/Images/ExperienceArtist/7.jfif",
    "/Images/ExperienceArtist/8.jpg",
    "/Images/ExperienceArtist/9.jpg",
    "/Images/ExperienceArtist/10.jpg",
    "/Images/ExperienceArtist/11.jpg",
    "/Images/ExperienceArtist/12.jpg",
    "/Images/ExperienceArtist/13.jpg",

]

// import required modules
import { Navigation, Pagination } from "swiper";
import LightBox from '../AllComponents/LightBox';

function SwiperCarousel() {

    const PrevRef = React.useRef(null)
    const NextRef = React.useRef(null)

    const handleImageHover = (event) => {
        var box_id = event.target.getAttribute("key_id")
        var box = document.getElementById(box_id)
        box.style.opacity = 1;
    }

    const handleImageOut = (event) => {
        var box_id = event.target.getAttribute("key_id")
        var box = document.getElementById(box_id)
        box.style.opacity = 0;
    }


    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const handelImageOpen = (pIndex) => {
        setPhotoIndex (pIndex)
        setIsOpen(true)
      }

      const lightBoxClose = () => {
        console.log("close lightbox")
        setIsOpen(false)
      }



    return (
        <div>
            <Box sx={{ marginTop: "40px", mb: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="fs11fw400" fontWeight="700"> Selected Works </Typography>
                <Box sx={{display: "flex"}}>
                    <div ref={PrevRef} >
                        <KeyboardArrowLeftIcon fontSize='small'/>
                    </div>
                    <div ref={NextRef} >
                        <KeyboardArrowRightIcon fontSize='small' />
                    </div>
                </Box>


            </Box>
            <Box sx={{ width: "100%", height: "151px", }}>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={8}
                    pagination={false}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: PrevRef.current,
                        nextEl: NextRef.current,
                    }}

                    // onBeforeInit={(swiper) => {
                    //     swiper.params.navigation.prevEl = PrevRef.current;
                    //     swiper.params.navigation.nextEl = NextRef.current;
                    // }}
                    className={styles.mySwiper}
                    style={{ height: "inherit" }}
                >
                    {ImageData.map((image, index, key) =>
                        <SwiperSlide className={styles.swiperSlide} key={key} onClick={() => handelImageOpen(index)}>
                            <img key_id={image} src={image} onMouseOver={handleImageHover} onMouseOut={handleImageOut} className={styles.image1} style={{}} />
                            <Box id={image} className={styles.middle1}>
                                <ZoomInIcon />
                            </Box>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Box>

            {isOpen &&
                <LightBox lightBoxClose1={lightBoxClose}  pIndex={photoIndex} images={ImageData} />
             } 
        </div>
    )
}

export default SwiperCarousel