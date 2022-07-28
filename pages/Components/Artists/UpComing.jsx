import React from 'react'
import { Box, Typography } from '@mui/material'
import OnSale from '../IndexPage/OnSale'

function UpComing() {
    return (
        <div style={{borderBottom: "1px solid #f5f6f7", paddingBottom: "120px", marginBottom: "80px"}}>
            <Box sx={{ mb: "24px" }}>
                    <Typography variant="fs18fw700"> Upcoming experiences </Typography>
                </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridRowGap: "40px",
                rowGap: "40px",
                gridColumnGap: "40px",
                MozColumnGap: "40px",
                columnGap: "40px",
                justifyContent: "space-between"
            }}>

                
                <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
                <OnSale sale="on sale" image="/Images/Paintings/p1.png" absoluteText="printmaking" title="Linocut Print Workshop with Henry the Rabbit" price="500 DKK" place="Copenhagen, Denmark" dateString="Tuesday, 19th Jul 2022, 22:00 - 00:30" hosted="Hosted by Craig Martin Wood" />
            </Box>
        </div>
    )
}

export default UpComing