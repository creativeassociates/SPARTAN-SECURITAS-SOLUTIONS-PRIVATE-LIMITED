import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import {navRoutes} from "../routes.jsx";
import {motion, useInView} from "framer-motion";
import ScrollToTop from "../widgets/scroll-to-top.jsx";

export function ThirdPartyPayroll() {
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
                            <span className="chip">Third Party Payroll Services</span>
                            <Typography variant="h2"
                                        className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                                Third Party Payroll Services
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-base leading-relaxed text-slate-200"
                            >
                                At Spartan Securitas Solutions, we understand the complexities and challenges associated
                                with payroll management. Our Third Party Payroll Services are designed to streamline your
                                payroll processes, ensuring compliance and accuracy while allowing you to focus on your
                                core business functions. Here’s how we can assist you:
                            </Typography>

                            <div className="space-y-4 text-left text-slate-200">
                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        End-to-End Payroll Management:
                                    </Typography>
                                    <span>Our comprehensive payroll management services cover everything from payroll calculation to the distribution of salaries, ensuring a smooth and efficient process tailored to your organization’s needs.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Compliance and Regulatory Expertise:
                                    </Typography>
                                    <span>We stay up-to-date with the latest labor laws and regulations, ensuring that your payroll processes comply with all legal requirements, helping you avoid penalties and protect your business.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Time and Resource Optimization:
                                    </Typography>
                                    <span>By outsourcing payroll management to us, you can save time and resources, allowing your HR team to focus on strategic initiatives rather than administrative tasks.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Accurate and Timely Payroll Processing:
                                    </Typography>
                                    <span>We guarantee accurate and timely payroll processing, ensuring that your employees are paid correctly and on time, which enhances employee satisfaction and trust.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Streamlined HR Services:
                                    </Typography>
                                    <span>Our payroll services integrate seamlessly with other HR functions, allowing for a more efficient management process and providing valuable insights through data analysis.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Experienced and Professional Team:
                                    </Typography>
                                    <span>Our dedicated team of payroll professionals brings years of experience and expertise, ensuring your payroll processes are managed with the utmost precision and care.</span>
                                </div>

                                <div>
                                    <Typography variant="h5" className="font-bold text-white">
                                        Focus on Core Business Functions:
                                    </Typography>
                                    <span>By partnering with us for your payroll needs, you can concentrate on your core business functions, driving growth and enhancing your organizational effectiveness.</span>
                                </div>
                            </div>

                            <Typography
                                variant="paragraph"
                                className="text-base leading-relaxed text-slate-200"
                            >
                                Choose Spartan Securitas Solutions for reliable and efficient Third Party Payroll
                                Services. We are committed to providing tailored solutions that meet your unique needs,
                                ensuring compliance, accuracy, and peace of mind. Contact us today to learn more about
                                how we can support your payroll management needs.
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
                                         style={{backgroundImage: "url('./img/third-party-payroll.webp')"}}/>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
