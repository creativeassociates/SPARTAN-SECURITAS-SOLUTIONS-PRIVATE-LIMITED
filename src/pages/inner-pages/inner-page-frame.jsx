import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function InnerPageFrame({title, para, imageName}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const fadeIn = {
        hidden: {opacity: 0, y: 24},
        visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeOut"}},
    };

    return (
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
                    <div className="glass-panel relative z-10 p-6 sm:p-8 lg:p-10">
                        <Typography variant="h2"
                                    className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            <span className="bg-gradient-to-r from-cyanpulse via-white to-aurora bg-clip-text text-transparent">
                                {title}
                            </span>
                        </Typography>
                        <div
                            className="mt-6 space-y-4 text-left text-base leading-relaxed text-slate-200"
                            dangerouslySetInnerHTML={{__html: para.replace(/\n\s+/g, " ")}}
                        />
                    </div>
                    <motion.div
                        className="relative z-10"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <div className="glass-panel relative h-full overflow-hidden p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
                            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[32rem]">
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-cyanpulse/15 via-transparent to-aurora/10"/>
                                <div
                                    className="h-full w-full rounded-2xl bg-cover bg-center"
                                    style={{backgroundImage: `url('./img/${imageName}')`}}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
