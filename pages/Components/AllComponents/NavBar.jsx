import React from 'react';
import Image from 'next/image'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Logo from "../../Images/LogoDark.png"
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router"
import Link from "next/link"


const pages = [
  {
    pageName: "Home",
    url: "/",
  },

  {
    pageName: "Upcoming Experiences",
    url: "/upcoming-experiences",
  },

  {
    pageName: "Private Bookings",
    url: "/private-bookings",
  },

  {
    pageName: "Become a Hosting Artist",
    url: "/become-a-hosting-artist",
  },

  {
    pageName: "Hosting Artists",
    url: "/hosting-artist",
  },

  {
    pageName: "About Us",
    url: "/about-us",
  },

  {
    pageName: "Contact Us",
    url: "contact-us",
  }
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    if (url != "")
      navigate(url)
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useRouter();


  return (
    <div>

      <AppBar position="fixed" sx={{ backgroundColor: "rgba(18, 18, 18, 0.4)", backdropFilter: "blur(4px)" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            
          </Typography> */}
            <Box component="img" src="/Images/Icon/LogoWhite.png" sx={{ width: "132px", mr: 2, display: { xs: "none", md: "flex" } }}></Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {/* Menu For Mobile */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => { handleCloseNavMenu("") }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, key) => (
                  <MenuItem key={key}
                  // onClick={() => { handleCloseNavMenu(page.url) }}
                  >
                    <Link href={page.url}>
                      <Typography textAlign="center">{page.pageName}</Typography>
                    </Link>

                  </MenuItem>

                ))}
              </Menu>
              {/* Menu For Mobile */}
            </Box>
            {/* Logo For Mobile */}

            <Box component="img" src="/Images/LogoDark.png" sx={{ width: "156px", mr: 2, display: { xs: "flex", md: "none" } }}></Box>

            {/* Logo For Mobile */}

            {/* Menu For Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "right" }}>
              {pages.map((page, key) => (
                <Button
                  key={key}
                  // onClick={handleCloseNavMenu()}
                  // onClick={() => { navigate(page.url) }}
                  sx={{ my: 2, color: "white", display: "block", textTransform: "none" }}
                >
                  <Link href={page.url}>
                    {page.pageName}
                  </Link>

                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default NavBar