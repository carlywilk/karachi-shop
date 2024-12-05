
import KarachiLogo from "../../assets/logo/karachi-shop-logo.svg";

import "./Construction.scss";

export function Construction() {
    return (
        <section className="construction">
            <img className="construction__logo" src={KarachiLogo} alt=""/>
            <div className="construction__textbox">
                <h1 className="construction__text">Site Under Construction</h1>
                <h1 className="construction__text">Check Back Soon</h1>
            </div>
        </section>
    );
}