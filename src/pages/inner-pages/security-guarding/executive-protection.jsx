import Navbar from "../../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../../routes.jsx";

import {Typography} from "@material-tailwind/react";

export function ExecutiveProtection() {
    return (
        <>

            <div className="relative" style={{backgroundImage: "url('./img/bg-5.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes}/>
                </div>

                <div className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-10 pb-20">
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Executive Protection
                        </Typography>
                        <Typography variant="paragraph" color="white"
                                    className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Spartan Securitas Solutions offers premium Executive Protection services designed to provide
                            a high level of safety for corporate executives, dignitaries, celebrities, and other
                            high-profile individuals. Our executive protection officers (EPOs) are highly trained to
                            handle potential threats with a focus on discretion and professionalism.
                        </Typography>
                        <br/>
                        <Typography variant="paragraph" color="white"
                                    className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Whether it's day-to-day protection or event-specific services, our EPOs offer complete
                            protection that extends from the home to the workplace and during travel. We assess and
                            mitigate risks, offering close protection in all environments, from secure corporate offices
                            to unpredictable public venues. Our security measures include route planning, secure
                            transportation, and threat assessment.
                        </Typography>
                        <br/>
                        <Typography variant="paragraph" color="white"
                                    className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our team ensures seamless coordination with local authorities and event organizers when
                            necessary, providing a multi-layered approach to protection. We remain discreet yet
                            vigilant, prioritizing the safety of our clients at all times.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                             style={{backgroundImage: "url('./img/executive-protection.jpeg')"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}
