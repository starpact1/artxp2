
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from "@mui/material";


function Slider() {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const paginationRef = React.useRef(null)

    const imageList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"]

    return (

        <div style={{ height: "640px", position: "relative" }}>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                    type: "fraction",
                    el: paginationRef.current
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
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
                
                //     onBeforeInit={(swiper) => {
                //         swiper.params.navigation.prevEl = navigationPrevRef.current;
                //         swiper.params.navigation.nextEl = navigationNextRef.current;
                //         swiper.params.pagination.el = paginationRef.current;

                      
                //    }}


                watchSlidesProgress={true}
                className="mySwiper"
                style={{ height: "inherit" }}
            >
                {imageList.map((image, key) =>

                    <SwiperSlide key={key}>
                        <img src={`/Images/PrivateBookingSliderImages/` + image} alt="slide1" />
                    </SwiperSlide>

                )}




            </Swiper>

            <Box sx={{ display: "flex", fontSize: "11px", width: "100%", position: "absolute", justifyContent: "space-between", right: "0px", bottom: "-40px", zIndex: "99" }}>
                <Box>
                    <div ref={paginationRef} >  </div>
                </Box>
                
                <Box sx={{ display: "flex" }}>
                    <div style={{}} ref={navigationPrevRef} > <KeyboardArrowLeftIcon fontSize="small" /> </div>
                    <div ref={navigationNextRef} > <KeyboardArrowRightIcon fontSize="small" /> </div>
                </Box>


            </Box>




        </div>
    )
}

export default Slider