import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function ElectronicSecuritySolutions() {
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
                            Electronic Security Solutions
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Spartan Securitas Solutions Private Limited specializes in comprehensive electronic security solutions designed to protect your assets and ensure the safety of your facility. Our services include a wide range of advanced security systems, such as:
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                CCTV Surveillance:
                            </Typography>
                            High-definition cameras and monitoring systems for effective visual coverage of your premises.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Access Control Systems:
                            </Typography>
                            Secure entry solutions that restrict access to authorized personnel only.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Intrusion Detection Systems:
                            </Typography>
                            Advanced sensors and alarms that alert you to unauthorized access or breaches.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Fire Detection and Fighting Systems:
                            </Typography>
                            Reliable systems that detect and suppress fires to minimize damage and ensure safety.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Biometric Security Solutions:
                            </Typography>
                            Cutting-edge technology for secure and convenient access control.
                            <br/><br/>
                            With our expertise in electronic security, we provide tailored solutions that enhance safety, reduce risks, and give you peace of mind. Our dedicated team ensures seamless implementation, ongoing support, and regular maintenance, keeping your security systems up-to-date and effective. Choose Spartan Securitas Solutions for reliable protection and advanced security solutions.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/Electronic-Security-Solutions.jpeg')" }}
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
