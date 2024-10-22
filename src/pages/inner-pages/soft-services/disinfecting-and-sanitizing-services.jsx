import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function DisinfectingSanitizingServices() {
    return (
        <>
            
            <div className="relative" style={{backgroundImage: "url('./img/bg-5.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes} />
                </div>

                <div className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-10 pb-20">
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Disinfecting and Sanitizing Services
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            In today’s health-conscious world, maintaining a clean and sanitized environment is more important than ever. Spartan Securitas Solutions offers professional Disinfecting and Sanitizing Services that go beyond standard cleaning practices. Our trained staff utilizes effective disinfectants and advanced techniques to ensure that your spaces are thoroughly sanitized and safe for use.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We specialize in high-touch surface disinfection, including doorknobs, light switches, and shared equipment, significantly reducing the risk of infection transmission. Our services are ideal for offices, schools, healthcare facilities, and any public spaces where hygiene is paramount.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We employ eco-friendly, non-toxic disinfectants that are safe for both people and the environment, ensuring a thorough clean without harmful residues. Whether you need regular sanitizing services or a one-time deep clean, Spartan Securitas Solutions is here to help you maintain a healthy and safe environment for employees, visitors, and residents.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/disinfecting-sanitizing.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
