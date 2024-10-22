import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";

export function ThirdPartyPayroll() {
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
                            Third Party Payroll Services
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Spartan Securitas Solutions, we understand the complexities and challenges associated
                            with payroll management. Our Third Party Payroll Services are designed to streamline your
                            payroll processes, ensuring compliance and accuracy while allowing you to focus on your core
                            business functions. Here’s how we can assist you:
                        </Typography>
                        <br/>

                        <div className="text-left text-white">
                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    End-to-End Payroll Management:
                                </Typography>
                                <span>Our comprehensive payroll management services cover everything from payroll calculation to the distribution of salaries, ensuring a smooth and efficient process tailored to your organization’s needs.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Compliance and Regulatory Expertise:
                                </Typography>
                                <span>We stay up-to-date with the latest labor laws and regulations, ensuring that your payroll processes comply with all legal requirements, helping you avoid penalties and protect your business.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Time and Resource Optimization:
                                </Typography>
                                <span>By outsourcing payroll management to us, you can save time and resources, allowing your HR team to focus on strategic initiatives rather than administrative tasks.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Accurate and Timely Payroll Processing:
                                </Typography>
                                <span>We guarantee accurate and timely payroll processing, ensuring that your employees are paid correctly and on time, which enhances employee satisfaction and trust.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Streamlined HR Services:
                                </Typography>
                                <span>Our payroll services integrate seamlessly with other HR functions, allowing for a more efficient management process and providing valuable insights through data analysis.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Experienced and Professional Team:
                                </Typography>
                                <span>Our dedicated team of payroll professionals brings years of experience and expertise, ensuring your payroll processes are managed with the utmost precision and care.</span>
                            </div>

                            <div className="mb-5">
                                <Typography variant="h5" color="white" className="font-bold">
                                    Focus on Core Business Functions:
                                </Typography>
                                <span>By partnering with us for your payroll needs, you can concentrate on your core business functions, driving growth and enhancing your organizational effectiveness.</span>
                            </div>
                        </div>
                        <br/>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Choose Spartan Securitas Solutions for reliable and efficient Third Party Payroll Services.
                            We are committed to providing tailored solutions that meet your unique needs, ensuring
                            compliance, accuracy, and peace of mind. Contact us today to learn more about how we can
                            support your payroll management needs.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/third-party-payroll.webp')"}}
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
