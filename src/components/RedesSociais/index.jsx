import style from "./style.module.scss";

const RedeSociais = () => {
    return (
        <ul className={style.listaDeRedes}>
            <li>
                <a href="https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/">
                    Linkedin
                </a>
            </li>
            <li>
                <a href="https://github.com/CarlosDanyel">Github</a>
            </li>
            <li>
                <a href="https://www.instagram.com/_danyelzs/">Instagram</a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCVXNC1jmD4CBjSlefuxap9w">
                    Youtube
                </a>
            </li>
        </ul>
    );
};

export default RedeSociais;
