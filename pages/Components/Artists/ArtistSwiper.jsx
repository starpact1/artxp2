import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./artistSwiper.module.css"
// import required modules
import { Navigation, Pagination } from "swiper";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";
import { Box, Typography } from '@mui/material';
import LightBox from '../AllComponents/LightBox';

function ArtistSwiper() {

    const PrevRef = React.useRef(null)
    const NextRef = React.useRef(null)
    const paginationRef = React.useRef(null)

    const myRef1 = useRef(null)
    const [marginLeft, setMarginLeft] = useState("")

    useEffect(() => {
        setMarginLeft(myRef1.current.getBoundingClientRect().left + 20 + "px")
    })

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const handelImageOpen = (pIndex) => {
        setPhotoIndex(pIndex)
        setIsOpen(true)
    }

    const lightBoxClose = () => {
        console.log("close lightbox")
        setIsOpen(false)
    }


    const ImageData = [
        "/Images/ArtistWork/1.jpg",
        "/Images/ArtistWork/2.jpg",
        "/Images/ArtistWork/3.jpg",
        "/Images/ArtistWork/4.jfif",
        "/Images/ArtistWork/5.jpg",
        "/Images/ArtistWork/6.jpg",
        "/Images/ArtistWork/7.png",
        "/Images/ArtistWork/8.png",
        "/Images/ArtistWork/9.png",

    ]

    return (
        <div ref={myRef1} style={{ position: "relative", borderBottom: "1px solid #f5f6f7", paddingBottom: "120px", marginBottom: "80px" }} >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                <Box sx={{ mb: "24px" }}>
                    <Typography variant="fs18fw700"> Work </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <div ref={PrevRef} >
                        <KeyboardArrowLeftIcon fontSize='small' />
                    </div>
                    <div ref={NextRef} >
                        <KeyboardArrowRightIcon fontSize='small' />
                    </div>
                </Box>

            </Box>
            <Box className={styles.swiperContainer} sx={{ ml: `-${marginLeft}` }} >
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={8}
                    loop={true}
                    centeredSlides={true}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: PrevRef.current,
                        nextEl: NextRef.current,
                    }}
                    pagination={{
                        type: "fraction",
                        el: paginationRef.current
                    }}
                    onSwiper={(swiper) => {
                        // Delay execution for the refs to be defined
                        setTimeout(() => {
                          // Override prevEl & nextEl now that refs are defined
                        //   swiper.params.navigation.prevEl = navigationPrevRef.current
                        //   swiper.params.navigation.nextEl = navigationNextRef.current
                        //   swiper.params.pagination.el = paginationRef.current
                
                          // Re-init navigation
                        //   swiper.navigation.destroy()
                        //   swiper.navigation.init()
                        //   swiper.navigation.update()

                        //   swiper.pagination.destroy()
                        //   swiper.pagination.init()
                        //   swiper.pagination.update()
                        })
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
                            <img key_id={image} src={image} className={styles.image1} style={{}} />

                        </SwiperSlide>
                    )}
                </Swiper>

            </Box>
            <Box sx={{textAlign: "center", fontSize: "11px", mt: "20px"}}>
                <div ref={paginationRef}>

                </div>
            </Box>

            {isOpen &&
                <LightBox lightBoxClose1={lightBoxClose} pIndex={photoIndex} images={ImageData} />
            }

        </div>
    )
}

export default ArtistSwiper