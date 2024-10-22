import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function CorporateSecurity() {
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
                            Corporate Security
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we understand that the corporate environment demands a sophisticated approach to security. Our Corporate Security services provide comprehensive solutions to safeguard your assets, employees, and operations against threats, enabling you to focus on your business objectives with peace of mind.
                        </Typography>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Our highly trained security professionals work closely with corporate clients to deliver security services tailored to your specific needs, whether for corporate headquarters, office spaces, or high-profile events. We focus on preventing risks, mitigating threats, and ensuring a secure, smooth-running corporate environment.
                        </Typography>
                        <br />
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Our Corporate Security Services Include:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Asset Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We provide physical and technological security measures to protect valuable corporate assets, including proprietary information, financial data, and intellectual property.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Employee Safety:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Ensuring the safety of employees is a top priority. Our trained security guards create a safe working environment, preventing unauthorized access and addressing any security concerns promptly.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Risk Assessment and Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security experts conduct comprehensive risk assessments to identify potential threats to your corporate operations and implement proactive strategies to mitigate those risks.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Executive Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                High-profile executives often require additional protection. We offer tailored security services for executives, including travel security, on-site protection, and threat assessments.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. Access Control and Surveillance:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Advanced access control systems, CCTV monitoring, and security patrols help maintain the integrity of your corporate space, ensuring that only authorized personnel have access to sensitive areas.
                            </Typography>
                            <br />
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                6. Crisis Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our team is trained to respond swiftly to any crisis, from security breaches to emergencies, ensuring minimal disruption to your business operations.
                            </Typography>
                        </div>
                        <br />
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Trust Spartan Securitas Solutions to provide reliable corporate security services that enhance your business operations, protect your employees, and safeguard your assets. Contact us today to learn more about how we can help fortify your corporate environment.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/Corporate-Security.png')" }}
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
