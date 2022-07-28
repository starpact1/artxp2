import React, { useState } from 'react'
import { Button, ButtonBase, Collapse, Typography } from '@mui/material'
import styles from "../../experience/index.module.css"

function Location() {

    const [readMore, setReadMore] = useState(false)

    return (
        <div style={{marginBottom: "60px"}}>
            <Typography variant="fs16fw700" component="div" fontFamily="Gordita"> Location </Typography>
            <Typography variant="fs12fw700" component="div" fontWeight={400} lineHeight="16.8px">
                NataWatts Gallery
            </Typography>
            <Typography variant="fs12fw700" component="div" fontWeight={400} lineHeight="16.8px">
                Hyskenstræde 12
            </Typography>
            <Typography variant="fs12fw700" component="div" fontWeight={400} lineHeight="16.8px">
                1207, Copenhagen
            </Typography>
            <Typography variant="fs12fw700" component="div" fontWeight={400} lineHeight="16.8px">
                Denmark
            </Typography>

            <Collapse in={readMore} sx={{mt: `${ readMore ? "18px": "0px"}` }}>
                <Typography variant="fs12fw700" component="div" fontWeight={400} lineHeight="16.8px">
                    A beautiful spacious gallery in the heart of Copenhagen.
                </Typography>
            </Collapse>

            <ButtonBase className={styles.readMoreButton} onClick={() => setReadMore(prev => !prev)}>
                {readMore ?
                    "Hide Locations details"
                    :
                    "About the location"
                }
            </ButtonBase>




        </div>
    )
}

export default Location