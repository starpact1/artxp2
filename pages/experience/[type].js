import React, { useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import styles from "./index.module.css"
import Image from 'next/image'

import TextSection from '../Components/Experience/TextSection'
import UpcomingDates from '../Components/Experience/UpcomingDates'
import LightBox from '../Components/AllComponents/LightBox'
import { Link as Link1 } from 'react-scroll'
import Link from 'next/link'


// Modal
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { InlineShareButtons } from 'sharethis-reactjs';
// Modal


function Types() {

    const router = useRouter()
    const { type } = router.query

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

    const images = [
        "/Images/Experience/Image1.jpg",
        "/Images/Experience/Image2.jfif",
        "/Images/Experience/Image3.jpg",
        "/Images/Experience/Image4.jpg",
        "/Images/Experience/Image5.jpg",
    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: "4px",
        boxShadow: 24,
        py: "50px",
        px: "24px",
        width: "50%",
        maxWidth: "450px"
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>

            <Box className={styles.experience}>
                {/* title */}
                <Box>
                    <Box sx={{ mb: "19px" }}>
                        <Typography variant="fs32fw700" color="#000000" fontFamily="Gordita"> Create Abstract Art in Colorflow Ink </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {type == "type1" &&
                                <Box sx={{ mr: "40px" }}>
                                    <Typography variant="fs13fw400" color="#000000"> Wednesday, 27th July 2022, 20:30 - 23:30 </Typography>
                                </Box>
                            }

                            <Box sx={{ mr: "40px" }}>
                                <Typography variant="fs13fw400" color="#000000">Medium: Alcohol Ink</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center", mr: "16px" }}>
                                    <Image src="/Images/LoaderImages/L5.jfif" width="24px" height="24px" alt="image" style={{ borderRadius: "50%", }} />
                                </Box>

                                <Typography variant="fs13fw400" color="#000000" > Hosted By &nbsp;  </Typography>
                                <Typography variant="fs13fw400" color="#000000" className="aLinkUnderline">
                                    <Link href="/artists" > Rita Howis  </Link>
                                </Typography>

                            </Box>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Box sx={{ mr: "40px" }}>
                                <Link1 className={styles.PageLink} to="inquire" smooth={true} offset={-102} >
                                    <Image src="/Images/Icon/group1.png" width="18px" height="13px" />
                                    <Typography variant="fs13fw400" color="#000000" sx={{ ml: "6px" }}> Private Bookings </Typography>
                                </Link1>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }} onClick={handleOpen}>
                                <Box sx={{ display: "flex", alignItems: "center", mr: "16px" }}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="align-svg svg" data-v-6cea8114="" data-v-76ca16a0=""><path d="M10.9375 0.625H1.3125C0.574219 0.625 0 1.22656 0 1.9375V11.5625C0 12.3008 0.574219 12.875 1.3125 12.875H10.9375C11.6484 12.875 12.25 12.3008 12.25 11.5625V1.9375C12.25 1.22656 11.6484 0.625 10.9375 0.625ZM11.375 11.5625C11.375 11.8086 11.1562 12 10.9375 12H1.3125C1.06641 12 0.875 11.8086 0.875 11.5625V1.9375C0.875 1.71875 1.06641 1.5 1.3125 1.5H10.9375C11.1562 1.5 11.375 1.71875 11.375 1.9375V11.5625ZM2.70703 10.0039L2.87109 10.168C2.98047 10.3047 3.19922 10.3047 3.33594 10.168L8.66797 4.83594L8.69531 4.86328L8.66797 7.29688C8.66797 7.48828 8.83203 7.625 8.99609 7.625H9.26953C9.46094 7.625 9.59766 7.48828 9.59766 7.29688L9.625 3.57812C9.625 3.41406 9.46094 3.25 9.29688 3.25L5.57812 3.27734C5.38672 3.27734 5.25 3.41406 5.25 3.60547V3.87891C5.25 4.04297 5.38672 4.20703 5.57812 4.20703L8.01172 4.17969L8.03906 4.20703L2.70703 9.53906C2.57031 9.67578 2.57031 9.89453 2.70703 10.0039Z" fill="currentColor"></path></svg>
                                </Box>

                                <Typography variant="fs13fw400" color="#000000" sx={{ cursor: "pointer" }} > Share Experience </Typography>
                            </Box>

                        </Box>

                    </Box>
                </Box>
                {/* title */}

                {/* Images Gallery */}

                <Box className={styles.experienceGallery}>
                    <Box sx={{
                        position: "relative",
                        height: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 0.6fr 0.9fr",
                        gridTemplateRows: "217px 217px",
                        gridColumnGap: "16px",
                        gridRowGap: "16px"
                    }}>

                        <Box sx={{
                            cursor: "pointer",
                            position: "relative",
                            gridRow: "auto/span 2",
                            maxHeight: "450px",
                        }}>
                            <img src="/Images/Experience/Image1.jpg" onClick={() => handelImageOpen(0)} className={styles.image1} />

                        </Box>

                        <Box sx={{
                            cursor: "pointer",
                            position: "relative",
                            gridRow: "auto/span 2",
                            maxHeight: "450px",
                        }}>
                            <img src="/Images/Experience/Image2.jfif" onClick={() => handelImageOpen(1)} className={styles.image1} />

                        </Box>

                        <Box sx={{
                            cursor: "pointer",
                            position: "relative",
                            gridRow: "auto/span 1",
                            maxHeight: "450px",
                        }}>
                            <img src="/Images/Experience/Image3.jpg" onClick={() => handelImageOpen(2)} className={styles.image1} />

                        </Box>


                        <Box sx={{
                            cursor: "pointer",
                            position: "relative",
                            gridRow: "auto/span 2",
                            maxHeight: "450px",
                        }}>
                            <img src="/Images/Experience/Image5.jpg" onClick={() => handelImageOpen(4)} className={styles.image1} />
                            <Box sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
                                <Typography variant="fs13fw400"> More Photos (2)</Typography>

                            </Box>
                        </Box>


                        <Box sx={{
                            cursor: "pointer",
                            position: "relative",
                            gridRow: "auto/span 1",
                            maxHeight: "450px",
                        }}>
                            <img src="/Images/Experience/Image4.jpg" onClick={() => handelImageOpen(3)} className={styles.image1} />

                        </Box>



                    </Box>
                </Box>

                {/* Images Gallery */}


                {/* LightBox */}

                {isOpen &&
                    <LightBox lightBoxClose1={lightBoxClose} pIndex={photoIndex} images={images} />
                }

                {/* LightBox */}

                {/* Text Section */}
                <TextSection type={type} />
                {/* Text Section */}

                {/* Upcoming Dates */}

                <Box id="upcoming_dates">
                    <UpcomingDates type={type} />
                </Box>


                {/* Upcoming Dates */}
            </Box>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }}>
                        <ClearIcon />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", border: "none" }}>
                        <InlineShareButtons
                            config={{
                                alignment: 'center',  // alignment of buttons (left, center, right)
                                color: 'social',      // set the color of buttons (social, white)
                                enabled: true,        // show/hide buttons (true, false)
                                font_size: 12,        // font size for the buttons
                                labels: 'cta',        // button labels (cta, counts, null)
                                language: 'en',       // which language to use (see LANGUAGES)
                                networks: [           // which networks to include (see SHARING NETWORKS)
                                    'facebook',
                                    'twitter',


                                ],
                                padding: 48,          // padding within buttons (INTEGER)
                                radius: 4,            // the corner radius on each button (INTEGER)
                                show_total: false,
                                size: 40,
                                // width: 60,             // the size of each button (INTEGER)
                                color: 'white',
                                enabled: true,
                                // OPTIONAL PARAMETERS
                                url: 'https://www.sharethis.com', // (defaults to current url)
                                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                                description: 'custom text',       // (defaults to og:description or twitter:description)
                                title: 'custom title',            // (defaults to og:title or twitter:title)
                                message: 'custom email text',     // (only for email sharing)
                                subject: 'custom email subject',  // (only for email sharing)
                                username: 'custom twitter handle' // (only for twitter sharing)
                            }}
                        />

                        <InlineShareButtons
                            config={{
                                alignment: 'center',  // alignment of buttons (left, center, right)
                                color: 'social',      // set the color of buttons (social, white)
                                enabled: true,        // show/hide buttons (true, false)
                                font_size: 12,        // font size for the buttons
                                labels: 'cta',        // button labels (cta, counts, null)
                                language: 'en',       // which language to use (see LANGUAGES)
                                networks: [           // which networks to include (see SHARING NETWORKS)
                                    'blogger',
                                    'messenger',

                                ],
                                padding: 48,          // padding within buttons (INTEGER)
                                radius: 4,            // the corner radius on each button (INTEGER)
                                show_total: false,
                                size: 40,             // the size of each button (INTEGER)
                                color: 'white',
                                enabled: true,
                                // OPTIONAL PARAMETERS
                                url: 'https://www.sharethis.com', // (defaults to current url)
                                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                                description: 'custom text',       // (defaults to og:description or twitter:description)
                                title: 'custom title',            // (defaults to og:title or twitter:title)
                                message: 'custom email text',     // (only for email sharing)
                                subject: 'custom email subject',  // (only for email sharing)
                                username: 'custom twitter handle' // (only for twitter sharing)
                            }}
                        />


                        <InlineShareButtons
                            config={{
                                alignment: 'center',  // alignment of buttons (left, center, right)
                                color: 'social',      // set the color of buttons (social, white)
                                enabled: true,        // show/hide buttons (true, false)
                                font_size: 12,        // font size for the buttons
                                labels: 'cta',        // button labels (cta, counts, null)
                                language: 'en',       // which language to use (see LANGUAGES)
                                networks: [           // which networks to include (see SHARING NETWORKS)
                                    'linkedin',
                                    'email',

                                ],
                                padding: 48,          // padding within buttons (INTEGER)
                                radius: 4,            // the corner radius on each button (INTEGER)
                                show_total: false,
                                size: 40,             // the size of each button (INTEGER)
                                color: 'white',
                                enabled: true,
                                // OPTIONAL PARAMETERS
                                url: 'https://www.sharethis.com', // (defaults to current url)
                                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                                description: 'custom text',       // (defaults to og:description or twitter:description)
                                title: 'custom title',            // (defaults to og:title or twitter:title)
                                message: 'custom email text',     // (only for email sharing)
                                subject: 'custom email subject',  // (only for email sharing)
                                username: 'custom twitter handle' // (only for twitter sharing)
                            }}
                        />
                    </Box>
                </Box>
            </Modal>
            {/* Modal */}
        </div>
    )
}

export default Types