import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import { motion, useInView } from "framer-motion";

export function TechnicalSolutions() {
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
                            Technical Solutions
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Spartan Securitas Solutions Private Limited offers cutting-edge technical solutions designed to enhance operational efficiency and streamline processes for businesses across various sectors. Our innovative solutions include:
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Automated Parking Management:
                            </Typography>
                            Efficient parking solutions that automate vehicle entry and exit processes, improving traffic flow and reducing congestion in busy facilities.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Vehicle Management Through GPRS Solutions:
                            </Typography>
                            Advanced tracking and management systems utilizing GPRS technology to monitor vehicle location, optimize routes, and improve fleet efficiency.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Biometric Attendance Management Systems:
                            </Typography>
                            State-of-the-art biometric systems that ensure accurate attendance tracking, enhancing accountability and operational transparency.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                AV and PA Systems:
                            </Typography>
                            Comprehensive audio-visual integration services that enhance communication and collaboration within spaces, from meeting rooms to large auditoriums.
                            <br/><br/>
                            At Spartan Securitas Solutions, we are committed to providing tailored technical solutions that meet your specific needs. Our team of experts works closely with clients to implement these advanced technologies, ensuring a seamless integration into existing operations. Experience improved productivity, enhanced security, and innovative solutions with our comprehensive technical offerings.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/technical-solutions.jpeg')" }}
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
