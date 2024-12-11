
import fillerOne from "../../assets/stockimages/austin-neill-_uHFBjtwZ1E-unsplash.jpg";
import fillerTwo from "../../assets/stockimages/christopher-burns-Pl0s3qM0A_w-unsplash.jpg";
import fillerThree from "../../assets/stockimages/christopher-burns-ZrfnOyYUfi4-unsplash.jpg";
import fillerFour from "../../assets/stockimages/heqi-valiansyah-A7zzwQm9k5I-unsplash.jpg";

import "./Projects.scss";

export function Projects() {
    return (
        <section className="projects" id="projects-section">
            <h1 className="projects__title">My Work</h1>
            <div className="projects__examples">
                <div className="projects__upper">
                    <img className="projects__image" src={fillerOne} alt="testImage" />
                    <img className="projects__image projects__image--spaced" src={fillerTwo} alt="testImage" />
                </div>
                <div className="projects__lower">
                    <img className="projects__image" src={fillerThree} alt="testImage" />
                    <img className="projects__image projects__image--spaced" src={fillerFour} alt="testImage" />
                </div>
            </div>
        </section>
    )
}