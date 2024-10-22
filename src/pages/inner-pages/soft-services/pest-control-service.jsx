import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function PestControlService() {
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
                            Pest Control Service
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            At Spartan Securitas Solutions, we recognize that pests can pose significant threats to health, property, and peace of mind. Our Pest Control Service is designed to effectively identify, eliminate, and prevent pest infestations in residential, commercial, and industrial settings.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our expert technicians are trained to handle a wide range of pests, including rodents, insects, and termites. We utilize safe and environmentally friendly methods to ensure the safety of your family, employees, and pets while effectively tackling pest problems. Our comprehensive approach includes initial inspections, targeted treatments, and ongoing monitoring to ensure that your space remains pest-free.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            With our tailored pest management plans, you can trust us to keep your property safe and comfortable. We prioritize education and prevention, equipping our clients with the knowledge they need to reduce the risk of future infestations. Let Spartan Securitas Solutions provide you with a pest-free environment you can enjoy.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/pest-control.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
