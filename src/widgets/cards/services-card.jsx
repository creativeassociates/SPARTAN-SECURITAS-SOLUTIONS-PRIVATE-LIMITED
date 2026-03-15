import PropTypes from "prop-types";
import {Card, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function ServicesCard({img, name, path, services = []}) {
    return (
        <Card className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-night-soft/95 via-night/90 to-night-soft/95 shadow-card">
            <div className="relative h-52 w-full overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-soft via-night-soft/70 to-transparent"/>
            </div>

            <div className="space-y-4 px-6 pb-6 pt-5">
                <Typography variant="h5" className="text-white tracking-tight">
                    <Link to={path || "#"} className="inline-flex items-center gap-2">
                        <span className="bg-gradient-to-r from-cyanpulse via-white to-aurora bg-clip-text text-transparent">
                            {name}
                        </span>
                        <span
                            className="h-[1px] w-8 bg-gradient-to-r from-cyanpulse/60 to-transparent transition-all duration-300 group-hover:w-12"/>
                    </Link>
                </Typography>

                <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
                    {services.map((service, index) => (
                        <li key={index} className="border-l border-white/12 pl-3">
                            <Link to={service.path || "#"} className="transition duration-200 hover:text-white">
                                {service.name}
                            </Link>
                            {Array.isArray(service.underContent) && (
                                <ul className="mt-2 space-y-1 border-l border-white/12 pl-3 text-slate-300">
                                    {service.underContent.map((content, subIndex) => (
                                        <li key={`${index}-${subIndex}`}>
                                            {content.path ? (
                                                <Link to={content.path} className="transition duration-200 hover:text-white">
                                                    {content.name}
                                                </Link>
                                            ) : (
                                                <span>{content.name}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

ServicesCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string,
            underContent: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    path: PropTypes.string,
                })
            ),
        })
    ).isRequired,
};

ServicesCard.displayName = "/src/widgets/cards/services-card.jsx";

export default ServicesCard;
