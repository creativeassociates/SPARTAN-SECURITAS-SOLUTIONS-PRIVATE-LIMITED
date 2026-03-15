import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

export function Navbar({
                           brandName = "SPARTAN SECURITAS SOLUTIONS PRIVATE LIMITED",
                           routes,
                       }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            {routes.map(({name, path, icon, href, target}) => (
                <Typography
                    key={name}
                    as="li"
                    variant="small"
                    color="inherit"
                    className="capitalize"
                >
                    {href ? (
                        <a
                            href={href}
                            target={target}
                            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold tracking-wide text-slate-200 transition duration-300 hover:text-white hover:bg-white/5"
                        >
                            {icon && React.createElement(icon, {className: "w-[18px] h-[18px] opacity-75 mr-1"})}
                            {name}
                        </a>
                    ) : (
                        <Link
                            to={path}
                            target={target}
                            className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold tracking-wide text-slate-200 transition duration-300 hover:text-white hover:bg-white/5"
                        >
                            {icon && React.createElement(icon, {className: "w-[18px] h-[18px] opacity-75"})}
                            <span className="relative">
                                <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-gradient-to-r from-cyanpulse via-aurora to-cyanpulse transition duration-300 group-hover:scale-x-100"/>
                                {name}
                            </span>
                        </Link>
                    )}
                </Typography>
            ))}
        </ul>
    );

    return (
        <nav className="sticky top-0 z-40">
            <div className="glass-panel flex items-center justify-between px-4 py-3 lg:px-6 backdrop-blur-2xl">
                <Link to="/" className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyanpulse/30 via-aurora/25 to-white/10 blur-2xl"/>
                        <img src="/img/SPARTAN-SECURITAS-SOLUTIONS-PRIVATE-LIMITED.png" alt="logo"
                             loading="lazy" decoding="async"
                             className="relative z-10 h-full w-full object-contain"/>
                    </div>
                    <div className="flex flex-col">
                        <Typography className="cursor-pointer font-extrabold text-lg uppercase tracking-[0.18em] text-white">
                            {brandName}
                        </Typography>
                    </div>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    size="sm"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6"/>
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6"/>
                    )}
                </IconButton>
            </div>
            <Collapse
                className="mt-3 rounded-2xl border border-white/10 bg-night-soft/90 px-4 pt-2 pb-4 text-slate-100 backdrop-blur-xl lg:hidden"
                open={openNav}
            >
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </nav>
    );
}

Navbar.propTypes = {
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string,
            icon: PropTypes.elementType,
            href: PropTypes.string,
            target: PropTypes.string,
        })
    ).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
