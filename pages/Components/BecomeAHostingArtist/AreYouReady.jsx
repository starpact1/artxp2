import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'
import Link from "next/link"

function AreYouReady() {
    return (
        <div>
            <Box sx={{ textAlign: "center", padding: "180px 0px 210px" }}>
                <Box sx={{ marginBottom: "80px", }}>
                    <Typography fontSize="40px" fontWeight="400" lineHeight="120%">
                        Are You Ready to Create
                        <br />
                        Your First Experience?
                    </Typography>
                </Box>
                <Box>
                    <Link href="/become-a-hosting-artist/sign-up">
                        <ButtonBase variant="shareButton" sx={{ color: "#ffffff", background: "#141414", "&:hover": { background: "#2B2B2B" } }}>
                            Start Hosting!
                        </ButtonBase>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default AreYouReady