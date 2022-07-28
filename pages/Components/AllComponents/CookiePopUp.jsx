import React, { useEffect, useState } from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'
import cookieCutter from "cookie-cutter"


function CookiePopUp() {
    const [isCookie, setIsCookie] = useState(false)
    
    useEffect(() => {
      if(cookieCutter.get('myCookieName') === undefined)
      {
        setIsCookie(false)
      }
      else
      {
        setIsCookie(true)
      }
    }, )

    const setCookies = () => {
        cookieCutter.set('myCookieName', "some cookies")
        setIsCookie(true)
    }
    


    return (
        <div>
            {isCookie === false &&
            <Box sx={{
                position: "fixed", bottom: "0px", backgroundColor: "#242427",
                opacity: .9,
                width: "100%",
                padding: "25px 40px",
                zIndex: 2147483645,
                display: "flex"

            }}>
                <Box sx={{ maxWidth: "80%" }}>
                    <Typography variant="fs8fw400" component="div" color="#ffffff"> THIS WEBSITE USES COOKIES </Typography>
                    <Typography variant="fs13fw400" lineHeight="1.4" component="p" fontWeight="400" color="#999" fontFamily="Gordita-Regular"> We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. </Typography>
                </Box>
                <Box sx={{ maxWidth: "20%" }}>
                    <ButtonBase sx={{
                        padding: "5px 13px",
                        border: "1px solid #f5f6f7",
                        width: "100px",
                        textDecoration: "none",
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginTop: "10px",
                        marginLeft: "10px",
                        fontSize: "10px",
                        backgroundColor: "transparent",
                        color: "#f5f6f7",
                    }}>
                        Set Cookies
                    </ButtonBase>

                    <ButtonBase sx={{
                        padding: "5px 13px",
                        border: "1px solid #f5f6f7",
                        width: "100px",
                        textDecoration: "none",
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginTop: "10px",
                        marginLeft: "10px",
                        fontSize: "10px",
                        backgroundColor: "#ffffff",
                        color: "#141414",
                        fontWeight: "bold"
                    }}
                    onClick={setCookies}
                    >
                        Accept All
                    </ButtonBase>

                    
                </Box>

            </Box>
            }
        </div>
    )
}

export default CookiePopUp