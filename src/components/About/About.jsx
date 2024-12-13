
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
                Born and raised in Karachi, I've been working with motorcycles since I was 12, turning a childhood hobby into a 25-year career. Specializing in vintage motorcycles, I focus on bringing old bikes back to life—whether it’s a full restoration, tuning for optimum performance, or building custom cafe racers. Over the years, I've built 20 custom bikes and worked on hundreds more, with a particular focus on Japanese motorcycles from 1965 to 1986, though I also have experience with British and American bikes. Whether it’s a minor tune-up or a full restoration, I offer a wide range of services to ensure your bike is running at its best.
                </p>
            </div>
        </section>
    );
}