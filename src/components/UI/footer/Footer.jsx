import React from "react";
import cl from "./Footer.module.scss";
import { FaTelegram, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
    return (
        <footer className={cl.footer}>
            {/* <div className="icon-footer">
                <a href="https://t.me/alimardon_begov" className={cl.btn_social} target="_blank">
                    <FaTelegram />
                </a>
                <a
                    href="https://www.linkedin.com/in/alimardon-begov/"
                    className={cl.btn_social}
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/alimardon_begov"
                    className={cl.btn_social}
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a
                    href="mailto:alimardon.begov@gmail.com"
                    className={cl.btn_social}
                    target="_blank"
                >
                    <FiMail />
                </a>
            </div> */}
            <div>
                <p className={cl.text_footer}> Weather App </p>
                <p className={cl.text_footer}>Made by Alimardon</p>
                <p className={cl.text_footer}>
                    <a className={cl.heroku} href="http://abegov.herokuapp.com/" target="_blank">
                        abegov.herokuapp.com
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
