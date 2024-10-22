import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function GuestHouseManagement() {
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
                            Guest House Management
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Spartan Securitas Solutions provides expert Guest House Management services, ensuring a comfortable and welcoming experience for your guests. Our dedicated team is responsible for the day-to-day operations of guest houses, offering a full range of services from booking management to maintenance and guest services.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We focus on creating a seamless experience for guests, from check-in to check-out. Our services include housekeeping, catering, event planning, and concierge services, ensuring that all guest needs are met promptly and professionally. We also handle maintenance and emergency services, ensuring that your property remains in top condition.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            By choosing Spartan Securitas Solutions for your guest house management needs, you can focus on growing your business while we take care of the operational details. We aim to provide exceptional service that enhances guest satisfaction and encourages repeat visits.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/guest-house-management.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
