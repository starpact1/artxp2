import React from 'react'
import AreYouReady from '../Components/BecomeAHostingArtist/AreYouReady'
import ArtXp from '../Components/BecomeAHostingArtist/ArtXp'
import EasySetup from '../Components/BecomeAHostingArtist/EasySetup'
import EveryThingSection from '../Components/BecomeAHostingArtist/EveryThingSection'
import HeroSection from '../Components/BecomeAHostingArtist/HeroSection'
import { Box } from '@mui/material'

function Index() {
  return (
    <div>
       <HeroSection />
       <EveryThingSection />
       <EasySetup />
       <ArtXp />
       <AreYouReady />
       <Box sx={{mt: "-115px"}}></Box>
    </div>
  )
}

export default Index