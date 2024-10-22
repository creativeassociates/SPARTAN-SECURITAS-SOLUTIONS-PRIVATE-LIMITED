import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { Typography } from "@material-tailwind/react";

export function ResidentialSecurity() {
    return (
        <>
            <ScrollToTop />
            <div className="relative" style={{backgroundImage: "url('./img/bg-5.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes} />
                </div>

                <div className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-10 pb-20">
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Residential Security
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Spartan Securitas Solutions takes pride in offering top-notch Residential Security services designed to protect homes, gated communities, and residential complexes. Our highly trained security teams provide 24/7 monitoring, access control, and emergency response to ensure that your home and loved ones remain safe at all times.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our services include manned security at entry and exit points, regular patrolling, and surveillance of common areas. Whether it's protecting against burglary, vandalism, or ensuring that no unauthorized individuals gain access to your residential property, we have you covered. We also assist in the management of visitor logs, ensuring that only those with authorized access can enter.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            For apartment buildings, we provide integrated security systems with CCTV, intercom facilities, and alarm systems, ensuring complete protection. With our team on guard, residents can rest easy knowing their homes are secure, and their privacy is respected.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/residential-security.png')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
