import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function SecurityGuardServices() {
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
                        <span className="chip">Security Guard Services</span>
                        <Typography variant="h2"
                                    className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Security Guard Services
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-base leading-relaxed text-slate-200"
                        >
                            Spartan Securitas Solutions Private Limited provides a comprehensive range of security guard
                            services tailored to meet the diverse needs of our clients. Our dedicated team of
                            professionals ensures safety and security across various sectors, including:
                        </Typography>

                        <div className="space-y-4 text-left text-slate-200">
                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Security Guards at Access Points:
                                </Typography>
                                <span>Counter theft and unauthorized access with trained security personnel stationed at critical access points. Our guards are equipped with the skills to monitor and control entry, ensuring only authorized personnel have access to sensitive areas.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Body Guards:
                                </Typography>
                                <span>Personal protection services for high-profile individuals and clients. Our bodyguards are highly trained in defensive tactics and risk assessment, providing an extra layer of security wherever needed.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Armed Guards:
                                </Typography>
                                <span>Armed security personnel for high-risk environments requiring additional protection. Our armed guards are trained in the use of firearms and crisis management, ensuring a swift response to any threats.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Corporate Security:
                                </Typography>
                                <span>Customized security solutions for corporate offices to safeguard assets and personnel. We conduct thorough risk assessments and implement security protocols tailored to the specific needs of your business.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Industrial Security:
                                </Typography>
                                <span>Protecting industrial facilities and ensuring safe operations with expert security management. Our security solutions include surveillance, access control, and emergency response planning.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Bank Security:
                                </Typography>
                                <span>Specialized security services for banks and financial institutions to mitigate risks. Our guards are trained to handle cash security and emergency situations, ensuring the safety of staff and customers.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Event Security:
                                </Typography>
                                <span>Comprehensive security for events, ensuring the safety of attendees and smooth operations. Our team is skilled in crowd management and emergency response, providing peace of mind during your events.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Retail Security:
                                </Typography>
                                <span>Protecting retail spaces from theft and enhancing the shopping experience for customers. Our loss prevention strategies are designed to deter shoplifting and ensure a safe environment.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Hotel Security:
                                </Typography>
                                <span>Ensuring guest safety and security in hotels with trained security staff. We implement measures to monitor guest access and maintain a secure environment throughout the property.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Institutional Security:
                                </Typography>
                                <span>Security solutions for schools, colleges, and other institutions to create a safe learning environment. Our personnel are trained to handle various scenarios, including emergency evacuations.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Residential Security:
                                </Typography>
                                <span>Protection for residential complexes and communities to enhance safety and peace of mind. Our services include patrols and surveillance to deter crime in neighborhoods.</span>
                            </div>

                            <div>
                                <Typography variant="h5" className="font-bold text-white">
                                    Executive Protection:
                                </Typography>
                                <span>Specialized protection services for executives and high-net-worth individuals. Our executive protection agents conduct threat assessments and create personalized security plans to mitigate risks.</span>
                            </div>
                        </div>

                        <Typography
                            variant="paragraph"
                            className="text-base leading-relaxed text-slate-200"
                        >
                            Our team is committed to providing reliable and professional security services to protect
                            what matters most. Contact Spartan Securitas Solutions for customized security solutions
                            tailored to your needs.
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
