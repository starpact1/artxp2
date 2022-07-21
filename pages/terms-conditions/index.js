import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import styles from "../privacy-policy/index.module.css"
import HostingBanner from '../Components/IndexPage/HostingBanner'

function Index() {
    return (
        <div>

            <Box sx={{ paddingTop: "184px", width: "90%", maxWidth: "1300px", margin: "auto", }}>
                <Typography variant="fs32fw700" color="#000000"> Ticket Purchase Terms & Conditions </Typography>


                {/* Introduction */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Introduction </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 1. Introduction </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.1 These terms and conditions for sales (the “Terms”) apply for all users of the platform on art-xp.com (the “Website”) when purchasing tickets for an experience listed on the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.2 The Website is provided by ARTXP ApS, CVR no. 41932260, Tuborgvej 85, 2900 Hellerup, Denmark (“ARTXP”, “we” and “us”). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.3 When purchasing tickets for experiences via our platform at www.art-xp.com (the “Website”), you are explicitly accepting these Terms. If you do not accept the Terms, you must refrain from making any purchases. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.4 We reserve the right to amend these Terms from time to time. If we implement changes, an updated version of the Terms will be available on our Website. Therefore, we recommend that you regularly stay informed of the current Terms. All purchases are subject to the version of the Terms applicable at the time of completing the purchase. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.5 The Terms and Conditions constitutes together with our quotation, the confirmation from us and our privacy policy, the entire agreement concerning the sale of tickets to you. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.6 Our privacy policy will at any time be available on our Website, and you must explicitly accept our privacy policy in order to complete any purchases. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.7 Notice of filming and photography. By entering the experiences premises, you consent to photography, audio recording, video recording and its/their release, publication, exhibition, or reproduction to be used for promotional purposes on websites, social media, or any other purpose by ARTXP and its affiliates and representatives. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                {/* Refunds and Cancellation */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Refunds and Cancellation </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 2. Refunds and Cancellation </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 2.1 As a general rule, tickets purchased via ARTXP are non-refundable and non-transferable to other experiences. This also applies to the sudden sickness (or any other exhausting circumstance) of the ticket buyer/holder. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.2 Should a Hosting Artist be forced to cancel or reschedule an Experience due to valid circumstances outside the control of the Hosting Artist, a full refund of the ticket purchase price must be issued by the Hosting Artist. The Hosting Artist must inform ARTXP and the ticket buyers immediately when an Experience needs to be cancelled or rescheduled. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.3 Valid circumstances outside the control of the Hosting Artist include illness, accidents, or serious personal issues, legal restrictions and safety concerns. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.4 ARTXP shall be entitled to require the Hosting Artist to provide documentation of such circumstances, and ARTXP shall at its sole discretion be entitled to decide when circumstances are considered sufficiently documented and when circumstances are considered valid and outside the control of the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.5 If an Experience is rescheduled due to valid circumstances outside the control of the Hosting Artist, and the ticket buyer does not wish to accept the new date and time, the Hosting Artist must accept to grant a full refund to the ticket buyer. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.6 Cancellation and rescheduling are very disruptive for ticket buyers. Therefore, ARTXP is entitled to charge a penalty fee corresponding to 20% of the aggregate value of the tickets purchased to the relevant Experience cancelled or re-scheduled by the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.6.1 The penalty fee will be deducted from any future payments due to the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.6.2 ARTXP will notify the Hosting Artist of the applicability of a penalty fee, when the Hosting Artist has cancelled or re-scheduled the Experience, and no later than 7 days after the cancellation or re-scheduling has been notified to ARTXP. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.6.3 ARTXP reserves the right to suspend or terminate the Hosting Artist or any Experiences from the Website, in case of cancellations and/or re-scheduling at the sole discretion of ARTXP. ARTXP shall under no circumstance be liable for any direct or indirect losses arising from such suspension or termination. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="fs32fw700" color="#000000"> Hosting Artist Terms & Conditions </Typography>
                </Box>

                {/* Introduction */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Introduction </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 1. Introduction </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.1 These terms and conditions (the “Terms”) apply for all hosting artists using the platform on art-xp.com, provided by ARTXP ApS, CVR no. 41932260, Tuborgvej 85, 2900 Hellerup, Denmark (“ARTXP”, “we” and “us”). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.2 When signing up as a hosting artist on art-xp.com (the “Website”), you are explicitly accepting these Terms. If you do not accept the Terms, you must refrain from using our Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.3 We reserve the right to amend these Terms from time to time. If we implement changes, an updated version of the Terms will be available on our Website and on your dashboard. You are obligated to stay updated on the Terms, and if you cannot accept any new versions of the Terms, you must immediately stop using our Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.4 The Terms, the policies published on our Website and your dashboard, and our privacy policy constitutes, the entire agreement concerning your use of the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.5 Our privacy policy will at any time be available on our Website, and you must explicitly accept our privacy policy to sign up as a hosting artist. </Typography> <br />


                        </p>
                    </Box>
                </Box>

                {/* Platform and ticket services */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Platform and ticket services </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 2. Platform and ticket services </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 2.1 These Terms govern your rights and obligations as a hosting artist using the platform provided by ARTXP via the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.2 As a hosting artist, you will have the opportunity to create and list artistic and cultural events and experiences (“Experience”) hosted and/or organized by you (the “Hosting Artist”) to our users. The users can use our Website to purchase tickets for your Experiences. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.3 ARTXP is a platform provider and a ticket intermediary. ARTXP provides tickets to Experiences listed by the Hosting Artist and collects payments from ticket buyers on behalf of the Hosting Artist against the payment of a services fee (see further below). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.4 The relationship between the Hosting Artist and ARTXP is that of independent individuals/entities. Under no circumstances shall the relationship be construed as one of an employment, agent, joint venture, partnership or similar. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                {/* Hosting Artist account */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Hosting Artist account </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 3. Hosting Artist account </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 3.1 To become a Hosting Artist, you must create a personal login to our Website. The login information must be kept secret and may not be shared with any third parties. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 3.2 Once you have created a login as a Hosting Artist you can request us to list the Experiences you wish to offer on our Website. Experiences must be approved by us before they can be listed, see section 4. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 3.3 Once an Experience has been approved and listed on the Website, you will be able to create a Stripe account in order to receive payments from us. It is your sole responsibility to create a valid Stripe account, and any payments due, cf. section 7, will be paid only to your Stripe account. Make sure you enter the cor-rect payment information. ARTXP accepts no responsibility or liability for in-correct payment information provided by you. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 3.4 As a Hosting Artist, you must create and maintain a profile on the Website in compliance with our Profile Minimum Requirements (see Appendix 1) before you can list Experiences. It is your responsibility to secure that the information provided in your profile is kept up to date. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 3.5 ARTXP reserves all rights to suspend or terminate any Hosting Artist, Experi-ences and/or Hosting Artist profile, if ARTXP at is sole discretion considers any of the aforementioned to be in breach of our Terms, policies, guidelines or pro-cedures available on our Website and/or your dashboard. ARTXP shall have no liability for any utilization of this right. </Typography> <br />

                        </p>
                    </Box>
                </Box>


                {/* Experiences */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Experiences </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 4. Experiences </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 4.1 As a Hosting Artist, you will be able to request listing of an Experiences on the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 4.2 All Experiences are approved by ARTXP, before they are listed. This gives ARTXP the opportunity to secure alignment with the Terms, policies, guidelines and procedures and the purpose of our platform. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 4.3 We reserve the right to reject the listing of any Experiences at our sole discretion. We cannot be held liable for any direct or indirect losses or damages incurred as a result of a rejection of an Experience requested for listing. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 4.4 Each listed Experience accepted by us is created with an Experience page. The Experience page must include clear and accurate information about the Experience for the visitors. The Experience page must as a minimum include the in-formation set out in Appendix 2. It is the obligation of the Hosting Artist to se-cure that the information provided is maintained and kept up to date. </Typography> <br />


                        </p>
                    </Box>
                </Box>

                {/* Hosting Artist obligations  */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Hosting Artist obligations </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 5. Hosting Artist obligations </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 5.1 The Hosting Artists must complete all Experiences listed on the Website, if any tickets are purchased for the Experience. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.2 No requirement of minimum numbers of participants may be imposed as a condition for completion of an Experience. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.3 The Hosting Artist agrees that Experiences listed on the Website may only be attended by participants purchasing a ticket through the Website. The Hosting Artist agrees to not allow any participants to participate in the Experience listed on the Website unless a ticket is purchased via the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.4 The Hosting Artist is responsible for providing all equipment, supplies, and similar needed for the Experience at its own costs. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.5 The Hosting Artist may not accept any online or offline payments for the Experiences listed on the Website. Payments are solely processed via ARTXP. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.6 The Hosting Artist must at any time meet the qualification requirements, identified as the “ARTXP&apos;s 5 S&apos;s” (see Appendix 3). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.7 The Hosting Artist is obligated to secure that the information provided on the Website is complete, accurate and as specific as possible. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.8 The Hosting Artist alone is responsible for completing the Experiences in compliance with all regulatory and legal requirements. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 5.9 Private gatherings and bookings are defined as Experiences where the customers can request the Experience for private occasions (“Private Experiences”). If the Hosting Artist has offered Private Experiences, the Hosting Artist must respond to any booking request within 24 hours. If a response is not provided within 24 hours, ARTXP may at its sole discretion remove the Hosting Artist’s option to offer Private Experiences. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                {/* Cancellation and rescheduling */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Cancellation and rescheduling </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 6. Cancellation and rescheduling </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 6.1 As a general rule, tickets purchased via ARTXP are non-refundable and non-transferable. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.2 Should a Hosting Artist be forced to cancel or reschedule an Experience due to valid circumstances outside the control of the Hosting Artist, a full refund of the ticket purchase price must be issued by the Hosting Artist. The Hosting Artist must inform ARTXP and the ticket buyers immediately when an Experience needs to be cancelled or rescheduled. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.3. The Hosting Artist will incur any refund fees associated with the cancellation or rescheduling of his/her experience. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.4 Valid circumstances outside the control of the Hosting Artist include illness, accidents, or serious personal issues, legal restrictions and safety concerns. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.5 ARTXP shall be entitled to require the Hosting Artist to provide documentation of such circumstances, and ARTXP shall at its sole discretion be entitled to decide when circumstances are considered sufficiently documented and when circumstances are considered valid and outside the control of the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.6 If an Experience is rescheduled due to valid circumstances outside the control of the Hosting Artist, and the ticket buyer does not wish to accept the new date and time, the Hosting Artist must accept to grant a full refund to the ticket buyer. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.7 Cancellation and rescheduling are very disruptive for ticket buyers. Therefore, ARTXP is entitled to charge a penalty fee corresponding to 20% of the aggregate value of the tickets purchased to the relevant Experience cancelled or re-scheduled by the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.7.1 The penalty fee will be deducted from any future payments due to the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.7.2 ARTXP will notify the Hosting Artist of the applicability of a penalty fee, when the Hosting Artist has cancelled or re-scheduled the Experience, and no later than 7 days after the cancellation or re-scheduling has been notified to ARTXP. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.7.3 ARTXP reserves the right to suspend or terminate the Hosting Artist or any Experiences from the Website, in case of cancellations and/or re-scheduling at the sole discretion of ARTXP. ARTXP shall under no circumstance be liable for any direct or indirect losses arising from such suspension or termination. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 6.8. If the Hosting Artist reschedules (date/time) or changes the location of a particular instance of an experience, that has no bookings on it, the Hosting Artist must inform ARTXP&apos;s Hosting Artist Success Team on host@art-xp.com. This is to ensure all scheduled marketing material is updated accordingly. </Typography> <br />

                        </p>
                    </Box>
                </Box>


                {/* Payments */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Payments </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 7. Payments </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 7.1 ARTXP uses Stripe to collect payments from ticket buyers and to make payments to the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.2 The Hosting Artist is obligated to create and maintain a valid Stripe account in order to receive payments from ARTXP. It is the sole responsibility of the Hosting Artist to always maintain a valid Stripe account. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.3 ARTXP collects payments (including VAT) directly from ticket buyers on be-half of the Hosting Artist. Payments are collected from the ticket buyer immediately after a purchase has been completed. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.4 ARTXP charges a fee for providing the Website and acting as the intermediary between the ticket buyer and the Hosting Artist (the “Service Fee”). Refer to Appendix 5 for a breakdown of ARTXP&apos;s Services. Two categories of Service Fees are charged: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.4.1 A 20% Service Fee is charged from the total collected payments for Experiences provided by the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.4.2 A 35% Service Fee is charges from the total collected payments for Private Experiences offered by the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.5 The Service Fee is deducted from the collected payments, and the remaining part of the payments collected by ARTXP will only be released by ARTXP to the Hosting Artist upon successful completion of the Experience. The Service Fee will be automatically deducted before payment is made to the Hosting Artist. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.6 Payments to the Hosting Artist are only released to the Hosting Artist upon successful completion of the Experience. ARTXP will strive to release payments due as soon as possible after completion – within the boundaries of the Stripe payment terms applicable at the time of completion which may cause longer payment processing time. ARTXP shall have no liability for delays due to banking opening hours, holidays, weekends, Stripe payment terms and processing times, and similar circumstances not directly attributable to ARTXP. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.7 In any event, payments due to the Hosting Artist shall not be considered delayed if the payments are released by ARTXP within 30 days from the successful completion of the Experience. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.8 ARTXP does currently not charge ticket buyers any fees for purchasing tickets via the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 7.9 ARTXP has no liability in respect of any tax, VAT or other legal obligations of the Hosting Artist. </Typography> <br />


                        </p>
                    </Box>
                </Box>

                {/* Term and termination */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Term and termination </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 9. Term and termination </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 9.1 The Hosting Artist can at any time terminate this agreement, provided that the Hosting Artist has no active Experiences for which tickets have already been purchased. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 9.2 ARTXP may terminate the agreement at any time without notice, and immediately suspend the Hosting Artist’s profile, if ARTXP at its sole discretion finds that the Hosting Artist is in breach of the Terms, applicable policies or procedures, and/or applicable regulations, or is for any other reason considered necessary. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 9.3 If the Hosting Artist has been inactive for a period of more than 6 months, ARTXP reserves the right to suspend the account on the Website. ARTXP will permanently terminate the account after 24 months of consecutive inactivity of the Hosting Artist. </Typography> <br />


                        </p>
                    </Box>
                </Box>


                {/* Governing Law and Disputes */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Governing Law and Disputes </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 10. Governing Law and Disputes </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 10.1 The business relationship between the Hosting Artist and ARTXP is governed by Danish law. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 10.2 Any dispute that may arise must be decided by the City Court of Copenhagen as the court of first instance. </Typography> <br />

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
                            <Typography variant="fs14fw400"> Version </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Last updated: 8 June 2021 </Typography> <br />


                        </p>
                    </Box>
                </Box>

                {/* APPENDIX 1 */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> APPENDIX 1 </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> Profile Minimum Requirements </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1. Biography </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1 As a minimum, your biography should provide insight in the following: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.1 Where you are currently based. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.2 Your art medium(s) and special techniques. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.3 Inspiration and what you are passionate about. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.4 Your biggest achievements - this can be awards, high profile clients you have worked with, gallery shows (painters) or theatre shows (actors), etc. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.5 The year you started practicing your art. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.6 Bonus tip: Remember to keep it concise and engaging. Short paragraphs encourage reading, while long ones may do the opposite. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 2. High quality profile images/photos </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.1.1 As a minimum, your profile must include a profile image or photo. Please refer to “ARTXP’s Image Standards and Requirements” (Appendix 4) or use the “Guide” tab on your dashboard to find out everything you need to know when it comes to images on the Website. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.1.2 For example, if you are a painter – upload photos of your paintings and of you in your studio painting. If you are an actor – upload photos of you on stage, in character. These images will be visible for the world to see, so choose them wisely. </Typography> <br />


                        </p>
                    </Box>
                </Box>


                {/* APPENDIX 2 */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> APPENDIX 2 </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> Experience page </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1. As a minimum, the Experience page must include the following information: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.1 Time and date of the Experience. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.2 A location description, including an exact address. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.3 A clear and intriguing description of the Experience (what will participants be doing and experiencing?). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.4 Ticket purchase price including VAT. </Typography> <br />

                            <Typography variant="fs14fw400" color="inherit"> 1.1.5 Content of the ticket. What is the Hosting Artist providing the participants (for example: a welcome drink, art supplies)? </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.6 High quality images or photos. Please refer to “ARTXP’s Image Standards and Requirements” (Appendix 4). </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.7 If the Hosting Artist has opted-in to provide Private Experiences: The minimum price for Private Experiences including VAT. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.1.8 If the Hosting Artist has opted-in to provide Private Experiences: Information on whether the Hosting Artist can travel to private participants locations, and if yes, any transportation fees included in the full ticket price. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                {/* APPENDIX 3 */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> APPENDIX 3 </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> ARTXP’s 5 S&apos;s </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1. The Hosting Artist must at any time comply with ARTXP&apos;s “5 S&apos;s”: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> At ARTXP, we maintain the highest service and quality standards and only partner with artists who share in our vision of excellence, dedication, and sheer passion. We review every experience to ensure the below requirements are met. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.1 Specialization: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> The hosting artist should possess specialized skills, expertise, and knowledge in their medium of art. These specialized skills enable you to create a memorable experience and provide value for your guests. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.2 Structure: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> As our valued hosting artist, we encourage a structured experience with intention and clear flow that audiences will understand and appreciate. The structure is meant to give guests more clarity and help manage expectations.
                            </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.3 Space: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> The Hosting Artist must provide a welcoming and inviting space for the Experi-ence. Spaces include private homes, studios, galleries, local venues (e.g., bars, cafes, theatres, concert halls, museums) etc. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.4 Social: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> Our artists love hosting and meeting new people from different backgrounds. Social artists are personable and create lasting positive impressions wherever they go.
                            </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.5 Smiles: </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> A hosting artist should naturally focus on warming the hearts and creating smiles across the faces of their guests. Guests who leave with good memories will provide a positive review and are sure to attend again and spread the word about your experience. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.6 Bonus S – it’s in the Small details. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> Successful hosting artists are attentive to the finer details. By paying attention to the smallest details, your experience is sure to stand out. </Typography> <br />
                        </p>
                    </Box>
                </Box>

                {/* APPENDIX 4 */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> APPENDIX 4 </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> ARTXP’s Image Standards and Requirements </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Please refer to the guidelines available on your hosting artist dashboard. </Typography> <br />


                        </p>
                    </Box>
                </Box>


                {/* APPENDIX 5 */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> APPENDIX 5 </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> ARTXP&apos;s Service- Hosting Artist Benefits </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Consider ARTXP as your active partner for the journey. Our focus is to actively highlight our Hosting Artists and help them succeed through a variety of methods, which will be laid out below. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Having worked in the events business and having worked closely with artists over the past few years (we have hosted hundreds of art experiences, including private experiences for leading companies such as Maersk and Novo Nordisk, with thousands of guests in attendance), we understand the finer details when it comes to the creation, promotion, and execution of successful art experiences. As such we have created a platform built on all the knowledge and experience that we have gained, that strives to be as beneficial, resourceful, and helpful for the artist community as possible. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Here are the methods that we have chosen to help benefit the artists joining ARTXP as a Hosting Artist: </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1. Marketing and Promotion </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> As an ARTXP hosting artist, you can take advantage of powerful and influential exposure across online and print media. We help you create and grow your presence through our very own marketing campaigns. Artists are advised to use ARTXP as an additional channel for exposure along with their own marketing efforts. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 2. Dedicated Host Success Manager at your Service </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Every artist will receive tailored support and guidance every step of the way from our dedicated Host Success Manager. From scheduling phone calls, zoom meetings to in person meetings, we truly do what it takes to assist you and make the journey as easy and helpful for you as possible. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Our team has assisted our artists with anything from refining their experience description, guiding them on pricing their experience, to giving them all the tips on securing a venue for their experience at minimum-no cost. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 3. Management tools to help you get going and stay organised </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> It only takes a few minutes to set up a Hosting Artist account. We do not request any upfront costs or subscription fees. Once you have submitted your first experience and reached full access to your artist dashboard, our management tools will help you get started and stay organized. We make it simpler for you to share your art with the world. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> What&apos;s great is that we have only started and you as an ARTXP Hosting Artist will notice that the platform will constantly evolve. You will notice not only an enhancement and improvement to the existing features, but you will also notice more and more new features that are designed to make your journey as a hosting artist as beneficial, smooth, and organised as possible. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> And so, in order to do that we have hired a full time web development team that is in charge of constantly enhancing, refining, and improving the platform. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 4. Customer Service </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> In order to provide service and support to your guests and or prospective guests, you will enjoy the service of our helpful Customer Service Team who will handle any customer inquiries, and take this extra load off your shoulders. </Typography> <br />

                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 5. Private Bookings Team </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> As an ARTXP Hosting Artist you will enjoy new income opportunities in the form of private bookings. We will expose you, through our extensive marketing efforts, to a broad selection of potential private clients, including groups and corporates. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> In order to provide you with this exposure and to provide the best possible service to prospective private clients of yours, we will handle all private bookings inquires and lease with you and the potential private client until the booking is complete. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 6. Automated and Secure Payment System </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> ARTXP works with the secure and automated payment processing provider, Stripe, in order to process payments securely and handle all Payouts to ARTXP&apos;s Hosting Artists. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> Stripe charges ARTXP a fee for every transaction taking place on the website (e.g. from every ticket sold), additionally it charges ARTXP a fee for every Hosting Artist getting paid through our website. ARTXP incurs all of Stripe&apos;s handling and processing fees, and thus saves this extra cost from its Hosting Artists. </Typography> <br />
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> In order to hire a team that will work on providing our artists with ARTXP&apos;s Hosting Artist Benefits (laid out above), ARTXP charges 20% from Ticket sales and Gift Card sales and 35% from Private Bookings made through the website. Without a team in place whose focus is to help you succeed, we wouldn&apos;t be able to provide you with all of these wonderful benefits. </Typography> <br />
                        </p>



                    </Box>
                </Box>





            </Box>

            <Container variant="ct110" maxWidth="xl" sx={{ mt: "65px" }}>
                <HostingBanner />
            </Container>

        </div>
    )
}

export default Index