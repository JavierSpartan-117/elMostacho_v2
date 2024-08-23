import React, { useState, useEffect } from 'react';
import { Carousel, Button } from '@material-tailwind/react';

const AutoCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "../../../public/img/wallpaperflare.com_wallpaper.jpg",
        "../../../public/img/wallpaperflare.com_wallpaper (1).jpg",
        "../../../public/img/wallpaperflare.com_wallpaper (2).jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden rounded-s-lg">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`image ${index + 1}`}
                    className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                <h1 className="text-4xl mb-4 text-center">Bienvenido a Barbería El Mostacho: Perfeccionando tu look, un corte a la vez.</h1>
                <a href="/reservar-cita">
                    <Button color="black" ripple="light">
                        Agendar Cita
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default AutoCarousel;





