/* eslint-disable react/prop-types */
import BtnLink from "../BtnLink";
import RedesDiv from "../RedesDiv";
import RedeSociais from "../RedesSociais";
import style from "./style.module.scss";

const HomePage = ({
    click,
    active,
    textDescricao,
    textTitle,
    textTitle2,
    textTitleBtn,
    link,
}) => {
    return (
        <section className={style.home}>
            <div className={style.display_Home}>
                <div className={style.container_textoHome}>
                    <span className={style.textHome}>{textDescricao}</span>
                    <div className={style.containerTextTitle}>
                        <h1 className={style.textPrincipal}>
                            {textTitle} <br />
                            <span className={style.colorTextHome}>
                                {textTitle2}
                            </span>
                        </h1>
                    </div>
                    <div className={style.containerBtnsHome}>
                        <BtnLink textBtn={textTitleBtn} link={link} />
                        <button
                            onClick={click}
                            className={`${style.btnHome} && ${style.btnBackground}`}
                        >
                            Redes | Youtube
                        </button>
                    </div>
                </div>
                <RedeSociais />
            </div>
            <RedesDiv active={active} onClick={click} />
        </section>
    );
};

export default HomePage;
