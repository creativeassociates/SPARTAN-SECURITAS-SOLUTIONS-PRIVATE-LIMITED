import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import { motion, useInView } from "framer-motion";

export function FacilityManagement() {
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
                            Facility Management
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we offer comprehensive facility management solutions that ensure your operations run smoothly and efficiently. Our services encompass a wide array of specialized areas, including:
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Maintenance of Precision Air Conditioners:
                            </Typography>
                            Expert servicing of precision HVAC systems to maintain optimal indoor climate control and energy efficiency.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Building Management Systems (BMS):
                            </Typography>
                            Advanced systems for monitoring and controlling building services to enhance operational efficiency and reduce energy consumption.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Visitor Management Systems:
                            </Typography>
                            Streamlined processes for managing visitors, enhancing security, and improving the overall experience for guests.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Cafeteria Management:
                            </Typography>
                            Professional management services for cafeteria operations, ensuring quality food service and customer satisfaction.
                            <br/><br/>
                            <Typography variant="h5" color="white" className="font-bold">
                                Turnstiles/Flap Barriers/Boom Barriers:
                            </Typography>
                            Advanced entry solutions for secure access control in various facility types, enhancing safety and efficiency.
                            <br/><br/>
                            Our facility management team is dedicated to providing tailored services that align with your organization’s strategic goals. We focus on optimizing resource utilization, ensuring compliance with safety standards, and creating a clean, safe, and efficient environment for employees and visitors alike. Trust Spartan Securitas Solutions for all your facility management needs and experience enhanced operational efficiency and reliability.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/Facility-Management.jpeg')" }}
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
