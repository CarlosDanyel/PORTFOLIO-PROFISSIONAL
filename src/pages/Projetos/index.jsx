import { useState } from "react";
import HomePage from "../../components/HomePage";
import Projetos from "../../components/Projetos";
import InfiniText from "../../components/TextInfinite";
import style from "./style.module.scss";

const ProjetosPage = () => {
    const [active, setToggle] = useState(false);

    const redesActive = () => {
        setToggle(!active);
    };

    return (
        <>
            <main>
                <HomePage
                    active={active}
                    click={redesActive}
                    textDescricao={"Welcome | Portfolio Profissional!"}
                    textTitle={"Portfolio Profissionall"}
                    textTitle2={"Desenvolvidos"}
                    textTitleBtn={"Voltar para o Home"}
                    link={"/"}
                />
                <section className={style.projetosPage}>
                    <div className={style.displayProjeto}>
                        <Projetos />
                    </div>
                </section>
                <InfiniText />
            </main>
        </>
    );
};

export default ProjetosPage;
