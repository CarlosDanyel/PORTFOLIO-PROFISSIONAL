import style from "./style.module.scss";
import emailJs from "@emailjs/browser";

import { BsSend } from "react-icons/bs";
import { HiOutlineCloudDownload } from "react-icons/hi";
import cv from "../../assets/archive/Currículo  - Carlos Danyel Silva Teixeira.pdf";
import { useState } from "react";

const Form = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");
    const [assunto, SetAssunto] = useState("");
    const [numero, SetNumero] = useState("");
    const [messageEnv, SetMessageEnv] = useState(false);

    const activeAlert = () => {
        SetMessageEnv(!messageEnv);
    };

    function resetText(e) {
        e.preventDefault();

        const templateNames = {
            from_name: name,
            message: message,
            email: email,
            numero: numero,
            assunto: assunto,
        };

        emailJs
            .send(
                "service_rhpwdio",
                "template_x1mr9lg",
                templateNames,
                "h3rygo_OtQHeplRCn"
            )
            .then(
                () => {
                    SetName("");
                    SetEmail("");
                    SetMessage("");
                    SetAssunto("");
                    SetNumero("");
                    activeAlert();
                },
                (error) => {
                    console.log("erro", error);
                }
            );
    }

    return (
        <form onSubmit={resetText}>
            <div className={style.InputForms}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className={style.name}
                    onChange={(e) => SetName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className={style.email}
                    onChange={(e) => SetEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className={style.InputForms}>
                <input
                    type="number"
                    placeholder="Numero (opicional)"
                    required
                    className={style.number}
                    onChange={(e) => SetNumero(e.target.value)}
                    value={numero}
                />
                <input
                    type="text"
                    placeholder="Assunto"
                    required
                    className={style.assunto}
                    onChange={(e) => SetAssunto(e.target.value)}
                    value={assunto}
                />
            </div>
            <div className={style.messege}>
                <textarea
                    placeholder="Escreva a sua mensagem aqui!"
                    required
                    className={style.message}
                    onChange={(e) => SetMessage(e.target.value)}
                    value={message}
                />
            </div>
            <div className={style.containerBtn}>
                <button type="submit">
                    <BsSend />
                    Enviar Mensagem
                </button>
                <a href={cv} download={true}>
                    <button type="button">
                        <HiOutlineCloudDownload />
                        Download do CV
                    </button>
                </a>
            </div>
        </form>
    );
};

export default Form;
