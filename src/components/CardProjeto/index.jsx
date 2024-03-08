/* eslint-disable react/prop-types */

import style from "./style.module.scss";

import { FaArrowLeft } from "react-icons/fa6";

const CardProjeto = ({
    activeCard,
    onClose,
    title,
    dataInicio,
    dataFim,
    Software,
    Publico,
    tipo,
    sobre,
    tech1,
    tech2,
    tech3,
    link,
}) => {
    return (
        <div
            className={
                activeCard
                    ? `${style.cardActiveProject} ${style.active}`
                    : style.cardActiveProject
            }
        >
            <div className={style.displayProjetoCard}>
                <div className={style.CardTextProject}>
                    <div className={style.containerCard}>
                        <div className={style.imgContainer}>
                            <span onClick={onClose}>
                                <FaArrowLeft />
                                Voltar
                            </span>
                            <h6>{title}</h6>
                            <div className={style.containerInfo}>
                                <a href={link}>
                                    <div className={style.imgPrincipal}>
                                        <span>Click para ver</span>
                                    </div>
                                </a>
                                <div
                                    className={
                                        style.containerTextCardProjetoInfo
                                    }
                                >
                                    <ul className={style.listaInfo}>
                                        <li>
                                            Inicio de projeto:
                                            <span>{dataInicio}</span>
                                        </li>
                                        <li>
                                            Fim do projeto:
                                            <span>{dataFim}</span>
                                        </li>
                                        <li>
                                            Software de design:
                                            <span>{Software}</span>
                                        </li>
                                        <li>
                                            Publico algo: <span>{Publico}</span>
                                        </li>
                                        <li>
                                            Tipo: <span>{tipo}</span>
                                        </li>
                                    </ul>
                                    <div className={style.sobreProjeto}>
                                        <span className={style.sobreText}>
                                            Sobre o Projeto
                                        </span>
                                        <p>{sobre}</p>
                                    </div>
                                    <div className={style.listaTech}>
                                        <span className={style.title}>
                                            Tecnologias usadas
                                        </span>
                                        <div className={style.textLista}>
                                            <span>{tech1}</span>
                                            <span>{tech2}</span>
                                            <span>{tech3}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProjeto;
