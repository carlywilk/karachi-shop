
import fillerOne from "../../assets/stockimages/austin-neill-_uHFBjtwZ1E-unsplash.jpg";
import fillerTwo from "../../assets/stockimages/christopher-burns-Pl0s3qM0A_w-unsplash.jpg";
import fillerThree from "../../assets/stockimages/christopher-burns-ZrfnOyYUfi4-unsplash.jpg";
import fillerFour from "../../assets/stockimages/heqi-valiansyah-A7zzwQm9k5I-unsplash.jpg";
import fillerFive from "../../assets/stockimages/isabela-kronemberger-OegFhZfw6Ok-unsplash.jpg";
import fillerSix from "../../assets/stockimages/nina-mercado-5Y8NrzPya-w-unsplash.jpg";

import "./Projects.scss";

export function Projects() {
    return (
        <section className="projects" id="projects-section">
            <div className="projects__examples">
                <img className="projects__image" src={fillerOne} alt="testImage" />
                <img className="projects__image" src={fillerTwo} alt="testImage" />
                <img className="projects__image" src={fillerThree} alt="testImage" />
                <img className="projects__image" src={fillerFour} alt="testImage" />
                {/* <img className="projects__image" src={fillerFive} alt="testImage" />
                <img className="projects__image" src={fillerSix} alt="testImage" /> */}
            </div>
            <button className="projects__button">Project Gallery</button>
            {/* link to a new page that shows a gallery of all projects completed? */}
        </section>
    )
}