import { CssBaseline, ThemeProvider } from '@mui/material'
import Theme from '../Theme/Theme'
import '../styles/globals.css'
import NavBar from './Components/AllComponents/NavBar'
import Footer from './Components/AllComponents/Footer'
import NavBar1 from './Components/AllComponents/NavBar1'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        {/* <NavBar /> */}
        <NavBar1 />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
