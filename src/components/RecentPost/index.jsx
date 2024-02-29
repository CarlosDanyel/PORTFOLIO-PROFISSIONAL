import style from "./style.module.scss";

const RecentPost = () => {
    return (
        <div className={style.containerProjetosPost}>
            <a href="https://pagina-de-vendas-ebook-carlosdanyel.vercel.app/">
                <div
                    className={`${style.parentBoxPost} ${style.parentBox1Post}`}
                >
                    <div className={`${style.boxPost} ${style.box1Post}`}></div>
                    <div className={style.textInfoPost}>
                        <span>
                            <span>Digital - Fev 21, 2024</span>
                        </span>
                        <h6>
                            O seu futuro so depende de voce - Ebook Digital{" "}
                        </h6>
                    </div>
                </div>
            </a>
            <a>
                <div
                    className={`${style.parentBoxPost} ${style.parentBox2Post}`}
                >
                    <div className={`${style.boxPost} ${style.box2Post}`}></div>
                    <div className={style.textInfoPost}>
                        <span>Em breve</span>
                        <h6>
                            Nunca foi tão facil fazer a exposição das suas artes
                            - Arte+
                        </h6>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default RecentPost;
