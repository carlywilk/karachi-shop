
// import { FlipCard } from "../FlipCard/FlipCard.jsx";

import whiteKnightOne from "../../assets/images/white-knight-1.jpg";
// import whiteKnightTwo from "../../assets/images/white-knight-2.jpg";
import firstCustom from "../../assets/images/first-custom.jpg";
import bigKitty from "../../assets/images/big-kitty.jpg";
import oldYeller from "../../assets/images/old-yeller.jpg";

import "./Projects.scss";

export function Projects() {

    // const projectData = [
    //     {
    //         image: whiteKnightOne,
    //         infoOne: "1976 Honda Goldwing GL1000",
    //         infoTwo: "Custom cafe racer build.",
    //         infoThree: ""
    //     },
    //     {
    //         image: firstCustom,
    //         infoOne: "1977 Harley Davidson Sportster frame modified to fit a 2009 ",
    //         infoTwo: "1200cc fuel injected motor. Front end and rear wheel from a 1986 Suzuki Savage.",
    //         infoThree: "Tank was Stock 1200 Sportster, with an indent made to look like a custom tank."
    //     },
    //     {
    //         image: bigKitty,
    //         infoOne: "1975 Honda Goldwing",
    //         infoTwo: "Custom rat bike build. Modified frame to fit a retro style Benelli gas tank. Stock motor.",
    //         infoThree: "Lowered 1.5 inch on suspension. Custom battery box."
    //     },
    //     {
    //         image: oldYeller,
    //         infoOne: "1977 Yamaha xs650",
    //         infoTwo: "Custom street tracker built to be as light as possible.",
    //         infoThree: "Custom seat and electrical box. Starter removed."
    //     }
    // ];

    return (
        <section className="projects" id="projects-section">
            <h1 className="projects__title">My Work</h1>
            <div className="projects__container">

                <div className="projects__rowOne">
                    <div className="projects__project">
                        <img className="projects__image" src={whiteKnightOne} alt=""/>
                        <h3 className="projects__name">1976 Honda Goldwing GL1000</h3>
                        {/* <p className="projects__info">Custom cafe racer build.</p> */}
                    </div>

                    <div className="projects__project projects__project--spaced">
                        <img className="projects__image" src={firstCustom} alt=""/>
                        {/* <h3 className="projects__name">1977 Harley Davidson Sportster frame modified to fit a 2009</h3> */}
                        <h3 className="projects__name">1977 Harley Davidson Sportster</h3>
                        {/* <p className="projects__info">1200cc fuel injected motor. Front end and rear wheel from a 1986 Suzuki Savage. Tank was Stock 1200 Sportster, with an indent made to look like a custom tank.</p> */}
                    </div>
                </div>

                <div className="projects__rowTwo">
                    <div className="projects__project projects__project--spaced">
                        <img className="projects__image" src={bigKitty} alt=""/>
                        <h3 className="projects__name">1975 Honda Goldwing</h3>
                        {/* <p className="projects__info">Custom rat bike build. Modified frame to fit a retro style Benelli gas tank. Stock motor. Lowered 1.5 inch on suspension. Custom battery box.</p> */}
                    </div>

                    <div className="projects__project projects__project--spaced">
                        <img className="projects__image" src={oldYeller} alt=""/>
                        <h3 className="projects__name">1977 Yamaha xs650</h3>
                        {/* <p className="projects__info">Custom street tracker built to be as light as possible. Custom seat and electrical box. Starter removed.</p> */}
                    </div>
                </div>


            </div>
            {/* <div className="projects__examples">
                {projectData.map((project, index) => (
                    <FlipCard key={index} image={project.image} infoOne={project.infoOne} infoTwo={project.infoTwo} infoThree={project.infoThree} />
                ))}
            </div> */}
        </section>
    );
}
