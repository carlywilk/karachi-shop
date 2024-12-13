
import whiteKnightOne from "../../assets/images/white-knight-1.jpg";
// import whiteKnightTwo from "../../assets/images/white-knight-2.jpg";
import firstCustom from "../../assets/images/first-custom.jpg";
import bigKitty from "../../assets/images/big-kitty.jpg";
import oldYeller from "../../assets/images/old-yeller.jpg";

import "./Projects.scss";

export function Projects() {
    return (
        <section className="projects" id="projects-section">
            <h1 className="projects__title">My Work</h1>
            <div className="projects__examples">
                <div className="projects__upper">
                    <img className="projects__image" src={whiteKnightOne} alt="testImage" />
                    <img className="projects__image projects__image--spaced" src={firstCustom} alt="testImage" />
                </div>
                <div className="projects__lower">
                    <img className="projects__image" src={bigKitty} alt="testImage" />
                    <img className="projects__image projects__image--spaced" src={oldYeller} alt="testImage" />
                </div>
            </div>
        </section>
    )
}