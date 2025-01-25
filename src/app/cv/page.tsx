"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import "../globals.css";

export default function HomePage() {

    const [imageSize, setPaddingLeftRight] = useState("px-60")

        useEffect(() => {
            const handleResize = () => {
            if (window.innerWidth < 640) {
                setPaddingLeftRight("pl-10 pr-10")
                // setMarginRight("mr-12");
                // setMarginLeft("ml-10");
            } else if (window.innerWidth < 768) {
                setPaddingLeftRight("pl-12 pr-12")
                    // setTextSize("text-xl");
            } else {
                // setTextSize("text-2xl");
                // setMarginRight("mr-80");
                setPaddingLeftRight("pl-80 pr-80")
            }
            };
        
            // Set initial size and add event listener
            handleResize();
            window.addEventListener("resize", handleResize);
        
            return () => {
            window.removeEventListener("resize", handleResize);
            };
        }, []);

    return (
    <div className='bg-slate-950'>
        <Image
            src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
            alt="hero template"
            width={5000}
            height={5000}
            className={`rounded-xl object-cover h-xl w-xl py-20 ${imageSize}`}
            unoptimized
        />
        <a href="/VETTAS_EMMANOUIL.pdf" className="flex justify-center text-white text-xl font-bold text-center pb-20">Download PDF file.</a>
    </div>
    );
}

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import "../globals.css";

// const ImageGallery = () => {
//   const [activeImage, setActiveImage] = useState<number | null>(null);

//   const images = [
//     { id: 1, src: `https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`, alt: "CV" }
//   ];

//   const handleClick = (id: number) => {
//     setActiveImage(id);
//   };

//   return (
//     <div className="relative flex gap-4">
//       {images.map((image) => (
//         <div
//           key={image.id}
//           className={`relative w-40 h-40 cursor-pointer transition-all duration-300 ${
//             activeImage === image.id ? "z-10 scale-110" : "z-0"
//           }`}
//           onClick={() => handleClick(image.id)}
//         >
//           <Image
//             src={image.src}
//             alt={image.alt}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg centered"
//             unoptimized
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
