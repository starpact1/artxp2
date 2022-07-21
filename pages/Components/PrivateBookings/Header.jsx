import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'

function Header() {
  return (
    <div>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", pt: "136px", textAlign: "center" }}>
                <Typography variant="fs16fw500" fontWeight="400"> Private Experiences </Typography>

                <Typography mt="22px" variant="fs32fw700" fontWeight="400" lineHeight="42px" color="#000000"> Transforming your occasion into a fun, </Typography>
                <Typography variant="fs32fw700" fontWeight="400" color="#000000"> artistic, and memorable one </Typography>

                <ButtonBase variant="shareButton" sx={{ mt: "61px", backgroundColor: "#141414", width: "229px", color: "#ffffff", "&:hover": { backgroundColor: " rgba(20,20,20,.9)" } }}>
                    View Private Experiences
                </ButtonBase>

                <Box sx={{mt: "102px", display: "flex", width: "86%", justifyContent: "space-around", alignItems: "center"}}>
                    <Box>
                        <img src="/Images/Images/c1.png" />
                    </Box>
                    
                    <Box> <img src="/Images/Images/c2.png" /> </Box>
                    <Box> <img src="/Images/Images/c3.png" /> </Box>
                    <Box> <img src="/Images/Images/c4.png" /> </Box>
                    <Box> <img src="/Images/Images/c5.png" /> </Box>
                    <Box> <img src="/Images/Images/c6.png" /> </Box>
                    <Box> <img src="/Images/Images/c7.png" /> </Box>
                </Box>
            </Box>
    </div>
  )
}

export default Header