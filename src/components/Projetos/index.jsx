import style from "./style.module.scss";

const Projetos = () => {
    return (
        <div className={style.containerProjetos}>
            <div className={`${style.parentBox} ${style.parentBox1}`}>
                <a href="https://pagina-de-vendas-ebook-carlosdanyel.vercel.app/">
                    <div className={`${style.box} ${style.box1}`}></div>
                </a>
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
    );
};

export default Projetos;
