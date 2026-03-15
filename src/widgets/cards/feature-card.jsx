import PropTypes from "prop-types";
import {Card, CardBody, Typography} from "@material-tailwind/react";

export function FeatureCard({color = "blue", icon, title, description}) {
    return (
        <Card className="relative h-full overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-night-soft/95 via-night/90 to-night-soft/95 shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0"/>
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-cyanpulse/20 via-aurora/20 to-transparent blur-2xl"/>
            <CardBody className="relative flex h-full flex-col gap-4 px-8 py-7">
                <div className="flex items-center gap-4">
                    <div
                        className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyanpulse/30 via-white/20 to-aurora/30 shadow-glow">
                        <div
                            className="grid h-11 w-11 place-items-center rounded-2xl bg-night-soft/90 text-white">
                            {icon}
                        </div>
                    </div>
                    <Typography variant="h5" className="font-semibold text-white">
                        {title}
                    </Typography>
                </div>
                <Typography className="text-sm leading-relaxed text-slate-300">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/cards/feature-card.jsx";

export default FeatureCard;
