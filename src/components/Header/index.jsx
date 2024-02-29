import style from "./style.module.scss";

import logo from "../../assets/logo-temporario.png";
import { useState } from "react";
import Menu from "../Menu";
import MenuLateral from "../MenuLateral";

const Header = () => {
    const [activeMenu, setToggle] = useState(false);

    const MenuActive = () => {
        setToggle(!activeMenu);
    };

    return (
        <header>
            <div className={style.displayHeader}>
                <nav className={style.navegacao}>
                    <div className={style.logo}>
                        <img src={logo} alt="Menu de acesso" />
                    </div>
                    <Menu menu={MenuActive} />
                </nav>
            </div>
            <MenuLateral active={activeMenu} menu={MenuActive} />
        </header>
    );
};

export default Header;
