import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Image from "next/image"

function OnSale({sale, image, absoluteText, title, price, place, dateString, hosted, sOnline=false, minimum=false}) {

  const [isMouseIn, setIsMouseIn] = useState(false)

  const [saleColor, setSaleColor] = useState("")
  const [saleBColor, setSaleBColor] = useState("")

  useEffect(() => {
    if(sale == "on sale")
    {
      setSaleColor( "#00949d" )
      setSaleBColor( "#E5F4F5" )
    }
    else if(sale == "selling fast" || sale == "selling out")
    {
      setSaleColor( "#fe2a50" )
      setSaleBColor( "#FFE9ED" )
    }
    
  })
  
    
  const mouseIn = () => {
    setIsMouseIn(true)
  }

  const mouseOut = () => {
    setIsMouseIn(false)
  }

  return (
    <div>
      <Box sx={{ position: "relative", cursor: "pointer", mb: "28px" }} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>

        <Box sx={{ width: "100%", textAlign: "center", background: `${saleBColor}` }} >
          <Typography variant='fs11fw400' textTransform="uppercase" color={saleColor} lineHeight="normal" > {sale} </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "220px", position: "relative" }}>

          {isMouseIn &&
            <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(20,20,20,.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="fs11fw400" color="#ffffff" textTransform="uppercase"> Go To Experience </Typography>
            </Box>
          }

          <img src={image} style={{ width: "100%",  height: "100%", objectFit: "cover", objectPosition: "center" }} all="images1" />
          <Box sx={{ position: "absolute", top: "16px", left: "16px", backgroundColor: "hsla(0,0%,100%,.7)", color: "#141414", py: "5px", px: "8px" }}>
            <Typography variant="fs11fw400" color="#141414" textTransform="uppercase">  {absoluteText} </Typography>
          </Box>

          {sOnline &&           
            <Box sx={{ position: "absolute", top: "16px", right: "16px", backgroundColor: "rgba(20,20,20,.4)", color: "#141414", py: "5px", px: "8px" }}>
              <Typography variant="fs11fw400" color="#ffffff" textTransform="uppercase">  Online </Typography>
            </Box>
          }
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "21px", textAlign: "left" }}>
          <Box sx={{ width: "70%", fontSize: "13px", fontWeight: "700", }}>
            {isMouseIn ?
              <u>
                {title}
              </u>
              :
              <>
              {title}
              </>
              
            }

          </Box>
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <Typography variant="fs12fw700" whiteSpace="nowrap"> {price} </Typography>
            {minimum &&
            <Typography variant="fs11fw400" lineHeight="14px" color="#545454" > minimum </Typography>
            }
          </Box>
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <Typography variant="fs11fw400" lineHeight="14px" color="#545454" > {place} </Typography>
        </Box>

        <Box sx={{mt: "12px", pt:"2px", display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography  variant="fs10fw400" fontWeight="500" color="#545454"> {dateString} </Typography>
        
          <Typography variant="fs10fw400" color="#545454"> {hosted} </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default OnSale