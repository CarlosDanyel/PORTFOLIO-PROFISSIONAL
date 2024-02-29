/* eslint-disable react/prop-types */
import style from "./style.module.scss";

const CardService = ({ number, title, descricao, svg }) => {
    return (
        <div className={style.card}>
            <span>{number}</span>
            <div className={style.containerTextCard}>
                <h6>{title}</h6>
                <div className={style.line}></div>
                {svg}
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default CardService;
