import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function PantryServices() {
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
                            Pantry Services
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Spartan Securitas Solutions offers comprehensive Pantry Services tailored to enhance the workplace experience. We understand that a well-stocked and efficiently managed pantry can improve employee satisfaction and productivity. Our pantry services include the procurement, stocking, and management of snacks, beverages, and essential supplies for your office environment.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We work closely with clients to customize pantry offerings based on dietary preferences and corporate culture. From healthy snacks to gourmet coffee, our selection is designed to cater to diverse tastes and promote well-being in the workplace. Our team ensures regular inventory checks and restocking, taking the burden off your staff so they can focus on their core responsibilities.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our goal is to create a welcoming and enjoyable pantry environment that fosters collaboration and social interaction among employees. With Spartan Securitas Solutions, you can count on reliable pantry services that enhance the overall workplace atmosphere.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/pantry-services.jpg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
