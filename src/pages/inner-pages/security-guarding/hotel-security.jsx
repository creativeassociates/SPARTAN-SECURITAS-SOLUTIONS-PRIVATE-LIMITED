import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";
import ScrollToTop from "../../../widgets/scroll-to-top.jsx";
import { Typography } from "@material-tailwind/react";

export function HotelSecurity() {
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
                            Hotel Security
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            At Spartan Securitas Solutions, we understand the unique security challenges that hotels face. Our Hotel Security services ensure that both staff and guests are protected at all times. We provide surveillance, entry point security, and quick response teams to handle emergencies, allowing hotel management to focus on delivering a superior guest experience.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Our security guards are trained to blend into the hospitality environment while maintaining a high level of vigilance. From monitoring entrances and exits, patrolling hallways, to ensuring that key areas like lobbies, parking lots, and event spaces are secure, we offer a complete security package for hotels of all sizes. Our team also handles VIP protection for high-profile guests, ensuring their privacy and safety are always prioritized.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            With a comprehensive understanding of hotel operations, we work closely with management to customize security plans that fit the specific layout and needs of your property, enhancing safety while maintaining the welcoming atmosphere that guests expect.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/hotel-security.png')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
