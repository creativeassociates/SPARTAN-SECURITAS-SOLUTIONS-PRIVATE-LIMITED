import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function WorkingWithUsPleasure() {
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
                        <span className="chip">Working with us is a pleasure</span>
                        <Typography variant="h2"
                                    className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Working with Us is a Pleasure
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-base leading-relaxed text-slate-200"
                        >
                            Partnering with us means seamless collaboration, innovative solutions, and a commitment to
                            your business’s success. Our expert team brings personalized, cutting-edge services,
                            ensuring your needs are met efficiently and with precision. With our focus on quality and
                            reliability, working with us is not just a service—it’s a long-term relationship built on
                            trust and excellence.
                        </Typography>

                        <Typography variant="h3" className="text-2xl font-semibold text-white">
                            Why Partner with Us?
                        </Typography>

                        <div className="space-y-5 text-base leading-relaxed text-slate-200">
                            <div>
                                <Typography variant="h4" className="text-xl font-semibold text-white">
                                    Client-Centric Approach:
                                </Typography>
                                <span>We listen to your requirements and tailor our solutions to meet your specific challenges. Our commitment to understanding your business ensures that we deliver results that truly matter.</span>
                            </div>

                            <div>
                                <Typography variant="h4" className="text-xl font-semibold text-white">
                                    Expertise and Experience:
                                </Typography>
                                <span>With over 69 years in the industry, our team comprises highly skilled professionals who are passionate about what they do. We leverage our extensive knowledge and experience to provide innovative solutions that drive operational efficiency and security.</span>
                            </div>

                            <div>
                                <Typography variant="h4" className="text-xl font-semibold text-white">
                                    Open Communication:
                                </Typography>
                                <span>Transparency and open lines of communication are the cornerstones of our working relationship. We keep you informed every step of the way, ensuring that you are always in the loop regarding project progress and updates.</span>
                            </div>

                            <div>
                                <Typography variant="h4" className="text-xl font-semibold text-white">
                                    Proactive Support:
                                </Typography>
                                <span>Our partnership doesn't end with the delivery of services. We provide continuous support and maintenance to ensure that your operations run smoothly. Our dedicated crisis management team is always available to address any challenges that may arise.</span>
                            </div>

                            <div>
                                <Typography variant="h4" className="text-xl font-semibold text-white">
                                    Shared Success:
                                </Typography>
                                <span>We view your success as our success. By fostering a collaborative environment, we aim to build long-term relationships that contribute to your growth and enhance your operational capabilities.</span>
                            </div>

                            <div>
                                Join us at Spartan Securitas Solutions Pvt. Ltd. and experience a partnership that is
                                defined by excellence, dedication, and a shared commitment to success. Working with us is
                                not just a transaction; it’s a journey towards achieving your organizational goals
                                together.
                            </div>
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
                                     style={{backgroundImage: "url('./img/working.jpeg')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
