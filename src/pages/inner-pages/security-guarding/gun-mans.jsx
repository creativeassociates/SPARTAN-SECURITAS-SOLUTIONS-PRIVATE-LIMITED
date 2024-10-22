import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function GunMans() {
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
                            Gun Mans
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Spartan Securitas Solutions Private Limited offers armed security services for high-risk environments where enhanced protection is essential. Our highly trained gunmen are equipped with firearms and advanced security training to ensure the highest level of safety and deterrence in critical situations.
                        </Typography>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            We provide gunman services for businesses, financial institutions, high-profile individuals, industrial facilities, and other locations that require superior security measures. Our gunmen are handpicked, rigorously trained, and certified to operate under the most demanding conditions.
                        </Typography>
                        <br />
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Key Features of Our Gunman Services:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Armed Security for High-Risk Areas:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our gunmen are deployed to areas where the threat of criminal activity or violence is heightened, providing a strong deterrent and rapid response capability.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Extensive Training:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                All our gunmen undergo comprehensive training in firearms handling, safety protocols, situational awareness, and conflict de-escalation techniques to ensure they are fully prepared for any scenario.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Vigilant Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our gunmen maintain constant vigilance, ensuring that potential threats are identified and neutralized before they escalate, providing you with peace of mind.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Emergency Response:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                In the event of an emergency, our armed guards are trained to respond swiftly and efficiently, safeguarding both personnel and property.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. Customized Security Plans:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We develop tailored security strategies that align with the unique needs of your business or personal situation, ensuring optimal protection and risk mitigation.
                            </Typography>
                        </div>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            When it comes to safeguarding high-value assets, protecting sensitive environments, or ensuring the personal safety of VIPs, our gunmen provide the expertise and assurance you need. Trust Spartan Securitas Solutions for reliable armed security services that deliver peace of mind.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/gun-mans.png')" }}
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
