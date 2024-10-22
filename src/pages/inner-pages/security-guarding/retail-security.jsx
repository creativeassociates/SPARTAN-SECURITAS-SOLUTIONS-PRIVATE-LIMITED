import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";

import {motion, useInView} from "framer-motion";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";

export function RetailSecurity() {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    return (
        <>
            <ScrollToTop/>
            <div className="relative" style={{backgroundImage: "url('./img/bg-5.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes}/>
                </div>

                <motion.div
                    ref={ref}
                    className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-10 pb-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Retail Security
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we understand that protecting retail
                            environments from theft, vandalism, and other security threats is crucial for the success of
                            any business. Our specialized **Retail Security Services** are designed to ensure a safe and
                            secure shopping experience for customers while protecting valuable assets.
                        </Typography>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            We provide trained security personnel and state-of-the-art surveillance solutions tailored
                            specifically for the retail sector. Whether you're managing a small retail shop or a large
                            shopping mall, our security experts are equipped to address the unique challenges retailers
                            face.
                        </Typography>
                        <br/>
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Our Retail Security Services Include:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Theft Prevention:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security guards are trained to detect suspicious behavior and prevent theft or
                                shoplifting incidents, ensuring the protection of inventory and valuable merchandise.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Customer and Staff Safety:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                By maintaining a visible security presence, we help create a safe environment for both
                                customers and employees, deterring potential threats and criminal activity.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Access Control:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security team manages access to restricted areas within the retail space, ensuring
                                that only authorized personnel have entry to sensitive zones such as stockrooms or cash
                                handling areas.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Crowd Control and Queue Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                For busy retail environments and special promotional events, we provide crowd management
                                services to ensure that customer flow remains smooth and organized.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. CCTV Surveillance:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our advanced surveillance systems allow for real-time monitoring of the retail space,
                                enabling quick responses to any suspicious activity or incidents that may occur.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                6. Emergency Response:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                In the event of an emergency, our security personnel are trained to handle a variety of
                                situations, from medical incidents to security breaches, ensuring the safety of everyone
                                on the premises.
                            </Typography>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Retailers who partner with Spartan Securitas Solutions benefit from customized security
                            plans that not only protect their property but also enhance the shopping experience for
                            their customers. Our solutions are scalable, providing security that grows with your
                            business.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/retail-security.jpeg')"}}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
