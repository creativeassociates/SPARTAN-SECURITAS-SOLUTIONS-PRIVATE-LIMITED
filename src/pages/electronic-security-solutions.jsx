import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function ElectronicSecuritySolutions() {
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
                        <span className="chip">Electronic Security</span>
                        <Typography variant="h2"
                                    className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Electronic Security Solutions
                        </Typography>
                        <div className="mt-4 space-y-5 text-base leading-relaxed text-slate-200">
                            <p>
                                Spartan Securitas Solutions Private Limited specializes in comprehensive electronic
                                security solutions designed to protect your assets and ensure the safety of your
                                facility. Our services include a wide range of advanced security systems, such as:
                            </p>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    CCTV Surveillance:
                                </Typography>
                                <p className="text-slate-200">
                                    High-definition cameras and monitoring systems for effective visual coverage of your
                                    premises.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Access Control Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    Secure entry solutions that restrict access to authorized personnel only.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Intrusion Detection Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    Advanced sensors and alarms that alert you to unauthorized access or breaches.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Fire Detection and Fighting Systems:
                                </Typography>
                                <p className="text-slate-200">
                                    Reliable systems that detect and suppress fires to minimize damage and ensure
                                    safety.
                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Biometric Security Solutions:
                                </Typography>
                                <p className="text-slate-200">
                                    Cutting-edge technology for secure and convenient access control.
                                </p>
                            </div>
                            <p>
                                With our expertise in electronic security, we provide tailored solutions that enhance
                                safety, reduce risks, and give you peace of mind. Our dedicated team ensures seamless
                                implementation, ongoing support, and regular maintenance, keeping your security systems
                                up-to-date and effective. Choose Spartan Securitas Solutions for reliable protection and
                                advanced security solutions.
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
                                     style={{backgroundImage: "url('./img/Electronic-Security-Solutions.jpeg')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
