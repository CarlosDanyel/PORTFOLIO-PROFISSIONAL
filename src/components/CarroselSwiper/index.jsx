import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const techData = [
    { name: "JavaScript", svg: <RiJavascriptFill /> },
    { name: "Java", svg: <FaJava /> },
    { name: "React", svg: <FaReact /> },
    { name: "Node Js", svg: <FaNodeJs /> },
    { name: "MongoDB", svg: <SiMongodb /> },
    { name: "MySQl", svg: <GrMysql /> },
    { name: "Sass/Scss", svg: <FaSass /> },
    { name: "Git", svg: <FaGitAlt /> },
    { name: "HTML", svg: <FaHtml5 /> },
    { name: "CSS", svg: <FaCss3Alt /> },
];

const Carrosel = () => {
    const renderTechs = () => {
        return techData.map((tech, index) => (
            <SwiperSlide
                key={index}
                data-name={tech.name}
                className={style.tech}
            >
                {tech.svg}
            </SwiperSlide>
        ));
    };

    return (
        <div className={style.swiperContainer}>
            <Swiper
                slidesPerView={3}
                spaceBetween={28}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Autoplay]}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    540: {
                        slidesPerView: 3,
                    },
                    340: {
                        slidesPerView: 2,
                    },
                    140: {
                        slidesPerView: 2,
                    },
                }}
                className={style.containerStack}
            >
                {renderTechs()}
            </Swiper>
        </div>
    );
};

export default Carrosel;
