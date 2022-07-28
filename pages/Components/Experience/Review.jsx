import React from 'react'
import { Box, Button, ButtonBase, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import SingleReview from './SingleReview';

function Review() {
    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "end", pt: "6px", mb: "46px" }}>
                <Box sx={{ mr: "12px" }}>
                    <Typography variant="fs16fw700" component="div" fontFamily="Gordita"> Reviews </Typography>
                </Box>

                <Box>
                    <StarIcon fontSize='' sx={{ mb: "-3px" }} />
                    <Typography variant="fs11fw400"> <b> 4.90 </b> (10) </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <SingleReview firstname="Natasha" lastname="N" date="29/05/2022" rating={5} review="Rita Howis was an amazing host, very attentive and professional! We had a great time!" />
                <SingleReview firstname="Nanna" lastname="P" date="29/05/2022" rating={5} review="Sikke en skøn oplevelse. Mange tak for at få muligheden, det sætter jeg stor pris på :-)
Det er ikke sidste gang jeg kommer en tur forbi en af jeres finde workshops :-)" />

                <SingleReview firstname="Natasha" lastname="N" date="29/05/2022" rating={5} review="Rita Howis was an amazing host, very attentive and professional! We had a great time!" />
                <SingleReview firstname="Nanna" lastname="P" date="29/05/2022" rating={5} review="Sikke en skøn oplevelse. Mange tak for at få muligheden, det sætter jeg stor pris på :-)
Det er ikke sidste gang jeg kommer en tur forbi en af jeres finde workshops :-)" />

            </Box>

            <Box>
                <ButtonBase variant="LoadMore"> Load more reviews </ButtonBase>
            </Box>


        </div>
    )
}

export default Review