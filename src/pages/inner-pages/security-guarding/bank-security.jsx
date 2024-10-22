import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import {motion, useInView} from "framer-motion";

export function BankSecurity() {
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
                            Bank Security
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we provide comprehensive bank security
                            services designed to protect financial institutions, employees, and customers from a range
                            of threats. With increasing incidents of cyber and physical security breaches, it is
                            critical to have a robust and responsive security system in place to safeguard sensitive
                            information and assets.
                        </Typography>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Our highly trained security personnel, cutting-edge technology, and best practices ensure
                            that banks and financial institutions operate in a secure environment. From preventing
                            unauthorized access to protecting vaults and ATMs, we provide specialized services tailored
                            to the unique requirements of the banking industry.
                        </Typography>
                        <br/>
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Our Bank Security Services Include:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Vault and ATM Security:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our trained security personnel provide around-the-clock protection for bank vaults and
                                ATMs, preventing unauthorized access and ensuring the safety of valuable assets.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Armed and Unarmed Guards:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We deploy both armed and unarmed security guards at critical access points, lobbies, and
                                other vulnerable areas to prevent theft, robbery, and other criminal activities.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. Surveillance and Monitoring:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Advanced CCTV systems and surveillance technology ensure that every corner of your bank
                                is monitored 24/7. We track suspicious activities and respond promptly to potential
                                threats.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Access Control Systems:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our access control systems restrict entry to authorized personnel only, providing an
                                additional layer of security to sensitive areas within the bank, such as data centers
                                and cash storage rooms.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. Cash Handling and Transport Security:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We provide secure cash transportation services, ensuring that funds are safely
                                transferred between branches, ATMs, and other locations. Our security protocols minimize
                                the risk of theft or loss during transit.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                6. Threat Response and Emergency Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our team is trained to handle emergency situations, from robberies to fire hazards,
                                ensuring a swift and coordinated response to any security threat.
                            </Typography>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            With Spartan Securitas Solutions, you can trust that your bank will operate safely, with
                            reduced risks of security breaches. Contact us to explore our customized security services
                            that ensure comprehensive protection for your financial institution.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/bank-security.png')"}}
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
