import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function WhatWeDo() {
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
                    <div className="glass-panel p-6 sm:p-8 lg:p-10 space-y-6">
                        <div>
                            <span className="chip">What we do?</span>
                            <Typography variant="h2"
                                        className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                                What We Do?
                            </Typography>
                        </div>
                        <Typography
                            variant="paragraph"
                            className="text-base leading-relaxed text-slate-200"
                        >
                            At Spartan Securitas Solutions Pvt. Ltd., we offer comprehensive facility management and
                            security solutions tailored to meet the unique requirements of businesses across various
                            industries. Our extensive range of services enhances efficiency, security, and operational
                            excellence, allowing you to focus on your core business while we manage the details.
                        </Typography>

                        <div className="space-y-4 text-slate-200">
                            <Typography variant="h4" className="text-xl font-semibold text-white">
                                Facility Management Solutions
                            </Typography>
                            <Typography className="leading-relaxed">
                                We excel in maintaining and managing both new and existing facilities through seamless
                                integration of technology and expertise. Our offerings include:
                            </Typography>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>Maintenance of precision air conditioners, HVAC systems, and building management systems (BMS) for optimal environmental control and energy efficiency.</li>
                                <li>Comprehensive visitor management, cafeteria management, and access control systems to ensure smooth day-to-day operations.</li>
                                <li>Customized annual maintenance contracts (AMCs) to ensure your facility runs efficiently year-round.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-slate-200">
                            <Typography variant="h4" className="text-xl font-semibold text-white">
                                Security Solutions
                            </Typography>
                            <Typography className="leading-relaxed">
                                We protect your business with state-of-the-art electronic security systems, including professionally trained security guards:
                            </Typography>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>CCTV Surveillance (including Dome, Bullet, Network/IP, and Wireless cameras) for continuous monitoring.</li>
                                <li>Access Control and Intrusion Detection to safeguard your premises.</li>
                                <li>Fire Detection & Fire Fighting Systems, including heat/smoke detectors, programmable alarm systems, and water sprinkler systems.</li>
                                <li>Biometric Attendance & Vehicle Surveillance Solutions to streamline security and access management.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-slate-200">
                            <Typography variant="h4" className="text-xl font-semibold text-white">
                                Technical Solutions
                            </Typography>
                            <Typography className="leading-relaxed">
                                Our advanced technology solutions help businesses operate smarter:
                            </Typography>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>Biometric Attendance Management Systems for accurate and efficient workforce tracking.</li>
                                <li>Automated Parking Management and Vehicle Management through GPRS Solutions for seamless parking operations.</li>
                                <li>AV Integration Services, including audio/video conferencing systems, wireless displays, and experience centers to enhance communication and collaboration.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-slate-200">
                            <Typography variant="h4" className="text-xl font-semibold text-white">
                                Operations & Maintenance
                            </Typography>
                            <Typography className="leading-relaxed">
                                We offer complete operations and maintenance services to keep your facility running smoothly:
                            </Typography>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>General electrical maintenance and servicing of LT/HT panels, ACB/VCB units, and DG operations.</li>
                                <li>24/7 power, UPS, and BMS monitoring to ensure uninterrupted facility performance.</li>
                                <li>Comprehensive preventive and breakdown maintenance, project management, and AMC solutions to mitigate risks and reduce downtime.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-slate-200">
                            <Typography variant="h4" className="text-xl font-semibold text-white">
                                Safety Equipment & IT Peripherals
                            </Typography>
                            <Typography className="leading-relaxed">
                                We also provide high-quality safety equipment to ensure a safe working environment:
                            </Typography>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>Protective gear, including helmets, gloves, reflective jackets, and fire blankets.</li>
                                <li>Emergency kits such as first aid and eyewash stations.</li>
                                <li>A wide range of IT peripherals including laptops, monitors, hubs, and POE switches to support your technological needs.</li>
                            </ul>
                        </div>

                        <Typography className="text-base leading-relaxed text-slate-200">
                            Whether you need a reliable partner for facility management, enhanced security systems, or
                            advanced technical solutions, Spartan Securitas Solutions Pvt. Ltd. is here to provide the
                            expertise, innovation, and support to meet your business needs.
                        </Typography>
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
                                     style={{backgroundImage: "url('./img/fingerprint.jpeg')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
