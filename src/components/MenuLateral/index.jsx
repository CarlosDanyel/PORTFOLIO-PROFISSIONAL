/* eslint-disable react/prop-types */
import Menu from "../Menu";
import Logo from "../../assets/logo-temporario.png";

import style from "./style.module.scss";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const MenuLateral = ({ active, menu }) => {
    return (
        <nav
            className={
                active
                    ? `${style.navBarMenuBtn} ${style.active}`
                    : style.navBarMenuBtn
            }
        >
            <div className={style.displayPage}>
                <div className={style.containerMeu}>
                    <div className={style.logo}>
                        <img src={Logo} alt="Logo Nexus" />
                    </div>
                    <div className={style.btnMenu}>
                        <span>Close</span>
                        <Menu menu={menu} />
                    </div>
                </div>
                <ul className={style.linkPagina}>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projetos"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="sobre"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="recentPost"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Recentes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="tech"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Tecnologia
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contato"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            onClick={menu}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
                <ul className={style.linkRedes}>
                    <li>
                        <a href="https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/">
                            <FaLinkedin />
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/CarlosDanyel">
                            <FaGithub />
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_danyelzs/">
                            <FaInstagram />
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCVXNC1jmD4CBjSlefuxap9w">
                            <FaYoutube />
                            Youtube
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuLateral;
