import React from 'react'
import { Box, Typography } from '@mui/material'

function ArtXp() {

    const c2 = [
        {
            title: "Specialization",
            text: "The hosting artist should possess specialized skills, expertise, and knowledge in their medium of art. These specialized skills enable you to create a memorable experience and provide value for your guests."
        },
        {
            title: "Structure",
            text: "As our valued hosting artist, we encourage a structured experience with intention and clear flow that audiences will understand and appreciate.The structure is meant to give guests more clarity and help manage expectations."
        },
        {
            title: "Space",
            text: "Every hosting artist will host their experience in a welcoming and inviting space. Some of these spaces include private homes, studios, galleries, local venues (such as bars, cafes, theatres, concert halls, and museums, among others)."
        },
        {
            title: "Social",
            text: "Our artists love hosting and meeting new people from different backgrounds. Social artists are personable and create lasting positive impressions wherever they go"
        },
        {
            title: "Smiles",
            text: "A hosting artist should naturally focus on warming the hearts and creating smiles across the faces of their guests. Guests who leave with good memories will provide a positive review and are sure to attend again and spread the word about your experience."
        },
        {
            title: "Bonus S – it’s in the Small details.",
            text: "Successful hosting artists are attentive to the finer details. By paying attention to the smallest details, your experience is sure to stand out."
        },
        
    ]

  return (
    <div>
        <Box sx={{ textAlign: "center", width: "90%",  maxWidth: "1300px", margin: "auto", }}>
            <Box sx={{ marginBottom: "24px", }}>
                <Typography variant="fs32fw400" fontFamily="Gordita-Regular"> ARTXP’s 5 S’s </Typography>
            </Box>
            <Box sx={{ margin: "0 auto 80px", width: "50%", }}>
                <Typography variant="fs18fw400" fontFamily="Gordita-Regular"> At ARTXP, we maintain the highest service and quality standards and only partner with artists who share in our vision of excellence, dedication, and sheer passion. We review every experience to ensure the below requirements are met. </Typography>
            </Box>

            
            <Box  sx={{ justifyContent: "center", gridGap: "64px", gap: "64px", flexWrap: "wrap", display: "flex",}}>
             {c2.map((item, key) =>

                <Box key={key} sx={{ width: "324px", marginBottom: "80px", textAlign: "center" }}>
                    <Box sx={{marginBottom: "16px"}}>
                        <Typography variant="fs16fw700" > {item.title} </Typography>
                    </Box>
                    <Box>
                        <Typography variant="fs14fw400" fontFamily="Gordita-Regular"> {item.text} </Typography>
                    </Box>
                </Box>

            )}
            </Box>
             
        </Box>
    </div>
  )
}

export default ArtXp