import { CiMenuFries } from "react-icons/ci";

import style from "./style.module.scss";

// eslint-disable-next-line react/prop-types
const Menu = ({ menu }) => {
    return (
        <div className={style.menu} onClick={menu}>
            <CiMenuFries />
        </div>
    );
};

export default Menu;
