
import "./Header.scss";

export function Header() {

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                behavior: "smooth",
                top: element.offsetTop - 50,
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
        </section>
    )
}