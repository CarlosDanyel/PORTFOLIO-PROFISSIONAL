/* eslint-disable react/prop-types */
import style from "./style.module.scss";
import logo from "../../assets/logo-temporario.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const RedesDiv = ({ active, onClick }) => {
    const redesMenu = [
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/",
            svg: <FaLinkedin />,
        },
        {
            name: "Github",
            link: "https://github.com/CarlosDanyel",
            svg: <FaGithub />,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCVXNC1jmD4CBjSlefuxap9w",
            svg: <FaYoutube />,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/_danyelzs/",
            svg: <FaInstagram />,
        },
    ];

    return (
        <div
            className={
                active ? `${style.redesDiv} ${style.active}` : style.redesDiv
            }
        >
            <div className={style.containerRedes}>
                <div className={style.displayRedesDiv}>
                    <div className={style.logo_close}>
                        <div className={style.logo}>
                            <img src={logo} alt="NEXUS" />
                        </div>
                        <div className={style.menuClose}>
                            <IoMdClose onClick={onClick} />
                        </div>
                    </div>
                    <ul className={style.ListaRedes}>
                        {redesMenu.map((rede, index) => (
                            <li key={index}>
                                {rede.svg}
                                <a href={rede.link}>{rede.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={style.contact_div}>
                        <div className={style.line}></div>
                        <div className={style.containerTextContact}>
                            <span className={style.redesDiv_numero}>
                                +55 11 985673241
                            </span>
                            <span className={style.redesDiv_email}>
                                carlosdanyelsilva27@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedesDiv;
