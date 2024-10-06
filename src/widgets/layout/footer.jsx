import PropTypes from "prop-types";
import {Typography, IconButton} from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({
                           title = "Spartan Securitas Solutions Pvt. Ltd.",
                           description = "Enable You To Secure your Facility Environment",
                           socials = [],
                           menus = [],
                           copyright = (
                               <>
                                   Spartan Securitas Solutions Private Limited Copyright © {year}
                               </>
                           )
                       }) {
    return (
        <footer className="relative px-4 pt-8 pb-6 bg-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-wrap pt-6 lg:text-left">
                    <img
                        src="/img/SPARTAN-SECURITAS-SOLUTIONS-PRIVATE-LIMITED.png"
                        alt="Creative Associates Solution Pvt Ltd Logo"
                        className="h-32 w-auto mb-4"
                    />
                    <div className="w-full px-4 lg:w-6/12">
                        <Typography variant="h4" className="mb-4 text-red-600"> {/* Changed color to red */}
                            {title}
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500 lg:w-2/3">
                            {description}
                        </Typography>
                        <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
                            {socials.map(({color, name, path}) => (
                                <a
                                    key={name}
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                >
                                    <IconButton
                                        color="white"
                                        className="rounded-full shadow-none bg-transparent hover:bg-red-100 transition duration-300" // Added hover effect
                                    >
                                        <Typography color={color}>
                                            <i className={`fa-brands fa-${name}`}/>
                                        </Typography>
                                    </IconButton>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg lg:mt-0 lg:w-6/12">
                        <h2 className="text-2xl font-bold mb-4 text-red-600">Contact Information</h2> {/* Changed color to red */}
                        <div className="mb-4">
                            <span className="font-semibold text-red-600">Mobile No:</span> <br/> {/* Changed label color to red */}
                            <span className="text-gray-700">+91-9811119918</span>
                        </div>
                        <div>
                            <span className="font-semibold text-red-600">Email ID:</span> <br/> {/* Changed label color to red */}
                            <span className="text-gray-700">manish@3splindia.com</span>
                        </div>
                    </div>

                    {/* Optional menus section, uncomment if needed */}
                    {/* <div className="mx-auto mt-12 grid w-max gap-24 lg:mt-0">
                        {menus.map(({ name, items }) => (
                            <div key={name}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 block font-medium uppercase"
                                >
                                    {name}
                                </Typography>
                                <ul className="mt-3">
                                    {items.map((item) => (
                                        <li key={item.name}>
                                            <Typography
                                                as="a"
                                                href={item.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                variant="small"
                                                className="mb-2 block font-normal text-blue-gray-500 hover:text-red-600 transition duration-300" // Changed hover color to red
                                            >
                                                {item.name}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div> */}
                </div>
                <hr className="my-6 border-gray-300"/>
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="mx-auto w-full px-4 text-center">
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                            {copyright}
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ),
    menus: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    path: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ),
    copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";
