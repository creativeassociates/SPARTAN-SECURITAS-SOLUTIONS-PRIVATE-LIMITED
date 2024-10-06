import { Button, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function WhatWeDo() {
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
                            What We Do?
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Pvt. Ltd., we offer comprehensive facility management and security solutions tailored to meet the unique requirements of businesses across various industries. Our extensive range of services enhances efficiency, security, and operational excellence, allowing you to focus on your core business while we manage the details.
                        </Typography>

                        <h2 className="text-white text-2xl md:text-3xl mt-8">Facility Management Solutions</h2>
                        <Typography color="white" className="text-left font-light mt-2 text-sm md:text-base lg:text-lg">
                            We excel in maintaining and managing both new and existing facilities through seamless integration of technology and expertise. Our offerings include:
                        </Typography>
                        <ul className="list-disc list-inside text-white mt-2">
                            <li>Maintenance of precision air conditioners, HVAC systems, and building management systems (BMS) for optimal environmental control.</li>
                            <li>Comprehensive visitor management, cafeteria management, and access control systems to ensure smooth day-to-day operations.</li>
                            <li>Customized annual maintenance contracts (AMCs) to ensure your facility runs efficiently year-round.</li>
                        </ul>

                        <h2 className="text-white text-2xl md:text-3xl mt-8">Security Solutions</h2>
                        <Typography color="white" className="text-left font-light mt-2 text-sm md:text-base lg:text-lg">
                            We protect your business with state-of-the-art electronic security systems, including professionally trained security guards:
                        </Typography>
                        <ul className="list-disc list-inside text-white mt-2">
                            <li>CCTV Surveillance (including Dome, Bullet, Network/IP, and Wireless cameras) for continuous monitoring.</li>
                            <li>Access Control and Intrusion Detection to safeguard your premises.</li>
                            <li>Fire Detection & Fire Fighting Systems, including heat/smoke detectors, programmable alarm systems, and water sprinkler systems.</li>
                            <li>Biometric Attendance & Vehicle Surveillance Solutions to streamline security and access management.</li>
                        </ul>

                        <h2 className="text-white text-2xl md:text-3xl mt-8">Technical Solutions</h2>
                        <Typography color="white" className="text-left font-light mt-2 text-sm md:text-base lg:text-lg">
                            Our advanced technology solutions help businesses operate smarter:
                        </Typography>
                        <ul className="list-disc list-inside text-white mt-2">
                            <li>Biometric Attendance Management Systems for accurate and efficient workforce tracking.</li>
                            <li>Automated Parking Management and Vehicle Management through GPRS Solutions for seamless parking operations.</li>
                            <li>AV Integration Services, including audio/video conferencing systems, wireless displays, and experience centers to enhance communication and collaboration.</li>
                        </ul>

                        <h2 className="text-white text-2xl md:text-3xl mt-8">Operations & Maintenance</h2>
                        <Typography color="white" className="text-left font-light mt-2 text-sm md:text-base lg:text-lg">
                            We offer complete operations and maintenance services to keep your facility running smoothly:
                        </Typography>
                        <ul className="list-disc list-inside text-white mt-2">
                            <li>General electrical maintenance and servicing of LT/HT panels, ACB/VCB units, and DG operations.</li>
                            <li>24/7 power, UPS, and BMS monitoring to ensure uninterrupted facility performance.</li>
                            <li>Comprehensive preventive and breakdown maintenance, project management, and AMC solutions to mitigate risks and reduce downtime.</li>
                        </ul>

                        <h2 className="text-white text-2xl md:text-3xl mt-8">Safety Equipment & IT Peripherals</h2>
                        <Typography color="white" className="text-left font-light mt-2 text-sm md:text-base lg:text-lg">
                            We also provide high-quality safety equipment to ensure a safe working environment:
                        </Typography>
                        <ul className="list-disc list-inside text-white mt-2">
                            <li>Protective gear, including helmets, gloves, reflective jackets, and fire blankets.</li>
                            <li>Emergency kits such as first aid and eyewash stations.</li>
                            <li>A wide range of IT peripherals including laptops, monitors, hubs, and POE switches to support your technological needs.</li>
                        </ul>

                        <Typography color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Whether you need a reliable partner for facility management, enhanced security systems, or advanced technical solutions, Spartan Securitas Solutions Pvt. Ltd. is here to provide the expertise, innovation, and support to meet your business needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            initial="hidden"
                            style={{ backgroundImage: "url('./img/fingerprint.jpeg')" }}
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
