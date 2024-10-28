
import YasirAbout from "../../assets/images/About-BW-slate.png";

import "./About.scss";

export function About() {
    return (
        <section className="about" id="about-section">
            <img className="about__overlay-image" src={YasirAbout} alt="" />
            <p className="about__overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio, veniam quidem eius sequi voluptates eligendi tenetur quis! Suscipit voluptas facilis labore rem magni! Excepturi est eaque nostrum dolore laboriosam!
            </p>
        </section>
    )
}