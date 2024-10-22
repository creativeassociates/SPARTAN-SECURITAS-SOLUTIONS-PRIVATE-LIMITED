import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";
import {motion, useInView} from "framer-motion";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";

export function SecurityGuardsAtAccessPoints() {
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
                            Security Guards at Access Points to Counter Theft
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we recognize that preventing theft and
                            unauthorized access is essential for maintaining the integrity and safety of your premises.
                            Our security guards are strategically positioned at access points to deter theft and ensure
                            a secure environment for your organization.
                        </Typography>
                        <br/>
                        <Typography variant="paragraph" color="white"
                                    className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our trained security personnel are equipped with the skills and knowledge to effectively
                            monitor entry and exit points, utilizing their expertise to:
                        </Typography>
                        <br/>
                        <div className="list-disc list-inside text-left text-white pl-5">
                            <div className="mb-4">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Deter Criminal Activity:
                                </Typography>
                                Our presence at key access points serves as a strong deterrent against theft and
                                vandalism, dissuading potential criminals from targeting your facility.
                            </div>
                            <div className="mb-4">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Access Control:
                                </Typography>
                                Security guards meticulously verify the identity of individuals entering your premises,
                                ensuring that only authorized personnel gain access.
                            </div>
                            <div className="mb-4">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Incident Response:
                                </Typography>
                                In the event of suspicious activity or a security breach, our trained personnel are
                                prepared to respond swiftly and effectively, implementing protocols to manage the
                                situation.
                            </div>
                            <div className="mb-4">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Surveillance Monitoring:
                                </Typography>
                                Security guards continuously monitor surveillance systems to identify potential threats,
                                enhancing the overall security posture of your facility.
                            </div>
                            <div className="mb-4">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Customer Service:
                                </Typography>
                                Beyond security, our guards are trained to assist visitors and employees, providing
                                directions and support while maintaining a secure environment.
                            </div>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            With our comprehensive security guard services at access points, you can trust that your
                            organization is safeguarded against theft and unauthorized access. Partner with Spartan
                            Securitas Solutions to ensure the safety and security of your assets, employees, and
                            visitors. Contact us today for tailored security solutions that meet your unique needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/security-guard.webp')"}}
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
