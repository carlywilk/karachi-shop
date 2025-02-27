import suzuki1987 from "../../assets/images/for-sale-suzuki.jpg";

import "./ForSale.scss";

export function ForSale() {
    return (
        <section className="sale" id="sale-section">
            <h1 className="sale__title">For Sale</h1>
            <div className="sale__bike">
                <img className="sale__image" src={suzuki1987} alt="" />
                <div className="sale__description sale__description--right-aligned">
                    <p className="sale__description-title">1987 Suzuki DR600 Dakar</p>
                    <p className="sale__description-text">This bike was purchased a few years ago as a restoration project. It's been reassembled with attention to detail, including new seals, tires, chain, and sprockets. The bike is in great condition and is being sold certified, with the UVIP included. Ready to ride. Contact to purchase.</p>
                </div>
            </div>
            {/* <div className="sale__bike sale__bike--flipped">
                <img className="sale__image" src={suzuki1987} alt="" />
                <div className="sale__description sale__description--left-aligned">
                    <p className="sale__description-text">1987 Suzuki DR600 Dakar</p>
                    <p className="sale__description-text">I purchased this bike a few years ago as a project, and it's been fully restored. It's been reassembled with attention to detail, including new seals, tires, chain, and sprockets. The bike is in great condition and is being sold certified, with the UVIP included. Ready to ride.</p>
                </div>
            </div> */}
        </section>
    );
}