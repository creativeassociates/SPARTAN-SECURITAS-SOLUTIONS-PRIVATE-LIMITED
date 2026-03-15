import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function WhoWeAre() {
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
                        <span className="chip">Who we are?</span>
                        <Typography variant="h2"
                                    className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Who We Are?
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="mt-4 text-base leading-relaxed text-slate-200"
                        >
                            At Spartan Securitas Solutions Pvt. Ltd., we specialize in delivering innovative, end-to-end
                            facility management solutions across industries such as Retail, Hospitality, Manufacturing,
                            and Corporate sectors. With over 20 years of experience, we provide tailored solutions that
                            enhance efficiency, security, and seamless operations.
                            <br/><br/>
                            Our expertise encompasses electronic security systems, facility management, project
                            management, and the deployment of trained security guards, all designed to align with your
                            objectives. From CCTV and fire protection to biometric attendance and automated parking, we
                            offer a comprehensive range of services under one roof.
                            <br/><br/>
                            Our dedication to client-focused service, proactive maintenance, and 24/7 support
                            establishes us as a trusted partner for businesses throughout India. Allow us to manage your
                            facility needs, enabling you to concentrate on expanding your business.
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
                                     style={{backgroundImage: "url('./img/securityguard.webp')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
