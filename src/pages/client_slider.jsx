import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/client-silder.module.css"
import {Typography} from "@material-tailwind/react";

const clients = [
    {
        id: 1,
        name: "adani",
        logo: "./img/adani.png",
    },
    {
        id: 2,
        name: "easyday",
        logo: "./img/easyday.png",
    },
    {
        id: 3,
        name: "Indigo",
        logo: "./img/indigo.png",
    },
    {
        id: 4,
        name: "Ajnara",
        logo: "./img/ajnara.png",
    },
    {
        id: 5,
        name: "spencer's",
        logo: "./img/spencers.png",
    },
    {
        id: 6,
        name: "Liquvid",
        logo: "./img/Liquvid.png",
    },
    {
        id: 7,
        name: "avon",
        logo: "./img/avon.png",
    },
    {
        id: 8,
        name: "bigbazaar",
        logo: "./img/bigbazaar.png",
    },
    {
        id: 9,
        name: "mcdonald's",
        logo: "./img/mcd.png",
    },
    {
        id: 10,
        name: "1mg",
        logo: "./img/1mg.png",
    },
    {
        id: 11,
        name: "tata",
        logo: "./img/tata.png",
    },
];

export const ClientSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative px-4 py-16">
            <div className="mx-auto max-w-6xl text-center space-y-3">
                <span className="chip">Featured clients</span>
                <Typography
                    variant="h2"
                    className="bg-gradient-to-r from-cyanpulse via-white to-aurora bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl"
                >
                    Featured clients
                </Typography>
                <Typography className="text-slate-300">
                    Trusted partners across retail, aviation, finance, and technology.
                </Typography>
            </div>
            <div className="client-slider mt-10">
                <Slider {...settings}>
                    {clients.map((client) => (
                        <div key={client.id} className="client-slide">
                            <div className="client-image-container">
                                <img src={client.logo} alt={client.name} loading="lazy" decoding="async"
                                     className="client-image w-2/3 aspect-square object-contain"/>
                            </div>
                            <Typography variant="small" className="mt-3 text-slate-200 opacity-80">
                                {client.name}
                            </Typography>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
