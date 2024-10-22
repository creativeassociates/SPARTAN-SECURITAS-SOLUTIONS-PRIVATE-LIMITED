import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function SecurityGuardServices() {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <ScrollToTop />
            <div className="relative" style={{ backgroundImage: "url('./img/bg-5.jpeg')" }}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes} />
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
                            Security Guard Services
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Spartan Securitas Solutions Private Limited provides a comprehensive range of security guard services tailored to meet the diverse needs of our clients. Our dedicated team of professionals ensures safety and security across various sectors, including:
                        </Typography>
                        <br />

                        <div className="text-left text-white">
                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Security Guards at Access Points:
                                </Typography>
                                <span>Counter theft and unauthorized access with trained security personnel stationed at critical access points. Our guards are equipped with the skills to monitor and control entry, ensuring only authorized personnel have access to sensitive areas.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Body Guards:
                                </Typography>
                                <span>Personal protection services for high-profile individuals and clients. Our bodyguards are highly trained in defensive tactics and risk assessment, providing an extra layer of security wherever needed.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Armed Guards:
                                </Typography>
                                <span>Armed security personnel for high-risk environments requiring additional protection. Our armed guards are trained in the use of firearms and crisis management, ensuring a swift response to any threats.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Corporate Security:
                                </Typography>
                                <span>Customized security solutions for corporate offices to safeguard assets and personnel. We conduct thorough risk assessments and implement security protocols tailored to the specific needs of your business.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Industrial Security:
                                </Typography>
                                <span>Protecting industrial facilities and ensuring safe operations with expert security management. Our security solutions include surveillance, access control, and emergency response planning.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Bank Security:
                                </Typography>
                                <span>Specialized security services for banks and financial institutions to mitigate risks. Our guards are trained to handle cash security and emergency situations, ensuring the safety of staff and customers.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Event Security:
                                </Typography>
                                <span>Comprehensive security for events, ensuring the safety of attendees and smooth operations. Our team is skilled in crowd management and emergency response, providing peace of mind during your events.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Retail Security:
                                </Typography>
                                <span>Protecting retail spaces from theft and enhancing the shopping experience for customers. Our loss prevention strategies are designed to deter shoplifting and ensure a safe environment.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Hotel Security:
                                </Typography>
                                <span>Ensuring guest safety and security in hotels with trained security staff. We implement measures to monitor guest access and maintain a secure environment throughout the property.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Institutional Security:
                                </Typography>
                                <span>Security solutions for schools, colleges, and other institutions to create a safe learning environment. Our personnel are trained to handle various scenarios, including emergency evacuations.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Residential Security:
                                </Typography>
                                <span>Protection for residential complexes and communities to enhance safety and peace of mind. Our services include patrols and surveillance to deter crime in neighborhoods.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Executive Protection:
                                </Typography>
                                <span>Specialized protection services for executives and high-net-worth individuals. Our executive protection agents conduct threat assessments and create personalized security plans to mitigate risks.</span>
                            </div>
                        </div>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Our team is committed to providing reliable and professional security services to protect what matters most. Contact Spartan Securitas Solutions for customized security solutions tailored to your needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/securityguard.webp')" }}
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
