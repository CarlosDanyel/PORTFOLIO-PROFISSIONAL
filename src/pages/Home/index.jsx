/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GiAbstract050 } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaDiceD6 } from "react-icons/fa";

import { Link } from "react-scroll";

import style from "./style.module.scss";

import Projetos from "../../components/Projetos";
import InfiniText from "../../components/TextInfinite";
import RecentPost from "../../components/RecentPost";
import CardService from "../../components/CardService";
import Form from "../../components/Form";
import Carossel from "../../components/CarroselSwiper";
import HomePage from "../../components/HomePage";
import BtnLink from "../../components/BtnLink";

const Home = () => {
    const [active, setToggle] = useState(false);

    const redesActive = () => {
        setToggle(!active);
    };

    useEffect(() => {
        const elementId = "#container";
        const options = {
            animate: true,
            patternWidth: 500,
            patternHeight: 100,
            grainOpacity: 0.03,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
        };

        grained(elementId, options);
    }, []);

    return (
        <main>
            <HomePage
                active={active}
                click={redesActive}
                textDescricao={"Welcome | Data enginner!"}
                textTitle={"Carlos Danyel"}
                textTitle2={"Transformação Digital"}
                textTitleBtn={"Portfolio Profissional"}
                link={"projetos"}
            />
            <section className={style.projetos} id="projetos">
                <div className={style.diplayProjetos}>
                    <Projetos />
                    <div className={style.outro_projetos}>
                        <BtnLink
                            textBtn={"Ver todos os projetos"}
                            link={"projetos"}
                        />
                    </div>
                </div>
            </section>
            <section className={style.textInfinite}>
                <InfiniText />
            </section>
            <section className={style.sobre} id="sobre">
                <div className={style.displaySobre}>
                    <div className={style.containerSobreTitle}>
                        <div className={style.sobreContainer}>
                            <span>ABOUT</span>
                            <h3>
                                Conheça meus serviços <br /> e sobre mim
                            </h3>
                            <p>
                                Olá, meu nome é Carlos Danyel, e sou um
                                entusiasta em constante evolução na área de
                                desenvolvimento. Minhas habilidades abrangem
                                tanto o front-end quanto o back-end, e estou
                                constantemente atualizado com tecnologias
                                modernas. Meu objetivo é proporcionar soluções
                                eficientes e intuitivas, utilizando abordagens
                                inovadoras para garantir a melhor experiência
                                possível aos usuários.
                            </p>
                        </div>
                        <div className={style.ContainerServiceCard}>
                            <CardService
                                number={"01"}
                                title={"Desenvolvimento de Software"}
                                descricao={
                                    "Ofereço soluções de desenvolvimento de software personalizadas e inovadoras, projetadas para atender às necessidades específicas dos meus clientes."
                                }
                                svg={<GiAbstract050 />}
                            />
                            <CardService
                                number={"02"}
                                title={"Desenvolvimento de Web"}
                                descricao={
                                    "Especializado em criar experiências web envolventes e intuitivas, transformo conceitos em sites dinâmicos e funcionais."
                                }
                                svg={<FaArtstation />}
                            />
                        </div>
                    </div>
                    <div className={style.cardContatoService}>
                        <div className={style.containerContatoService}>
                            <CardService
                                number={"03"}
                                title={"Responsividade"}
                                descricao={
                                    "Priorizo a responsividade em todos os meus projetos, garantindo uma experiência consistente e otimizada em diferentes dispositivos e tamanhos de tela. "
                                }
                                svg={<FaDiceD6 />}
                            />
                            <CardService
                                number={"04"}
                                title={
                                    <>
                                        Soluções <br /> Inovadoras
                                    </>
                                }
                                descricao={
                                    "Na busca pela excelência e pela diferenciação, desenvolvo soluções inovadoras que transcendem as expectativas."
                                }
                                svg={<FaAward />}
                            />
                        </div>
                        <div className={style.containerContato}>
                            <div className={style.cardContato}>
                                <h5>
                                    Vamos trabalhar juntos no seu proximo
                                    <br />
                                    projeto?
                                </h5>

                                <Link
                                    to="contato"
                                    spy={true}
                                    smooth={true}
                                    duration={1300}
                                    className={style.LinkContato}
                                >
                                    Fale Comigo
                                </Link>
                                <Link
                                    to="recentPost"
                                    spy={true}
                                    smooth={true}
                                    duration={1300}
                                >
                                    <div className={style.cardScrool}>
                                        <FaArrowDown />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.recentPost} id="recentPost">
                <div className={style.displayPost}>
                    <span className={style.dcrPost}>NEWS</span>
                    <h4 className={style.titlePost}>Projetos mais recentes</h4>
                    <RecentPost />
                </div>
            </section>
            <section className={style.tech} id="tech">
                <div className={style.displayTech}>
                    <div className={style.containerTech}>
                        <div className={style.textTech}>
                            <span className={style.textTec_descricao}>
                                TECHNOLOGIES
                            </span>
                            <h5>Minhas Tecnologias</h5>
                            <p>
                                Em constante evolução no cenário tecnológico,
                                estou imerso em um <br /> conjunto diversificado
                                de ferramentas e tecnologias de última geração.
                            </p>
                        </div>
                        <Carossel />
                    </div>
                </div>
            </section>
            <section className={style.contato} id="contato">
                <div className={style.displayContato}>
                    <div className={style.contatoContainer}>
                        <div className={style.contatoContainerText}>
                            <span className={style.textDcr}>CONTACT</span>
                            <h5>
                                Meus Contatos e E-mail
                                <br /> profissional!
                            </h5>
                            <p>
                                Fale comigo para transformar suas ideias em
                                realidade. Estou aqui para ouvir, <br />
                                colaborar e criar soluções que atendam às suas
                                necessidades.
                            </p>
                        </div>
                        <div className={style.contatoIcon}>
                            <span>
                                <IoLocationOutline /> São Paulo, SP
                            </span>
                            <span className={style.textContatoInfo}>
                                <FiPhone /> +11 98567 - 3241
                            </span>
                            <span>
                                <MdOutlineEmail /> carlosdanyelsilva27@gmail.com
                            </span>
                        </div>
                    </div>
                    <Form />
                </div>
            </section>
            <section className={style.textInfinite}>
                <InfiniText />
            </section>
        </main>
    );
};

export default Home;
