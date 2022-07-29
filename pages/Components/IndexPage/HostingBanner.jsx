import React from 'react'
import { Box, Button, ButtonBase, Grid, Typography } from '@mui/material'



function HostingBanner() {
    return (
        <div>
            <Box sx={{ minHeight: "265px", backgroundColor: "#141414", }}>
                <Grid container sx={{ minHeight: "inherit" }}>
                    <Grid item sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "inherit" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography variant='fs32fw700' fontWeight="700"> Become a Hosting Artist Today </Typography>
                            <Box sx={{ fontSize: "14px", textAlign: "left",  lineHeight: "54px", opacity: .5, color: "#fff", fontFamily:"Gordita-Regular" }}>
                                Share your art with the world while earning a valuable income
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ButtonBase variant="shareButton" sx={{ "&:hover": { color: "#ffffff" } }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="align-svg svg" data-v-6cea8114="" data-v-76ca16a0=""><path d="M10.9375 0.625H1.3125C0.574219 0.625 0 1.22656 0 1.9375V11.5625C0 12.3008 0.574219 12.875 1.3125 12.875H10.9375C11.6484 12.875 12.25 12.3008 12.25 11.5625V1.9375C12.25 1.22656 11.6484 0.625 10.9375 0.625ZM11.375 11.5625C11.375 11.8086 11.1562 12 10.9375 12H1.3125C1.06641 12 0.875 11.8086 0.875 11.5625V1.9375C0.875 1.71875 1.06641 1.5 1.3125 1.5H10.9375C11.1562 1.5 11.375 1.71875 11.375 1.9375V11.5625ZM2.70703 10.0039L2.87109 10.168C2.98047 10.3047 3.19922 10.3047 3.33594 10.168L8.66797 4.83594L8.69531 4.86328L8.66797 7.29688C8.66797 7.48828 8.83203 7.625 8.99609 7.625H9.26953C9.46094 7.625 9.59766 7.48828 9.59766 7.29688L9.625 3.57812C9.625 3.41406 9.46094 3.25 9.29688 3.25L5.57812 3.27734C5.38672 3.27734 5.25 3.41406 5.25 3.60547V3.87891C5.25 4.04297 5.38672 4.20703 5.57812 4.20703L8.01172 4.17969L8.03906 4.20703L2.70703 9.53906C2.57031 9.67578 2.57031 9.89453 2.70703 10.0039Z" fill="currentColor"></path></svg>

                            <span style={{ paddingLeft: "12px" }}> Share opportunity </span>
                        </ButtonBase>

                        <ButtonBase variant="shareButton" sx={{ ml: "40px", color: "#ffffff", "&:hover": { backgroundColor: "#202020" } }}>
                            Sign Up now
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default HostingBanner