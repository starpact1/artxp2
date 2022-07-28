import React, { useState } from 'react'
import { Box, Button, Collapse, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import styles from "../../experience/index.module.css"


function SingleReview({ firstname, lastname, date, rating, review = ""  }) {

    const src = "https://ui-avatars.com/api/?name=" + firstname + " " + lastname + "&rounded=true&font-size=0.3&size=48px&background=F5F6F7"

    const [readMore, setReadMore] = useState(false)

    return (
        <div>
            <Box sx={{ width: "auto", maxWidth: "300px", mb: "65px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: "24px" }}>
                    <Box sx={{ mr: "16px" }}>
                        <img src={src} />
                    </Box>
                    <Box >
                        <Typography variant="fs12fw700" component="div" fontWeight="400"> {firstname} </Typography>
                        <Typography variant="fs8fw400" component="div" lineHeight="normal" fontWeight="400"> {date} </Typography>
                    </Box>
                </Box>
                <Box sx={{ fontSize: "12px", mb: "16px" }}>

                    {[...Array(rating)].map((item, key) =>
                        <StarIcon key={key} fontSize='' />
                    )}

                </Box>

                <Box>
                    {review.length < 108 ?
                        <Typography variant="fs11fw400" component="div" >
                            {review}
                        </Typography>

                        :
                        <>
                            <Collapse in={readMore} collapsedSize="46px" sx={{ position: "relative" }}>
                                <Box sx={{ fontSize: "13px", lineHeight: "150%", }}>
                                    {/* {readMore == false &&
                                        <Box className={styles.textOverlay} sx={{zIndex: "9999", backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 70%,hsla(0,0%,100%,.9) 95%,#fff);"}}></Box>
                                    } */}

                                    {readMore == false &&
                                        <Box sx={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 70%,hsla(0,0%,100%,.9) 95%,#fff);" }}>

                                        </Box>
                                    }

                                    <Typography variant="fs11fw400" component="div" >
                                        {review}
                                    </Typography>
                                </Box>
                            </Collapse>
                            <Button className={styles.readMoreButton} onClick={() => setReadMore(prev => !prev)}>
                                {readMore ?
                                    "Close Review "
                                    :
                                    "Read full review"
                                }
                            </Button>
                        </>

                    }
                </Box>
            </Box>
        </div>
    )
}

export default SingleReview