import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import HostingBanner from '../Components/IndexPage/HostingBanner'
import styles from "./index.module.css"

function Index() {
  return (
    <div>
      <Box sx={{ paddingTop: "184px", width: "90%", maxWidth: "1300px", margin: "auto", }}>
        <Typography variant="fs32fw700" color="#000000"> Privacy Policy </Typography>


        {/* Purpose */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Purpose </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 1. Purpose </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 1.1 ARTXP ApS (“ARTXP”) has adopted this privacy policy to inform you how personal data is processed. </Typography>
            </p>
          </Box>
        </Box>


        {/* Contact Information */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Contact information </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 2. Contact information </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 2.1 ARTXP is the data controller and bears responsibility that your personal data is processed in concordance with existing laws.
                Contact information at ARTXP: </Typography>
            </p>

            <p className={styles.text2} style={{ marginTop: "-14px" }}>
              <Typography variant="fs14fw400" color="inherit"> Contact information at ARTXP: </Typography>
            </p>

            <p className={styles.text2} >
              <Typography variant="fs14fw400" color="inherit"> Contact: ARTXP Customer Service <br />
                CVR number: 41932260 <br />
                Tel.: +4553760106 <br />
                Email: service@art-xp.com <br />
                Website: www.art-xp.com </Typography>
            </p>
          </Box>
        </Box>


        {/* ARTXP ensures */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> ARTXP ensures fair and transparent data processing </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 3. ARTXP ensures fair and transparent data processing </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 3.1 When ARTXP requests your personal data, you are informed as to which data is being used and to what specific purpose. This information is available to you at the time of the collection of your personal data. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 3.2 If ARTXP collects your personal data from other providers such as a public authority or business partner, you will be informed hereof no later than 10 days from the collection of the data. ARTXP must also disclose the purpose of the data collection and the legal framework permitting ARTXP access to your personal data. </Typography>
            </p>
          </Box>
        </Box>

        {/* Types of data collected */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Types of data collected </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 4. Types of data collected </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 4.1 ARTXP uses personal data processing for enabling you to purchase tickets for artistic and cultural experiences via our platform (www.art-xp.com). Processed data cover: name, telephone number, address, e-mail, date of birth, payment information, workplace, and related information. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 4.2 Additionally, ARTXP may process personal data actively transferred to ARTXP by that same person. </Typography>
            </p>
          </Box>
        </Box>


        {/* Application and storage of collected personal data */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Application and storage of collected personal data </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 5. Application and storage of collected personal data </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 5.1 The purpose of collecting and processing personal data is to enable you to purchase tickets to artistic and cultural experiences via our platform (www.art-xp.com).</Typography>              
            </p>
          </Box>
        </Box>


        {/* Storage */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Storage </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 6. Storage </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 6.1 The information is stored for the allowed period only and is deleted when the personal data is no longer required by ARTXP. The duration of the period depends on the type of the information and the reason for the storing. </Typography>              
            </p>
          </Box>
        </Box>


        {/* Transmission of personal data */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Transmission of personal data </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 7. Transmission of personal data </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 7.1 ARTXP may transmit personal data to a third party only in compliance with regulations stated in this privacy policy. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 7.2 ARTXP may transmit or share personal data in order to abide by a judicial obligation. Transmission of data may also occur following directions by the court or other public authority for trademark protection, privileges, or property rights. This includes the exchange of data with other companies and organizations as safeguard against fraud. </Typography>  <br/>            
              <Typography variant="fs14fw400" color="inherit"> 7.3 ARTXP makes use of service providers and data processors acting on our behalf. These services include hosting and system maintenance, email service etc. Business partners have access to our data to the extent necessary to do their job and deliver requested services. Business partners are contractually obligated to handle data in absolute confidence and are not authorized to use data for any purpose other than those contractually stated by ARTXP. ARTXP supervises that business partners meet their obligations in this regard. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 7.4 Should ARTXP in exceptional cases transmit personal data to a service provider or data processor outside of the EU/EEA, ARTXP guarantees this data transmission happens in accordance with legal requirements. </Typography> <br/>
            </p>
          </Box>
        </Box>


        {/* Security */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Security </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 8. Security </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 8.1 ARTXP protects your personal data and has adopted internal data security policies containing guidelines and precautionary measures to protect your personal data from destruction, loss, alteration or unauthorized disclosure and to prevent from any unauthorized access to the data. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 8.2 ARTXP has set procedures for assignment of security levels for employees processing personal data containing information on personal interests and habits. To prevent loss of data ARTXP makes ongoing backup copies of the personal data and protects data confidentiality and authenticity by use of encryption. </Typography>  <br/>            
              <Typography variant="fs14fw400" color="inherit"> 8.3 In the event of a data security breach implicating reasonable personal risk of discrimination, identity theft, economic loss, and damage to reputation or other significant downside, ARTXP must inform you without undue delay.s </Typography> <br/>
            </p>
          </Box>
        </Box>


        {/* Your rights */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Your rights </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 9. Your rights </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 9.1 In general </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.1.1 To access your data in order to have it corrected or deleted or to protest our data processing, an enquiry for this must be made to ARTXP. An answer will come as soon as possible and no later than a month from the time of the received enquiry. </Typography>  <br/>            
              <Typography variant="fs14fw400" color="inherit"> 9.2 Access to your personal data </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.2.1 If requested at any time, ARTXP must inform you which data is processed, how and from where it was collected and how it is being used. You also have the right to be informed as to how long your personal data will be stored and who has access to your data in case of data transmission. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.2.2 Access to your data in process can be obtained by request to ARTXP. The access might be restricted in consideration of the privacy of other people or trade secrets and intellectual property rights. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.2.3 To make use of your privileges a request must be made to ARTXP. Contact information can be found under section 2.1. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.3 Correction or deletion of incorrect data. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 10.3.1 You have the right to have inaccurate personal data corrected. A request must be made to ARTXP stating the inaccuracies as well as your corrections to the data. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.3.2 In some cases, ARTXP is obligated to delete your personal data if you so request. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.3.3 You may also contact us for clarification if you believe your personal data is being processed against regulations or against other legal obligations. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.3.4 If a request for correction or deletion of your personal data is made and the request is warranted, we seek to correct or delete your data as soon as possible. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.4 Objection to data storage and transmitting </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.4.1 You have the right to object to the processing of your personal data. You may also object to ARTXP transmitting your data for sales promotion purposes. If your objection is warranted the processing of your personal data will be terminated. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> 9.4.2 You are entitled to receive the personal data you have made available for ARTXP as well as data about you that has been collected from other operators with your consent. </Typography> <br/>
              <Typography variant="fs14fw400" color="inherit"> You are also entitled to have your data sent if ARTXP handles your data as part of a contract in which you are a party. You also have the right to transfer these personal data to another provider of services. </Typography> <br/>
              
            </p>
          </Box>
        </Box>

        {/* Version */}
        <Box className={styles.section}>
          <Box sx={{ width: "220px" }}>
            <Typography variant="fs20fw700" lineHeight="22px"> Version </Typography>
          </Box>

          <Box className={styles.textBlock}>
            <p className={styles.text1}>
              <Typography variant="fs14fw400"> 10. Version </Typography>
            </p>

            <p className={styles.text2}>
              <Typography variant="fs14fw400" color="inherit"> 10.1 This privacy and cookie policy has been modified on 8 June 2021 </Typography>
            </p>
          </Box>
        </Box>




      </Box>

      <Container  variant="ct110" maxWidth="xl" sx={{ mt: "65px" }}>
        <HostingBanner />
      </Container>
    </div>
  )
}

export default Index