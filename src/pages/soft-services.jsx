import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function SoftServices() {
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
                            Soft Services
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions, we offer a comprehensive range of soft services designed to
                            maintain the cleanliness, hygiene, and aesthetic appeal of your premises. Our expert teams
                            are committed to providing top-notch services that enhance the overall environment of your
                            facilities. Here’s a closer look at the soft services we provide:
                        </Typography>
                        <br/>

                        <div className="text-left text-white">
                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Housekeeping & Cleaning Services:
                                </Typography>
                                <span>Our housekeeping services ensure that your workspace remains spotless and welcoming. We offer daily cleaning, deep cleaning, and maintenance services tailored to meet the unique requirements of your facility, whether it’s an office, school, or industrial site. Our trained staff uses eco-friendly products to promote a safe and healthy environment.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Disinfecting and Sanitizing Services:
                                </Typography>
                                <span>In today's health-conscious world, maintaining cleanliness is more critical than ever. Our disinfecting and sanitizing services utilize advanced techniques and EPA-approved products to effectively eliminate germs, bacteria, and viruses from surfaces, providing you with peace of mind and a safe environment for your staff and visitors.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Pest Control Service:
                                </Typography>
                                <span>Our pest control services offer comprehensive solutions to manage and eliminate pest infestations in residential and commercial properties. We employ environmentally friendly methods to ensure your space remains pest-free while safeguarding your health and the environment.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Pantry Services:
                                </Typography>
                                <span>Our pantry services focus on maintaining a well-stocked and organized pantry for your office. We provide management of pantry supplies, ensuring freshness and quality while catering to the preferences and dietary needs of your staff, creating a pleasant and efficient workplace atmosphere.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Facade Cleaning:
                                </Typography>
                                <span>Enhance the appearance of your building with our professional facade cleaning services. We use specialized techniques and equipment to remove dirt, grime, and pollutants from exterior surfaces, improving the aesthetics of your property and ensuring a positive impression on clients and visitors.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Guest House Management:
                                </Typography>
                                <span>Our guest house management services provide a seamless experience for your visitors. From housekeeping to food services, we ensure that your guest house is maintained to the highest standards, providing comfort and convenience for your guests.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Lawn and Garden Landscaping:
                                </Typography>
                                <span>Transform your outdoor spaces with our expert lawn and garden landscaping services. We offer design, installation, and maintenance solutions that enhance the beauty and functionality of your landscape, creating a welcoming environment for employees and visitors alike.</span>
                            </div>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Trust Spartan Securitas Solutions for all your soft service needs. Our team is dedicated to
                            providing exceptional service and maintaining the highest standards of cleanliness and
                            organization, allowing you to focus on what matters most: your business. Contact us today to
                            learn more about how we can support your facility management needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/Soft-Services.webp')"}}
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
