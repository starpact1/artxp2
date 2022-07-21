import React, { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'

const t1 = [
  {
    image: "image 1",
    text: "text 1"
  },

  {
    image: "image 2",
    text: "text 2"
  },

  {
    image: "image 3",
    text: "text 3"
  },

  {
    image: "image 4",
    text: "text 4"
  }
]

function Index() {

  const [progress, setProgress] = React.useState(0);
  const [color, setColor] = React.useState("red")

  const [watch1, setWatch1] = React.useState(1)

  function next1() {
    setWatch1(prev => prev >= 4 ? 1 : prev + 1)

  }

  useEffect(() => {
    if (progress >= 100)
      setWatch1(prev => prev >= 4 ? 1 : prev + 1)

  }, [progress])


  useEffect(() => {
    console.log(t1[watch1 - 1].text)

  }, [watch1])

  React.useEffect(() => {
    console.log(watch1)

    const timer = setInterval(() => {

      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));

    }, 50);

    // const timer1 = setInterval(() => {

    //     next1()
    //   }, 50*100);




    return () => {

      clearInterval(timer);
      // clearInterval(timer1);

    };
  }, []);


  return (
    <div>
      <Box sx={{ width: "100%", height: "546px", pt: "220px", color: "red" }}>
        <CircularProgress color="inherit" value={progress} thickness={1} variant="determinate" sx={{
          "& .MuiCircularProgress-circle": {
            transition: "none"
          }
        }} />

        <Box sx={{ color: `${progress < 50 ? "red" : "green"}` }}>
          {progress >= 100 && console.log(progress)}
          {progress}
          <br />
          watch: {watch1}
        </Box>

      </Box>
    </div>
  )
}

export default Index