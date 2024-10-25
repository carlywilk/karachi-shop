
import "./Header.scss";

export function Header() {
    return (
        <section className="header">
            <nav className="header__nav">
                <button className="header__button">About</button>
                <button className="header__button">Projects</button>
                <button className="header__button">For Sale</button>
                <button className="header__button">Contact</button>
            </nav>
        </section>
    )
}