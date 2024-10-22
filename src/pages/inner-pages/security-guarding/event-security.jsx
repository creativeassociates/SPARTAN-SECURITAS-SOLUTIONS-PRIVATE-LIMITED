import { Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function EventSecurity() {
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
                            Event Security
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions Private Limited, we specialize in providing top-tier security
                            services for events of all scales. From small private gatherings to large public functions,
                            our team ensures that your event runs smoothly, free from disruptions and security concerns.
                            With extensive experience in event security management, we understand the unique challenges
                            that come with different types of events and are equipped to handle them with
                            professionalism.
                        </Typography>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Whether you are organizing a corporate conference, a concert, a sporting event, or a
                            high-profile public gathering, our tailored event security solutions offer you peace of
                            mind. Our team works closely with event organizers, venue management, and local authorities
                            to ensure a comprehensive security plan is in place.
                        </Typography>
                        <br/>
                        <Typography
                            variant="h5" color="white" className="font-bold mt-5 text-xl">
                            Our Event Security Services Include:
                        </Typography>
                        <div className="ml-4 mt-2 text-left text-white">
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                1. Crowd Management:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Ensuring the safety and control of large crowds with expert personnel trained in crowd
                                control and management, minimizing risks of disorder or emergency situations.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                2. Access Control and Ticket Verification:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our security teams manage entrances and exits, verify tickets, and regulate access to
                                restricted areas, ensuring that only authorized attendees and staff can access specific
                                event zones.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                3. VIP and Executive Protection:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                For events involving VIPs, celebrities, or high-profile individuals, we provide discreet
                                and reliable executive protection services to ensure their safety and privacy.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                4. Emergency Response:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our event security personnel are trained to respond to emergencies such as medical
                                incidents, fire hazards, or security threats with speed and efficiency, ensuring that
                                the event proceeds without any major disruptions.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                5. Surveillance and Monitoring:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                We deploy state-of-the-art surveillance equipment and monitoring systems to keep an eye
                                on key areas of the event venue, ensuring that any suspicious activity is detected and
                                addressed promptly.
                            </Typography>
                            <br/>
                            <Typography variant="h6" color="white" className="font-bold mt-2">
                                6. Perimeter Security:
                            </Typography>
                            <Typography variant="paragraph" color="white">
                                Our teams provide perimeter security services to prevent unauthorized access to the
                                event site, maintaining a secure boundary around the venue.
                            </Typography>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions, we ensure that every aspect of event security is covered,
                            allowing you to focus on creating memorable experiences for your attendees. Contact us today
                            to discuss how we can tailor our event security services to suit your specific needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/event-security.jpeg')"}}
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
