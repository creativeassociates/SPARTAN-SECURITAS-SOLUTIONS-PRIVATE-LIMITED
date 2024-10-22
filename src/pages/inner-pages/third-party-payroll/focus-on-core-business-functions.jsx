import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function FocusOnCoreBusinessFunctions() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    return (
        <>
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
                            Focus on Core Business Functions
                        </Typography>
                        <Typography variant="paragraph" color="white"
                                    className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            At Spartan Securitas Solutions, we enable organizations to focus on their core business
                            functions by taking care of payroll management. Our services are designed to alleviate the
                            burden of payroll processes, allowing your HR team to dedicate their time and energy to
                            strategic initiatives that drive business growth.
                        </Typography>
                        <br/>
                        <Typography variant="paragraph" color="white"
                                    className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            By outsourcing payroll to us, you gain the advantage of increased operational efficiency and
                            enhanced decision-making capabilities. Our comprehensive payroll solutions ensure that you
                            remain agile and competitive in a dynamic business environment.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/core-functions.jpeg')"}}
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
