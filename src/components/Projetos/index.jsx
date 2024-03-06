import { useState } from "react";
import style from "./style.module.scss";
import CardProjeto from "../CardProjeto";

const Projetos = () => {
    const [activeCard, setActiveCard] = useState(null);

    const projetoActive = (
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
        link
    ) => {
        setActiveCard({
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
        });
    };

    const resetActiveCard = () => {
        setActiveCard(null);
    };

    return (
        <>
            <div className={style.containerProjetos}>
                <div
                    className={`${style.parentBox} ${style.parentBox1}`}
                    onClick={() =>
                        projetoActive(
                            "Construindo Um Futuro Brilhante",
                            "10/12/2023",
                            "15/01/2024",
                            "FIGMA",
                            "Jovens em busca de emprego",
                            "Landing Page",
                            "Pagina de vendas criada para um ebook que tem o intuito de ajudar jovens a conseguir o seu primeiro emprego no mercado de trabalho",
                            "React",
                            "Javascript",
                            "Sass/ Scss",
                            "https://pagina-de-vendas-ebook-carlosdanyel.vercel.app/"
                        )
                    }
                >
                    <div className={`${style.box} ${style.box1}`}></div>
                </div>
                <div className={`${style.parentBox} ${style.parentBox2}`}>
                    <div className={`${style.box} ${style.box2}`}></div>
                </div>
                <div className={`${style.parentBox} ${style.parentBox3}`}>
                    <div className={`${style.box} ${style.box3}`}></div>
                </div>
                <div className={`${style.parentBox} ${style.parentBox4}`}>
                    <div className={`${style.box} ${style.box4}`}></div>
                </div>
            </div>
            {activeCard && (
                <CardProjeto
                    title={activeCard.title}
                    dataInicio={activeCard.dataInicio}
                    dataFim={activeCard.dataFim}
                    Software={activeCard.Software}
                    Publico={activeCard.Publico}
                    tipo={activeCard.tipo}
                    tech1={activeCard.tech1}
                    tech2={activeCard.tech2}
                    tech3={activeCard.tech3}
                    sobre={activeCard.sobre}
                    link={activeCard.link}
                    onClose={resetActiveCard}
                    activeCard={activeCard}
                />
            )}
        </>
    );
};

export default Projetos;
