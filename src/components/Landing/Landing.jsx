
import LandingImage from "../../assets/images/Landing-BW-slate.png";
import KarachiLogo from "../../assets/logo/karachi-shop-logo.svg";

import "./Landing.scss";

export function Landing() {
    return (
        <section className="landing">
            <img className="landing__image" src={LandingImage} alt="" />
            <img className="landing__logo" src={KarachiLogo} alt="" />
        </section>
    );
}