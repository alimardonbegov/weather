import React from "react";
import cl from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={cl.footer}>
            <div>
                <p className={cl.text_footer}> Weather App </p>
                <p className={cl.text_footer}>Made by Alimardon</p>
                <p className={cl.text_footer}>
                    <a
                        className={cl.heroku}
                        href="https://github.com/alimardonbegov/weather"
                        target="_blank"
                    >
                        github.com/alimardonbegov/weather
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
