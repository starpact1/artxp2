import { createTheme } from '@mui/material'


const Theme = createTheme({
  palette: {
    primary: {
      main: "#1135d4"
    }
  },

  typography: {
    fontFamily: [
      'Gordita-Regular',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    bannerHeading: {
      fontWeight: 700,
      fontSize: "56px",
      color: "#FFFFFF",
      fontStyle: "normal",
      lineHeight: "67px"
    },

    bannerSubHeading: {
      fontWeight: 500,
      fontSize: "16px",
      color: "#FFFFFF",
      fontStyle: "normal",
      lineHeight: "62px"
    },

    bannerSubHeading2: {
      fontWeight: 400,
      fontSize: "16px",
      color: "#FFFFFF",
      fontStyle: "normal",
      lineHeight: "100%"
    },

    bannerSubHeading3: {
      fontWeight: 400,
      fontSize: "14px",
      color: "#FFFFFF",
      fontStyle: "normal",
      lineHeight: "100%"
    },

    fs16fw500: {
      fontWeight: 500,
      fontSize: "16px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "100%"
    },

    fs16fw700: {
      fontWeight: 700,
      fontSize: "16px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "140%"
    },

    fs14fw400: {
      fontWeight: 400,
      fontSize: "14px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "100%"
    },

    fs13fw400: {
      fontWeight: 400,
      fontSize: "13px",
      color: "#ffffff",
      fontStyle: "normal",
      lineHeight: "18.2px"
    },

    fs13fw700: {
      fontWeight: 700,
      fontSize: "13px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "18.2px"
    },

    fs12fw700: {
      fontWeight: 700,
      fontSize: "12px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "16px"
    },

    fs11fw400: {
      fontWeight: 400,
      fontSize: "11px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "15.4px"
    },

    fs10fw400: {
      fontWeight: 200,
      fontSize: "10px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "14px"
    },

    fs9fw400: {
      fontWeight: 200,
      fontSize: "9px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "140%"
    },


    fs18fw700: {
      fontWeight: 700,
      fontSize: "18px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "25.2px"
    },

    fs18fw400: {
      fontWeight: 400,
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "140%"
    },

    fs26fw700: {
      fontWeight: 700,
      fontSize: "26px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "35px"
    },

    fs20fw700: {
      fontWeight: 700,
      fontSize: "20px",
      color: "inherit",
      fontStyle: "normal",
      lineHeight: "35px",
      letterSpacing: "0px"
    },


    fs32fw700: {
      fontWeight: 700,
      fontSize: "32px",
      color: "#fff",
      fontStyle: "normal",
      lineHeight: "35px"
    },

    fs32fw400: {
      fontWeight: 400,
      fontSize: "32px",      
      fontStyle: "normal",
      lineHeight: "120%"
    },

    fs44fw700: {
      fontWeight: 700,
      fontSize: "44px",
      color: "#fff",
      fontStyle: "normal",
      lineHeight: "normal"
    },
  },

  components: {
    MuiContainer: {
      variants: [
        {
          props: { variant: "ct" },
          style: {
            paddingLeft: "28px",
            paddingRight: "28px"
          }
        },

        {
          props: { variant: "ct29" },
          style: {
            paddingLeft: "29px",
            paddingRight: "29px"
          }
        },

        {
          props: { variant: "ct1" },
          style: {
            paddingLeft: "56px",
            marginLeft: "152px",
            marginTop: "170px",
            paddingRight: "56px",
          }
        },

        {
          props: { variant: "ct110" },
          style: {
            // margin: "0px",
            padding: 0,
            paddingLeft: "71px !important",
            paddingRight: "71px !important",

          }
        },
      ]
    },

    MuiButton: {

      variants: [

        {
          props: { variant: "SearchButton" },
          style: {
            fontWeight: "200",
            fontSize: "13px",
            lineHeight: "18px",
            color: "#FFFFFF",
            width: "200px",
            background: "#141414",
            // backgroundImage: "linear-gradient(180deg, #f24406 80%, #a12e02 100%)",
            // backgroundImage: "linear-gradient(45deg, rgba(247,208,1,1) 72%, rgba(237,249,113,1) 100%)",
            // background: "linear-gradient(98.35deg, #00286B -3.15%, #1D58AF 34.38%, #1433FF 76.96%)",


            backgroundRepeat: "no-repeat",

            // height: "57px",
            width: "100%",
            boxShadow: "0px 8px 16px rgba(27, 57, 255, 0.2)",
            borderRadius: "6px",

            width: "136px",
            height: "36px",


            fontStyle: "normal",


            textTransform: "none",
            "&:hover": {
              background: "#2B2B2B",
            }
          }
        }
      ]
    },

    MuiButtonBase: {

      variants: [
        {
          props: { variant: "shareButton" },
          style: {
            paddingTop: "14px",
            paddingLeft: "32px",
            paddingBottom: "14px",
            paddingRight: "32px",
            borderRadius: "4px",
            textAlign: "center",
            fontSize: "13px",
            lineHeight: "140%",
            color: "#8e9499",
            cursor: "pointer",
            border: "1px solid #2d2f30",
          }
        },

        {
          props: { variant: "LoadMore" },
          style: {
            paddingTop: "14px",
            paddingLeft: "32px",
            paddingBottom: "14px",
            paddingRight: "32px",
            borderRadius: "4px",
            textAlign: "center",
            fontSize: "13px",
            lineHeight: "140%",
            color: "#141414 ",
            cursor: "pointer",
            border: "1px solid #f5f6f7",
            "&:hover": {
              backgroundColor: "rgba(245,246,247,.5)"
            }
          }
        }
      ]
    }


  }
})

export default Theme