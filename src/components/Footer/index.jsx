import style from "./style.module.scss";

import { MdCopyright } from "react-icons/md";
import logo from "../../assets/logo-temporario.png";

import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className={style.rodape}>
            <div className={style.displayRodape}>
                <div className={style.messageInfo}>
                    <span>Vamos trabalhar Juntos?</span>
                </div>
                <div className={style.containerRodape}>
                    <div className={style.containerLogo}>
                        <span>
                            <img src={logo} alt="Logo" />
                        </span>
                    </div>
                    <div className={style.ContainerInformaçoesRodape}>
                        <div className={style.containerInfo}>
                            <span className={style.title}>Informaçoes</span>
                            <span>São Paulo, SP</span>
                            <span className={style.textContatoInfo}>
                                +11 98567 - 3241
                            </span>
                            <span>carlosdanyelsilva27@gmail.com</span>
                        </div>
                        <div className={style.containerInfo}>
                            <span className={style.title}>Redes Sociais</span>
                            <a href="https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/">
                                Linkedin
                            </a>
                            <a href="https://github.com/CarlosDanyel">Github</a>
                            <a href="https://www.instagram.com/_danyelzs/">
                                Instagram
                            </a>
                        </div>
                        <div className={style.containerInfo}>
                            <span className={style.title}>Seviços</span>
                            <span>Desenvolvimento de Sotfware</span>
                            <span>Soluçoes Inovadoras</span>
                            <span>Responsividade</span>
                        </div>
                    </div>
                </div>
                <div className={style.containerLinkPagina}>
                    <div className={style.links}>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Home
                        </Link>
                        <Link
                            to="projetos"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Projetos
                        </Link>
                        <Link
                            to="sobre"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Sobre
                        </Link>
                        <Link
                            to="recentPost"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Recentes
                        </Link>
                        <Link
                            to="tech"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Tecnologia
                        </Link>
                        <Link
                            to="contato"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            className={style.LinkContato}
                        >
                            Contato
                        </Link>
                    </div>
                    <div className={style.copy}>
                        <span>
                            Copyright <MdCopyright /> 2024{" "}
                            <span className={style.destaqueCopy}>
                                CarlosDanyel.com
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
