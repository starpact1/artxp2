import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide, } from "swiper/react";
import styles from "./swiper.module.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";

import { Navigation, Pagination } from "swiper";

import OnSale from '../IndexPage/OnSale';


function UpcomingDates({ type }) {

    const PrevRef = React.useRef(null)
    const NextRef = React.useRef(null)

    return (
        <div>
            <Box sx={{ mt: "64px" }}>

                <Box sx={{ display: "flex", alignItems: "start", justifyContent: "space-between", borderBottom: "1px solid #f5f6f7", pb: "18px", mb: "32px" }}>

                    <Box>
                        <Typography variant="fs18fw700" fontFamily="Gordita">
                            {type == "type2" ?
                                "Upcoming Dates"
                                :
                                "Similar Experiences"
                            }
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: "24px", "&:hover": { cursor: "pointer", textDecoration: "underline" } }}>
                            <Link href="/upcoming-experiences">
                                <Typography variant="fs11fw400">
                                    See more
                                </Typography>
                            </Link>
                        </Box>
                        <div ref={PrevRef} style={{ paddingTop: "12px" }} >
                            <KeyboardArrowLeftIcon fontSize='small' />
                        </div>
                        <div ref={NextRef} style={{ paddingTop: "12px" }}>
                            <KeyboardArrowRightIcon fontSize='small' />
                        </div>
                    </Box>

                </Box>

                <Box sx={{ width: "100%", height: "auto", }}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
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

                        style={{ height: "inherit" }}
                    >

                        <SwiperSlide  >
                            <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </SwiperSlide>

                        <SwiperSlide  >
                            <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </SwiperSlide>

                        <SwiperSlide  >
                            <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </SwiperSlide>

                        <SwiperSlide  >
                            <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </SwiperSlide>

                        <SwiperSlide  >
                            <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                        </SwiperSlide>

                        <SwiperSlide style={{ height: "auto", background: "#F5F6F7" }} >
                            <a href="/upcoming-experiences" style={{ height: "100%" }}>
                                <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="fs16fw400" fontSize="16px">See More</Typography>
                                </Box>
                            </a>
                        </SwiperSlide>

                    </Swiper>
                </Box>

            </Box>
        </div>
    )
}

export default UpcomingDates