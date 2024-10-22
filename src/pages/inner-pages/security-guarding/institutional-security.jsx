import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { Typography } from "@material-tailwind/react";

export function InstitutionalSecurity() {
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
                            Institutional Security
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Institutions such as schools, colleges, hospitals, and government offices are critical facilities that require top-tier security solutions. Spartan Securitas Solutions offers specialized Institutional Security services to safeguard these environments, ensuring that the day-to-day operations run smoothly without interruptions caused by security breaches or threats.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our security personnel are trained in handling the specific requirements of institutional settings. In schools and colleges, we provide protection for students, staff, and faculty while preventing unauthorized access to sensitive areas. In healthcare facilities, we maintain a secure environment that allows medical staff to focus on patient care, while also ensuring that visitors adhere to safety protocols.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our team offers both visible and discreet security measures, including access control, surveillance, visitor management, and emergency response systems. We also develop tailored security protocols to meet the unique needs of each institution, providing peace of mind to administrators and creating a safe, secure environment for everyone.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/institutional-security.png')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
