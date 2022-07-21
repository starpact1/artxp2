import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Ocasion() {
    return (
        <div>
            <Box sx={{ py: "136px", background: "#f5f6f7" }}>
                <Container variant="ct110" sx={{ }} maxWidth="xl">
                    <Grid container spacing={5} sx={{px: 0, }}>
                        <Grid item sm={5} sx={{ display: "flex", }}>
                            <Box sx={{ display: "flex", width: "100%",  flexDirection: "column", }}>
                                <Typography variant="fs32fw700" color="#000000"> You’ve Got the Occasion, We’ve Got the Experience. </Typography>
                                <Box sx={{width: "85%", pt: "39px"}}>
                                    <Typography variant="fs14fw400">
                                    ARTXP’s art experiences are perfect for any occasion! Because of the diversity of our artists, we guarantee experiences that are suitable for all audiences and all budgets.
                                    </Typography>
                                </Box>

                                <ButtonBase variant="LoadMore" sx={{ mt: "31px", width: "196px", border: "1px solid", "&:hover": { background: "#EFF1F2" }}}>
                                    Browse Experiences
                                </ButtonBase>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>

                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </div>
    )
}

export default Ocasion