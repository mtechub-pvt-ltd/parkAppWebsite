import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'

function Helpcenter() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Container id="term&condition">
            <Box align="center" padding={5} pb={2}>
                <Typography variant="h5" fontWeight="bold" color="#1A513B">Help And Support
                </Typography>
            </Box>

            <Typography variant="paragraph" mt="1%" color="#454F63">
                Welcome to the Baloch Park (otherwise referred to as: “us”, “we”, and "Baloch Park" in the following text). You (also referred to as the “customer” or “your” in the text) are currently reading the terms of services of our application/website that is aimed to provide an interesting experience of social networking. We provide services related to building a network and gaining followers for your Baloch Park accounts. Here are some terms of service that you must agree on to get our services at our pleasant accord as customers and service providers. The terms are bound to legal constraints, so we suggest you to read them carefully befoe switching to the application.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Acceptance of terms of services: </span>
                We assume that you agree to our terms of services by granting them access to your Baloch Park accounts and continued use of our application. We expect you to read the privacy policies and terms of services in detail to understand how our application/website functions to avoid any unpleasant encounters in the future. The platform is available on Google Playstore and Appstore that has its terms of services which may or may not be different from that of Baloch Park. By accepting our terms of services, you also agree to our legal and technical terms which will be further elaborated on in the following sections.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Our access to your account: </span>
                You can read our Privacy policies to get an insight into the right of Baloch Park to access the customer’s information directly and through third parties. Baloch Park aims to increase your following of Baloch Park, so it is mandatory to link your Baloch Park account to your Baloch Park profile. In this way, we get access to your profile and extract your technical and behavioral activities to suggest people that can be suitable for your profile. We reserve the right to disable your account anytime in case of any violation to the terms of services or privacy policies.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Your access to our services: </span>
                Baloch Park reserves the right to review your activity and hold you accountable for any activity that comes in the domain of breaching terms of services or Privacy Policy. We suggest you do not agree and get access to the platform if you are able or legally competent to understand these terms. You are not allowed to interfere with the technical and logical operations of the application or website. The platform reserves the right to unlink your profile from Baloch Park or delete your profile, followed by a legal lawsuit in case of any cyberbullying, theft of intellectual property, or company property damage.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Changes in terms of service: </span>
                Baloch Park may update the terms of services over time based on customer feedback, global reach, and legal interventions related to social norms. Every time we update our terms of services, we will notify you via email; if you have subscribed to receive newsletters and update notifications through email. Moreover, it will also be highlighted on this page with the title Last Updated, followed by the date of posting new terms of services. We intend to make the date of effect of the new privacy policies clear and the end of the previous one. If there is a change for a limited time we will also define the duration. Your acceptance to the new terms of services will be assessed by the continued use of the application. In any way you do not agree to the updated privacy policies, you must stop using the application or accessing your profile after writing us about the point of your concern at <a href="">https://balouchpark.com/tos/ </a>or email us at <a href="">feedback@balouchpark.com.</a>
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Indemnity: </span>
                By accepting our terms of services, you agree to defend, harmlessly hold, and indemnify the Baloch Park platform and its associated authorities, including the parent company, subsidiaries, and offices. You may or may not be limited to liabilities, costs of attorney fees in case of legal discourse due to breach of terms of services or privacy policy.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Intellectual property rights: </span>
                Baloch Park is a suggestive networking platform that helps connect people on other social media platforms. We do not intend to gather, exploit, or investigate your intellectual properties. We do not own, review or grant access to any kind of content uploaded on the Baloch Park. Moreover, we do not allow you to publish any intellectual content intended or not for copyright infringement using the name, watermark, or logo of Baloch Park.
            </Typography>

            <br /><br />
            <Typography variant="paragraph" color="#454F63">
                <span style={{ fontWeight: "bold" }}>Complaints related to our terms of service: </span>
                If you happen to see any breach in terms of services, including the misinformation or unauthorized access to your personal information, you can contact us at <a href="">https://balouchpark.com/tos/</a> or email us at feedback@Baloch Park.com. We will help resolve the matter for your better experience. We have clearly stated our customer-service provider relationship, and what both parties are expecting from each other, so there would never in an intentional breach to privacy or user’s experience.. Moreover, if you have any complaints related to the terms of service and customer care management of our company, you can write us at  <a href="">https://balouchpark.com/tos/</a> or email us at <a href="" >feedback@balouchpark.com.</a>
            </Typography>
        </Container>
    )
}

export default Helpcenter
