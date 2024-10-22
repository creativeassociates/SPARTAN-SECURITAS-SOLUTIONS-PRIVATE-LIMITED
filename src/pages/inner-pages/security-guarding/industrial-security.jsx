import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import {motion, useInView} from "framer-motion";

export function IndustrialSecurity() {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    return (
        <>
            <ScrollToTop/>
            <div className="relative" style={{backgroundImage: "url('./img/bg-5.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes}/>
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
                            Industrial Security
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Industrial operations require robust security to protect critical infrastructure, valuable
                            assets, and personnel. Spartan Securitas Solutions Private Limited offers specialized
                            Industrial Security services designed to safeguard large-scale facilities, factories, and
                            industrial complexes.
                        </Typography>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Our security professionals are trained to handle the unique challenges of industrial
                            environments, ensuring uninterrupted operations, protecting against theft, vandalism, and
                            unauthorized access, and maintaining safety protocols to minimize risks.
                        </Typography>
                        <br/>
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Our Industrial Security Services Include:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Perimeter Security and Surveillance:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We implement advanced perimeter security systems, including CCTV monitoring, patrolling,
                                and controlled access points to ensure that your industrial facility remains secure
                                around the clock.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Asset and Inventory Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security experts work to protect valuable industrial assets, including raw
                                materials, machinery, and finished products, from theft and sabotage through a
                                combination of physical security measures and technology.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Safety and Emergency Response:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Ensuring the safety of your staff is crucial in high-risk industrial settings. Our team
                                is trained in safety protocols, fire hazard management, and emergency response to
                                minimize risk during critical situations.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Access Control and Visitor Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Implementing controlled access systems ensures that only authorized personnel have
                                access to sensitive areas of your industrial site. Our visitor management systems
                                further enhance security by tracking all entries and exits.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. Threat and Risk Assessments:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We conduct thorough risk assessments to identify potential security threats and
                                vulnerabilities, ensuring that your industrial facility is well-prepared against any
                                form of intrusion or security breach.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                6. Industrial Safety Regulations Compliance:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security services ensure compliance with industrial safety standards and
                                regulations, helping you maintain a safe, secure, and efficient working environment at
                                all times.
                            </Typography>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            With Spartan Securitas Solutions, you can trust that your industrial operations will remain
                            secure, compliant, and protected. Contact us today to discuss how we can develop a custom
                            security plan for your facility.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/Industrial-Security.png')"}}
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
