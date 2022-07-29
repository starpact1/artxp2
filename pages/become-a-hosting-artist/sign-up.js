import React, { useState } from 'react'
import { Autocomplete, Box, ButtonBase, InputBase, Typography } from '@mui/material'
import Link from "next/link"
import Image from "next/image"
import styles from "./SignUp.module.css"
import { style } from '@mui/system'

const MediumList = [
  "Acting", "Alchohol Ink", "Animation", "Architecture", "Calligraphy", "Ceramic", "Cinema", "Croquis/Figure Drawing",
  "Dance", "DJ", "Doodle Art", "Drawing", "Fashion", "Figure Drawing", "Glasswork", "Graffiti", "Illustration", "Imporve",
  "Jewellery", "Literature", "Magic", "Mediums.abstractArt", "Medium.intuitivePainting", "MetalWork", "Mixed Media",
  "Mosaic", "Music", "Musical Composition", "Other", "Painting", "Papercut", "Performing Arts", "Photography", "Poetry",
  "Printmaking", "Sand Art", "Sculpture", "Song Writing", "Spoken Word", "Storytelling", "Street Art", "Tatoo",
  "Watercolor Painting", "Woodworking", "Writing"
]

function SignUp() {


  const [val, setVal] = useState("")
  const [showOtherCity, setShowOtherCity] = useState(false)

  const cityChange = (value) => {
    if (value == "Other City") {
      setShowOtherCity(true)
    }
    else {
      setShowOtherCity(false)
    }
  }

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", minHeight: "100vh", flexDirection: "column", position: "relative", }}>
        <Box sx={{ width: "100hw",  minHeight: "100vh", padding: "78px 48px 40px" }}>
          <Box sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            padding: "40px 48px",
            zIndex: 3,
            display: "flex",
            justifyContent: "space-between",
          }}>
            <Link href="/">
              <img src="/Images/Icon/LogoWhite.png" alt="sign up" height="16px" />
            </Link>

            <Box>
              <Typography variant="fs13fw400" fontFamily="Gordita-Regular" color="#000000">
                Already have an account? &nbsp;
                <Link href="/">
                  Sign In
                </Link>
              </Typography>
            </Box>

          </Box>

          <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
            <Box sx={{
              position: "fixed",
              top: "8px",
              left: "8px",
              background: "linear-gradient(180deg,transparent 74.87%,rgba(0,0,0,.1)),url(/Images/SignUp/sign-up-image.png)",
              width: "33vw",
              minWidth: "480px",
              height: "calc(100vh - 16px)",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px"
            }}>

            </Box>

            <Box sx={{ width: "45vw", flexShrink: 0, }}>
            </Box>

            <Box sx={{ pr: "80px", width: "100%", display: "flex", flexDirection: "column" }}>
              <Typography variant="fs20fw700" fontSize="23px"> Create an account </Typography>
              <Typography variant="fs18fw400" mb="48px" fontFamily="Gordita-Regular" fontWeight="23px"> And submit your first experience </Typography>

              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                {/* First Name */}
                <Box sx={{ width: "calc(50% - 8px)", position: "relative", }}>
                  <Box sx={{ paddingBottom: "12px", }}>
                    <Typography variant="fs12fw700"> Your first name </Typography>
                    <InputBase className={styles.inputClass} />
                  </Box>
                </Box>

                {/* Last Name */}
                <Box sx={{ width: "calc(50% - 8px)", position: "relative", }}>
                  <Box sx={{ paddingBottom: "12px", }}>
                    <Typography variant="fs12fw700"> Your last name </Typography>
                    <InputBase className={styles.inputClass} />
                  </Box>
                </Box>

              </Box>


              <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <Box sx={{ paddingBottom: "12px", }}>
                  <Typography variant="fs12fw700"> Your email </Typography>
                  <InputBase className={styles.inputClass} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <Box sx={{ paddingBottom: "12px", }}>
                  <Typography variant="fs12fw700"> Your password </Typography>
                  <InputBase className={styles.inputClass} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <Box sx={{ paddingBottom: "12px", }}>
                  <Typography variant="fs12fw700"> Repeat password </Typography>
                  <InputBase className={styles.inputClass} />
                </Box>
              </Box>

              

              <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <Box sx={{ paddingBottom: "12px", }}>
                  <Typography variant="fs12fw700"> Medium of art </Typography>

                  <Autocomplete
                    className={styles.inputClass}

                    id="tags-standard"

                    // autoSelect
                    // filterSelectedOptions
                    disableClearable
                    options={MediumList}
                    // onChange={(e, newValue) => setVal(newValue)}
                    getOptionLabel={option => option}

                    renderInput={params => {
                      const { InputLabelProps, InputProps, ...rest } = params;

                      return <InputBase  {...params.InputProps} {...rest} autoFocus={true} placeholder="" />
                      // return <TextField {...params} />
                    }
                    }

                  // renderOption={ handleRenderOption }
                  />


                </Box>
              </Box>

              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
                <Box sx={{ paddingBottom: "12px", width: "calc(50% - 8px)" }}>
                  <Typography variant="fs12fw700"> City </Typography>
                  <select onChange={(e) => cityChange(e.target.value)} className={styles.inputClass} style={{ padding: "8px 6px" }}>
                    <option>Copenhagen</option>
                    <option>Aarhus</option>
                    <option>Berlin</option>
                    <option>Amsterdam</option>
                    <option>Lisbon</option>
                    <option>NYC</option>
                    <option>Other City</option>
                  </select>
                </Box>

                {showOtherCity &&
                  <Box sx={{ width: "calc(50% - 8px)", position: "relative", }}>
                    <Box sx={{ paddingBottom: "12px", }}>
                      <Typography variant="fs12fw700"> Other City </Typography>
                      <InputBase className={styles.inputClass} placeholder="Copenhagen, Denmark" />
                    </Box>
                  </Box>
                }
              </Box>

              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
                <label htmlFor="online" className={styles.label1} >
                  <input id="online" type="checkbox" className={styles.checkboxInput} />
                  <span style={{ paddingTop: "-6px", paddingLeft: "6px" }}> You agree to ARTXP´s
                    <Link href="#" >
                      <span className={styles.linkHover}> Hosting Artist Terms & Conditions </span>
                    </Link>
                    and &nbsp;
                    <Link href="#" >
                      <span className={styles.linkHover}>
                        Privacy Policy.
                      </span>
                    </Link>
                  </span>
                  <span className={styles.checkmark}></span>
                </label>
              </Box>


              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
                <ButtonBase variant="shareButton" sx={{ fontSize: "13px", lineHeight: "18px", mt: "61px",  color: "#ffffff", background: "#141414", "&:hover": { backgroundColor: "#2B2B2B" } }}>
                  Create account
                </ButtonBase>
              </Box>








            </Box>

          </Box>

        </Box>
      </Box>
    </div>
  )
}

export default SignUp