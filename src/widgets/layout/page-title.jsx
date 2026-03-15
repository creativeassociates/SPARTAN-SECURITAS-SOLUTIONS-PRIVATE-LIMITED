import PropTypes from "prop-types";
import {Typography} from "@material-tailwind/react";

export function PageTitle({section, heading, children}) {
    return (
        <div className="mx-auto w-full max-w-3xl space-y-3 text-center">
            <span className="chip">{section}</span>
            <Typography variant="h2" className="text-3xl font-semibold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-cyanpulse via-white to-aurora bg-clip-text text-transparent">
                    {heading}
                </span>
            </Typography>
            <Typography variant="lead" className="text-slate-300">
                {children}
            </Typography>
        </div>
    );
}

PageTitle.propTypes = {
    section: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
