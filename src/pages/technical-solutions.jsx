import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function TechnicalSolutions() {
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
                        <span className="chip">Technical Solutions</span>
                        <Typography variant="h2"
                                    className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Technical Solutions
                        </Typography>
                        <div className="mt-4 space-y-5 text-base leading-relaxed text-slate-200">
                            <p>
                                Spartan Securitas Solutions Private Limited offers cutting-edge technical solutions
                                designed to enhance operational efficiency and streamline processes for businesses across
                                various sectors. Our innovative solutions include:
                            </p>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Automated Parking Management:
                                </Typography>
                                <p className="text-slate-200">
                                    Efficient parking solutions that automate vehicle entry and exit processes, improving
                                    traffic flow and reducing congestion in busy facilities.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Vehicle Management Through GPRS Solutions:
                                </Typography>
                                <p className="text-slate-200">
                                    Advanced tracking and management systems utilizing GPRS technology to monitor vehicle
                                    location, optimize routes, and improve fleet efficiency.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Biometric Attendance Management Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    State-of-the-art biometric systems that ensure accurate attendance tracking,
                                    enhancing accountability and operational transparency.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    AV and PA Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    Comprehensive audio-visual integration services that enhance communication and
                                    collaboration within spaces, from meeting rooms to large auditoriums.
                                </p>
                            </div>
                            <p>
                                At Spartan Securitas Solutions, we are committed to providing tailored technical
                                solutions that meet your specific needs. Our team of experts works closely with clients
                                to implement these advanced technologies, ensuring a seamless integration into existing
                                operations. Experience improved productivity, enhanced security, and innovative
                                solutions with our comprehensive technical offerings.
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
                                     style={{backgroundImage: "url('./img/technical-solutions.jpeg')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
