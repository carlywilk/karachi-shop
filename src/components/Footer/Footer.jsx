
import { Link } from "react-router-dom";

import IgLogo from "../../assets/icons/instagram.svg";
import KarachiShopLogo from "../../assets/logo/karachi-shop-logo.svg";
import FbLogo from "../../assets/icons/facebook.png";

import "./Footer.scss";

export function Footer() {
    return (
        <section className="footer">
            <div className="footer__content">
                <a className="footer__socials" href="https://www.instagram.com/karachishop/" target="_blank">
                    <img className="footer__icon" src={IgLogo} alt="Instagram logo" />
                </a>
                <Link className="footer__link" to="/">
                    <img className="footer__logo" src={KarachiShopLogo} alt="Karachi Shop Logo" />
                </Link>
                <a className="footer__socials" href="https://www.facebook.com/karachishop.yasir/" target="_blank">
                    <img className="footer__icon" src={FbLogo} alt="Facebook logo" />
                </a>
            </div>
            <p className="footer__copyright">© 2024 Yasir Muhammed. All Rights Reserved.</p>
        </section>
    );
}