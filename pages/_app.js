import { CssBaseline, ThemeProvider } from '@mui/material'
import Theme from '../Theme/Theme'
import '../styles/globals.css'
import NavBar from './Components/AllComponents/NavBar'
import Footer from './Components/AllComponents/Footer'
import NavBar1 from './Components/AllComponents/NavBar1'
import CookiePopUp from './Components/AllComponents/CookiePopUp'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        {/* <NavBar /> */}
        <NavBar1 />
        <Component {...pageProps} />
        <Footer />
        <CookiePopUp />
      </ThemeProvider>
    </>
  )
}

export default MyApp
