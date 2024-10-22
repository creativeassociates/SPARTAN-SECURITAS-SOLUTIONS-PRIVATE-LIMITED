import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function BodyGuards() {
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
                            Body Guards
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            In an increasingly unpredictable world, personal safety has become a top priority for many
                            individuals. At Spartan Securitas Solutions, we offer professional bodyguard services to
                            provide high-level protection for clients, ensuring their safety and peace of mind.
                        </Typography>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Our bodyguards are meticulously trained professionals with extensive backgrounds in
                            security, law enforcement, and military operations. They are equipped to handle various
                            situations, adapting to the unique needs of each client while maintaining a discreet
                            presence.
                        </Typography>
                        <br />
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Key Features of Our Bodyguard Services:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Personal Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our bodyguards provide dedicated personal protection, ensuring that clients are safe in
                                various environments, whether at home, in public, or during travel.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Threat Assessment:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We conduct thorough risk assessments to identify potential threats, allowing us to
                                develop tailored security plans that effectively mitigate risks.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Discreet and Professional:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our team understands the importance of discretion and professionalism. We maintain a
                                low profile while providing robust protection, ensuring that clients can carry on with
                                their daily lives without disruptions.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Travel Security:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We offer travel security services to ensure clients are protected during local and
                                international travel, coordinating logistics to keep them safe throughout their journey.
                            </Typography>
                        </div>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions, we prioritize the safety of our clients above all else.
                            Our bodyguard services are designed to provide you with the peace of mind you deserve,
                            allowing you to focus on your personal and professional endeavors without fear.
                            Contact us today to discuss your security needs and let us tailor a protection plan
                            that best suits you.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/body-guard.jpg')" }}
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
