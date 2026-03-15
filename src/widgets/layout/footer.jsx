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
        <footer className="relative mt-20 overflow-hidden bg-night-soft/70 px-4 py-12">
            <div className="orb a"/>
            <div className="orb b"/>
            <div className="beam"/>
            <div className="container relative mx-auto">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                                <img src="/img/SPARTAN-SECURITAS-SOLUTIONS-PRIVATE-LIMITED.png"
                                     alt="Creative Associates Solution Pvt Ltd Logo"
                                     loading="lazy"
                                     decoding="async"
                                     className="h-full w-full object-contain"/>
                            </div>
                            <Typography variant="h4" className="font-semibold text-white">
                                {title}
                            </Typography>
                        </div>
                        <Typography className="max-w-2xl text-slate-300">
                            {description}
                        </Typography>
                        <div className="flex flex-wrap items-center gap-3">
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
                                        className="rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
                                    >
                                        <Typography color={color}>
                                            <i className={`fa-brands fa-${name}`}/>
                                        </Typography>
                                    </IconButton>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="glass-panel border-white/15 p-6 sm:p-7 lg:p-8">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Contact Information</h2>
                        <div className="grid gap-4 text-slate-200">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <span className="font-semibold text-white block">Mobile No:</span>
                                <span className="text-slate-200">+91-9811119918</span>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <span className="font-semibold text-white block">Email ID:</span>
                                <span className="text-slate-200 break-all">manish@3splindia.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-white/10"/>
                <div className="text-center">
                    <Typography variant="small" className="text-slate-400">
                        {copyright}
                    </Typography>
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
