import { Container } from '@mui/material'
import React from 'react'
import Cover from '../Components/Artists/Cover'
import HostingBanner from '../Components/IndexPage/HostingBanner'

function Index() {
  return (
    <div>
        <Cover />
        <div style={{marginTop: "40px"}}>
            <Container variant="ct110" maxWidth="xl">
                <HostingBanner />
            </Container>            
        </div>
    </div>
  )
}

export default Index