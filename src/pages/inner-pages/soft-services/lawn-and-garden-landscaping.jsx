import Navbar from "../../../widgets/layout/navbar.jsx";
import { navRoutes } from "../../../routes.jsx";

import { Typography } from "@material-tailwind/react";

export function LawnGardenLandscaping() {
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
                            Lawn and Garden Landscaping
                        </Typography>
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            Spartan Securitas Solutions offers comprehensive Lawn and Garden Landscaping services designed to enhance the beauty and functionality of your outdoor spaces. Our team of experienced landscapers works closely with clients to create stunning landscapes that meet their specific needs and preferences.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            We provide a full range of services, including lawn installation, garden design, tree and shrub planting, irrigation system installation, and ongoing maintenance. Our landscaping solutions not only improve the aesthetic appeal of your property but also contribute to environmental sustainability by promoting biodiversity and reducing urban heat.
                        </Typography>
                        <br />
                        <Typography variant="paragraph" color="white" className="text-left font-light mt-5 text-sm md:text-base lg:text-lg">
                            From residential gardens to commercial properties, we are committed to delivering high-quality results that exceed expectations. Trust Spartan Securitas Solutions to transform your outdoor spaces into beautiful, functional environments that you can enjoy year-round.
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <div className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('./img/lawn-garden-landscaping.jpeg')" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
