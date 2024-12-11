import exampleOne from "../../assets/stockimages/daniel-TKsBL1HXo5Y-unsplash.jpg";
import exampleTwo from "../../assets/stockimages/jane-duursma-eD5eD7OVdMQ-unsplash.jpg";

import "./ForSale.scss";

export function ForSale() {
    return (
        <section className="sale" id="sale-section">
            <div className="sale__bike">
                <img className="sale__image" src={exampleOne} alt="" />
                <p className="sale__description sale__description--right-aligned">bike description; this is a sample image used to design the site prior to client providing assets</p>
            </div>
            <div className="sale__bike sale__bike--flipped">
                <img className="sale__image" src={exampleTwo} alt="" />
                <p className="sale__description sale__description--left-aligned">bike description; this is a sample image used to design the site prior to client providing assets</p>
            </div>
        </section>
    );
}