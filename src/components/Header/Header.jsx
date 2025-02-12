import { useState } from "react";

import "./Header.scss";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                behavior: "smooth",
                top: element.offsetTop,
            });
        }
    };

    return (
        <section className="header">
            <nav className="header__nav">
                    <button className="header__button" onClick={() => scrollTo("about-section")}>About</button>
                    <button className="header__button" onClick={() => scrollTo("projects-section")}>Projects</button>
                    <button className="header__button" onClick={() => scrollTo("sale-section")}>For Sale</button>
                    <button className="header__button" onClick={() => scrollTo("contact-section")}>Contact</button>
            </nav>

            <div className="header__hamburger-container">
                <button className={`header__hamburger-icon ${isOpen ? "header__open" : ""}`} onClick={toggleMenu}>
                    <span className="header__bar"></span>
                    <span className="header__bar"></span>
                    <span className="header__bar"></span>
                </button>

                <nav className={`header__menu ${isOpen ? "header__open" : ""}`}>
                    <ul>
                        <li><button className="header__button" onClick={() => scrollTo("about-section")}>About</button></li>
                        <li><button className="header__button" onClick={() => scrollTo("projects-section")}>Projects</button></li>
                        <li><button className="header__button" onClick={() => scrollTo("sale-section")}>For Sale</button></li>
                        <li><button className="header__button" onClick={() => scrollTo("contact-section")}>Contact</button></li>
                    </ul>
                </nav>
            </div>

        </section>
    );
}