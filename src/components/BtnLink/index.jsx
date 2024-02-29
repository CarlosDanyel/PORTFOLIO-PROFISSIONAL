/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import style from "../HomePage/style.module.scss";

const BtnLink = ({ textBtn, link }) => {
    return (
        <Link to={link} className={style.btnHome}>
            {textBtn}
        </Link>
    );
};

export default BtnLink;
