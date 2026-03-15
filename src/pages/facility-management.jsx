import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function FacilityManagement() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const fadeIn = {
        hidden: {opacity: 0, y: 24},
        visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeOut"}},
    };

    return (
        <div className="section-shell">
            <div className="orb a"/>
            <div className="orb b"/>
            <div className="orb c"/>
            <div className="beam"/>
            <div className="container relative mx-auto">
                <div className="mb-8 lg:mb-12">
                    <Navbar routes={navRoutes}/>
                </div>
                <motion.div
                    ref={ref}
                    className="section-grid"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="glass-panel p-6 sm:p-8 lg:p-10">
                        <span className="chip">Facility Management</span>
                        <Typography variant="h2"
                                    className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Facility Management
                        </Typography>
                        <div className="mt-4 space-y-5 text-base leading-relaxed text-slate-200">
                            <p>
                                At Spartan Securitas Solutions Private Limited, we offer comprehensive facility
                                management solutions that ensure your operations run smoothly and efficiently. Our
                                services encompass a wide array of specialized areas, including:
                            </p>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Maintenance of Precision Air Conditioners:
                                </Typography>
                                <p className="text-slate-200">
                                    Expert servicing of precision HVAC systems to maintain optimal indoor climate control
                                    and energy efficiency.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Building Management Systems (BMS):
                                </Typography>
                                <p className="text-slate-200">
                                    Advanced systems for monitoring and controlling building services to enhance
                                    operational efficiency and reduce energy consumption.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Visitor Management Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    Streamlined processes for managing visitors, enhancing security, and improving the
                                    overall experience for guests.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Cafeteria Management:
                                </Typography>
                                <p className="text-slate-200">
                                    Professional management services for cafeteria operations, ensuring quality food
                                    service and customer satisfaction.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Turnstiles/Flap Barriers/Boom Barriers:
                                </Typography>
                                <p className="text-slate-200">
                                    Advanced entry solutions for secure access control in various facility types,
                                    enhancing safety and efficiency.
                                </p>
                            </div>
                            <p>
                                Our facility management team is dedicated to providing tailored services that align with
                                your organization’s strategic goals. We focus on optimizing resource utilization,
                                ensuring compliance with safety standards, and creating a clean, safe, and efficient
                                environment for employees and visitors alike. Trust Spartan Securitas Solutions for all
                                your facility management needs and experience enhanced operational efficiency and
                                reliability.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        className="relative"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <div className="glass-panel relative h-full overflow-hidden p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
                            <div
                                className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[32rem]">
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-cyanpulse/15 via-transparent to-aurora/10"/>
                                <div className="h-full w-full rounded-2xl bg-cover bg-center"
                                     style={{backgroundImage: "url('./img/Facility-Management.jpeg')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
