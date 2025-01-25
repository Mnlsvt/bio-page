"use client";

import React from "react";
import { useEffect, useState } from "react";

import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import { AnimatedTooltip } from "../components/ui/animated-tooltip";

import { Timeline } from "../components/ui/timeline";

// import { Carousel, Card } from "../components/ui/apple-cards-carousel";


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Lamp Header
function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome to <br /> Manolis's Page
      </motion.h1>
    </LampContainer>
  );
}

 
// Tablet CV
function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white mb-10">
              Click below to <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
                Check my CV
              </span>
            </h1>
          </>
        }
      >
        <a href="/cv" className="mx-auto rounded-2xl object-cover h-full object-left-top"><Image
          src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
          alt="cv image"
          height={720}
          width={1400}
          draggable={false}
          unoptimized
        /></a>
      </ContainerScroll>
    </div>
  );
}

// Projects Carousel
// function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-white font-sans">
//         My Projects.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="/images/cv-image.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
 
// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
 
//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
// ];


// My Timeline 
function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            September - June 2025
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            Served in the Greek Army
          </p>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
            Completed my nine-month mandatory military service in Greece.
          </p>
            <div className="flex justify-center">
            {/* Evline image */}
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/army.png`}
              alt="army image"
              width={500}
              height={500}
              className="rounded-lg object-cover w-60 h-24 mde:h-44 lg:h-24 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mt-2"
              style={{ objectFit: 'contain' }}
              unoptimized
            />
            </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            September - April 2024
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            <a href="https://evline.io" target="_blank" className="hover:text-blue-500">Evline - Backend Software Engineer & ETL Developer</a>
          </p>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
            Contributed to server-side development at a Silicon Valley-based company using
            Node.js, NestJS, and TypeScript. Aimed to enhance the scalability and efficiency of
            backend systems, supporting robustness and high service performance.
          </p>
            <div className="flex justify-center">
            {/* Evline image */}
            <a target="_blank" href="https://evline.io/"><Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/evline.png`}
              alt="Evline"
              width={500}
              height={500}
              className="rounded-lg object-cover w-60 h-20 mde:h-44 lg:h-30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mb-12"
              style={{ objectFit: 'contain' }}
              unoptimized
            /></a>
            </div>

  
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            June - September
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            <a href="https://techwb.org/" target="_blank" className="hover:text-blue-500">Technology Without Borders - Software Developer Intern</a>
          </p>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
          During the internship, I developed a web application focusing on user-centric
          features and seamless interaction. I also implemented some data extraction and
          manipulation strategies, crucial for integrating and optimizing data flow for an
          improved app performance.
          </p>
          <div className="flex justify-center">
            {/* TWB image */}
            <a target="_blank" href="https://techwb.org/"><Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/twblogo.png`}
              alt="Evline"
              width={500}
              height={500}
              className="rounded-lg object-cover w-60 h-20 mde:h-44 lg:h-30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mb-12"
              style={{ objectFit: 'contain' }}
              unoptimized
            /></a>
            </div>


          {/* <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-8"> 
            Contributed to server-side development at a Silicon Valley-based company using
            Node.js, NestJS, and TypeScript. Aimed to enhance the scalability and efficiency of
            backend systems, supporting robustness and high service performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="cv image"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`/images/cv-image.png`}
              alt="cv image"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
          </div>*/}
        </div>
      ),
    },
    /*{
      title: "Changelog",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-white dark:text--white text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-white dark:text--white text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text--white dark:text--white text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
            <Image
              src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              unoptimized
            />
          </div>
        </div>
      ),
    },*/
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  ); 
}

 
const generatedWords = `I am a 24-year-old Software Engineer, with a strong passion for backend
development. My technical expertise includes software development, computer
networks, big data, and artificial intelligence. I recently completed my thesis project
which was about a social media app that uses AI for data extraction and the
enhancement of user recommendations. I am eager to apply my skills as a backend
developer, aiming to deliver innovative solutions and contribute effectively to a
team. For more about my projects, visit my GitHub profile.`;


// technologies - tools
const people = [
  {
    id: 1,
    name: "Python",
    designation: "",
    image: "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/python.png",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/js.png",
  },
  {
    id: 3,
    name: "Linux",
    designation: "",
    image:
      `https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/linux.png`,
  },
  {
    id: 4,
    name: "Git & Github",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/git.png",
  },
  {
    id: 5,
    name: "React",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/react.png",
  },
  {
    id: 6,
    name: "NodeJS",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/nodejs.png",
  },
  {
    id: 7,
    name: "Google Cloud",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/gcloud.jpg",
  },
  {
    id: 8,
    name: "Firebase",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/firebase.png",
  },
];
 
function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 mt-12 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default function HomePage() {

    const [toolsTextSize, setToolsTextSize] = useState("text-2xl")

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setToolsTextSize("text-xl")
          // setMarginRight("mr-12");
          // setMarginLeft("ml-10");
        } else if (window.innerWidth < 768) {
          // setTextSize("text-xl");
        } else {
          // setTextSize("text-2xl");
          // setMarginRight("mr-80");
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
      <>
      <LampDemo/>
      <TextGenerateEffect duration={0.5} words={generatedWords}/>
      <p className={`text-white font-bold text-center mt-36 text-black ${toolsTextSize} leading-snug`}>Tools I have experience with:</p>
      <AnimatedTooltipPreview/>
      <TimelineDemo/>
      {/* <AppleCardsCarouselDemo/> */}
      <HeroScrollDemo/>
      {/* <MacbookScrollDemo /> */}
      </>
    </div>
  );
}