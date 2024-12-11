
import YasirAbout from "../../assets/images/About-BW-slate.png";

import "./About.scss";

export function About() {
    return (
        <section className="about" id="about-section">
            <img className="about__overlay-image" src={YasirAbout} alt="" />
            <div className="about__overlay-text">
                <h1 className="about__subtitle">Vintage motorcycle repair</h1>
                <h1 className="about__subtitle">&</h1>
                <h1 className="about__subtitle">custom fabrication</h1>
                <p className="about__body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio, veniam quidem eius sequi voluptates eligendi tenetur quis! Suscipit voluptas facilis labore rem magni! Excepturi est eaque nostrum dolore laboriosam!
                </p>
            </div>
        </section>
    );
}