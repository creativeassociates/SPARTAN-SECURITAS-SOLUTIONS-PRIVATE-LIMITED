import React, {useRef, useState} from "react";
import {Button, Input, Textarea, Typography} from "@material-tailwind/react";
import {FingerPrintIcon} from "@heroicons/react/24/solid";
import {PageTitle} from "../widgets/layout/page-title.jsx";
import {Footer} from "../widgets/layout/footer.jsx";
import {FeatureCard} from "../widgets/cards/feature-card.jsx";
import {ServicesCard} from "../widgets/cards/services-card.jsx";
import {featuresData} from "../data/features-data.js";
import {services} from "../data/services-data.js";
import {useNavigate} from "react-router";
import Navbar from "../widgets/layout/navbar.jsx";
import {motion, useInView} from "framer-motion";
import * as emailjs from "emailjs-com";
import {navRoutes} from "../routes.jsx";
import {ClientSlider} from "./client_slider.jsx";

export function Home() {

    const SERVICE_ID = "service_g9p6t0u";
    const TEMPLATE_ID = "template_vlfquds";
    const PUBLIC_KEY = "HEUdbnpiyTW2pAnxg";

    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = () => {
        if (name.length < 1 || email.length < 5 || message.length < 1 || mobileNo.length < 10) {
            setStatus("All fields are required.");
            return;
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: name,
            user_email: email,
            mobile_number: mobileNo,
            message: message,
        }, PUBLIC_KEY)
            .then(
                () => {
                    setStatus("Received successfully!");
                    setName("");
                    setEmail("");
                    setMobileNo("");
                    setMessage("");
                },
                () => {
                    setStatus("Failed to send.");
                }
            );
    };

    const navigate = useNavigate();

    const whoWeAre = "At Spartan Securitas Solutions Pvt. Ltd., we are an energetic group of dedicated professionals focused on providing innovative, comprehensive facility management solutions across various industries. With more than 20 years of experience, we have become a reliable partner for businesses in the Retail, Hospitality, Manufacturing, and Corporate sectors, offering customized solutions that enhance efficiency, security, and smooth operations.";

    const whatWeDo = "At Spartan Securitas Solutions Pvt. Ltd., we excel in providing comprehensive facility management services across various industries. Our offerings guarantee the security, productivity, and seamless functioning of your business.";

    const workingWithUsPleasure = "At Spartan Securitas Solutions Pvt. Ltd., we understand that strong partnerships are founded on trust, cooperation, and mutual respect. By choosing us, you're not merely engaging a service provider; you're partnering with a committed team that puts your goals and priorities first.";

    const topNotchServices = "We provide comprehensive security and facility management solutions customized to fit the specific needs of your business. From cutting-edge surveillance systems to streamlined operations and safety measures, our services create a secure and well-maintained environment, enabling your organization to succeed.";

    const fadeInUp = {
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0, transition: {duration: 1}},
    };

    const fadeIn = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 1}},
    };

    const slideInFromRight = {
        hidden: {opacity: 0, x: 90},
        visible: {opacity: 1, x: 0, transition: {duration: 1}},
    };

    const refTop = useRef(null);
    const refWhoWeAre = useRef(null);
    const refWhatWeDo = useRef(null);
    const refFeatures = useRef(null);
    const refServices = useRef(null);
    const refWorkingWithUs = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: "smooth"});
        }
    };

    const inViewOpts = {once: true, margin: "-10% 0px -10% 0px"};
    const isTopInView = useInView(refTop, inViewOpts);
    const isWhoWeAreInView = useInView(refWhoWeAre, inViewOpts);
    const isWhatWeDoInView = useInView(refWhatWeDo, inViewOpts);
    const isFeaturesInView = useInView(refFeatures, inViewOpts);
    const isServicesInView = useInView(refServices, inViewOpts);
    const isWorkingWithUsInView = useInView(refWorkingWithUs, inViewOpts);

    return (
        <div className="relative overflow-hidden">
            <div className="section-shell min-h-screen pb-16" ref={refTop}>
                <div className="orb a"/>
                <div className="orb b"/>
                <div className="orb c"/>
                <div className="beam"/>
                <div className="container relative mx-auto">
                    <div className="mb-12 lg:mb-16">
                        <Navbar routes={navRoutes}/>
                    </div>

                    <motion.div
                        className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
                        initial="hidden"
                        animate={isTopInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <div className="space-y-6">
                            <span className="chip">YOUR KEY TO MODERN SECURITY SOLUTIONS</span>
                            <Typography variant="h1"
                                        className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                                Expert Facility Management Tailored To Your Needs
                            </Typography>
                            <Typography variant="lead"
                                        className="text-base font-semibold text-slate-200 sm:text-lg lg:text-xl">
                                YOUR KEY TO MODERN SECURITY SOLUTIONS
                            </Typography>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    variant="outlined"
                                    className="rounded-full border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                                    onClick={() => scrollToSection(refWhoWeAre)}
                                >
                                    Who We Are
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="rounded-full border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                                    onClick={() => scrollToSection(refWhatWeDo)}
                                >
                                    What We Do
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="rounded-full border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                                    onClick={() => scrollToSection(refServices)}
                                >
                                    Services
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="rounded-full border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                                    onClick={() => scrollToSection(refWorkingWithUs)}
                                >
                                    Working With Us
                                </Button>
                            </div>
                        </div>

                        <motion.div
                            className="relative"
                            initial="hidden"
                            animate={isTopInView ? "visible" : "hidden"}
                            variants={slideInFromRight}
                        >
                            <div className="glass-panel relative overflow-hidden p-3">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
                                <div className="relative h-[22rem] w-full overflow-hidden rounded-3xl sm:h-[26rem] lg:h-[32rem]">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-cyanpulse/20 via-transparent to-aurora/15"/>
                                    <div
                                        className="h-full w-full rounded-3xl bg-cover bg-center"
                                        style={{backgroundImage: "url('./img/SPARTAN-SECURITAS-SOLUTIONS-PRIVATE-LIMITED.jpeg')"}}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <section ref={refWhoWeAre}
                     className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
                <div className="orb a"/>
                <div className="orb b"/>
                <div className="beam"/>
                <div className="container relative mx-auto section-grid min-h-0">
                    <motion.div
                        className="glass-panel p-6 sm:p-8 lg:p-10"
                        initial="hidden"
                        animate={isWhoWeAreInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <span className="chip">Who we are?</span>
                        <Typography variant="h2"
                                    className="mt-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Who we are?
                        </Typography>
                        <Typography variant="lead"
                                    className="mt-4 text-base leading-relaxed text-slate-200">
                            {whoWeAre}
                        </Typography>
                        <Button className="mt-6" onClick={() => navigate("/woWeAre")}>
                            Read More
                        </Button>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial="hidden"
                        animate={isWhoWeAreInView ? "visible" : "hidden"}
                        variants={slideInFromRight}
                    >
                        <div className="glass-panel relative h-full overflow-hidden p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
                            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[32rem]">
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-cyanpulse/15 via-transparent to-aurora/10"/>
                                <div className="h-full w-full rounded-2xl bg-cover bg-center"
                                     style={{backgroundImage: "url('./img/securityguard.webp')"}}/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section ref={refWhatWeDo}
                     className="relative overflow-hidden bg-night-soft/80 px-4 py-16 sm:py-20 lg:py-24">
                <div className="orb a"/>
                <div className="orb b"/>
                <div className="beam"/>
                <motion.div
                    className="container relative mx-auto max-w-5xl text-center"
                    initial="hidden"
                    animate={isWhatWeDoInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <Typography
                        variant="h2"
                        className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                    >
                        What we do?
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg"
                    >
                        {whatWeDo}
                    </Typography>
                </motion.div>
            </section>

            <section ref={refFeatures}
                     className="relative -mt-6 bg-night px-4 pb-20 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="mb-8 text-center">
                        <span className="chip">What we do</span>
                        <Typography variant="h2"
                                    className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                            Capabilities at a glance
                        </Typography>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {featuresData.map(({color, title, icon, description}) => (
                            <motion.div
                                key={title}
                                initial="hidden"
                                animate={isFeaturesInView ? "visible" : "hidden"}
                                variants={fadeInUp}
                            >
                                <FeatureCard
                                    color={color}
                                    title={title}
                                    icon={React.createElement(icon, {
                                        className: "w-6 h-6 text-white",
                                    })}
                                    description={description}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={refServices} className="relative bg-night-soft/90 px-4 py-16 sm:py-20 lg:py-24">
                <div className="orb a"/>
                <div className="orb b"/>
                <div className="beam"/>
                <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
                    <Typography
                        variant="h2"
                        className="mb-8 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        Our Services
                    </Typography>
                    <motion.div
                        className="mt-6 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-7"
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "hidden"}
                        variants={fadeInUp}>
                        {services.map(({img, name, path, services: serviceList}) => (
                            <ServicesCard
                                key={name}
                                img={img}
                                name={name}
                                path={path}
                                services={serviceList}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            <ClientSlider/>

            <section ref={refWorkingWithUs} className="relative bg-night px-4 py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <motion.div
                        className="glass-panel p-6 sm:p-8 lg:p-10"
                        initial="hidden"
                        animate={isWorkingWithUsInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <div
                            className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-center shadow-glow">
                            <FingerPrintIcon className="h-7 w-7 text-white"/>
                        </div>
                        <Typography variant="h3" className="mb-3 font-bold text-white">
                            Working with us is a pleasure
                        </Typography>
                        <Typography className="mb-6 font-normal text-slate-200">
                            {workingWithUsPleasure}
                        </Typography>
                        <Button variant="filled" onClick={() => navigate("/workingWithUsIsPleasure")}>read more</Button>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial="hidden"
                        animate={isWorkingWithUsInView ? "visible" : "hidden"}
                        variants={slideInFromRight}
                    >
                        <div className="glass-panel relative h-full overflow-hidden p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
                            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[28rem]">
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-cyanpulse/15 via-transparent to-aurora/10"/>
                                <div className="h-full w-full rounded-2xl bg-cover bg-center"
                                     style={{backgroundImage: "url('/img/office.jpeg')"}}/>
                            </div>
                            <div className="p-6 text-center">
                                <Typography variant="h5" className="mb-2 font-bold text-white">
                                    Top Notch Services
                                </Typography>
                                <Typography className="text-slate-200">
                                    {topNotchServices}
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative bg-night-soft/85 py-20 px-4">
                <div className="container mx-auto">
                    <PageTitle section="Contact Us" heading="Want to work with us?">
                        Complete this form and we will get back to you in 24 hours.
                    </PageTitle>
                    <form ref={form} className="mx-auto mt-12 w-full lg:w-8/12 xl:w-6/12">
                        <div className="surface-card space-y-6 p-6 sm:p-8">
                            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                                <Input
                                    variant="outlined"
                                    size="lg"
                                    name="from_name"
                                    label="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="hover:border-cyanpulse focus:border-cyanpulse"
                                />
                                <Input
                                    variant="outlined"
                                    size="lg"
                                    name="user_email"
                                    label="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="hover:border-cyanpulse focus:border-cyanpulse"
                                />
                                <Input
                                    variant="outlined"
                                    size="lg"
                                    name="mobile_number"
                                    label="Mobile Number"
                                    value={mobileNo}
                                    onChange={(e) => setMobileNo(e.target.value)}
                                    className="hover:border-cyanpulse focus:border-cyanpulse"
                                />
                            </div>
                            <Textarea
                                variant="outlined"
                                size="lg"
                                name="message"
                                label="Message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="hover:border-cyanpulse focus:border-cyanpulse"
                            />
                            <p className="text-center text-base text-slate-200">{status}</p>
                            <Button
                                variant="gradient"
                                size="lg"
                                className="w-full bg-gradient-to-r from-cyanpulse to-aurora font-semibold text-night"
                                onClick={() => sendEmail()}
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
