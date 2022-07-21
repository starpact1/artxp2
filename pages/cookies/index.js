import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import styles from "../privacy-policy/index.module.css"
import Link from "next/link"
import HostingBanner from '../Components/IndexPage/HostingBanner'



function Index() {
    return (
        <div>
            <Box sx={{ paddingTop: "184px", width: "90%", maxWidth: "1300px", margin: "auto", }}>
                <Typography variant="fs32fw700" color="#000000"> Cookie Policy </Typography>

                {/* Cookies */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Cookies </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 1 What are cookies? </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 1.1 Cookies are little text files made up of letters and numbers stored on your computer or other unit. Cookies are created when visiting a website that employs cookies. They are used to save your browser history, to help you start where you left off on a previous visit to the website and they can remember your chosen language or other preferences. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 1.2 If ARTXP uses cookies you will be notified of the usage and purpose of the cookies collecting data. Before cookies are downloaded on to your computer ARTXP must ask for your consent. Cookies necessary for functionality and settings may be employed without your consent. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                {/* Cookies in use */}
                <Box className={styles.section}>
                    <Box sx={{ width: "220px" }}>
                        <Typography variant="fs20fw700" lineHeight="22px"> Cookies in use </Typography>
                    </Box>

                    <Box className={styles.textBlock}>
                        <p className={styles.text1}>
                            <Typography variant="fs14fw400"> 2 ARTXP uses the following types of cookies </Typography>
                        </p>

                        <p className={styles.text2}>
                            <Typography variant="fs14fw400" color="inherit"> 2.1 Technical cookies: Technical cookies are necessary for the functionality of most websites. They ensure you can stay on the website you are visiting. More detailed information on technical cookies can be found here. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.2 Statistical cookies: Statistical cookies are used to optimize design, user-friendliness and efficiency of a website. The collected information is for example used to analyse which information is the most popular on the website, and which must therefore be easier to find to increase the user-friendliness. More detailed information on statistical cookies can be found here. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.3 Personalized cookies: Personalized cookies are used to collect information about your interactions with the website, where they collect your digital “footprint”. Personalized cookies are used to present more relevant and targeted content to you. More detailed information on personalized cookies can be found here. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.4 Marketing cookies: Marketing cookies are used for commercial purposes to target ads and marketing to you, by following your digital “footprint”. More detailed information on personalized cookies can be found here. </Typography> <br />
                            <Typography variant="fs14fw400" color="inherit"> 2.5 You can choose not to accept cookies on your computer by adjusting your browser settings. Settings are adjusted differently dependent on which type of browser is in use. Be aware that if you decline certain cookies, you also disable many internet functions and services. </Typography> <br />

                        </p>
                    </Box>
                </Box>

                <Box>
                    <p className={styles.text3}>
                        This website uses cookies. We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
                    </p>

                    <p className={styles.text3}>
                        Cookies are small text files that can be used by websites to make a user&apos;s experience more efficient.
                    </p>

                    <p className={styles.text3}>
                        The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.
                    </p>

                    <p className={styles.text3}>
                        This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.
                    </p>

                    <p className={styles.text3}>
                        You can at any time change or withdraw your consent from the Cookie Declaration on our website.
                    </p>

                    <p className={styles.text3}>
                        Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
                    </p>

                    <p className={styles.text3}>
                        Please state your consent ID and date when you contact us regarding your consent.
                    </p>

                    <p className={styles.text3}>
                        Your consent applies to the following domains: art-xp.com
                    </p>

                    <p className={styles.text3}>
                        Your current state: Allow all. <br />
                        Your consent ID: 5ogibJxBgj4qX86F7emQ93Ozno6nm442PdT4VtHD0zTeYpYEusDn8Q== <br />
                        Consent date: Monday, June 6, 2022 at 05:31:58 PM GMT+5:30<br />

                        <Link href="#">Change your consent</Link>  |  <Link href="#">Withdraw your consent</Link>
                    </p>

                    <p className={styles.text3}>
                        Cookie declaration last updated on 7/12/22 by <Link href="https://www.cookiebot.com/"> Cookiebot: </Link>
                    </p>

                    <Box className={styles.CookieDeclarationType}>
                        <Typography variant="fs16fw700"> Necessary (6) </Typography>
                        <p className={styles.text3} style={{ marginTop: "0px" }}>
                            Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                        </p>

                        <table className={styles.CookieDeclarationTable}>
                            <colgroup>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "35%" }}></col>
                                <col style={{ width: "15%" }}></col>
                                <col style={{ width: "10%" }}></col>
                            </colgroup>
                            <thead className={styles.CookieDeclarationTableHeader}>
                                <th> Name </th>
                                <th> Provider </th>
                                <th> Purpose </th>
                                <th> Expiry </th>
                                <th> Type </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > __sharethis_cookie_test__ </td>
                                    <td className={styles.CookieDeclarationTableCell}><a target="_blank" rel="noopener noreferrer nofollow" href="https://sharethis.com/privacy/" title="Sharethis's privacy policy"  > Sharethis </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  >This cookie determines whether the browser accepts cookies.</td>
                                    <td className={styles.CookieDeclarationTableCell}  >Session</td>
                                    <td className={styles.CookieDeclarationTableCell}  >HTTP Cookie</td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > __stripe_mid </td>
                                    <td className={styles.CookieDeclarationTableCell}> <a target="_blank" rel="noopener noreferrer nofollow" href="https://stripe.com/privacy/" title="Stripe's privacy policy"  > Stripe </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  >This cookie is necessary for making credit card transactions on the website. The service is provided by Stripe.com which allows online transactions without storing any credit card information.</td>
                                    <td className={styles.CookieDeclarationTableCell}  >1 year</td>
                                    <td className={styles.CookieDeclarationTableCell}  >HTTP Cookie</td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > __stripe_sid </td>
                                    <td className={styles.CookieDeclarationTableCell}> <a target="_blank" rel="noopener noreferrer nofollow" href="https://stripe.com/privacy/" title="Stripe's privacy policy"  > Stripe </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  > This cookie is necessary for making credit card transactions on the website. The service is provided by Stripe.com which allows online transactions without storing any credit card information. </td>
                                    <td className={styles.CookieDeclarationTableCell}  > 1 day </td>
                                    <td className={styles.CookieDeclarationTableCell}  > HTTP Cookie </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > CookieConsent </td>
                                    <td className={styles.CookieDeclarationTableCell}> <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.cookiebot.com/goto/privacy-policy/" title="cookiebot privacy policy"  > 	Cookiebot </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  > Stores the user&apos;s cookie consent state for the current domain </td>
                                    <td className={styles.CookieDeclarationTableCell}  > 1 year </td>
                                    <td className={styles.CookieDeclarationTableCell}  > HTTP Cookie </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > intercom.played-notifications </td>
                                    <td className={styles.CookieDeclarationTableCell}> <a target="_blank" rel="noopener noreferrer nofollow" href="#" title="Stripe's privacy policy"  > art-xp.com </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  > Used by the website to determine which support notifications the user has been shown. </td>
                                    <td className={styles.CookieDeclarationTableCell}  > Session </td>
                                    <td className={styles.CookieDeclarationTableCell}  > HTML Local Storage </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  > m </td>
                                    <td className={styles.CookieDeclarationTableCell}> <a target="_blank" rel="noopener noreferrer nofollow" href="https://stripe.com/privacy/" title="Stripe's privacy policy"  > 	Stripe </a></td>
                                    <td className={styles.CookieDeclarationTableCell}  > Determines the device used to access the website. This allows the website to be formatted accordingly. </td>
                                    <td className={styles.CookieDeclarationTableCell}  > 2 years </td>
                                    <td className={styles.CookieDeclarationTableCell}  > HTTP Cookie </td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>


                    <Box className={styles.CookieDeclarationType}>
                        <Typography variant="fs16fw700" > Preferences (4) </Typography>
                        <p className={styles.text3} style={{ marginTop: "0px" }}>
                            Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                        </p>

                        <table className={styles.CookieDeclarationTable}>
                            <colgroup>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "35%" }}></col>
                                <col style={{ width: "15%" }}></col>
                                <col style={{ width: "10%" }}></col>
                            </colgroup>
                            <thead className={styles.CookieDeclarationTableHeader}>
                                <th> Name </th>
                                <th> Provider </th>
                                <th> Purpose </th>
                                <th> Expiry </th>
                                <th> Type </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        i18n_redirected
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="#" title="Sharethis's privacy policy"  >
                                            art-xp.com
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Determines the preferred language of the visitor. Allows the website to set the preferred language upon the visitor&apos;s re-entry.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 year
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        intercom.intercom-state-#
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://sharethis.com/privacy/" title="Sharethis's privacy policy"  >
                                            art-xp.com
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Remembers whether the user has minimized or closed chat-box or pop-up messages on the website.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Persistent
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTML Local Storage
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        intercom-id-#
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.intercom.com/terms-and-policies#privacy" title="Intercom's privacy policy"  >
                                            Intercom
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Allows the website to recoqnise the visitor, in order to optimize the chat-box functionality.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        270 days
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        intercom-session-#
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.intercom.com/terms-and-policies#privacy" title="Intercom privacy policy"  >
                                            Intercom
                                        </a>
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Sets a specific ID for the user which ensures the integrity of the website’s chat function.
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        6 days
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </Box>


                    <Box className={styles.CookieDeclarationType}>
                        <Typography variant="fs16fw700" > Statistics (11) </Typography>
                        <p className={styles.text3} style={{ marginTop: "0px" }}>
                            Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
                        </p>

                        <table className={styles.CookieDeclarationTable}>
                            <colgroup>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "35%" }}></col>
                                <col style={{ width: "15%" }}></col>
                                <col style={{ width: "10%" }}></col>
                            </colgroup>
                            <thead className={styles.CookieDeclarationTableHeader}>
                                <th> Name </th>
                                <th> Provider </th>
                                <th> Purpose </th>
                                <th> Expiry </th>
                                <th> Type </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _ga
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://policies.google.com/privacy" title="Sharethis's privacy policy"  >
                                            Google
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Registers a unique ID that is used to generate statistical data on how the visitor uses the website.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        2 years
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _gat
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://policies.google.com/privacy" title="Sharethis's privacy policy"  >
                                            Google
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Used by Google Analytics to throttle request rate
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _gid
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://policies.google.com/privacy" title="Sharethis's privacy policy"  >
                                            Google
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Registers a unique ID that is used to generate statistical data on how the visitor uses the website.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjAbsoluteSessionInProgress
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        This cookie is used to count how many times a website has been visited by different visitors - this is done by assigning the visitor an ID, so the visitor does not get registered twice.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjFirstSeen
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        This cookie is used to determine if the visitor has visited the website before, or if it is a new visitor on the website.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjIncludedInPageviewSample
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Used to detect whether the user navigation and interactions are included in the website’s data analytics.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjIncludedInSessionSample
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Registers data on visitors&apos; website-behaviour. This is used for internal analysis and website optimization.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjRecordingLastActivity
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjSession_#
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Collects statistics on the visitor&apos;s visits to the website, such as the number of visits, average time spent on the website and what pages have been read.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjSessionUser_#
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Collects statistics on the visitor&apos;s visits to the website, such as the number of visits, average time spent on the website and what pages have been read.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        hjViewportId
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        1 day
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>





                            </tbody>
                        </table>
                    </Box>


                    <Box className={styles.CookieDeclarationType}>
                        <Typography variant="fs16fw700" > Marketing (4) </Typography>
                        <p className={styles.text3} style={{ marginTop: "0px" }}>
                            Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                        </p>

                        <table className={styles.CookieDeclarationTable}>
                            <colgroup>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "20%" }}></col>
                                <col style={{ width: "35%" }}></col>
                                <col style={{ width: "15%" }}></col>
                                <col style={{ width: "10%" }}></col>
                            </colgroup>
                            <thead className={styles.CookieDeclarationTableHeader}>
                                <th> Name </th>
                                <th> Provider </th>
                                <th> Purpose </th>
                                <th> Expiry </th>
                                <th> Type </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _fbp
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a rel="noopener noreferrer nofollow" href="https://www.facebook.com/policy.php/" title="Sharethis's privacy policy"  >
                                            Meta Platforms, Inc.
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >

                                        Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        3 months
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTTP Cookie
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        _hjRecordingEnabled
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.hotjar.com/legal/policies/privacy" title="Sharethis's privacy policy"  >
                                            Hotjar
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        This cookie is used to identify the visitor and optimize ad-relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Session
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        HTML Local Storage
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        ads/ga-audiences
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://policies.google.com/privacy" title="Intercom's privacy policy"  >
                                            Google
                                        </a>
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor&apos;s online behaviour across websites.
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Session
                                    </td>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Pixel Tracker
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles.CookieDeclarationTableCell}  >
                                        tr
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}>
                                        <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.facebook.com/policy.php/" title="Intercom privacy policy"  >
                                            Meta Platforms, Inc.
                                        </a>
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Session
                                    </td>

                                    <td className={styles.CookieDeclarationTableCell}  >
                                        Pixel Tracker
                                    </td>
                                </tr>


                            </tbody>
                        </table>
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