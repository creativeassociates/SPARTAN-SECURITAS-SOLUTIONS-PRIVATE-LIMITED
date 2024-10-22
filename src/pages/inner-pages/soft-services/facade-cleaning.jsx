import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function FacadeCleaning() {
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
                            Facade Cleaning
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            The exterior of your building is the first impression you make on clients and visitors. At Spartan Securitas Solutions, we offer professional Facade Cleaning services that enhance the appearance and longevity of your property. Our skilled team utilizes advanced techniques and equipment to effectively clean various building materials, including glass, brick, stone, and metal.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We understand that environmental factors such as pollution, weather, and time can take a toll on your building’s facade. Our cleaning methods are designed to remove dirt, grime, algae, and other unsightly elements without causing damage to the surfaces. We offer scheduled cleaning services that ensure your property remains in pristine condition year-round.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            By maintaining a clean facade, you not only improve the aesthetics of your property but also protect your investment and increase its value. Trust Spartan Securitas Solutions for reliable and efficient facade cleaning services that leave a lasting impression on all who visit your property.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/facade-cleaning.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
