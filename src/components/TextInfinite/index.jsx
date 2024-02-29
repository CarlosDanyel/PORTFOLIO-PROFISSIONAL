import style from "./style.module.scss";
import star from "../../assets/star.png";

const slidesData = [
    { title: "Desenvolvimento" },
    { title: "Otimização" },
    { title: "Qualidade" },
    { title: "Responsividade" },
    { title: "Seo" },
    { title: "Qualidade" },
    { title: "Otimização" },
    { title: "Responsividade" },
];

// eslint-disable-next-line react/prop-types
const InfiniText = () => {
    return (
        <div className={style.TextInfite}>
            {[...Array(2)].map((_, index) => (
                <div key={index} className={style.TextInfite_slide}>
                    {slidesData.map((slide, slideIndex) => (
                        <span key={slideIndex}>
                            <div className={style.containerSlide}>
                                <h5>{slide.title}</h5>
                                <img src={star} alt="Estrela" />
                            </div>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default InfiniText;
