import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function HousekeepingCleaningServices() {
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
                            Housekeeping & Cleaning Services
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            At Spartan Securitas Solutions, we understand the importance of a clean and well-maintained environment. Our Housekeeping & Cleaning Services are designed to meet the diverse needs of residential, commercial, and industrial clients. Our skilled and trained staff employs the latest techniques and high-quality products to ensure that your spaces are spotless and hygienic.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            From daily cleaning and routine maintenance to deep cleaning services, our team is equipped to handle any task. We offer tailored cleaning schedules that align with your needs, ensuring minimal disruption to your daily operations. Our services include dusting, vacuuming, mopping, sanitizing bathrooms, kitchen cleaning, and more. We also specialize in post-construction clean-up and move-in/move-out cleaning, providing you with a hassle-free transition into your new space.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Committed to sustainability, we utilize eco-friendly cleaning products that are safe for both people and the environment. Trust us to maintain a clean and inviting atmosphere for your home or business, enhancing comfort and productivity for everyone who steps through your doors.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/housekeeping-cleaning-services.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
