import React, { useEffect, useState } from 'react'
import { AppBar, Box, Container, Grid, Typography } from '@mui/material'
import { useRouter } from "next/router"
import Link from "next/link"

function NavBar1() {

  const { pathname } = useRouter()
  const [logo, setLogo] = useState("/Images/Icon/LogoDark.png");
  const [scrollTop, setScrollTop] = useState(0)

  const listenToScroll = () => {
    setScrollTop(window.pageYOffset)

  }

  useEffect(() => {

    window.addEventListener('scroll', listenToScroll)

    if (pathname == "/") {
      setLogo("/Images/Icon/LogoWhite.png")
    }
  }, [])


  return (
    <div>
      {pathname != "/become-a-hosting-artist/sign-up" &&
      <>
      {(pathname == "/" || pathname == "/become-a-hosting-artist" || pathname == "/artists") && scrollTop < 10 ?
        <AppBar position="fixed" onMouseEnter={() => setLogo("/Images/Icon/LogoDark.png")} onMouseLeave={() => setLogo("/Images/Icon/LogoWhite.png")} sx={{ height: "62px", background: "transparent", boxShadow: "none", borderBottom: "0.5px solid rgba(20,20,20,.1)", color: "#fff", justifyContent: "center", alignItems: "center", "&:hover": { background: "#ffffff", color: "#000000 !important" } }}>
          <Container variant="ct110" maxWidth="xl" >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item sm={6} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Link href="/">
                  <img src={logo} style={{cursor: "pointer"}} alt="logo" />
                </Link>

                <Box sx={{ pl: "42px" }}>
                  <Link href="/upcoming-experiences">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Upcoming Experiences </Typography>
                  </Link>
                </Box>

                <Box sx={{ pl: "42px" }}>
                  <Link href="/private-bookings">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Private Bookings </Typography>
                  </Link>
                </Box>

              </Grid>

              <Grid item sm={6} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                <Box sx={{ pr: "42px" }}>
                  <Link href="/become-a-hosting-artist">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Become a Hosting Artist </Typography>
                  </Link>
                </Box>

                <Box sx={{ pr: "20px" }}>
                  <Link href="/">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Sign In </Typography>
                  </Link>
                </Box>

                <Box sx={{ mt: "4px", pr: "20px", fontWeight: "50", height: "12px", borderLeft: "1px solid" }}>

                </Box>

                <Box sx={{}}>
                  <Link href="/">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Skift til Dansk </Typography>
                  </Link>
                </Box>
              </Grid>

            </Grid>
          </Container>
        </AppBar>
        :
        <AppBar position="fixed" onMouseEnter={() => setLogo("/Images/Icon/LogoDark.png")} onMouseLeave={() => setLogo("/Images/Icon/LogoWhite.png")} sx={{ height: "62px", background: "#ffffff", boxShadow: "none", color: "#000000", justifyContent: "center", alignItems: "center", "&:hover": { background: "#ffffff", color: "#000000 !important" } }}>
          <Container variant="ct110" maxWidth="xl" >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item sm={6} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Link href="/">
                  <img src="/Images/Icon/LogoDark.png" style={{cursor: "pointer"}} alt="Logo" />
                </Link>
                <Box sx={{ pl: "42px" }}>
                  <Link href="/upcoming-experiences">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Upcoming Experiences </Typography>
                  </Link>
                </Box>

                <Box sx={{ pl: "42px" }}>
                  <Link href="/private-bookings">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Private Bookings </Typography>
                  </Link>
                </Box>

              </Grid>

              <Grid item sm={6} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                <Box sx={{ pr: "42px" }}>
                  <Link href="/become-a-hosting-artist">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Become a Hosting Artist </Typography>
                  </Link>
                </Box>

                <Box sx={{ pr: "20px" }}>
                  <Link href="/">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Sign In </Typography>
                  </Link>
                </Box>

                <Box sx={{ mt: "4px", pr: "20px", fontWeight: "50", height: "12px", borderLeft: "1px solid" }}>

                </Box>

                <Box sx={{}}>
                  <Link href="/">
                    <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="inherit" sx={{ cursor: "pointer" }}> Skift til Dansk </Typography>
                  </Link>
                </Box>
              </Grid>

            </Grid>
          </Container>
        </AppBar>
      }
      </>
      }
      
    </div>
  )
}

export default NavBar1