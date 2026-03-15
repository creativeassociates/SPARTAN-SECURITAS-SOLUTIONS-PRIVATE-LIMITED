import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";
import ScrollToTop from "../widgets/scroll-to-top.jsx";

export function SoftServices() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const fadeIn = {
        hidden: {opacity: 0, y: 24},
        visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeOut"}},
    };

    return (
        <>
            <ScrollToTop/>
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
                            <span className="chip">Soft Services</span>
                            <Typography variant="h2"
                                        className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                                Soft Services
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-base leading-relaxed text-slate-200"
                            >
                                At Spartan Securitas Solutions, we offer a comprehensive range of soft services designed
                                to maintain the cleanliness, hygiene, and aesthetic appeal of your premises. Our expert
                                teams are committed to providing top-notch services that enhance the overall environment
                                of your facilities. Here’s a closer look at the soft services we provide:
                            </Typography>

                            <div className="space-y-4 text-left text-slate-200">
                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Housekeeping & Cleaning Services:
                                    </Typography>
                                    <span>Our housekeeping services ensure that your workspace remains spotless and welcoming. We offer daily cleaning, deep cleaning, and maintenance services tailored to meet the unique requirements of your facility, whether it’s an office, school, or industrial site. Our trained staff uses eco-friendly products to promote a safe and healthy environment.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Disinfecting and Sanitizing Services:
                                    </Typography>
                                    <span>In today's health-conscious world, maintaining cleanliness is more critical than ever. Our disinfecting and sanitizing services utilize advanced techniques and EPA-approved products to effectively eliminate germs, bacteria, and viruses from surfaces, providing you with peace of mind and a safe environment for your staff and visitors.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Pest Control Service:
                                    </Typography>
                                    <span>Our pest control services offer comprehensive solutions to manage and eliminate pest infestations in residential and commercial properties. We employ environmentally friendly methods to ensure your space remains pest-free while safeguarding your health and the environment.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Pantry Services:
                                    </Typography>
                                    <span>Our pantry services focus on maintaining a well-stocked and organized pantry for your office. We provide management of pantry supplies, ensuring freshness and quality while catering to the preferences and dietary needs of your staff, creating a pleasant and efficient workplace atmosphere.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Facade Cleaning:
                                    </Typography>
                                    <span>Enhance the appearance of your building with our professional facade cleaning services. We use specialized techniques and equipment to remove dirt, grime, and pollutants from exterior surfaces, improving the aesthetics of your property and ensuring a positive impression on clients and visitors.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Guest House Management:
                                    </Typography>
                                    <span>Our guest house management services provide a seamless experience for your visitors. From housekeeping to food services, we ensure that your guest house is maintained to the highest standards, providing comfort and convenience for your guests.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Lawn and Garden Landscaping:
                                    </Typography>
                                    <span>Transform your outdoor spaces with our expert lawn and garden landscaping services. We offer design, installation, and maintenance solutions that enhance the beauty and functionality of your landscape, creating a welcoming environment for employees and visitors alike.</span>
                                </div>
                            </div>

                            <Typography
                                variant="paragraph"
                                className="text-base leading-relaxed text-slate-200"
                            >
                                Trust Spartan Securitas Solutions for all your soft service needs. Our team is dedicated
                                to providing exceptional service and maintaining the highest standards of cleanliness and
                                organization, allowing you to focus on what matters most: your business. Contact us
                                today to learn more about how we can support your facility management needs.
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
                                         style={{backgroundImage: "url('./img/Soft-Services.webp')"}}/>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
